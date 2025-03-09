// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import CreatePage from "./pages/CreatePage";
// import ThreadPage from "./pages/ThreadPage";
// import ViewMessages from "./pages/ViewMessages";

// const AppRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<CreatePage />} />
//       <Route path="/thread/:slug" element={<ThreadPage />} />
//       <Route path="/messages/:slug" element={<ViewMessages />} />
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

"use client";

import type React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authSore";
import { setAuthToken } from "./api/authApi";

// Pages
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import ThreadPage from "./pages/ThreadPage";
import ViewMessagesPage from "./pages/ViewMessages";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && user?.token) {
      setAuthToken(user.token);
    }
  }, [isAuthenticated, user]);

  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <CreatePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages/:slug"
        element={
          <ProtectedRoute>
            <ViewMessagesPage />
          </ProtectedRoute>
        }
      />

      <Route path="/thread/:slug" element={<ThreadPage />} />

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} />}
      />
    </Routes>
  );
};

export default AppRoutes;
