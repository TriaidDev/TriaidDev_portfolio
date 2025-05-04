
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import LoginReminder from "./components/LoginReminder";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import WebAppPage from "./pages/WebAppPage";
import MeanStackPage from "./pages/MeanStackPage";
import MernStackPage from "./pages/MernStackPage";
import FrontendPage from "./pages/FrontendPage";
import BackendPage from "./pages/BackendPage";
import CloudOpsDevOpsPage from "./pages/CloudOpsDevOpsPage";

const App = () => {
  // Create a client inside the component function to ensure proper React context
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LoginReminder />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/web-development" element={<WebDevelopmentPage />} />
              <Route path="/services/web-app-development" element={<WebAppPage />} />
              <Route path="/services/mean-stack" element={<MeanStackPage />} />
              <Route path="/services/mern-stack" element={<MernStackPage />} />
              <Route path="/services/frontend" element={<FrontendPage />} />
              <Route path="/services/backend" element={<BackendPage />} />
              <Route path="/services/cloudops-devops" element={<CloudOpsDevOpsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
