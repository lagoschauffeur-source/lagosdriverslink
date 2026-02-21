/* eslint-disable react/no-unescaped-entities */
"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Shield, Clock, Users, Car, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivateDriversPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified & Safe",
      description: "All drivers undergo rigorous background checks and safety training before placement.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock logistical support to ensure your journey is never interrupted.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Elite Chauffeurs",
      description: "Highly skilled professionals with extensive knowledge of Lagos road networks.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vehicle Care",
      description: "Expert drivers who take pride in maintaining your vehicle to the highest standards.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "The professional driver service has been exceptional. Punctual, courteous, and highly reliable for my daily Lekki commute.",
      rating: 5,
    },
    {
      name: "Michael Adebayo",
      role: "Entrepreneur",
      content: "Perfect for business errands. The drivers truly understand the pace of Lagos and always find the optimal routes.",
      rating: 5,
    },
    {
      name: "Grace Okafor",
      role: "Healthcare Professional",
      content: "A game-changer for my irregular schedule. I focus on my work while they handle the stress of Lagos traffic.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 text-[#0099ff] font-bold mb-6 bg-[#0099ff]/10 px-4 py-1.5 rounded-full text-sm">
                <Car className="w-4 h-4" /> Personal Transportation
              </div>
              <h1 className="text-4xl lg:text-7xl font-black mb-8 text-gray-900 tracking-tight leading-none">
                Elite <span className="text-[#0099ff]">Private</span> Chauffeurs
              </h1>
              <p className="text-xl mb-10 text-gray-500 leading-relaxed max-w-xl">
                Experience unparalleled comfort and safety. We provide professional, reliable private drivers for your personal daily needs in Lagos.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/hire"
                  className="bg-[#0099ff] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#0088ee] transition-all shadow-lg shadow-[#0099ff]/20 text-center"
                >
                  Hire a Private Driver
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-200 text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-3xl bg-slate-50 p-3">
                <Image
                  src="/professional-driver-service.webp"
                  alt="Professional Private Driver"
                  width={600}
                  height={450}
                  className="rounded-[2.5rem] shadow-2xl object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900 tracking-tight">The LDL Excellence</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We provide the highest quality private driver service with unmatched professionalism.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">Tailored Personal Driving</h2>
              <div className="space-y-8">
                {[
                  { title: "Daily Commute", desc: "Reliable transportation to work, school, or daily appointments." },
                  { title: "Special Events", desc: "Professional drivers for weddings, galas, and key business events." },
                  { title: "Airport Transfers", desc: "Seamless and stress-free transit to and from all Lagos terminals." },
                  { title: "City Tours", desc: "Experts who navigate Lagos traffic to get you where you need to be." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/confident-professional-driver-side-view-600nw-2149539983.webp"
                alt="Professional Driver in Lagos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#0099ff] text-[#0099ff]" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0099ff]/10 flex items-center justify-center font-bold text-[#0099ff]">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0099ff]/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Ready for a Premium Journey?</h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/hire"
                className="bg-[#0099ff] hover:bg-[#0088ee] px-12 py-4 rounded-2xl font-bold transition-all shadow-xl"
              >
                Book Your Driver
              </Link>
              <Link
                href="/contact"
                className="border border-white/10 hover:bg-white/5 px-12 py-4 rounded-2xl font-bold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
