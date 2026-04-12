import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { cities } from "@/data/mockData";

export default function AdminBlastsPage() {
  const [message, setMessage] = useState("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [scheduleMode, setScheduleMode] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const toggleCity = (c: string) => setSelectedCities(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 space-y-6 animate-fade-in-up">
        <h1 className="font-heading font-bold text-2xl">WhatsApp Blasts</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-2">Recipients — Filter by city</label>
              <div className="flex flex-wrap gap-2">
                {cities.filter(c => c !== "Other").map(c => (
                  <button key={c} onClick={() => toggleCity(c)} className={`h-8 px-3 rounded-pill text-xs border ${selectedCities.includes(c) ? "bg-primary text-primary-foreground border-primary" : "border-border"}`}>{c}</button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">{selectedCities.length === 0 ? "All members" : `${selectedCities.join(", ")}`} — ~{selectedCities.length === 0 ? 247 : Math.round(247 / cities.length * selectedCities.length)} recipients</p>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Message ({message.length}/1000)</label>
              <textarea value={message} onChange={e => setMessage(e.target.value.slice(0, 1000))} rows={6} placeholder="Type your message..." className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm focus:border-primary focus:outline-none resize-none" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium">Schedule:</label>
              <button onClick={() => setScheduleMode(false)} className={`h-8 px-3 rounded text-xs ${!scheduleMode ? "bg-primary text-primary-foreground" : "border border-border"}`}>Send now</button>
              <button onClick={() => setScheduleMode(true)} className={`h-8 px-3 rounded text-xs ${scheduleMode ? "bg-primary text-primary-foreground" : "border border-border"}`}>Schedule</button>
            </div>
            {scheduleMode && <input type="datetime-local" className="h-10 px-3 rounded-lg border border-border bg-card text-sm" />}
            <button onClick={() => setConfirm(true)} disabled={!message.trim()} className="w-full h-10 rounded-lg bg-primary text-primary-foreground font-semibold disabled:opacity-50">Send blast</button>
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">Preview</label>
            <div className="bg-muted rounded-card p-4 min-h-[200px]">
              <div className="bg-success/20 rounded-lg p-3 max-w-[280px] text-sm whitespace-pre-wrap">
                {message || "Your message will appear here..."}
              </div>
            </div>
          </div>
        </div>

        {/* Blast history */}
        <div className="bg-card rounded-card border border-border p-6">
          <h2 className="font-heading font-semibold mb-3">Blast History</h2>
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left p-2 font-medium text-muted-foreground">Date</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Message</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Recipients</th>
              <th className="text-left p-2 font-medium text-muted-foreground">Status</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-border"><td className="p-2">8 Apr 2026</td><td className="p-2 truncate max-w-[200px]">🔥 Thursday Drop is LIVE! 8 new products...</td><td className="p-2">247</td><td className="p-2"><span className="px-2 py-0.5 rounded-pill text-xs bg-success/10 text-success">Sent</span></td></tr>
              <tr><td className="p-2">1 Apr 2026</td><td className="p-2 truncate max-w-[200px]">Eid Special: Extra 5% off on all orders...</td><td className="p-2">235</td><td className="p-2"><span className="px-2 py-0.5 rounded-pill text-xs bg-success/10 text-success">Sent</span></td></tr>
            </tbody>
          </table>
        </div>

        {confirm && (
          <>
            <div className="fixed inset-0 bg-foreground/30 z-50" onClick={() => setConfirm(false)} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-card rounded-card p-6 shadow-card z-50 animate-fade-in-up">
              <h3 className="font-heading font-bold text-lg mb-2">Confirm blast</h3>
              <p className="text-sm text-muted-foreground mb-4">Send to {selectedCities.length === 0 ? "all 247" : `~${Math.round(247 / cities.length * selectedCities.length)}`} members. Are you sure?</p>
              <div className="flex gap-2">
                <button onClick={() => { setConfirm(false); setMessage(""); }} className="flex-1 h-10 rounded-lg bg-primary text-primary-foreground font-semibold">Confirm</button>
                <button onClick={() => setConfirm(false)} className="flex-1 h-10 rounded-lg border border-border">Cancel</button>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
