"use client";

import {
  Shield,
  AlertTriangle,
  Ambulance,
  Camera,
  Award,
  CheckCircle2,
  BadgeCheck,
  Car,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const SafetyPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] mx-auto mb-8">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Safety <span className="text-[#0099ff]">Without</span> Compromise
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              At Lagos Drivers Link, safety is the foundation of every mile journey. We protect what matters most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Vehicle Integrity",
                description: "Rigorous daily maintenance and weekly multi-point inspections on all network vehicles.",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Elite Training",
                description: "Continuous professional development and defensive driving certification for all drivers.",
              },
              {
                icon: <Ambulance className="w-7 h-7" />,
                title: "Rapid Response",
                description: "24/7 emergency coordination and real-time incident management protocols.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#0099ff]/20 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight leading-tight">Technology-First Safety</h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              We leverage cutting-edge tech to monitor, protect, and optimize every trip.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                "Real-time GPS Monitoring",
                "Advanced AI Dashcams",
                "In-App SOS Buttons",
                "Vehicle Health Telematics",
                "24/7 Roadside Network",
                "Encrypted Comms"
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#0099ff]" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <Image
              src="/safety-features.jpg"
              alt="Safety Technology"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-16 tracking-tight">Accredited Safety Standards</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-8 h-8" />, title: "ISO 9001:2015", desc: "Quality Management" },
              { icon: <Shield className="w-8 h-8" />, title: "DOT Compliant", desc: "Transit Standards" },
              { icon: <BadgeCheck className="w-8 h-8" />, title: "NSAF Certified", desc: "National Authority" },
              { icon: <CheckCircle2 className="w-8 h-8" />, title: "OHSAS 18001", desc: "Health & Safety" }
            ].map((cert, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-gray-50 hover:bg-white hover:border-[#0099ff]/20 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white text-[#0099ff] flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm font-medium">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;
