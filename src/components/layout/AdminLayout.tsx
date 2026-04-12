import { Link, useLocation, Outlet } from "react-router-dom";
import { LayoutDashboard, Users, Package, ShoppingCart, UserCheck, MessageSquare, Settings } from "lucide-react";

const adminLinks = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Applications", to: "/admin/applications", icon: UserCheck },
  { label: "Products", to: "/admin/products", icon: Package },
  { label: "Orders", to: "/admin/orders", icon: ShoppingCart },
  { label: "Members", to: "/admin/members", icon: Users },
  { label: "WA Blasts", to: "/admin/blasts", icon: MessageSquare },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden md:flex flex-col w-[220px] bg-dark fixed top-0 bottom-0 z-40">
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
          <Link to="/admin/dashboard" className="font-heading font-bold text-lg text-primary-foreground">
            LB Admin<span className="text-primary">.</span>
          </Link>
        </div>
        <div className="flex-1 py-4">
          {adminLinks.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                  active
                    ? "text-primary border-l-[3px] border-primary bg-sidebar-accent"
                    : "text-sidebar-foreground hover:text-primary-foreground border-l-[3px] border-transparent"
                }`}
              >
                <l.icon size={18} />
                {l.label}
              </Link>
            );
          })}
        </div>
      </aside>
      <main className="flex-1 md:ml-[220px] min-h-screen">
        {children}
      </main>
    </div>
  );
}
