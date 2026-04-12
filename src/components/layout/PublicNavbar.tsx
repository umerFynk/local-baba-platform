import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-0 font-heading font-bold text-xl text-primary-foreground">
          The Local Baba<span className="text-primary">.</span>
        </Link>
        <Link
          to="/apply"
          className="hidden md:inline-flex items-center h-11 px-6 rounded-pill bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-accent-hover transition-colors"
        >
          Apply for membership
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-sidebar-border animate-fade-in-up">
          <div className="container py-4">
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="block w-full text-center h-11 leading-[44px] rounded-pill bg-primary text-primary-foreground font-heading font-semibold text-sm"
            >
              Apply for membership
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
