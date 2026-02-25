import Image from "next/image";

function Footer() {
  return (
    <footer className="px-6 py-8 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          
          {/* BRAND */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DentWise Logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-semibold text-base">DentWise</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Product</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">How it works</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Support</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Help center</a></li>
              <li><a href="#" className="hover:text-foreground">Contact us</a></li>
              <li><a href="#" className="hover:text-foreground">Status</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Legal</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-center text-xs text-muted-foreground">
          <p>&copy; 2026 DentWise. Built for real people with real dental questions.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;