import type React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authSore";
import PageContainer from "../components/layout/PageContainer";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

const ResetPasswordPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <PageContainer>
      <div className="max-w-md mx-auto py-8">
        <ResetPasswordForm />
      </div>
    </PageContainer>
  );
};

export default ResetPasswordPage;
