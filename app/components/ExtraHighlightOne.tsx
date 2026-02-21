"use client";

import { Sparkles, CheckCircle2, Car, ShieldCheck, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExtraHighlightOne() {
  const bullets = [
    "Pre-vetted professional drivers",
    "Fast matching for your schedule",
    "Transparent fees and clear salaries",
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0099ff]/[0.02] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold bg-blue-50 px-4 py-1.5 rounded-full mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Why Our Clients Trust Us
            </span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-none">
              Your Safety is <br />Our Priority.
            </h3>
            <p className="text-gray-500 mt-6 text-lg font-medium max-w-md leading-relaxed">
              We don't just find you a driver; we find you a partner for the road. Every professional in our pool undergoes rigorous background checks and emotional intelligence training.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Highly experienced & vetted professionals",
                "Instant matching based on your location",
                "Fair pricing with no hidden charges",
              ].map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-900 font-bold text-base">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#f0f7ff] to-white rounded-3xl p-6 border border-gray-100">
              <div className="rounded-2xl overflow-hidden mb-5">
                <Image
                  src="/confident-professional-driver-side-view-600nw-2149539983.webp"
                  alt="Professional driver"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </div>

              <motion.div
                className="grid grid-cols-3 gap-2.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "Verified" },
                  { icon: <Car className="w-5 h-5" />, label: "Placement" },
                  { icon: <BadgeCheck className="w-5 h-5" />, label: "Qualified" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, label: "Trained" },
                  { icon: <Sparkles className="w-5 h-5" />, label: "Vetted" },
                  { icon: <Car className="w-5 h-5" />, label: "Ready" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center text-center hover:border-[#0099ff]/20 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="text-[#0099ff] mb-1.5">{item.icon}</div>
                    <span className="text-gray-700 text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
