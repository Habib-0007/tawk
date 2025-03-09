import type React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/common/NavBar";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <NavBar />

      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-indigo-100">
            Please read these terms carefully before using our platform.
          </p>
          <p className="mt-2 text-sm text-indigo-200">
            Last Updated: March 9, 2025
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the Tawkapp platform, website, and services
              (collectively, the "Services"), you agree to be bound by these
              Terms of Service ("Terms"). If you don't agree to these Terms, you
              may not access or use the Services.
            </p>
            <p>
              We may modify these Terms at any time. If we do so, we'll let you
              know either by posting the modified Terms on the Site or through
              other communications. It's important that you review the Terms
              whenever we modify them because if you continue to use the
              Services after we have posted modified Terms on the Site, you are
              indicating to us that you agree to be bound by the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              2. Privacy Policy
            </h2>
            <p>
              Please refer to our{" "}
              <Link
                to="/privacy"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Privacy Policy
              </Link>{" "}
              for information on how we collect, use and disclose information
              from our users. You acknowledge and agree that your use of the
              Services is subject to our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              3. Account Registration
            </h2>
            <p>
              To use certain features of the Services, you may be required to
              register for an account. When you register, you agree to provide
              accurate, current, and complete information about yourself and to
              update this information to keep it accurate, current, and
              complete.
            </p>
            <p>
              You are responsible for safeguarding your password and for all
              activities that occur under your account. You agree not to
              disclose your password to any third party and to take sole
              responsibility for any activities or actions under your account,
              whether or not you have authorized such activities or actions. You
              must notify us immediately if you suspect any unauthorized use of
              your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              4. User Content and Conduct
            </h2>
            <p>
              Our Services allow users to create threads and receive anonymous
              messages. You are solely responsible for your conduct and any
              content that you submit, post, or display on or through the
              Services.
            </p>
            <p>You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Violate any applicable law or regulation</li>
              <li>
                Infringe the rights of any third party, including without
                limitation intellectual property rights, privacy rights, or
                rights of publicity
              </li>
              <li>
                Send or store any content that is unlawful, harassing,
                threatening, harmful, defamatory, obscene, or otherwise
                objectionable
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Services
              </li>
              <li>
                Attempt to gain unauthorized access to the Services or related
                systems or networks
              </li>
              <li>
                Collect or harvest any information from the Services, including
                user information, without proper authorization
              </li>
              <li>
                Impersonate any person or entity or falsely state or otherwise
                misrepresent your affiliation with a person or entity
              </li>
              <li>
                Engage in any form of automated data collection, including
                scraping, data mining, or data extraction
              </li>
            </ul>
            <p>
              We reserve the right, but are not obligated, to remove any content
              that violates these Terms or that we determine in our sole
              discretion is otherwise objectionable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              5. Anonymity and Content Moderation
            </h2>
            <p>
              While we strive to maintain anonymity for message senders, we also
              have a responsibility to maintain a safe platform. We may employ
              automated systems and human moderators to review content for
              violations of our Terms.
            </p>
            <p>
              In cases of severe abuse or illegal content, we may be required to
              cooperate with law enforcement, which could potentially compromise
              anonymity. We will only do this when legally required or in
              emergency situations involving imminent harm.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              6. Intellectual Property Rights
            </h2>
            <p>
              The Services and their original content, features, and
              functionality are and will remain the exclusive property of
              Tawkapp and its licensors. The Services are protected by
              copyright, trademark, and other laws of both the Nigeria and
              foreign countries.
            </p>
            <p>
              By submitting content to the Services, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify,
              adapt, publish, translate, create derivative works from,
              distribute, and display such content in any media. This license is
              for the purpose of operating, promoting, and improving our
              Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              7. Termination
            </h2>
            <p>
              We may terminate or suspend your account and bar access to the
              Services immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue
              using the Services or delete your account through the account
              settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              8. Limitation of Liability
            </h2>
            <p>
              In no event shall Tawkapp, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Your access to or use of or inability to access or use the
                Services
              </li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>
                Unauthorized access, use or alteration of your transmissions or
                content
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              9. Disclaimer
            </h2>
            <p>
              Your use of the Services is at your sole risk. The Services are
              provided on an "AS IS" and "AS AVAILABLE" basis. The Services are
              provided without warranties of any kind, whether express or
              implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement or course of performance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the State of Lagos, Nigeria, without regard to its
              conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>By email: adebayohabib7@gmail.com</li>
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

export default TermsOfService;
