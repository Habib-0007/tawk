import type React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authSore";

import { MessageCircle } from "lucide-react";
import Button from "../common/Button";

const Header: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <header className="bg-white shadow">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center mr-2">
                <MessageCircle color="#fff" width={20} height={20} />
              </div>
              <span className="text-xl font-bold text-gray-900">Tawkapp</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="primary" size="sm">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
