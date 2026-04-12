import { AdminLayout } from "@/components/layout/AdminLayout";
import { members } from "@/data/mockData";

export default function AdminMembersPage() {
  return (
    <AdminLayout>
      <div className="p-6 md:p-8 space-y-6 animate-fade-in-up">
        <h1 className="font-heading font-bold text-2xl">Members</h1>
        <div className="bg-card rounded-card border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">WhatsApp</th>
              <th className="text-left p-3 font-medium text-muted-foreground">City</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Orders</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden lg:table-cell">Total spent</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Actions</th>
            </tr></thead>
            <tbody>
              {members.map(m => (
                <tr key={m.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium">{m.name}</td>
                  <td className="p-3 font-mono text-muted-foreground hidden md:table-cell">+92{m.whatsapp}</td>
                  <td className="p-3">{m.city}</td>
                  <td className="p-3 hidden md:table-cell">{m.totalOrders}</td>
                  <td className="p-3 hidden lg:table-cell">Rs {m.totalSpent.toLocaleString()}</td>
                  <td className="p-3"><span className={`px-2 py-0.5 rounded-pill text-xs ${m.status === "active" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}>{m.status}</span></td>
                  <td className="p-3"><button className="h-7 px-3 rounded border border-border text-xs hover:bg-muted">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
