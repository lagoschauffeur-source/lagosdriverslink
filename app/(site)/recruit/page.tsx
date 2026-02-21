"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, UserPlus, FileText, Send, Zap, Briefcase, Users, Car } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const RecruitPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-8 uppercase tracking-widest">
                Partner Recruitment
              </span>
              <h1 className="text-4xl md:text-7xl font-black mb-8 text-gray-900 tracking-tighter leading-none">
                Elite Driver <span className="text-[#0099ff]">Recruitment</span> for any scale
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                Let Lagos Drivers Link handle your driver recruitment with precision. We verify, train, and place only the top 3% of applicants.
              </p>
              <div className="flex gap-4">
                <Link href="#recruit-form" className="bg-[#0099ff] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20">
                  Get Started
                </Link>
                <Link href="/about" className="border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white"
            >
              <Image
                src="/Whisk_a454587641.jpg"
                alt="Recruit a driver"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight">The Recruitment Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Pre-Vetted Pool", desc: "Immediate access to a pool of 1,000+ pre-vetted, experienced drivers." },
              { icon: <FileText className="w-6 h-6" />, title: "Rigorous Testing", desc: "Background checks, driving exams, and psychological evals provided." },
              { icon: <Zap className="w-6 h-6" />, title: "Flexible Hiring", desc: "Full-time, part-time, or on-demand solutions tailored to your scale." },
              { icon: <UserPlus className="w-6 h-6" />, title: "Concierge Onboarding", desc: "A dedicated manager handles all paperwork and orientation." },
              { icon: <Briefcase className="w-6 h-6" />, title: "Nationwide Scale", desc: "Coverage across Lagos, Abuja, and all major commercial hubs." },
              { icon: <Zap className="w-6 h-6" />, title: "24/7 Compliance", desc: "Ongoing compliance monitoring and replacement services." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="recruit-form" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099ff]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-6xl font-black mb-6 tracking-tight">Start Recruiting</h2>
              <p className="text-gray-400 text-lg">Our team will contact you with elite matches.</p>
            </div>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 ml-2">Name or Entity</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-[#0099ff] transition-all" placeholder="Enter name" required />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 ml-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-[#0099ff] transition-all" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 ml-2">Contact Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-[#0099ff] transition-all" placeholder="+234..." required />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 ml-2">Driver Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-[#0099ff] transition-all appearance-none" required>
                    <option value="" className="bg-gray-900">Select Category</option>
                    <option value="corporate" className="bg-gray-900">Corporate Elite</option>
                    <option value="private" className="bg-gray-900">Private Chauffeur</option>
                    <option value="logistics" className="bg-gray-900">Logistics Support</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 ml-2">Specific Requirements</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white h-40 focus:ring-2 focus:ring-[#0099ff] transition-all resize-none" placeholder="Languages, specialized routes, etc."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0099ff] text-white font-black py-6 rounded-2xl hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20 flex items-center justify-center gap-4">
                Submit Recruitment Request
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecruitPage;
import { ShieldCheck } from "lucide-react";
