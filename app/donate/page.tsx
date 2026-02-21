/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  Globe,
  CheckCircle2,
  Star,
  Shield,
  Award,
  Zap,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | Lagos Drivers Link",
  description: "Support Lagos Drivers Link and help us improve transportation services in Lagos. Your donation helps us provide better services, support drivers, and expand our reach.",
};

export default function DonatePage() {
  const donationCauses = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Driver Welfare Fund",
      desc: "Emergency financial aid and insurance support for independent drivers in our fleet.",
      impact: "Protected 500+ families this fiscal year",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety R&D",
      desc: "Developing next-gen AI monitoring and rapid emergency response systems.",
      impact: "Reduced incident rates by 42%",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Underserved Expansion",
      desc: "Bringing premium vetting and safe mobility to developing outer-Lagos zones.",
      impact: "Active in 12 development communities",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Tech Infrastructure",
      desc: "Building the digital backbone for Africa's most transparent mobility network.",
      impact: "Scaling for 1M+ trips annually",
    },
  ];

  const impactStats = [
    { num: "₦15M+", label: "Capital Deployed", icon: <Heart className="h-6 w-6" /> },
    { num: "1.2k+", label: "Active Chauffeurs", icon: <Users className="h-6 w-6" /> },
    { num: "45+", label: "Safety Protocols", icon: <Shield className="h-6 w-6" /> },
    { num: "98%", label: "Trust Index", icon: <Star className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold uppercase tracking-widest">Impact Fund</span>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
                Fueled by <br /><span className="text-[#0099ff]">Community.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                Your contribution directly funds driver welfare, safety tech, and community mobility expansion. Every Naira accelerates our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-[#0099ff] text-white px-12 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20 flex items-center justify-center gap-3">
                  Donate Now
                  <Heart className="w-5 h-5" />
                </button>
                <Link href="#impact" className="border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center">
                  View Live Impact
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white">
              <Image
                src="/smiling-cheerful-young-adult-african-600nw-1850821510.webp"
                alt="Community Support"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section id="impact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center group hover:border-[#0099ff]/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.num}</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Causes Matrix */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tight">Deployment Pillars</h2>
            <p className="text-gray-500 font-medium">Transparent distribution across four key mobility vectors.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {donationCauses.map((cause, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-gray-50 hover:bg-white hover:border-[#0099ff]/20 hover:shadow-2xl transition-all group">
                <div className="flex gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {cause.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black">{cause.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{cause.desc}</p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-[#0099ff]/[0.06] text-[#0099ff] text-xs font-black uppercase tracking-widest">
                      {cause.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Presets */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-900 text-white rounded-[5rem] mx-6 md:mx-12 lg:mx-24 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl lg:text-6xl font-black mb-16 tracking-tighter">Choose Your <span className="text-[#0099ff]">Impact Level</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { amt: "₦10,000", label: "Driver Micro-Grant", desc: "Covers one week of emergency fuel & welfare." },
              { amt: "₦50,000", label: "Satefy Uplift", desc: "Funds full diagnostic & vetting for 5 vehicles." },
              { amt: "₦250k+", label: "Community Catalyst", desc: "Sponsors mobility mapping for a new V.I. zone." }
            ].map((p, i) => (
              <button key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white hover:text-gray-900 transition-all group text-left">
                <div className="text-[#0099ff] text-3xl font-black mb-4 group-hover:text-[#0099ff]">{p.amt}</div>
                <div className="text-lg font-black mb-2">{p.label}</div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-gray-500">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">Radical <span className="text-[#0099ff]">Transparency.</span></h2>
            <div className="space-y-8">
              {[
                "Audited annual impact reports published online",
                "0% platform fee on all driver welfare donations",
                "Direct verification of driver beneficiaries",
                "Tax-deductible receipts issued instantly"
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-6 h-6 rounded-full bg-[#0099ff] flex items-center justify-center text-white flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl">
            <Image src="/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg" alt="Transparency" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center">
        <Link href="/contact" className="inline-flex items-center gap-4 text-[#0099ff] font-black text-2xl group">
          Have questions about donating?
          <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
