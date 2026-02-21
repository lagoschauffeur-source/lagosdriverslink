"use client";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Star, Zap, BadgeCheck, Car, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function DriverHeroPromo() {
  const clientImages = [
    "/Fanta_blog_2020-08-28-Traore-29-Edit-800x533.jpg",
    "/360_F_246149382_KHkt8Mw8pptlmVuiqmhavvHBC4SEqBu1.jpg",
    "/istockphoto-1081381240-612x612.jpg",
  ];

  return (
    <section className="bg-white py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">Premium Professional Service</span>
              <h2 className="text-5xl lg:text-8xl font-black text-gray-900 leading-none tracking-tighter">
                Trusted <br /><span className="text-blue-600">Chauffeur</span> <br />Solutions.
              </h2>

              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                Experience the gold standard in professional driving. Our <span className="text-blue-600 font-black">vetted, experienced</span> chauffeurs deliver uncompromising reliability and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, text: "Thorough Background Checks" },
                { icon: <Star className="h-5 w-5" />, text: "Top-Rated Service Quality" },
                { icon: <Clock className="h-5 w-5" />, text: "24/7 Dedicated Support" },
                { icon: <BadgeCheck className="h-5 w-5" />, text: "Verified Professional History" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-600/10 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-900 leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/hire" className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl text-[15px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3 group">
                Hire a Driver <Zap className="h-4 w-4 fill-current group-hover:scale-125 transition-transform" />
              </Link>
              <Link href="/operators" className="px-10 py-5 bg-white border border-gray-100 text-gray-900 font-black rounded-2xl text-[15px] hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                Meet our Drivers <Car className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex -space-x-3">
                {clientImages.map((img, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                    <Image src={img} alt={`Client ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-lg font-black text-gray-900 leading-none mb-1">200+</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Active monthly clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Interactive Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[5rem] overflow-hidden shadow-3xl border-8 border-slate-50 group">
              <Image
                src="/professional-driver-service.webp"
                alt="Professional driver"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Live Status Badge */}
            <div className="absolute -bottom-8 -left-8 bg-gray-950 text-white p-8 rounded-[3rem] shadow-3xl border border-white/10 z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  <div className="relative w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Live Operations Tracking</span>
              </div>
              <div className="text-4xl font-black text-white leading-none mb-2">47</div>
              <div className="text-xs font-bold text-[#0099ff] uppercase tracking-widest">Active Chauffeurs Online</div>
            </div>

            {/* Floating Protocol Icon */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0099ff] rounded-3xl shadow-2xl flex items-center justify-center text-white rotate-12 hover:rotate-0 transition-all duration-500">
              <Shield className="w-10 h-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
