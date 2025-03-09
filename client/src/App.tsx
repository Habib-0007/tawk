import type React from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authSore";
import { setAuthToken } from "./api/authApi";
import AppRoutes from "./routes";
import "./App.css";
import ScrollToTop from "./helpers/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();

  // Initialize auth token from stored user data
  useEffect(() => {
    if (isAuthenticated && user?.token) {
      setAuthToken(user.token);
    }
  }, [isAuthenticated, user]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
