"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "How do I hire a driver?",
    answer: "It is simple. Fill the hire form with your needs, and we will help you choose the right plan and match you with a verified driver.",
  },
  {
    question: "How do you check your drivers?",
    answer: "Every driver passes through 4 key checks: background checks, criminal record check, address verification, and practical driving test.",
  },
  {
    question: "What is special about your premium drivers?",
    answer: "Our premium drivers are highly experienced, trained in defensive driving, and very familiar with Lagos roads and traffic.",
  },
  {
    question: "Can I hire a driver for only a few days?",
    answer: "Yes, you can. We have flexible plans from daily support to long-term monthly options.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left - Support Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest leading-none">Help and Support</span>
              <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
                Frequently Asked <br /><span className="text-blue-600">Questions.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
                Everything you need to know before you hire a driver from us.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900 leading-none mb-1">24/7 Support</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">We are always here to help</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900 leading-none mb-1">Safe and Secure</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Strong safety standards</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center gap-3 text-blue-600 font-black uppercase text-xs tracking-[0.2em] group">
                Talk to Our Team <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Accordion Grid */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 ${activeIndex === index
                  ? "bg-[#fafbfd] shadow-2xl border-transparent"
                  : "bg-white border border-gray-100 hover:border-[#0099ff]/20"
                  }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-10 text-left group"
                >
                  <span className={`text-xl font-black pr-8 tracking-tight transition-colors ${activeIndex === index ? "text-[#0099ff]" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${activeIndex === index ? "bg-[#0099ff] text-white rotate-180" : "bg-slate-50 text-gray-300 hover:text-[#0099ff]"}`}>
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 pb-10 text-gray-500 font-medium text-[16px] leading-relaxed border-t border-gray-100/50 pt-6 mx-10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
