import { WalletConnect } from "./components/WalletConnect";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { Network, Shield, Wallet } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <div className="aurora-container">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
      </div>
      <ThemeProvider defaultTheme="dark" storageKey="daytona-theme">
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1 container mx-auto flex flex-col items-center justify-center py-16 px-4 gap-12">
            <div className="aurora-glow aurora-glow-lg aurora-purple aurora-float" 
                 style={{ top: '15%', left: '10%' }} />
            <div className="aurora-glow aurora-glow-md aurora-cyan aurora-float" 
                 style={{ top: '30%', right: '15%' }} />
            <div className="aurora-glow aurora-glow-sm aurora-pink aurora-float" 
                 style={{ bottom: '20%', left: '20%' }} />
            
            <div className="relative py-8">
              <div className="aurora-glow aurora-glow-lg aurora-purple" 
                   style={{ top: '-50%', left: '-25%' }} />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-xl opacity-50" />
              <div className="relative">
                <WalletConnect />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto relative">
              <div className="aurora-glow aurora-glow-md aurora-cyan" 
                   style={{ top: '-20%', right: '-10%' }} />
              <div className="aurora-glow aurora-glow-sm aurora-pink" 
                   style={{ bottom: '-10%', left: '40%' }} />
              
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border bg-background/80 backdrop-blur-sm p-6 hover:border-primary hover:shadow-[0_0_1rem_-0.25rem] hover:shadow-primary/25"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

const features = [
  {
    title: "Easy Connection",
    description:
      "Connect to dApps with just a few clicks using your Coinbase Wallet.",
    icon: <Wallet className="h-5 w-5 text-primary" />,
  },
  {
    title: "Multi-Chain Support",
    description:
      "Switch between different networks, including Base and Ethereum.",
    icon: <Network className="h-5 w-5 text-primary" />,
  },
  {
    title: "Secure & Safe",
    description:
      "Your keys remain secure in your Coinbase Wallet at all times.",
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
];

export default App;
