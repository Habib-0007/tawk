import type React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getThreadBySlug } from "../api/threadApi";
import { useAuthStore } from "../store/authSore";
import { useThreadStore } from "../store/threadStore";
import PageContainer from "../components/layout/PageContainer";
import MessageList from "../components/thread/MessageList";

const ViewMessagesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { user } = useAuthStore();
  const storedThread = useThreadStore((state) => state.getThread(slug || ""));

  // Redirect to sign in if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  const queryResult = useQuery({
    queryKey: ["thread", slug],
    queryFn: () => getThreadBySlug(slug || ""),
    enabled: !!slug && !storedThread,
    initialData: storedThread,
  });

  const {
    data: thread,
    isLoading: isThreadLoading,
    isError: isThreadError,
  } = queryResult;

  if (!slug) {
    return <Navigate to="/dashboard" />;
  }

  if (isThreadLoading) {
    return (
      <PageContainer>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      </PageContainer>
    );
  }

  if (isThreadError || !thread) {
    return (
      <PageContainer>
        <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
          <p className="text-red-500 text-center mb-4">
            Thread not found or has expired.
          </p>
          <div className="flex justify-center">
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your Messages | {user?.name || user?.email}
          </h1>
          <p className="text-gray-600">
            View all anonymous messages sent to this thread.
          </p>
        </div>

        <MessageList threadId={thread?.data.id} />

        <div className="mt-8 text-center">
          <Link
            to={`/thread/${thread?.data?.slug}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Share this thread to get more messages
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ViewMessagesPage;
