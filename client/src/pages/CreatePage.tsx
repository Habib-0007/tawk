import type React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authSore";
import { useThreadStore } from "../store/threadStore";
import PageContainer from "../components/layout/PageContainer";
import CreateThread from "../components/thread/CreateThread";

const CreatePage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearExpiredThreads = useThreadStore(
    (state) => state.clearExpiredThreads
  );

  useEffect(() => {
    clearExpiredThreads();
  }, [clearExpiredThreads]);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Anonymous Chat</h1>
          <p className="mt-2 text-gray-600">
            Create an anonymous thread and share it with your friends
          </p>
        </div>
        <CreateThread />
      </div>
    </PageContainer>
  );
};

export default CreatePage;
