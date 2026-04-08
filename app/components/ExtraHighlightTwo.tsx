"use client";

import { CheckCircle2, Star, ShieldCheck, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExtraHighlightTwo() {
  const bullets = [
    { icon: CheckCircle2, text: "Fully Vetted Professional Drivers" },
    { icon: Star, text: "4.9/5 Satisfaction Rating" },
    { icon: Clock, text: "24/7 Priority Availability" },
    { icon: BadgeCheck, text: "Verified Operational History" },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0099ff]/[0.03] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black bg-blue-50 px-4 py-2 rounded-full mb-8 uppercase tracking-widest leading-none">
              <ShieldCheck className="w-3.5 h-3.5" /> Trusted Standards
            </span>
            <h3 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8">
              Reliable Service You Can <br /><span className="text-blue-600">Trust.</span>
            </h3>
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-medium mb-12">
              We do not stop after matching. Our team supports you so your daily movement stays smooth. Every driver is trained to keep you safe and comfortable.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: CheckCircle2, text: "Drivers for personal and business use" },
                { icon: Star, text: "Loved by Lagos residents" },
                { icon: Clock, text: "Support for every trip" },
                { icon: BadgeCheck, text: "Verified driving records" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-600/10 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/hire"
              className="inline-flex px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[15px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 hover:-translate-y-1 gap-3 items-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-50 rounded-[4rem] p-4 lg:p-8 border border-gray-100 shadow-sm overflow-hidden">
              <div className="rounded-[3rem] overflow-hidden mb-8 shadow-2xl relative aspect-video">
                <Image
                  src="/young-black-handsome-cab-driver-600nw-1434428810.webp"
                  alt="Professional driver"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Fully Checked", sub: "Background Verification", icon: <ShieldCheck className="w-4 h-4 text-blue-600" /> },
                  { title: "Well Rated", sub: "Customer Satisfaction", icon: <Star className="w-4 h-4 text-blue-600" /> },
                  { title: "24/7 Support", sub: "Always Ready to Help", icon: <Clock className="w-4 h-4 text-blue-600" /> },
                  { title: "Certified", sub: "Verified Documents", icon: <BadgeCheck className="w-4 h-4 text-blue-600" /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-all group"
                  >
                    <div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                    <div className="text-gray-900 font-black text-sm">{item.title}</div>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Stat Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-50 max-w-[180px]">
              <div className="text-3xl font-black text-blue-600 leading-none mb-1">500+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">People matched with drivers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
