import type React from "react";
import { useState } from "react";
import Button from "../components/common/Button";
import Footer from "../components/layout/Footer";
import NavBar from "../components/common/NavBar";
import {
  CircleHelp,
  Facebook,
  Github,
  Instagram,
  Link,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <NavBar />

      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-indigo-100">
            Have questions or feedback? We'd love to hear from you. Our team is
            here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our features, pricing, need a
                demo, or anything else, our team is ready to answer all your
                questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-500 flex items-center justify-center">
                      <Mail color="#fff" width={20} height={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a
                        href="mailto:adebayohabib7@gmail.com"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        adebayohabib7@gmail.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-500 flex items-center justify-center">
                      <Phone color="#fff" width={20} height={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        +234 (0) 901 1916 6356
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">WhatsApp Only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-500 flex items-center justify-center">
                      <MapPin color="#fff" width={20} height={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Office
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {/* 123 Tech Street
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States */}
                      Unknown For Now
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-500 flex items-center justify-center">
                      <CircleHelp color="#fff" width={20} height={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Support
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Visit our{" "}
                      <a
                        href="/help"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        Help Center
                      </a>{" "}
                      for quick answers to common questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://habibadebayo.vercel.app/"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Link />
                    <span className="sr-only">Portfolio</span>
                  </a>
                  <a
                    href="https://x.com/habib__001"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Twitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://www.facebook.com/habibopeyemi.adebayo"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Facebook />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/visionn24"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Instagram />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/habib-adebayo-76b00423a"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/habib-0007"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Github />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                    Thank you for your message! We'll get back to you as soon as
                    possible.
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
            <p className="mt-2 text-gray-600">
              Visit our office in San Francisco
            </p>
          </div>

          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">
                Map placeholder - Embed Google Maps here
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
