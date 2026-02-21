/* eslint-disable react/no-unescaped-entities */
"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, Users, MapPin, Gift, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function EventDriversPage() {
  const eventTypes = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Weddings",
      description: "Elegant transportation for the bride, groom, and wedding party. Special wedding car decorations available.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Corporate Events",
      description: "Professional transportation for business meetings, conferences, and corporate gatherings.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Parties & Celebrations",
      description: "Reliable drivers for birthday parties, anniversaries, and other special celebrations.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Airport Pickups",
      description: "VIP airport transfers for important guests and business travelers.",
    },
  ];

  const features = [
    {
      title: "Event-Specific Planning",
      description: "Customized transportation plans tailored to your event timeline and requirements.",
    },
    {
      title: "Professional Attire",
      description: "Drivers dressed appropriately for your event - formal wear for weddings, business attire for corporate events.",
    },
    {
      title: "Flexible Scheduling",
      description: "Extended hours and flexible timing to accommodate your event schedule.",
    },
    {
      title: "Backup Vehicles",
      description: "Contingency plans with backup vehicles to ensure your event runs smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/[0.02] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-6">
                Special Occasions
              </span>
              <h1 className="text-4xl lg:text-7xl font-black mb-6 text-gray-900 tracking-tight leading-none">
                Elite <span className="text-[#0099ff]">Event</span> Drivers
              </h1>
              <p className="text-xl mb-10 text-gray-500 leading-relaxed max-w-xl">
                Make your special occasions unforgettable with our professional event drivers. From weddings to high-profile corporate summits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/hire"
                  className="bg-[#0099ff] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#0088ee] transition-all shadow-lg shadow-[#0099ff]/20 text-center"
                >
                  Book Event Driver
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-200 text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all text-center"
                >
                  Plan Your Event
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/young-black-handsome-cab-driver-600nw-1434428810.webp"
                alt="Professional Event Driver"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 tracking-tight text-gray-900">
            Perfect for Every Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] text-center border border-gray-50 hover:border-[#0099ff]/20 hover:bg-white transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] mb-6 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-gray-900">
                The Gold Standard in Event Logistics
              </h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-[#0099ff]/10 flex items-center justify-center flex-shrink-0 text-[#0099ff]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/close-portrait-happy-black-man-600nw-151566872.webp"
                alt="Happy Professional Driver"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto bg-[#0099ff] rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Make Your Event Unforgettable</h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
              Trust Lagos Drivers Link to provide professional, reliable transportation for your special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/hire"
                className="bg-white text-[#0099ff] px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl"
              >
                Book Your Driver
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                Discuss Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
