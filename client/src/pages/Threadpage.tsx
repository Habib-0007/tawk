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
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Share This Thread
              </h2>
              <div className="flex items-center">
                <input
                  type="text"
                  readOnly
                  value={`${window.location.origin}/thread/${thread?.data.slug}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${window.location.origin}/thread/${thread?.data?.slug}`
                    );
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Copy
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Share this link with your friends to receive anonymous messages.
              </p>
            </div>

            <MessageForm threadId={thread?.data?.id || ""} />
          </>
        )}
      </div>
    </PageContainer>
  );
};

export default ThreadPage;
