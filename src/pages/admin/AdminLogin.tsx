import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { adminLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(email, password)) navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-[400px] bg-card rounded-card p-8 shadow-card animate-fade-in-up">
        <p className="text-xs text-danger font-medium text-center mb-4">Admin access only</p>
        <h1 className="font-heading font-bold text-2xl text-center mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full h-11 px-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none" />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full h-11 px-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none" />
          <button type="submit" className="w-full h-11 rounded-lg bg-dark text-primary-foreground font-semibold hover:bg-foreground/90 transition-colors">Login</button>
        </form>
      </div>
    </div>
  );
}
