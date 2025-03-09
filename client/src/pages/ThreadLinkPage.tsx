import { useQuery } from "@tanstack/react-query";
import { getUserThread } from "../api/authApi";
import { useThreadStore } from "../store/threadStore";
import { useEffect } from "react";
import PageContainer from "../components/layout/PageContainer";
import CopyToClipboard from "../components/common/CopyToClipboard";
import toast from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";

const ThreadLinkPage = () => {
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
  const threadLink = thread
    ? `${window.location.origin}/thread/send-message/${thread.slug}`
    : "";

  return (
    <PageContainer>
      <section className="max-w-2xl mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <>
            {thread && (
              <div className="bg-white shadow rounded-lg p-6 mb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Share This Thread
                </h2>
                <div className="flex justify-center">
                  <QRCodeCanvas value={threadLink} size={150} />
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Scan the QR code or copy the link to share this thread and
                  receive anonymous messages.
                </p>
                <div className="mt-4 flex justify-center">
                  <CopyToClipboard
                    value={threadLink}
                    handleCopy={() => {
                      navigator.clipboard.writeText(threadLink);
                      toast.success("Link copied successfully");
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </PageContainer>
  );
};

export default ThreadLinkPage;
