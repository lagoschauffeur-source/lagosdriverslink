import { FileText, Shield, Lock, AlertTriangle } from "lucide-react";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="bg-[#0099ff] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-4">
            Terms &amp; Policies
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Legal information governing your use of Lagos Drivers Link services.
          </p>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <FileText className="w-5 h-5" />, title: "Terms of Service", description: "General terms governing use of our services", link: "#terms-content" },
              { icon: <Shield className="w-5 h-5" />, title: "Privacy Policy", description: "How we collect and use your information", link: "/privacy" },
              { icon: <Lock className="w-5 h-5" />, title: "Data Protection", description: "Our commitment to safeguarding your data", link: "#data-protection" },
              { icon: <AlertTriangle className="w-5 h-5" />, title: "Safety Policy", description: "Our standards and procedures for safety", link: "#safety" },
            ].map((policy, index) => (
              <Link
                key={index}
                href={policy.link}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0099ff]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0099ff]/[0.06] flex items-center justify-center text-[#0099ff] mb-4 group-hover:bg-[#0099ff]/10 transition-colors">
                  {policy.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0099ff] transition-colors">
                  {policy.title}
                </h3>
                <p className="text-gray-400 text-sm">{policy.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section id="terms-content" className="py-16 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-[-0.02em] mb-2">Terms of Service</h2>
          <p className="text-gray-400 text-sm mb-10">Last updated: June 15, 2023</p>

          <div className="space-y-8">
            {[
              { title: "1. Acceptance of Terms", body: 'By accessing or using any services provided by Lagos Drivers Link ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.' },
              { title: "2. Service Description", body: "Lagos Drivers Link provides professional driver placement and transportation services, including but not limited to executive transportation, employee shuttles, and logistics management." },
              { title: "3. User Responsibilities", body: null, list: ["Provide accurate and complete information when creating an account", "Comply with all applicable laws and regulations", "Not misuse or disrupt our Services", "Be responsible for all activities that occur under your account"] },
              { title: "4. Payments and Billing", body: "All fees for Services are as specified in your service agreement. Lagos Drivers Link reserves the right to change prices and institute new charges at any time upon prior notice to you." },
              { title: "5. Cancellation Policy", body: "Cancellations must be made at least 24 hours prior to scheduled service to avoid cancellation fees. Same-day cancellations may be subject to a fee of up to 100% of the service cost." },
              { title: "6. Limitation of Liability", body: "Lagos Drivers Link shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly." },
              { title: "7. Governing Law", body: "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions." },
              { title: "8. Changes to Terms", body: 'Lagos Drivers Link reserves the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website and updating the "Last updated" date.' },
              { title: "9. Contact Information", body: "For any questions about these Terms, please contact us at teams@lagosdriverslink.com." },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                {section.body && <p className="text-gray-600 leading-relaxed">{section.body}</p>}
                {section.list && (
                  <>
                    <p className="text-gray-600 mb-2">Users of our Services agree to:</p>
                    <ul className="space-y-1.5">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0099ff] mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
