import { Link } from "react-router-dom";

const footerLinks = [
  { label: "How it works", to: "/#how-it-works" },
  { label: "Apply", to: "/apply" },
  { label: "Browse catalogue", to: "/catalogue" },
  { label: "Track order", to: "/orders" },
  { label: "WhatsApp support", to: "https://wa.me/923001234567" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-sidebar-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-heading font-bold text-xl text-primary-foreground mb-3">
              The Local Baba<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pakistan's first direct-importer B2B platform.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Direct from importers. Delivered to your door.
            </p>
          </div>
          <div>
            <p className="font-heading font-semibold text-primary-foreground text-sm mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map(l => (
                <li key={l.label}>
                  {l.to.startsWith("http") ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
                  ) : (
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading font-semibold text-primary-foreground text-sm mb-4">Connect</p>
            <ul className="space-y-2">
              <li><a href="https://instagram.com/thelocalbaba" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram @thelocalbaba</a></li>
              <li><a href="https://tiktok.com/@thelocalbaba" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">TikTok @thelocalbaba</a></li>
              <li>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 h-10 px-4 rounded-pill bg-success text-primary-foreground text-sm font-medium">
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-sidebar-border">
        <div className="container py-4 text-center text-xs text-muted-foreground">
          © 2025 The Local Baba. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
