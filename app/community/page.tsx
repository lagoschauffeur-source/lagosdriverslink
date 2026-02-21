/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  MessageCircle,
  Calendar,
  Award,
  Heart,
  Globe,
  Star,
  TrendingUp,
  ArrowRight,
  Zap,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community | Lagos Drivers Link",
  description: "Join the Lagos Drivers Link community. Connect with drivers, share experiences, get support, and be part of Nigeria's premier transportation network.",
};

export default function CommunityPage() {
  const communityStats = [
    { number: "2.5k+", label: "Elite Chauffeurs", icon: <Users className="h-6 w-6" /> },
    { number: "50k+", label: "Monthly Miles", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "4.9/5", label: "Client Equity", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Desk Support", icon: <Globe className="h-6 w-6" /> },
  ];

  const upcomingEvents = [
    { title: "Monthly Chauffeur Gala", date: "FEB 15, 2025", loc: "Victoria Island", desc: "Network with the top 1% of the fleet and share operational insights." },
    { title: "Defensive Tech Summit", date: "FEB 22, 2025", loc: "Ikeja Hub", desc: "Advanced training on SecureMile AI and new protocol deployments." },
    { title: "Etiquette & Excellence", date: "MAR 01, 2025", loc: "Lekki Phase 1", desc: "Mastering the art of white-glove service in the corporate world." },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-8 uppercase tracking-widest">The Fleet Network</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            More than <br /><span className="text-[#0099ff]">Drivers. Community.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Join Africa's most elite chauffeur ecosystem. A place to connect, evolve, and redefine the standards of professional mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/hire" className="bg-[#0099ff] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20">
              Join the Fleet
            </Link>
            <Link href="#events" className="border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {communityStats.map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center group hover:border-[#0099ff]/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2 font-mono">{stat.number}</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture & Features */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
            <Image
              src="/smiling-cheerful-young-adult-african-600nw-1850821510.webp"
              alt="Community Life"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none">Shared Vision. <br /><span className="text-[#0099ff]">Shared Success.</span></h2>
            <div className="space-y-8">
              {[
                { icon: <MessageCircle className="w-6 h-6" />, title: "The High-Road Forum", desc: "Private channel for vetting tips, route hacks, and peer mentorship." },
                { icon: <Award className="w-6 h-6" />, title: "Recognition Loop", desc: "Monthly badges and financial bonuses for the highest-rated service leads." },
                { icon: <Zap className="w-6 h-6" />, title: "Direct Hub Support", desc: "24/7 dedicated operational desk for community safety and rapid response." }
              ].map((feat, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-xl">{feat.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Feed Section */}
      <section id="events" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight">The Calendar</h2>
              <p className="text-gray-500 font-medium">Sync with the pulse of the network.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#0099ff] font-black uppercase text-xs tracking-widest bg-[#0099ff]/10 px-6 py-3 rounded-full hover:bg-[#0099ff]/20 transition-all">
              Export to Calendar <Calendar className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((ev, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all group">
                <div className="text-[#0099ff] text-sm font-black mb-6 uppercase tracking-widest">{ev.date}</div>
                <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-[#0099ff] transition-colors">{ev.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{ev.desc}</p>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Globe className="w-4 h-4" /> {ev.loc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Accordion-style */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-900 text-white rounded-[5rem] mx-6 md:mx-12 lg:mx-24 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099ff]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter">The <span className="text-[#0099ff]">Protocol.</span></h2>
              <div className="space-y-6">
                {[
                  "Uncompromising professional conduct at every touchpoint.",
                  "Radical transparency in reporting and peer reviews.",
                  "Adherence to the SecureMile safety frameworks.",
                  "Commitment to ongoing offensive/defensive training."
                ].map((g, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-[#0099ff] flex-shrink-0" />
                    <span className="font-bold text-gray-300">{g}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5">
              <Image src="/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg" alt="Guidelines" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-gray-900 mb-12">Claim Your <span className="text-[#0099ff]">Seat.</span></h2>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/hire" className="bg-[#0099ff] text-white px-12 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all shadow-2xl shadow-[#0099ff]/30">
            Join Community
          </Link>
          <Link href="/contact" className="border border-gray-200 text-gray-900 px-12 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">
            Request Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
