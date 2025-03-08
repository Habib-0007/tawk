import React, { useState } from "react";
import { MessageValues } from "../../types/message.type";
import MessageCard from "./MessageCard";

interface MessageSliderProps {
  messages: MessageValues[];
}

const MessageSlider: React.FC<MessageSliderProps> = ({ messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (messages?.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">No messages yet</p>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-64 py-10">
          <MessageCard message={messages[currentIndex]} />

          <div className="mt-6 flex items-center justify-center space-x-2">
            {messages?.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {messages.length > 1 && (
        <>
          <button
            type="button"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default MessageSlider;
