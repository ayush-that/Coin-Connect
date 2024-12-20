import { useState, useCallback, useEffect } from "react";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";

const APP_NAME = "Daytona Quest";
const APP_LOGO_URL = "";
const DEFAULT_ETH_JSONRPC_URL =
  "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export function useWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>("");
  const [coinbaseWallet, setCoinbaseWallet] =
    useState<CoinbaseWalletSDK | null>(null);

  useEffect(() => {
    const wallet = new CoinbaseWalletSDK({
      appName: APP_NAME,
      appLogoUrl: APP_LOGO_URL,
    });
    setCoinbaseWallet(wallet);
  }, []);

  const connect = useCallback(async () => {
    if (!coinbaseWallet) return;

    try {
      const ethereum = coinbaseWallet.makeWeb3Provider({
        rpcUrl: DEFAULT_ETH_JSONRPC_URL,
        options: "all"
      });

      const accounts = (await ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts && accounts[0]) {
        const formattedAddress = ethers.getAddress(accounts[0]);
        setAddress(formattedAddress);
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setIsConnected(false);
      setAddress("");
    }
  }, [coinbaseWallet]);

  const disconnect = useCallback(async () => {
    try {
      if (coinbaseWallet) {
        const ethereum = coinbaseWallet.makeWeb3Provider({
          rpcUrl: DEFAULT_ETH_JSONRPC_URL,
          options: "all"
        });
        if (typeof (ethereum as any).close === "function") {
          await (ethereum as any).close();
        }
      }
      setAddress("");
      setIsConnected(false);
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  }, [coinbaseWallet]);

  return {
    connect,
    disconnect,
    address,
    isConnected,
  };
}
