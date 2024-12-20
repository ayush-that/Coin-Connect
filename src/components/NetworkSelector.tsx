import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCoinbaseWallet } from "@/lib/hooks/useCoinbaseWallet"
import { Network } from "lucide-react"

interface Network {
  name: string;
  chainId: string;
}

type SupportedNetworks = Record<string, Network>;

export function NetworkSelector() {
  const { chainId, isConnected, switchNetwork, supportedNetworks } = useCoinbaseWallet()

  if (!isConnected) return null;

  const getCurrentNetwork = () => {
    if (!chainId) return null;
    return Object.entries(supportedNetworks as SupportedNetworks)
      .find(([_, network]) => parseInt(network.chainId, 16) === chainId)
      ?.[0] || null;
  }

  const handleNetworkChange = (networkKey: string) => {
    switchNetwork(networkKey as "1" | "5").catch(console.error);
  }

  const getNetworkName = () => {
    if (!chainId) return 'Select Network';
    const network = Object.entries(supportedNetworks as SupportedNetworks)
      .find(([_, network]) => parseInt(network.chainId, 16) === chainId);
    return network ? network[1].name : 'Unknown Network';
  }

  return (
    <Select
      value={getCurrentNetwork() || undefined}
      onValueChange={handleNetworkChange}
    >
      <SelectTrigger className="h-9 w-[180px] gap-2 bg-secondary/50">
        <Network className="h-4 w-4" />
        <SelectValue placeholder={getNetworkName()} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(supportedNetworks as SupportedNetworks).map(([key, network]) => (
          <SelectItem key={network.chainId} value={key} className="font-medium">
            {network.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 