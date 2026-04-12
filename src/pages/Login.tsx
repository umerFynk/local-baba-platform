import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }
    const success = login(whatsapp, password);
    if (success) navigate("/dashboard");
    else setError("Invalid credentials");
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <Link to="/" className="font-heading font-bold text-2xl text-primary-foreground">
            The Local Baba<span className="text-primary">.</span>
          </Link>
        </div>
        <div className="bg-card rounded-card p-8 shadow-card animate-fade-in-up">
          <h1 className="font-heading font-bold text-2xl text-center mb-6">Member login</h1>
          {error && <p className="text-danger text-sm text-center mb-4 p-2 bg-danger/10 rounded-lg">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">WhatsApp number</label>
              <div className="flex">
                <span className="h-11 px-3 flex items-center text-sm bg-muted border border-r-0 border-border rounded-l-lg text-muted-foreground">+92</span>
                <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="3001234567" type="tel"
                  className="flex-1 h-11 px-3 rounded-r-lg border border-border bg-card focus:border-primary focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="••••••••"
                className="w-full h-11 px-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none transition-colors" />
            </div>
            <button type="submit" className="w-full h-[52px] rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-accent-hover transition-all active:scale-[0.97]">
              Login
            </button>
          </form>
          <div className="text-center mt-4 space-y-2">
            <Link to="/apply" className="text-sm text-primary hover:underline block">Not a member yet? Apply free →</Link>
            <a href="https://wa.me/923001234567?text=I%20forgot%20my%20password" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground block">Forgot password? WhatsApp us →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
