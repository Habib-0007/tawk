import type React from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUserThread } from "../api/authApi";
import { useThreadStore } from "../store/threadStore";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/common/Button";
import CopyToClipboard from "../components/common/CopyToClipboard";
import toast from "react-hot-toast";

const DashboardPage: React.FC = () => {
  const addThread = useThreadStore((state) => state.addThread);
  const clearExpiredThreads = useThreadStore(
    (state) => state.clearExpiredThreads
  );

  useEffect(() => {
    clearExpiredThreads();
  }, [clearExpiredThreads]);

  const { data: threadData, isLoading } = useQuery({
    queryKey: ["userThread"],
    queryFn: getUserThread,
    select: (data) => {
      if (data?.data) {
        addThread(data);
      }
      return data;
    },
  });

  const thread = threadData?.data;
  const threadlink = thread
    ? `${window.location.origin}/thread/send-message/${thread.slug}}`
    : "";

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage your anonymous thread and view messages
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 mx-auto">
            {thread ? (
              <div className="bg-white shadow rounded-lg p-6 justify-self-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Your Active Thread
                </h2>
                <p className="text-gray-600 mb-6">
                  Share this link with friends to receive anonymous messages.
                </p>

                <div className="flex items-center mb-4">
                  <CopyToClipboard
                    value={threadlink}
                    handleCopy={() => {
                      navigator.clipboard.writeText(threadlink);
                      toast.success("Link copied successfully");
                    }}
                  />
                </div>

                <div className="flex items-stretch md:items-center flex-col md:flex-row space-y-2 md:space-x-4">
                  <Link
                    to={`/thread/${thread.slug}`}
                    className="flex-1 text-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    View Thread
                  </Link>
                  <Link
                    to={`/messages/${thread.slug}`}
                    className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    View Messages
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg p-6 justify-self-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Create a Thread
                </h2>
                <p className="text-gray-600 mb-6">
                  You don't have an active thread. Create one to start receiving
                  anonymous messages.
                </p>
                <Link to="/create">
                  <Button className="w-full">New Thread</Button>
                </Link>
              </div>
            )}

            <div className="bg-white shadow rounded-lg p-6 justify-self-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                How It Works
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Create an anonymous thread</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Share the link with your friends</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Receive anonymous messages</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Only you can see the messages sent to your thread</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
