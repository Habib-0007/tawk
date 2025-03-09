import React, { useRef } from "react";
import { MessageValues } from "../../types/message.type";
import { downloadAsImage } from "../../utils/htmtToImage";

interface MessageCardProps {
  message: MessageValues;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const date = new Date(message.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDownload = async () => {
    if (messageRef.current) {
      await downloadAsImage(messageRef.current, `message-${message.id}`);
    }
  };

  const renderMedia = () => {
    if (!message.fileUrl) return null;

    switch (message.fileType) {
      case "IMAGE":
        return (
          <img
            src={message.fileUrl}
            alt={message.fileName || "Uploaded image"}
            className="rounded-lg max-h-60 object-contain"
          />
        );
      case "VIDEO":
        return (
          <video
            src={message.fileUrl}
            controls
            className="rounded-lg max-h-60 w-full"
          />
        );
      case "AUDIO":
        return <audio src={message.fileUrl} controls className="w-full" />;
      case "DOCUMENT":
        return (
          <a
            href={message.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-blue-500 underline">
              {message.fileName || "Download document"}
            </span>
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md">
      <div
        ref={messageRef}
        className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex justify-start items-center gap-2">
            <h1 className="text-md font-bold text-indigo-600">Tawkapp</h1>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <button
            onClick={handleDownload}
            className="text-gray-400 hover:text-gray-600"
            title="Download as image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>

        {message.content && (
          <p className="text-gray-800 whitespace-pre-wrap mb-3">
            {message.content}
          </p>
        )}

        {renderMedia()}
      </div>
    </div>
  );
};

export default MessageCard;
