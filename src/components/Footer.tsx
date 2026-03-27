import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12 px-6 text-background">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <h3 className="font-serif text-xl font-bold">Villa Lonavala</h3>
        <p className="mt-1 font-sans text-sm text-background/60">Your luxury retreat in the Western Ghats</p>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:+919004482582" className="flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-background">
          <Phone className="h-4 w-4" /> +91 90044 82582
        </a>
        <a href="mailto:stay@villalonavala.com" className="flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-background">
          <Mail className="h-4 w-4" /> stay@villalonavala.com
        </a>
        <a href="https://instagram.com/eko_nest_villa" target="_blank" rel="noopener noreferrer" className="text-background/80 transition-colors hover:text-background">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
    <div className="mx-auto mt-8 max-w-6xl border-t border-background/10 pt-6 text-center">
      <p className="font-sans text-xs text-background/40">© 2026 Villa Lonavala. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
