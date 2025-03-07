import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import { createThread } from "../api/api";
// import axios from "axios";

async function createNewThread() {
  try {
    const response = await createThread();

    if (!response.ok) {
      throw new Error("Failed to create thread");
    }
    return response.json();
  } catch (err) {
    console.error("err", err);
  }
}

const HomePage = () => {
  const [isCreating, setIsCreating] = useState(false);

  const mutation = useMutation({
    mutationFn: createNewThread,
    onSuccess: (newData) => {
      console.log("Post created:", newData);
      toast.success("Post created successfully!");
      setIsCreating(true);
    },
    onError: (err) => {
      console.error("Error creating post:", err);
      toast.error("Failed to create post");
      setIsCreating(true);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 mb-6">
            <MessageSquare size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Tawk
          </h1>
          <p className="text-gray-400 max-w-sm mx-auto">
            Send and receive anonymous messages. Swipe to view new messages and
            download them as images.
          </p>
        </div>

        <div className="space-y-6">
          <button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
          >
            {isCreating ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating Thread...
              </>
            ) : (
              <>
                <MessageSquare className="mr-2" size={20} />
                <span> Create New Thread</span>
              </>
            )}
          </button>
          {/* 
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#1a1a2e] text-gray-400">or</span>
            </div>
          </div> */}
          {/* 
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Recent Threads</h2>
            <ThreadList />
          </div> */}
        </div>
      </div>
    </div>
  );
};

// const ThreadList = () => {
//   const navigate = useNavigate();
//   const { userThreads, setCurrentThread } = useThreadStore();

//   if (userThreads.length === 0) {
//     return (
//       <div className="text-center py-6 text-gray-400">
//         <p>No recent threads</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-2">
//       {userThreads.map((thread) => (
//         <button
//           key={thread.id}
//           onClick={() => {
//             setCurrentThread(thread);
//             navigate(`/thread/${thread.slug}`);
//           }}
//           className="w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left flex justify-between items-center"
//         >
//           <div>
//             <span className="font-medium">Thread</span>
//             <p className="text-sm text-gray-400">
//               {new Date(thread.createdAt).toLocaleDateString()}
//             </p>
//           </div>
//           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
//             <MessageSquare size={16} />
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// };

export default HomePage;
