"use client";
import { Home, ChefHat, Baby, Scissors, Wrench, ArrowRight, Sparkles, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function OtherServicesPromo() {
  const services = [
    { icon: <Home className="h-6 w-6" />, title: "House Cleaners", description: "Elite residential maintenance and hygiene experts." },
    { icon: <ChefHat className="h-6 w-6" />, title: "Private Chefs", description: "Experienced culinary professionals for home & office." },
    { icon: <Baby className="h-6 w-6" />, title: "Professional Nannies", description: "Vetted and certified childcare specialists." },
    { icon: <Scissors className="h-6 w-6" />, title: "Bespoke Tailors", description: "Masters of fashion and garment modification." },
    { icon: <Wrench className="h-6 w-6" />, title: "Certified Techs", description: "Licensed mechanical and plumbing professionals." },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black bg-blue-50 px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              More Than Just Driving
            </span>
            <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Beyond the <span className="text-blue-600">Driver's Seat.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              We apply the same rigorous vetting to every essential household role. Enjoy the same peace of mind across your entire home staff.
            </p>
          </motion.div>
        </div>

        {/* Services Grid with high-end cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-slate-50 border border-gray-100 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Integrated CTA */}
        <div className="bg-gray-950 rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="flex justify-center gap-6 mb-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest bg-white/5 py-2 px-4 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4" /> Vetted
              </div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest bg-white/5 py-2 px-4 rounded-full border border-white/10">
                <Sparkles className="w-4 h-4" /> Professional
              </div>
            </div>
            <h3 className="text-3xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
              A Complete <span className="text-blue-600">Home Team.</span>
            </h3>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              Every professional in our network undergoes the same thorough background checks and reference validation we're known for.
            </p>
            <Link
              href="/hire?service=other"
              className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 hover:scale-105"
            >
              Request a Provider <ArrowRight className="h-5 w-5" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-16 pt-12 border-t border-white/5 opacity-50">
              {[
                { num: "500+", label: "Verified Professionals" },
                { num: "100%", label: "Satisfaction Rate" },
                { num: "24/7", label: "Client Support" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black text-white mb-1 leading-none">{s.num}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
