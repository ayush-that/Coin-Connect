import { Wallet } from "lucide-react"
import { ThemeSwitcher } from "./theme-switcher"
import { NetworkSelector } from "./NetworkSelector"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 items-center px-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary/10 p-1">
            <Wallet className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-semibold tracking-tight">CoinConnect</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-3">
          <NetworkSelector />
          <div className="h-5 w-[1px] bg-border" />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
} 