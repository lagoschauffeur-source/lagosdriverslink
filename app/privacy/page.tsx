/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Lagos Drivers Link",
  description:
    "Learn how Lagos Drivers Link protects your privacy and handles your personal information. Our commitment to data security and privacy protection.",
  keywords:
    "privacy policy, data protection, personal information, security, Lagos Drivers Link privacy",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number, address)",
        "Payment information (processed securely through third-party providers)",
        "Location data (for driver matching and route optimization)",
        "Usage data (app interactions, booking history)",
        "Device information (IP address, browser type, device identifiers)",
      ],
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our transportation services",
        "Match you with appropriate drivers",
        "Process payments and manage your account",
        "Send service updates and important notifications",
        "Analyze usage patterns to enhance user experience",
        "Comply with legal obligations and safety requirements",
      ],
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Information Sharing",
      content: [
        "We share minimal necessary information with drivers for service delivery",
        "Payment processors receive only payment-related information",
        "We may share data with law enforcement when legally required",
        "Aggregated, anonymized data may be used for business analytics",
        "We never sell your personal information to third parties",
      ],
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Data Security",
      content: [
        "Encryption of sensitive data in transit and at rest",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication measures",
        "Secure data centers with physical security measures",
        "Employee training on data protection best practices",
      ],
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Your Rights",
      content: [
        "Access your personal information we hold",
        "Correct inaccurate or incomplete data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "Data portability (receive your data in a structured format)",
        "Withdraw consent for data processing where applicable",
      ],
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "International Transfers",
      content: [
        "Your data is primarily processed within Nigeria",
        "Some service providers may be located outside Nigeria",
        "We ensure adequate protection for any international transfers",
        "Standard contractual clauses are used where necessary",
        "We comply with applicable data protection laws",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="bg-[#0099ff] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Shield className="h-12 w-12 mx-auto mb-5 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how Lagos
            Drivers Link collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-white/50 mt-4">Last updated: January 2025</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lagos Drivers Link ("we," "our," or "us") is committed to
              protecting your privacy and personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard
              your information when you use our transportation services,
              website, and mobile applications.
            </p>
            <p>
              By using our services, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#0099ff]/[0.06] flex items-center justify-center text-[#0099ff]">
                  {section.icon}
                </div>
                <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0099ff] mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-10">
          {[
            {
              title: "Cookies and Tracking", paragraphs: [
                "We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us remember your preferences, analyze site traffic, and provide personalized content.",
                "You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our services.",
              ]
            },
            {
              title: "Data Retention", paragraphs: [
                "We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Account information is typically retained for the duration of your account plus a reasonable period for business and legal purposes.",
                "When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or regulatory purposes.",
              ]
            },
            {
              title: "Children's Privacy", paragraphs: [
                "Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.",
              ]
            },
            {
              title: "Changes to This Policy", paragraphs: [
                'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
                "We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
              ]
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 max-w-sm mx-auto text-left space-y-2">
            <p className="font-bold text-gray-900 mb-3">Lagos Drivers Link</p>
            <p className="text-gray-600 text-sm">Email: privacy@lagosdriverslink.com</p>
            <p className="text-gray-600 text-sm">Phone: +234 903 270 2233</p>
            <p className="text-gray-600 text-sm">Address: 24a Bashorun Okunsanya Street, Off Admiralty Way, Lekki Phase 1, Lagos</p>
            <p className="text-gray-600 text-sm">Alt Address: 94 Badore Road, Ajah</p>
          </div>
        </div>
      </section>
    </div>
  );
}
