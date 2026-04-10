"use client";

import type { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Shield, ChevronRight, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { driverPlans } from "@/lib/constants/driver-plans";
import {
  hireGridPlanIds,
  formatChauffeurRateDisplay,
  formatNgnThousandsK,
} from "@/lib/constants/pricing";
import type { DriverPlanId } from "@/lib/constants/driver-plans";

const planIcons: Record<Exclude<DriverPlanId, "vip">, ReactNode> = {
  daily: <Clock className="h-5 w-5" />,
  weekday: <Calendar className="h-5 w-5" />,
  "extended-weekday": <Calendar className="h-5 w-5" />,
  "full-week": <Calendar className="h-5 w-5" />,
};

export default function HirePlansSection() {
  const router = useRouter();

  const packages = hireGridPlanIds.map((id) => {
    const p = driverPlans[id];
    return {
      title: p.name,
      badge: p.scheduleBadge,
      salaryRange: formatChauffeurRateDisplay(id),
      features: [...p.features],
      planValue: id,
      description: p.description,
      icon: planIcons[id],
      popular: "hireGridPopular" in p && p.hireGridPopular === true,
    };
  });

  const stagger: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  const handlePlanSelect = (plan: string) => router.push(`/driver-request?plan=${plan}`);

  return (
    <section className="bg-[#fafbfd] py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-2 bg-[#0099ff]/10 text-[#0099ff] rounded-full text-xs font-black uppercase tracking-widest">Pricing Plans</span>
            <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Driver Plan <span className="text-[#0099ff]">Options.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Pick the plan that fits your schedule and budget.
            </p>
          </motion.div>
        </div>

        {/* 3-Step Process Clean Glass Style */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-20"
        >
          {[
            { t: "Choose a Plan", desc: "Pick what suits you" },
            { t: "Send Details", desc: "Tell us what you need" },
            { t: "Get Matched", desc: "Meet your driver" }
          ].map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gray-950 text-[#0099ff] font-black text-xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                {i + 1}
              </div>
              <p className="text-gray-900 font-black text-sm mb-1">{step.t}</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Plan Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative rounded-[3rem] p-10 bg-white border flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${pkg.popular ? "border-[#0099ff]/30 shadow-2xl scale-[1.02] z-10" : "border-gray-100"}`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-black bg-[#0099ff] text-white shadow-xl">
                  Most Popular
                </span>
              )}

              <div className="flex flex-col gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0099ff] group-hover:bg-[#0099ff] group-hover:text-white transition-all duration-500">
                  {pkg.icon}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-xl tracking-tight mb-1">{pkg.title}</h3>
                  <div className="text-[10px] text-[#0099ff] font-black uppercase tracking-widest leading-none">{pkg.badge}</div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="text-4xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-[#0099ff] transition-colors">{pkg.salaryRange}</div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{pkg.description}</p>

                <div className="space-y-3 pt-6 border-t border-gray-50">
                  {pkg.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0099ff] group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 font-bold text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handlePlanSelect(pkg.planValue)}
                className={`w-full py-5 rounded-[2rem] font-black text-sm flex items-center justify-center gap-2 transition-all duration-300 ${pkg.popular
                  ? "bg-[#0099ff] text-white shadow-2xl shadow-[#0099ff]/30 hover:bg-[#0088ee]"
                  : "bg-[#0099ff]/[0.05] text-[#0099ff] border border-transparent hover:border-[#0099ff]/20 hover:bg-white hover:shadow-xl"
                  }`}
              >
                Choose Plan <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Tactical Tier Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-950 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden group shadow-3xl"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.05] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="space-y-8 max-w-2xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
                  <Shield className="h-8 w-8 text-[#0099ff]" />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-5xl font-black tracking-tighter">Specialist Driver.</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[#0099ff] font-black text-2xl tracking-tight">
                      {formatNgnThousandsK(driverPlans.vip.baseRate)}/mo
                    </span>
                    <span className="px-3 py-1 bg-[#0099ff]/20 text-[#0099ff] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#0099ff]/30">Elite Tier</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Specially trained drivers for high-security movement, executive protection, and emergency situations.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Offensive Driving", "Security Procedures", "High-Asset Security", "First-Responder Certified"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0099ff]" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handlePlanSelect("vip")}
              className="px-14 py-7 bg-white text-gray-950 font-black rounded-[2.5rem] hover:bg-slate-50 transition-all shadow-3xl flex items-center gap-4 group/btn whitespace-nowrap"
            >
              <Sparkles className="h-6 w-6 text-[#0099ff] group-hover/btn:rotate-12 transition-transform" />
              Request Specialist
              <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
