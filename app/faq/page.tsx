/* eslint-disable react/no-unescaped-entities */
"use client";

import { HelpCircle, ChevronDown, ChevronUp, Mail, Phone, MessageSquare, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Lagos Drivers Link?",
          answer: "Lagos Drivers Link is a professional transportation service platform that connects customers with verified, experienced drivers in Lagos, Nigeria. We provide reliable, safe, and convenient transportation solutions for various needs including daily commutes, events, and corporate transportation.",
        },
        {
          question: "How do I book a driver?",
          answer: "You can book a driver through our website or mobile app. Simply select your pickup and destination locations, choose your preferred time, and select from available drivers. You can also call our customer service line at +234 903 270 2233 for assistance with bookings.",
        },
        {
          question: "What areas do you serve?",
          answer: "We currently serve all major areas in Lagos including Victoria Island, Ikoyi, Lekki, Ikeja, Surulere, Yaba, and surrounding areas. We're continuously expanding our coverage to serve more locations across Lagos.",
        },
      ],
    },
    {
      category: "Booking & Payment",
      questions: [
        {
          question: "How far in advance can I book?",
          answer: "You can book drivers up to 30 days in advance for regular services. For special events and corporate bookings, we recommend booking at least 48 hours in advance to ensure availability.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash payments, bank transfers, and major credit/debit cards. You can also pay through our mobile app using various digital payment methods including Paystack, Flutterwave, and other secure payment gateways.",
        },
        {
          question: "Can I cancel my booking?",
          answer: "Yes, you can cancel your booking. Cancellation policies vary depending on the service type and timing. Free cancellation is available up to 2 hours before your scheduled pickup time. Late cancellations may incur a fee.",
        },
      ],
    },
    {
      category: "Safety & Security",
      questions: [
        {
          question: "How do you ensure driver safety?",
          answer: "All our drivers undergo thorough background checks, vehicle inspections, and safety training. We verify driver licenses, conduct criminal background checks, and ensure all vehicles meet our safety standards.",
        },
        {
          question: "What if I feel unsafe during a ride?",
          answer: "Your safety is our top priority. If you ever feel unsafe, you can contact our 24/7 emergency support line immediately. All rides are tracked in real-time.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] text-sm">0{categoryIndex + 1}</span>
            {category.category}
          </h2>
          <div className="space-y-4">
            {category.questions.map((faq, questionIndex) => {
              const itemIndex = categoryIndex * 100 + questionIndex;
              const isOpen = openItems.includes(itemIndex);

              return (
                <div key={questionIndex} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-[#0099ff]/20 transition-all">
                  <button
                    onClick={() => toggleItem(itemIndex)}
                    className="w-full flex items-center justify-between text-left p-6 md:p-8"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-8">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#0099ff] text-white' : 'bg-slate-50 text-gray-400'}`}>
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8">
                          <p className="text-gray-500 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] mx-auto mb-8">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-7xl font-black mb-8 text-gray-900 tracking-tight leading-none">
              Questions? <span className="text-[#0099ff]">Answers.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our services, booking process, safety measures, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 px-6 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 text-gray-900 tracking-tight">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", value: "+234 903 270 2233", desc: "Speak directly with us." },
              { icon: <Mail className="w-6 h-6" />, title: "Email Support", value: "teams@lagosdriverslink.com", desc: "Get detailed help." },
              { icon: <MessageSquare className="w-6 h-6" />, title: "Live Chat", value: "Available 24/7", desc: "Start a conversation." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#0099ff]/20 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mx-auto mb-6">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[#0099ff] font-black text-sm mb-4 leading-tight">{card.value}</p>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-24 px-6 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">
          <Link href="/safety" className="flex items-center gap-4 p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-[#0099ff]/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Safety Center</h4>
              <p className="text-gray-400 text-sm">How we protect you</p>
            </div>
          </Link>
          <Link href="/terms" className="flex items-center gap-4 p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-[#0099ff]/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Terms of Service</h4>
              <p className="text-gray-400 text-sm">Read our policies</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
import { Shield } from "lucide-react";
