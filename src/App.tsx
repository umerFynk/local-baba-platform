import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { MemberNavbar } from "@/components/layout/MemberNavbar";
import { MemberLayout } from "@/components/layout/MemberLayout";

import Index from "./pages/Index";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Catalogue from "./pages/Catalogue";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminBlasts from "./pages/admin/AdminBlasts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function MemberRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <><MemberNavbar /><MemberLayout>{children}</MemberLayout></>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public */}
              <Route path="/" element={<Index />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/login" element={<Login />} />

              {/* Member */}
              <Route path="/dashboard" element={<MemberRoute><Dashboard /></MemberRoute>} />
              <Route path="/catalogue" element={<MemberRoute><Catalogue /></MemberRoute>} />
              <Route path="/product/:slug" element={<MemberRoute><ProductDetail /></MemberRoute>} />
              <Route path="/checkout" element={<MemberRoute><Checkout /></MemberRoute>} />
              <Route path="/order/:id" element={<MemberRoute><OrderConfirmation /></MemberRoute>} />
              <Route path="/orders" element={<MemberRoute><Orders /></MemberRoute>} />
              <Route path="/orders/:id" element={<MemberRoute><OrderDetail /></MemberRoute>} />

              {/* Admin */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/applications" element={<AdminRoute><AdminApplications /></AdminRoute>} />
              <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
              <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
              <Route path="/admin/members" element={<AdminRoute><AdminMembers /></AdminRoute>} />
              <Route path="/admin/blasts" element={<AdminRoute><AdminBlasts /></AdminRoute>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
