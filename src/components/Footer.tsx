import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background font-cabinet-grotesk">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-1 text-base">
            <span>Built with</span>
            <span>♥</span>
            <span>by</span>
            <a
              href="https://github.com/ayush-that"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              Ayush Singh
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://twitter.com/shydev69"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/ayush-that/Coinbase-Connect"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
