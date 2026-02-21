"use client";
import Link from "next/link";
import Image from "next/image";
import { Home, ChefHat, Baby, ShieldCheck, Clock, Star, Users, BadgeCheck, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function DomesticStaffPromo() {
  return (
    <section className="bg-[#fafbfd] py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">Premium Staffing</span>
          <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter">
            Trusted <span className="text-blue-600">Home Staff.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Find reliable, vetted household professionals tailored to your family's needs.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-5xl font-black text-gray-900 leading-none">
                The Gold <br /><span className="text-blue-600">Standard.</span>
              </h3>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Our vetting process goes deep. We perform background checks, address validation, and professional skill assessments to ensure your peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, text: "Detailed Background Checks" },
                { icon: <Star className="h-5 w-5" />, text: "Highly Rated Professionals" },
                { icon: <Clock className="h-5 w-5" />, text: "Flexible Arrangements" },
                { icon: <BadgeCheck className="h-5 w-5" />, text: "Verified Credentials" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-900 leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/hire?service=domestic"
                className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl text-[15px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
              >
                Request Staff <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/faq"
                className="px-10 py-5 bg-white border border-gray-100 text-gray-900 font-bold rounded-2xl text-[15px] hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                How it Works
              </Link>
            </div>
          </motion.div>

          {/* Right - Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/featured-02.webp" alt="Domestic staff" fill className="object-cover" />
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Premier Quality</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Home className="h-6 w-6" />, title: "Cleaners" },
                { icon: <ChefHat className="h-6 w-6" />, title: "Chefs" },
                { icon: <Baby className="h-6 w-6" />, title: "Nannies" },
              ].map((s, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6 text-center hover:scale-105 transition-all shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {s.icon}
                  </div>
                  <h4 className="font-black text-sm text-gray-900 leading-none">{s.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Detailed Benchmarks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck className="h-7 w-7" />, title: "Verified & Trusted", desc: "Thorough background checks and identity verification for every staff member." },
            { icon: <Clock className="h-7 w-7" />, title: "Flexible Options", desc: "Live-in or live-out arrangements tailored to your household needs." },
            { icon: <Star className="h-7 w-7" />, title: "Quality Guaranteed", desc: "Experienced professionals who are committed to high standards of service." },
          ].map((f, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                {f.icon}
              </div>
              <h4 className="font-black text-xl mb-3">{f.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
