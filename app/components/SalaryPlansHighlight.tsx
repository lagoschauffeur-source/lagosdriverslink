"use client";

import { Wallet, Calendar, Clock, Shield, BadgeCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function SalaryPlansHighlight() {
  const plans = [
    { title: "Daily Chauffeur", amount: "₦30k", subtitle: "Per shift", icon: <Clock className="w-5 h-5" />, popular: false },
    { title: "Weekdays (M-F)", amount: "₦195k", subtitle: "Standard", icon: <Calendar className="h-5 w-5" />, popular: false },
    { title: "Extended (M-S)", amount: "₦230k", subtitle: "Gold Cover", icon: <Calendar className="h-5 w-5" />, popular: true },
    { title: "Full Week (M-S)", amount: "₦250k", subtitle: "Elite Tier", icon: <Calendar className="h-5 w-5" />, popular: false },
    { title: "VIP Specialist", amount: "₦335k", subtitle: "Tactical", icon: <Shield className="h-5 w-5" />, popular: false },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black bg-blue-50 px-4 py-2 rounded-full mb-6 uppercase tracking-widest leading-none">
              <Wallet className="w-3.5 h-3.5" /> Transparent Pricing
            </span>
            <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Driver <span className="text-blue-600">Salaries.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
              We ensure fair, competitive compensation for every driver based on their experience and commitment to your safety.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Daily Driver", amount: "₦30k", subtitle: "Per Day", icon: <Clock className="w-5 h-5" />, popular: false },
            { title: "Standard (M-F)", amount: "₦195k", subtitle: "Monthly", icon: <Calendar className="h-5 w-5" />, popular: false },
            { title: "Premium (M-S)", amount: "₦230k", subtitle: "Most Trusted", icon: <Calendar className="h-5 w-5" />, popular: true },
            { title: "Professional (M-S)", amount: "₦250k", subtitle: "Full-Time", icon: <Calendar className="h-5 w-5" />, popular: false },
            { title: "Elite Executive", amount: "₦335k", subtitle: "Specialized", icon: <Shield className="h-5 w-5" />, popular: false },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-[3rem] p-8 bg-white border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden ${p.popular ? "border-blue-600/30 shadow-2xl" : "border-gray-100"}`}
            >
              {p.popular && (
                <div className="absolute top-0 right-0 p-4 bg-blue-50 rounded-bl-3xl">
                  <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
                </div>
              )}

              <div className="space-y-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {p.icon}
                </div>

                <div>
                  <h3 className="text-sm font-black text-gray-900 mb-1 leading-none">{p.title}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">{p.subtitle}</p>
                </div>

                <div className="pt-6 border-t border-gray-50">
                  <div className="text-3xl font-black text-blue-600 leading-none mb-1 group-hover:scale-110 transition-transform origin-left">{p.amount}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Base Salary</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-4 rounded-full bg-slate-50 border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0099ff]">
              <BadgeCheck className="w-4 h-4" />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pr-4">
              All salary bands include <span className="text-gray-900">Health & Insurance Premium</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
