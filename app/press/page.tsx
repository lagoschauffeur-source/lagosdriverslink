"use client";

import { Newspaper, Mic, Tv, Download, ArrowRight, Globe, Zap, Megaphone, FileText } from "lucide-react";
import { motion } from "framer-motion";

const PressPage = () => {
  const pressReleases = [
    {
      title: "Lagos Drivers Link Extends Fleet Network with Elite Chauffeur Standard",
      date: "May 15, 2024",
      category: "Growth",
    },
    {
      title: "Named 'Mobility Partner of the Year' at Lagos Tech Summit",
      date: "March 28, 2024",
      category: "Award",
    },
    {
      title: "Launch of 'SecureMile' Safety Initiative for Corporate Commutes",
      date: "February 10, 2024",
      category: "Safety",
    },
  ];

  const mediaCoverage = [
    {
      outlet: "Business Day",
      title: "Revolutionizing Chauffeur Standards in Nigeria's Tech Hub",
      date: "April 3, 2024",
      type: "Print",
    },
    {
      outlet: "TechCabal",
      title: "The Logistics Infrastructure Behind Nigeria's Top Driver Network",
      date: "January 18, 2024",
      type: "Online",
    },
    {
      outlet: "Channels TV",
      title: "CEO Discusses Future of Urban Mobility on Business Morning",
      date: "December 7, 2023",
      type: "TV",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-8 uppercase tracking-widest">Media Relations</span>
            <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Press & <br /><span className="text-[#0099ff]">Insights Center</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Daily updates, brand resources, and global announcements from the Lagos Drivers Link newsroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Asset Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <FileText />, title: "Electronic Press Kit", desc: "Logos, executive bios, and company facts for rapid deployment." },
            { icon: <Megaphone />, title: "Media Relations", desc: "Direct channel for interview requests and official statements." },
            { icon: <Zap />, title: "Brand Assets", desc: "High-resolution cinematic shots and motion guidelines." }
          ].map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {asset.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{asset.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{asset.desc}</p>
              <div className="flex items-center gap-2 text-[#0099ff] font-bold text-sm uppercase tracking-widest">
                Download <Download className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press Releases List */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 tracking-tight">Recent Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((pr, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm hover:border-[#0099ff]/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group"
              >
                <div>
                  <div className="flex items-center gap-3 text-sm font-bold text-[#0099ff] mb-2">
                    <span className="px-3 py-1 bg-[#0099ff]/10 rounded-full">{pr.category}</span>
                    <span className="text-gray-400">&bull;</span>
                    <span className="text-gray-400 uppercase tracking-widest">{pr.date}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#0099ff] transition-colors">{pr.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#0099ff] group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 tracking-tight">Global Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCoverage.map((cover, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-gray-50 hover:bg-white hover:border-[#0099ff]/20 transition-all group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0099ff]">
                    {cover.type === "TV" ? <Tv className="w-5 h-5" /> : cover.type === "Online" ? <Globe className="w-5 h-5" /> : <Newspaper className="w-5 h-5" />}
                  </div>
                  <span className="font-bold text-gray-900">{cover.outlet}</span>
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-6 leading-tight">{cover.title}</h4>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                  {cover.date} <span className="mx-2">&bull;</span> {cover.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
