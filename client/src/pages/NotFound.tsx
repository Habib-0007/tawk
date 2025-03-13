import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Footer from "../components/layout/Footer";
import NavBar from "../components/common/NavBar";
import { ArrowLeft, Home } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <NavBar />

      {/* 404 Content */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-12">
            <div className="absolute -top-6 -left-6 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative">
              <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-64 w-64"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button
              onClick={handleGoBack}
              variant="outline"
              size="lg"
              className="px-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                className="px-8 w-full sm:w-auto"
              >
                <Home className="h-5 w-5 mr-2" />
                Home Page
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/features"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add CSS for animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
