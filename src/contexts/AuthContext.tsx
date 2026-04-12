import React, { createContext, useContext, useState, useCallback } from "react";
import { currentMember, type Member } from "@/data/mockData";

interface AuthState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  member: Member | null;
  login: (whatsapp: string, password: string) => boolean;
  adminLogin: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [member, setMember] = useState<Member | null>(null);

  const login = useCallback((whatsapp: string, _password: string) => {
    // Mock login - accept any credentials
    setIsLoggedIn(true);
    setMember(currentMember);
    return true;
  }, []);

  const adminLogin = useCallback((_email: string, _password: string) => {
    setIsAdmin(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setMember(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, member, login, adminLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
