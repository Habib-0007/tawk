import type React from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createThread } from "../../api/threadApi";
import { useThreadStore } from "../../store/threadStore";
import Button from "../common/Button";

const CreateThread: React.FC = () => {
  const navigate = useNavigate();
  const addThread = useThreadStore((state) => state.addThread);

  const createThreadMutation = useMutation({
    mutationFn: createThread,
    onSuccess: (thread) => {
      addThread(thread);
      toast.success("Thread created successfully!");
      navigate(`/thread/${thread.data.slug}`);
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to create thread. Please try again."
      );
    },
  });

  const handleCreateThread = () => {
    createThreadMutation.mutate();
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Create Anonymous Thread
      </h2>

      <p className="text-gray-600 mb-6">
        Create an anonymous thread and share the link with your friends. They
        can send you messages without revealing their identity.
      </p>

      <div className="flex flex-col items-center">
        <Button
          onClick={handleCreateThread}
          isLoading={createThreadMutation.isPending}
          className="w-full"
        >
          Create New Thread
        </Button>

        <p className="mt-4 text-sm text-gray-500">
          The thread link will be valid for 5 days.
        </p>
      </div>
    </div>
  );
};

export default CreateThread;
