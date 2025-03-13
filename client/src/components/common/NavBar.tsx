import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authSore";
import Button from "../../components/common/Button";
import { useEffect, useState } from "react";
import { Menu, MessageCircleIcon, X } from "lucide-react";
import { setAuthToken } from "../../api/authApi";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setAuthToken(null);
    navigate("/signin");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        document.documentElement.style.setProperty("--navbar-height", "60px");
      } else {
        setIsScrolled(false);
        document.documentElement.style.setProperty("--navbar-height", "80px");
      }
    };

    document.documentElement.style.setProperty(
      "--navbar-height",
      window.scrollY > 10 ? "60px" : "80px"
    );

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-indigo-600 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${
                    isScrolled ? "bg-indigo-600" : "bg-white"
                  }`}
                >
                  <MessageCircleIcon
                    color={`${isScrolled ? "#fff" : "#4f39f6 "}`}
                    width={20}
                    height={20}
                  />
                </div>
                <span
                  className={`text-xl font-bold  ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Tawkapp
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center ml-auto mr-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X
                    width={24}
                    height={24}
                    color={`${isScrolled ? "#4f39f6" : "#fff "}`}
                  />
                ) : (
                  <Menu
                    width={24}
                    height={24}
                    color={`${isScrolled ? "#4f39f6" : "#fff "}`}
                  />
                )}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/create"
                className={`${
                  isScrolled
                    ? "text-gray-400 hover:text-indigo-600"
                    : "text-white hover:text-indigo-100"
                }  transition-colors`}
              >
                Create
              </Link>
              <Link
                to="/about"
                className={`${
                  isScrolled
                    ? "text-gray-400 hover:text-indigo-600"
                    : "text-white hover:text-indigo-100"
                }  transition-colors`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`${
                  isScrolled
                    ? "text-gray-400 hover:text-indigo-600"
                    : "text-white hover:text-indigo-100"
                }  transition-colors`}
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className={`${
                  isScrolled
                    ? "text-gray-400 hover:text-indigo-600"
                    : "text-white hover:text-indigo-100"
                }  transition-colors`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className={`${
                  isScrolled
                    ? "text-gray-400 hover:text-indigo-600"
                    : "text-white hover:text-indigo-100"
                }  transition-colors`}
              >
                Terms
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                    <Button
                      variant={`${isScrolled ? "primary" : "outline"}`}
                      size="sm"
                    >
                      Dashboard
                    </Button>
                  </Link>{" "}
                  <Button
                    variant="secondary"
                    className="bg-red-500 hover:bg-red-600"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className={`${
                      isScrolled
                        ? "text-gray-400 hover:text-indigo-600"
                        : "text-white hover:text-indigo-100"
                    }  font-medium transition-colors`}
                  >
                    Sign In
                  </Link>
                  <Link to="/signup">
                    <Button
                      variant={`${isScrolled ? "primary" : "outline"}`}
                      size="sm"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2 px-4 fixed top-[calc(var(--navbar-height,60px))] left-0 right-0 z-50 mx-2 rounded">
          <div className="flex flex-col space-y-3 py-3">
            <Link
              to="/create"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3">
              {isAuthenticated ? (
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="primary" size="sm" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
