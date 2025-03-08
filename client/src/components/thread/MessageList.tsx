import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getThreadMessages } from "../../api/messageApi";
import MessageSlider from "../common/MessageSlider";

interface MessageListProps {
  threadId: string;
}

const MessageList: React.FC<MessageListProps> = ({ threadId }) => {
  const {
    data: messages,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["messages", threadId],
    queryFn: () => getThreadMessages(threadId),
    refetchInterval: 30000,
  });


  if (isLoading) {
    return (
      <div className="bg-white shadow rounded-lg p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-red-500 text-center">
          Failed to load messages. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Your Messages</h2>
      <MessageSlider messages={messages?.data || []} />
    </div>
  );
};

export default MessageList;
