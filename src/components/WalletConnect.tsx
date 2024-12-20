import { useCoinbaseWallet } from "../lib/hooks/useCoinbaseWallet";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Copy } from "lucide-react";
import { useState } from "react";

const formatAddress = (address: string) => {
  if (!address) return "";
  return `${address.slice(0, 6)}${"*".repeat(8)}${address.slice(-4)}`;
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 hover:bg-primary/10 rounded-md transition-colors"
      title="Copy address"
    >
      <Copy
        className={`h-4 w-4 ${copied ? "text-green-500" : "text-primary"}`}
      />
    </button>
  );
};

export function WalletConnect() {
  const { connect, disconnect, address, isConnected, error } =
    useCoinbaseWallet();

  const handleConnect = async () => {
    console.log("Attempting to connect...");
    try {
      await connect();
    } catch (err) {
      console.error("Connection error:", err);
    }
  };

  return (
    <Card className="w-full max-w-md p-8 bg-card border-2 hover:border-primary">
      <div className="space-y-6">
        {error && (
          <p className="text-sm text-red-500 mb-4">Error: {error.message}</p>
        )}
        {isConnected ? (
          <div className="text-center">
            <h2 className="text-xl mb-2">Connected Wallet</h2>
            <div className="flex items-center justify-center font-mono">
              <span>{formatAddress(address)}</span>
              <CopyButton text={address} />
            </div>
            <Button variant="destructive" className="mt-4" onClick={disconnect}>
              Disconnect Wallet
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Ready to Connect?</p>
              <p className="text-lg mt-1">
                Click below to connect your Coinbase Wallet
              </p>
            </div>
            <Button
              className="w-full font-medium hover:shadow-[0_0_1rem_-0.25rem] hover:shadow-primary/25"
              onClick={handleConnect}
            >
              Connect Coinbase Wallet
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
