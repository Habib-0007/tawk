import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] text-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          404
        </h1>
        <p className="text-xl mb-8">Page not found</p>
        <button
          onClick={() => navigate("/")}
          className="py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center mx-auto"
        >
          <Home className="mr-2" size={20} />
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
