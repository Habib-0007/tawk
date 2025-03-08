import React, { useEffect } from "react";
import PageContainer from "../components/layout/PageContainer";
import CreateThread from "../components/thread/CreateThread";
import { useThreadStore } from "../store/threadStore";

const CreatePage: React.FC = () => {
  const clearExpiredThreads = useThreadStore(
    (state) => state.clearExpiredThreads
  );

  useEffect(() => {
    // Clean up expired threads when the component mounts
    clearExpiredThreads();
  }, [clearExpiredThreads]);

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
