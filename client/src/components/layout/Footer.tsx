import {
  Facebook,
  Github,
  Instagram,
  Link2,
  Linkedin,
  MessageCircleIcon,
  Twitter,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/authApi";
import { useAuthStore } from "../../store/authSore";

const Footer = () => {
  const navigate = useNavigate();

  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setAuthToken(null);
    navigate("/signin");
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 bg-white`}
              >
                <MessageCircleIcon color="#101828" width={20} height={20} />
              </div>
              <span className={`text-xl font-bold text-white`}>Tawkapp</span>
            </Link>
            <p className="text-gray-400 mt-2">
              The anonymous messaging platform that allows you share your
              thought to people.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <div className="flex justify-start items-center gap-3">
                <li>
                  {" "}
                  <Link
                    to="https://habibadebayo.vercel.app/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Link2 />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://x.com/habib__001"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/habibopeyemi.adebayo"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/visionn24"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/habib-adebayo-76b00423a"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/habib-0007"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github />
                  </Link>
                </li>
              </div>

              <button
                className="bg-red-100 hover:bg-red-200 text-red-600 mt-5 px-4 py-1 rounded-md"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tawkapp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
