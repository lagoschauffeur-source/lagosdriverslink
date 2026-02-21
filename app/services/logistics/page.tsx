"use client";

import { Truck, Package, Warehouse, Globe, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const LogisticsPage = () => {
  const logisticsFeatures = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Distribution",
      description: "Nationwide distribution network with real-time tracking and logistics optimization.",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Warehousing",
      description: "Secure storage facilities with advanced inventory management and fulfillment systems.",
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Fulfillment",
      description: "Precision end-to-end order processing, picking, and last-mile fulfillment.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Import/Export",
      description: "Seamless customs clearance and international shipping solutions across all borders.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Just-in-Time",
      description: "Clockwork delivery precision for manufacturing, retail, and e-commerce supply chains.",
    },
    {
      icon: <Truck className="w-8 h-8 text-[#0099ff]" />,
      title: "Cold Chain",
      description: "Advanced temperature-controlled logistics for sensitive pharmaceuticals and food products.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/[0.05] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-6">
              Supply Chain Solutions
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-none">
              The Engine of <span className="text-[#0099ff]">Logistics</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              End-to-end supply chain management for businesses across Nigeria. Punctuality at every mile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:border-[#0099ff]/20 hover:shadow-[0_4px_30px_rgb(0,0,0,0.03)] transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/[0.06] flex items-center justify-center text-[#0099ff] mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0099ff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                Logistics Powered by Data
              </h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed">
                Our proprietary logistics platform provides real-time visibility and control over your supply chain at every touchpoint.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Real-time GPS Tracking",
                  "Automated Inventory",
                  "Advanced Analytics",
                  "System Integration",
                  "Predictive Demand",
                  "Mobile Ops Center",
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-white font-bold gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-3xl bg-white/10 p-2 backdrop-blur-3xl"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/logistics-dashboard.jpg"
                  alt="Logistics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-16 tracking-tight">Industry Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Retail", icon: "🛍️" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "E-commerce", icon: "📦" },
              { name: "Agriculture", icon: "🌾" },
              { name: "Oil & Gas", icon: "⛽" },
              { name: "FMCG", icon: "🛒" },
              { name: "Construction", icon: "🏗️" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-gray-50 hover:bg-white hover:border-[#0099ff]/20 rounded-3xl p-8 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="font-bold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;
