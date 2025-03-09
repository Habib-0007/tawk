import type React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/common/NavBar";
import { Lock, MessageCircle, Users } from "lucide-react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <NavBar />

      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            About Tawkapp
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-indigo-100">
            Our mission is to create a platform where people can communicate
            honestly and openly without fear of judgment.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tawkapp was created in 2025 by me, a self-taught developer
                  with a passion for creating meaningful digital experiences. I
                  recognized a gap in how people connect online and wanted to
                  build a platform that would allow for more authentic and
                  honest communication.
                </p>
                <p>
                  The idea for Tawkapp came to me during a period of reflection
                  on the limitations of existing anonymous messaging platforms.
                  I noticed that people often hold back their true thoughts and
                  feelings that can be shared through audio or even a video.
                  This realization sparked the vision for Tawkapp—a platform
                  designed to facilitate genuine conversations through the power
                  of anonymity.
                </p>
                <p>
                  After months of research, development, and countless hours of
                  coding, Tawkapp was born. From the initial concept to the
                  final product, every aspect of the app was built by me, driven
                  by the goal of creating a space where people can communicate
                  openly and honestly without fear of judgment.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <img
                  src="/tawkapp-creator.jpg"
                  alt="Tawkapp founders"
                  className="relative rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At Tawkapp, our values guide everything we do. They shape our
              product decisions, our product structure, and how we interact with
              our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-6">
                <MessageCircle color="#fff" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Authentic Communication
              </h3>
              <p className="text-gray-600">
                We believe that honest, authentic communication leads to better
                relationships, improved understanding, and personal growth. Our
                platform is designed to facilitate genuine expression.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-6">
                <Lock color="#fff" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Privacy & Security
              </h3>
              <p className="text-gray-600">
                We're committed to protecting our users' privacy and security.
                We implement the highest standards of data protection and ensure
                that anonymity is maintained at all times.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-6">
                <Users color="#fff" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Respect
              </h3>
              <p className="text-gray-600">
                While we enable anonymous communication, we also promote respect
                and responsible use of our platform. We have strong community
                guidelines and moderation to prevent misuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Tawkapp who are dedicated to creating
              a platform that fosters authentic communication.
            </p>
          </div>

          <div className="grid grid-cols-1">
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-6">
                <img
                  src="/my-image.jpg"
                  alt="Habib Adebayo - Creator"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Habib Adebayo</h3>
              <p className="text-indigo-600">Creator</p>
              <p className="mt-3 text-gray-600">
                Computer Science Student, Federal University, Oye-Ekiti, Ekiti,
                Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-indigo-100 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion
            for authentic communication and innovative technology.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Add CSS for animations */}
      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  );
};

export default AboutUsPage;
