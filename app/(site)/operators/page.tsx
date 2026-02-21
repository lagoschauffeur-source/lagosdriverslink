"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  BadgeCheck,
  Clock,
  Star,
  MapPin,
  Award,
  Car,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function DriversPage() {
  const stats = [
    {
      value: "1000+",
      label: "Verified Drivers",
      icon: <BadgeCheck className="h-7 w-7" />,
      description: "Professionally trained beyond standards",
    },
    {
      value: "24/7",
      label: "Availability",
      icon: <Clock className="h-7 w-7" />,
      description: "Round-the-clock logistical support",
    },
    {
      value: "4.9",
      label: "Client Rating",
      icon: <Star className="h-7 w-7" />,
      description: "Based on verified trip feedback",
    },
    {
      value: "50+",
      label: "Zones Covered",
      icon: <MapPin className="h-7 w-7" />,
      description: "Across Lagos and major cities",
    },
  ];

  const features = [
    {
      title: "Radical Vetting",
      description: "Multi-layer verification process including criminal history and reference checks.",
      icon: <ShieldCheck className="h-6 w-6" />,
      details: ["Criminal profiling", "KYC Verification", "Reference validation", "Address mapping"],
    },
    {
      title: "Elite Training",
      description: "Beyond driving: customer excellence and defensive road management training.",
      icon: <BadgeCheck className="h-6 w-6" />,
      details: ["Defensive training", "Elite etiquette", "Emergency response", "Route AI"],
    },
    {
      title: "Logistics Fleet",
      description: "Modern, specialized vehicles for every individual or corporate requirement.",
      icon: <Car className="h-6 w-6" />,
      details: ["Luxury sedans", "Secure logistics", "Group shuttles", "Specialized cabs"],
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-[#0099ff]/10 rounded-full px-6 py-2 mb-8">
              <Zap className="h-4 w-4 text-[#0099ff]" />
              <span className="text-[#0099ff] text-sm font-bold tracking-wide uppercase">Elite Driver Network</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 text-gray-900 tracking-tighter leading-none">
              The <span className="text-[#0099ff]">Gold</span> Standard <br className="hidden md:block" /> of Chauffeurs
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed">
              Access 1,000+ verified, elite-trained drivers ready to serve across Lagos. Uncompromising quality in every mile.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/hire" className="bg-[#0099ff] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20">
                Request a Driver
              </Link>
              <button className="border border-gray-200 text-gray-900 px-12 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                Our Standards
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#0099ff]/20 hover:shadow-xl transition-all"
            >
              <div className="text-[#0099ff] mb-6 w-12 h-12 rounded-2xl bg-[#0099ff]/[0.06] flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <h4 className="text-[#0099ff] font-bold text-sm uppercase tracking-widest mb-3">{stat.label}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-6xl font-black text-gray-900 tracking-tight">Vetted Beyond Compare</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{feature.description}</p>
                <div className="space-y-3">
                  {feature.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0099ff]" />
                      {d}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Modern Layout */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {[
            {
              title: "Executive Chauffeurs",
              desc: "Polished, professional drivers for corporate leadership and high-net-worth clients.",
              img: "/professional-driver-service.webp",
              reverse: false
            },
            {
              title: "Daily Support",
              desc: "Steady, reliable hands for your family's daily commute and school runs.",
              img: "/confident-professional-driver-side-view-600nw-2149539983.webp",
              reverse: true
            },
            {
              title: "Logistics Elite",
              desc: "Precision driving for high-value logistics and business equipment transport.",
              img: "/young-black-handsome-cab-driver-600nw-1434428810.webp",
              reverse: false
            }
          ].map((cat, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${cat.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <h3 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">{cat.title}</h3>
                <p className="text-xl text-gray-500 leading-relaxed">{cat.desc}</p>
                <Link href="/hire" className="inline-flex items-center gap-3 text-[#0099ff] font-bold text-lg group">
                  Book This Category
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="flex-1 relative aspect-[4/3] w-full rounded-[4rem] overflow-hidden shadow-2xl">
                <Image src={cat.img} alt={cat.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099ff]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-7xl font-black mb-12 tracking-tighter">Your Elite Driver <br /> is One Click Away</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Link href="/hire" className="flex-1 bg-[#0099ff] hover:bg-[#0088ee] py-5 rounded-2xl font-bold transition-all shadow-2xl">
                Hire Now
              </Link>
              <Link href="/contact" className="flex-1 border border-white/10 hover:bg-white/5 py-5 rounded-2xl font-bold transition-all">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
