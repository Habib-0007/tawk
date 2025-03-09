import type React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authSore";
import Button from "../components/common/Button";
import { data } from "../utils/testimonialsData";
import Footer from "../components/layout/Footer";
import NavBar from "../components/common/NavBar";
import { Image, Lock, ShieldCheck } from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Anonymous Conversations,
                <span className="text-indigo-600"> Real Connections</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Create a private thread, share the link, and receive anonymous
                messages from friends, colleagues, or anyone you choose.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button onClick={handleGetStarted} size="lg" className="px-8">
                  Get Started
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    src="/hero-img.png"
                    alt="Anonymous messaging interface"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">100%</p>
              <p className="mt-2 text-lg text-gray-600">Anonymous</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">1k+</p>
              <p className="mt-2 text-lg text-gray-600">Messages Sent</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">400+</p>
              <p className="mt-2 text-lg text-gray-600">Happy Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">4.8/5</p>
              <p className="mt-2 text-lg text-gray-600">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need for anonymous messaging
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our platform provides a safe, secure way to exchange anonymous
              messages.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                <Lock width={24} height={24} color="#fff" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Complete Anonymity
              </h3>
              <p className="mt-4 text-gray-600">
                Messages are completely anonymous. We don't track who sends
                what, ensuring total privacy for everyone.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                <Image width={24} height={24} color="#fff" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Rich Media Support
              </h3>
              <p className="mt-4 text-gray-600">
                Share more than just text. Send images, videos, audio, and
                documents anonymously.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                <ShieldCheck width={24} height={24} color="#fff" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Secure & Private
              </h3>
              <p className="mt-4 text-gray-600">
                Your messages are encrypted and only visible to the thread
                owner. No one else can access your conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, secure, and anonymous
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Getting started with Tawkapp is easy. Follow these simple
              steps.
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              {/* Steps connector line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 hidden md:block"></div>

              {/* Step 1 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                          1
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-gray-900">
                          Create an Account
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Sign up for a free account to create your own anonymous
                        thread. It only takes a few seconds.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                    <img
                      src="/signup-img.png"
                      alt="Sign up screen"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 flex justify-start md:pl-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                          2
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-gray-900">
                          Share Your Link
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        Generate a unique link and share it with friends, on
                        social media, or anywhere you want to receive anonymous
                        messages.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                    <img
                      src="/share-img.png"
                      alt="Share link screen"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                          3
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-gray-900">
                          Receive Messages
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        People can send you anonymous messages, and only you can
                        see them. Respond if you want, or just enjoy the
                        feedback.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                    <img
                      src="/hero-img.png"
                      alt="Messages screen"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our users say
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Don't just take our word for it. Here's what people love about
              Tawkapp.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {data?.map((each, index) => (
              <div className="bg-white rounded-lg shadow-lg p-8" key={index}>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <img
                      src="https://picsum.photos/200"
                      alt={each.name}
                      className="h-6 w-6 rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {each.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic">`"{each.content}"`</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              FAQ
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Find answers to common questions about Tawkapp.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Is Tawkapp really anonymous?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, Tawkapp is completely anonymous. We don't track who
                  sends messages, and there's no way for thread owners to see
                  who sent them a message.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  How long do threads last?
                </h3>
                <p className="mt-2 text-gray-600">
                  Threads are active for 5 days after creation. After that, they
                  expire and are no longer accessible. You can always create a
                  new thread.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Can I delete messages I receive?
                </h3>
                <p className="mt-2 text-gray-600">
                  Currently, messages cannot be deleted once they're sent. We
                  recommend creating a new thread if you want to start fresh.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Is Tawkapp free to use?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, Tawkapp is completely free to use. Create as many
                  threads as you want and receive unlimited messages.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  How do I report inappropriate content?
                </h3>
                <p className="mt-2 text-gray-600">
                  If you receive inappropriate content, you can report it by
                  clicking the "Report" button on the message. Our team will
                  review it and take appropriate action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to start receiving anonymous messages?
          </h2>
          <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
            Create your free account today and share your thread with the world.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              variant="outline"
              className="px-8 py-3 text-l"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />

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

export default LandingPage;
