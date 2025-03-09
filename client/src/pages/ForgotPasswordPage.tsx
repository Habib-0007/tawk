import type React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authSore";
import PageContainer from "../components/layout/PageContainer";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

const ForgotPasswordPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <PageContainer>
      <div className="max-w-md mx-auto py-8">
        <ForgotPasswordForm />
      </div>
    </PageContainer>
  );
};

export default ForgotPasswordPage;
