import { useCallback, useState } from "react";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const APP_NAME = "CoinConnect";
("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

const SUPPORTED_NETWORKS = {
  "1": { name: "Ethereum Mainnet", chainId: "0x1" },
  "5": { name: "Goerli Testnet", chainId: "0x5" },
} as const;

interface CoinbaseWalletHook {
  connect: () => Promise<void>;
  disconnect: () => void;
  address: string;
  isConnected: boolean;
  error: Error | null;
  chainId: number;
  switchNetwork: (networkKey: keyof typeof SUPPORTED_NETWORKS) => Promise<void>;
  supportedNetworks: typeof SUPPORTED_NETWORKS;
}

export function useCoinbaseWallet(): CoinbaseWalletHook {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [chainId, setChainId] = useState(1);
  const [supportedNetworks] = useState(SUPPORTED_NETWORKS);

  const connect = useCallback(async () => {
    try {
      setError(null);
      console.log("Initializing Coinbase Wallet SDK...");

      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: APP_NAME,
        appLogoUrl: undefined,
      });

      const ethereum = coinbaseWallet.makeWeb3Provider();
      console.log("Created Web3 Provider");

      if (!ethereum) {
        throw new Error("No Ethereum provider available");
      }

      const accounts = (await ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      console.log("Requested accounts:", accounts);

      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        setIsConnected(true);
        console.log("Wallet connected:", accounts[0]);
      } else {
        throw new Error("No accounts available");
      }

      const chainIdHex = (await ethereum.request({
        method: "eth_chainId",
      })) as string;
      setChainId(parseInt(chainIdHex, 16));
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to connect wallet")
      );
      setIsConnected(false);
      setAddress("");
    }
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setAddress("");
    setError(null);
  }, []);

  const switchNetwork = async (networkKey: keyof typeof SUPPORTED_NETWORKS) => {
    try {
      const network = supportedNetworks[networkKey];
      if (!network) throw new Error("Unsupported network");

      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: APP_NAME,
        appLogoUrl: undefined,
      });

      const ethereum = coinbaseWallet.makeWeb3Provider();

      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: network.chainId }],
      });

      setChainId(parseInt(network.chainId, 16));
    } catch (err) {
      console.error("Failed to switch network:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to switch network")
      );
    }
  };

  return {
    connect,
    disconnect,
    address,
    isConnected,
    error,
    chainId,
    switchNetwork,
    supportedNetworks,
  };
}
