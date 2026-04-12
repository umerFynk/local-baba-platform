import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { applications as initialApps } from "@/data/mockData";
import type { Application } from "@/data/mockData";

const tabs = ["Pending", "Approved", "Rejected"];

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<Application[]>(initialApps);
  const [activeTab, setActiveTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Application | null>(null);

  const filtered = apps
    .filter(a => a.status === activeTab.toLowerCase())
    .filter(a => !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.whatsapp.includes(search) || a.city.toLowerCase().includes(search.toLowerCase()));

  const updateStatus = (id: string, status: "approved" | "rejected") => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    setSelected(null);
  };

  const counts = { Pending: apps.filter(a => a.status === "pending").length, Approved: apps.filter(a => a.status === "approved").length, Rejected: apps.filter(a => a.status === "rejected").length };

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 space-y-6 animate-fade-in-up">
        <h1 className="font-heading font-bold text-2xl">Membership Applications</h1>
        <div className="flex gap-2">
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} className={`h-9 px-4 rounded-pill text-sm font-medium ${activeTab === t ? "bg-primary text-primary-foreground" : "border border-border"}`}>
              {t} ({counts[t as keyof typeof counts]})
            </button>
          ))}
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, WhatsApp, city..." className="w-full max-w-md h-10 px-3 rounded-lg border border-border bg-card text-sm focus:border-primary focus:outline-none" />
        <div className="bg-card rounded-card border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">WhatsApp</th>
              <th className="text-left p-3 font-medium text-muted-foreground">City</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden lg:table-cell">Sells on</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden lg:table-cell">Volume</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Actions</th>
            </tr></thead>
            <tbody>
              {filtered.map(a => (
                <tr key={a.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium">{a.name}</td>
                  <td className="p-3 font-mono text-muted-foreground hidden md:table-cell">+92{a.whatsapp}</td>
                  <td className="p-3">{a.city}</td>
                  <td className="p-3 text-muted-foreground hidden lg:table-cell">{a.sellsWhere.join(", ")}</td>
                  <td className="p-3 text-muted-foreground hidden lg:table-cell">{a.monthlyVolume}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      {a.status === "pending" && <>
                        <button onClick={() => updateStatus(a.id, "approved")} className="h-7 px-3 rounded bg-success text-primary-foreground text-xs">Approve</button>
                        <button onClick={() => updateStatus(a.id, "rejected")} className="h-7 px-3 rounded bg-danger text-primary-foreground text-xs">Reject</button>
                      </>}
                      <button onClick={() => setSelected(a)} className="h-7 px-3 rounded border border-border text-xs hover:bg-muted">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selected && (
          <>
            <div className="fixed inset-0 bg-foreground/30 z-50" onClick={() => setSelected(null)} />
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-xl p-6 overflow-y-auto animate-fade-in-up">
              <h2 className="font-heading font-bold text-xl mb-4">{selected.name}</h2>
              <div className="space-y-3 text-sm">
                <p><strong>WhatsApp:</strong> +92{selected.whatsapp}</p>
                <p><strong>City:</strong> {selected.city}</p>
                <p><strong>Business:</strong> {selected.businessName}</p>
                <p><strong>Sells:</strong> {selected.sellsWhat.join(", ")}</p>
                <p><strong>Channels:</strong> {selected.sellsWhere.join(", ")}</p>
                <p><strong>Volume:</strong> {selected.monthlyVolume}</p>
                <p><strong>Source:</strong> {selected.heardFrom}</p>
                <p><strong>Applied:</strong> {new Date(selected.appliedAt).toLocaleString()}</p>
              </div>
              {selected.status === "pending" && (
                <div className="flex gap-2 mt-6">
                  <button onClick={() => updateStatus(selected.id, "approved")} className="flex-1 h-10 rounded-lg bg-success text-primary-foreground font-semibold">Approve</button>
                  <button onClick={() => updateStatus(selected.id, "rejected")} className="flex-1 h-10 rounded-lg bg-danger text-primary-foreground font-semibold">Reject</button>
                </div>
              )}
              <button onClick={() => setSelected(null)} className="w-full h-10 rounded-lg border border-border mt-3 text-sm hover:bg-muted">Close</button>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
