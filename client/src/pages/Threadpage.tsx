import type React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getThreadBySlug } from "../api/threadApi";
import { useThreadStore } from "../store/threadStore";
import PageContainer from "../components/layout/PageContainer";
import MessageForm from "../components/thread/MessageForm";

const ThreadPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const addThread = useThreadStore((state) => state.addThread);

  const {
    data: thread,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["thread", slug],
    queryFn: () => getThreadBySlug(slug || ""),
    select: (data) => {
      if (data) {
        addThread(data);
      }
      return data;
    },
    enabled: !!slug,
  });

  if (!slug) {
    return <Navigate to="/" />;
  }

  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : isError ? (
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-red-500 text-center">
              Thread not found or has expired.
            </p>
          </div>
        ) : (
          <>
            <MessageForm threadId={thread?.data?.id || ""} />
          </>
        )}
      </div>
    </PageContainer>
  );
};

export default ThreadPage;
