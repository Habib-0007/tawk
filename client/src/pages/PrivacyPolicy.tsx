import type React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/layout/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <NavBar />

      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-indigo-100">
            We take your privacy seriously. This policy explains how we collect,
            use, and protect your information.
          </p>
          <p className="mt-2 text-sm text-indigo-200">
            Last Updated: March 9, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            <p>
              At Tawkapp ("we", "our", or "us"), we respect your privacy and are
              committed to protecting your personal data. This privacy policy
              will inform you about how we look after your personal data when
              you visit our website or use our services and tell you about your
              privacy rights and how the law protects you.
            </p>
            <p>
              This privacy policy applies to all users of the Tawkapp platform,
              including thread creators and message senders. Please read this
              privacy policy carefully to understand our practices regarding
              your personal data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Information We Collect
            </h2>
            <p>
              We collect different types of information depending on how you use
              our service:
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              For Thread Creators (Registered Users)
            </h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Email address</li>
              <li>Username</li>
              <li>Password (encrypted)</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-4">
              For Message Senders (Anonymous Users)
            </h3>
            <ul className="list-disc pl-6 my-2">
              <li>Message content</li>
            </ul>
            <p>
              <strong>Important:</strong> We do not link message content to the
              identity of message senders. Messages are truly anonymous, and we
              have designed our systems to ensure this anonymity is preserved.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              How We Use Your Information
            </h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>
                To allow you to participate in interactive features of our
                service when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our service
              </li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To prevent abuse and ensure compliance with our terms of service
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Data Security
            </h2>
            <p>
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to
              know.
            </p>
            <p>
              We have put in place procedures to deal with any suspected
              personal data breach and will notify you and any applicable
              regulator of a breach where we are legally required to do so.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Data Retention
            </h2>
            <p>
              We will only retain your personal data for as long as necessary to
              fulfill the purposes we collected it for, including for the
              purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
            <p>
              For thread creators, we retain account information until you
              delete your account. For message content, we retain messages for
              the duration specified in our service (typically 5 days), after
              which they are automatically deleted.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Your Legal Rights
            </h2>
            <p>
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              You can exercise these rights by contacting us at
              privacy@Tawkapp.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our service and hold certain information. Cookies are
              files with a small amount of data which may include an anonymous
              unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page
              and updating the "Last Updated" date at the top of this policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any
              changes. Changes to this privacy policy are effective when they
              are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                By email:{" "}
                <a
                  href="mailto:adebayohabib7@gmail.com"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  adebayohabib7@gmail.com
                </a>
              </li>
              <li>
                By visiting the contact page on our website:{" "}
                <Link
                  to="/contact"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
