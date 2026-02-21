"use client";

import { Briefcase, DollarSign, Award, ArrowRight, MapPin, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CareersPage = () => {
  const openPositions = [
    { title: "Logistics Manager", type: "Full-time", loc: "Lekki, Lagos", dept: "Ops", pay: "₦400k - ₦600k" },
    { title: "iOS Engineer", type: "Remote", loc: "Nationwide", dept: "Tech", pay: "Competitive" },
    { title: "Fleet Technician", type: "Full-time", loc: "Ikeja, Lagos", dept: "Maintenance", pay: "₦250k - ₦350k" },
    { title: "Client Success Head", type: "Hybrid", loc: "V.I, Lagos", dept: "Sales", pay: "₦300k + Equity" },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.03] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-8 uppercase tracking-widest">Join the Mission</span>
            <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              The Next <br /><span className="text-[#0099ff]">Era</span> of Mobility
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-black opacity-80 mb-12">
              Building Africa's premier driver marketplace requires elite talent. Are you ready to lead?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Matrix */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-8 h-8" />, title: "Hyper Growth", desc: "Work in a fast-paced ecosystem with infinite room for professional scaling." },
            { icon: <Award className="w-8 h-8" />, title: "Elite Benefits", desc: "Comprehensive health, wellness, and performance-based equity programs." },
            { icon: <Briefcase className="w-8 h-8" />, title: "True Impact", desc: "Solve real-world logistics challenges affecting millions across Nigeria." }
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Positions Interactive Wall */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 tracking-tight text-center">Open Trajectories</h2>
          <div className="space-y-4">
            {openPositions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-50 shadow-sm hover:shadow-xl hover:border-[#0099ff]/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-10 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-gray-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">{pos.dept}</span>
                    <span className="text-gray-300">&bull;</span>
                    <span className="text-xs font-bold text-[#0099ff] uppercase tracking-widest">{pos.type}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">{pos.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm font-medium">
                    <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#0099ff]" /> {pos.loc}</div>
                    <div className="flex items-center gap-1.5 font-black text-gray-900">{pos.pay}</div>
                  </div>
                </div>
                <button className="bg-[#0099ff] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all flex items-center gap-3 shadow-xl shadow-[#0099ff]/20 group-hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none">Culture of <br /><span className="text-[#0099ff]">Excellence.</span></h2>
              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  "Equity options for early team members",
                  "Flexible hybrid work arrangements",
                  "Unlimited professional dev allowance",
                  "Top-tier private health insurance",
                  "Quarterly innovation retreats"
                ].map((it, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-gray-50">
                    <CheckCircle2 className="w-6 h-6 text-[#0099ff]" />
                    <span className="font-bold text-gray-900">{it}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-[3rem] bg-gray-100 overflow-hidden relative shadow-lg">
                  <Image src="/culture-1.jpg" alt="Culture" fill className="object-cover" />
                </div>
                <div className="aspect-square rounded-[3rem] bg-gray-100 overflow-hidden relative shadow-lg">
                  <Image src="/culture-2.jpg" alt="Culture" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-[3rem] bg-gray-100 overflow-hidden relative shadow-lg">
                  <Image src="/culture-3.jpg" alt="Culture" fill className="object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[3rem] bg-gray-100 overflow-hidden relative shadow-lg">
                  <Image src="/culture-4.jpg" alt="Culture" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
