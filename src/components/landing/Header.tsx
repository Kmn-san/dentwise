import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-4 py-1 border-b border-border/50 bg-background/80 backdrop-blur-md h-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="DentWise Logo"
            width={28}
            height={28}
            className="w-7"
          />
          <span className="font-medium text-base">DentWise</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>

        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button size="sm">Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;