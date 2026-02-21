"use client";

import {
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
  AlertCircle,
  ArrowRight,
  Shield,
  Clock,
  Search,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const HelpPage = () => {
  const faqs = [
    {
      question: "How do I book a corporate transportation service?",
      answer: "You can book through our website, mobile app, or by calling our customer service line. Corporate accounts have access to dedicated account managers.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and corporate billing arrangements. Payment methods can be configured in your account settings.",
    },
    {
      question: "How can I track my vehicle?",
      answer: "All bookings include real-time tracking which can be accessed through your account dashboard or mobile app.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made more than 24 hours in advance receive a full refund. Same-day cancellations may incur a fee depending on the service type.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
              How can we <br /><span className="text-[#0099ff]">Help you today?</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
              Find instant answers to common questions or reach out to our dedicated support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Methods */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                desc: "Typically responds within 2 hours",
                contact: "teams@lagosdriverslink.com",
                action: "Send Email",
                href: "mailto:teams@lagosdriverslink.com",
                color: "bg-[#0099ff]"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Live Chat",
                desc: "Real-time assistance from experts",
                contact: "Available 8am - 6pm WAT",
                action: "Start Chat",
                href: "https://wa.me/2349032702233",
                color: "bg-[#25D366]"
              }
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${method.color}/[0.1] ${method.color.replace('bg-', 'text-')} flex items-center justify-center mb-8`}>
                  {method.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-500 mb-8">{method.desc}</p>
                <p className="text-gray-900 font-bold mb-8">{method.contact}</p>
                <a
                  href={method.href}
                  className={`inline-flex items-center gap-2 ${method.color} text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 transition-all shadow-xl`}
                >
                  {method.action}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">Quick Answers</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0099ff] flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-500 leading-relaxed ml-10">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Assistance */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099ff]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex-1">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center mb-8">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl lg:text-6xl font-black mb-8 tracking-tighter">Emergency <br /> Assistance</h2>
              <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                Need immediate help with an active booking? Our dedicated emergency response team is standing by 24/7.
              </p>
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#0099ff]" />
                  <span className="font-bold">24/7 Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#0099ff]" />
                  <span className="font-bold">Rapid Response</span>
                </div>
              </div>
              <a
                href="tel:+2349032702233"
                className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all inline-flex items-center gap-4 text-lg"
              >
                <Phone className="w-6 h-6" />
                +234 903 270 2233
              </a>
            </div>
            <div className="relative z-10 flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { icon: <Phone />, label: "Urgent Call" },
                { icon: <Shield />, label: "Secure Link" },
                { icon: <Clock />, label: "Instant Tech" },
                { icon: <AlertCircle />, label: "Priority Help" }
              ].map((box, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
                  <div className="text-[#0099ff] w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">{box.icon}</div>
                  <div className="font-bold text-sm">{box.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
