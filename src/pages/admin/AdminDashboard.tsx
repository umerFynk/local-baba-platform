import { AdminLayout } from "@/components/layout/AdminLayout";
import { applications, members, orders, products } from "@/data/mockData";

const stats = [
  { label: "Total members", value: members.length.toString() },
  { label: "Orders today", value: "12" },
  { label: "Revenue this month", value: "Rs 4,82,000" },
  { label: "Pending applications", value: applications.filter(a => a.status === "pending").length.toString(), accent: true },
];

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="p-6 md:p-8 space-y-6 animate-fade-in-up">
        <h1 className="font-heading font-bold text-2xl">Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-card rounded-card border border-border p-5">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className={`font-heading font-bold text-2xl mt-1 ${s.accent ? "text-primary" : ""}`}>{s.value}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-card border border-border p-6">
            <h2 className="font-heading font-semibold mb-3">Recent Orders</h2>
            {orders.slice(0, 5).map(o => (
              <div key={o.id} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                <span className="font-mono">#{o.id}</span>
                <span>Rs {o.total.toLocaleString()}</span>
                <span className="capitalize text-muted-foreground">{o.orderStatus}</span>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-card border border-border p-6">
            <h2 className="font-heading font-semibold mb-3">Pending Applications</h2>
            {applications.filter(a => a.status === "pending").slice(0, 5).map(a => (
              <div key={a.id} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                <span>{a.name}</span>
                <span className="text-muted-foreground">{a.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
