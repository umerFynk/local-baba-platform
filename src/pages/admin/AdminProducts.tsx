import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { products as initialProducts } from "@/data/mockData";
import type { Product } from "@/data/mockData";

export default function AdminProductsPage() {
  const [prods] = useState<Product[]>(initialProducts);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 space-y-6 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <h1 className="font-heading font-bold text-2xl">Products</h1>
          <button onClick={() => setShowAdd(true)} className="h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent-hover">Add new product</button>
        </div>
        <div className="bg-card rounded-card border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Category</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Price</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Stock</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Actions</th>
            </tr></thead>
            <tbody>
              {prods.map(p => (
                <tr key={p.id} className="border-b border-border last:border-0">
                  <td className="p-3"><div className="flex items-center gap-2"><img src={p.images[0]} alt="" className="w-8 h-8 rounded object-cover" /><span className="font-medium">{p.name}</span></div></td>
                  <td className="p-3 text-muted-foreground hidden md:table-cell">{p.category}</td>
                  <td className="p-3 font-mono">Rs {p.pricePerPc}</td>
                  <td className="p-3 hidden md:table-cell">{p.stock}</td>
                  <td className="p-3"><span className={`px-2 py-0.5 rounded-pill text-xs ${p.status === "active" ? "bg-success/10 text-success" : p.status === "sold_out" ? "bg-danger/10 text-danger" : "bg-muted text-muted-foreground"}`}>{p.status}</span></td>
                  <td className="p-3"><button className="h-7 px-3 rounded border border-border text-xs hover:bg-muted">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAdd && (
          <>
            <div className="fixed inset-0 bg-foreground/30 z-50" onClick={() => setShowAdd(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-card z-50 shadow-xl p-6 overflow-y-auto animate-fade-in-up">
              <h2 className="font-heading font-bold text-xl mb-4">Add new product</h2>
              <div className="space-y-4">
                {["Name", "Description", "Price per piece", "Market rate", "Stock qty"].map(f => (
                  <div key={f}><label className="text-sm font-medium block mb-1">{f}</label><input className="w-full h-10 px-3 rounded-lg border border-border bg-card text-sm focus:border-primary focus:outline-none" /></div>
                ))}
                <div><label className="text-sm font-medium block mb-1">Category</label>
                  <select className="w-full h-10 px-3 rounded-lg border border-border bg-card text-sm">
                    {["Fashion", "Electronics", "Home", "Beauty", "Kids"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div><label className="text-sm font-medium block mb-1">Status</label>
                  <select className="w-full h-10 px-3 rounded-lg border border-border bg-card text-sm">
                    <option>Active</option><option>Draft</option><option>Sold out</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  {["New", "Hot", "Featured"].map(t => (
                    <label key={t} className="flex items-center gap-1 text-sm"><input type="checkbox" className="accent-primary" />{t}</label>
                  ))}
                </div>
                <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground font-semibold">Save product</button>
                <button onClick={() => setShowAdd(false)} className="w-full h-10 rounded-lg border border-border text-sm">Cancel</button>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
