/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Star,
  Handshake,
  TrendingUp,
  Users,
  Globe,
  Award,
  Target,
  ArrowRight,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships | Lagos Drivers Link",
  description: "Partner with Lagos Drivers Link to expand your business reach. Join our network of trusted partners and grow together in the transportation industry.",
};

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Driver Partners",
      description: "Join our elite network and access consistent high-margin opportunities with total flexibility.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Corporate Partners",
      description: "Scale your organization's mobility with our dedicated white-glove chauffeur solutions.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Tech Partners",
      description: "Integrate with our API to enhance mobility ecosystems through innovative tech solutions.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Strategic Partners",
      description: "Collaborate on high-impact initiatives to redefine transportation standards across Africa.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold uppercase tracking-widest">Global Partnerships</span>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
                Build the <br /><span className="text-[#0099ff]">Future</span> of Mobility.
              </h1>
              <p className="text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                Join our elite network of trusted partners. We're building Africa's most reliable driver ecosystem, and we want you with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="bg-[#0099ff] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20 flex items-center justify-center gap-3">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#partnership-types" className="border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center">
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white">
              <Image
                src="/smiling-cheerful-young-adult-african-600nw-1850821510.webp"
                alt="Business Partnership"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Types Grid */}
      <section id="partnership-types" className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipTypes.map((type, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0099ff]/20 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{type.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Content Block */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
            <Image
              src="/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg"
              alt="Partner Impact"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight">Scale with the <span className="text-[#0099ff]">Platform Advantage.</span></h2>
            <div className="space-y-8">
              {[
                { title: "Network Access", desc: "Instantly tap into Nigeria's largest pool of vetteed, certified professional chauffeurs." },
                { title: "Growth Capital", desc: "Benefit from co-marketing budgets and performance-based incentive programs." },
                { title: "Elite Tech Stack", desc: "Get full white-label access to our dispatching and analytics dashboard suite." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-xl">{benefit.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Matrix */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-900 text-white rounded-[5rem] mx-6 md:mx-12 lg:mx-24 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 tracking-tight">The Partner <span className="text-[#0099ff]">Maturity</span> Model</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="h-8 w-8" />, title: "Standards", desc: "Uncompromising commitment to premium service safety levels." },
              { icon: <TrendingUp className="h-8 w-8" />, title: "Vision", desc: "Long-term mindset focused on sustainable mobility expansion." },
              { icon: <Zap className="h-8 w-8" />, title: "Speed", desc: "Agile operational response times and logistical precision." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0099ff] mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black">{item.title}</h4>
                <p className="text-gray-400 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-gray-900 mb-12">Ready to <span className="text-[#0099ff]">Handshake?</span></h2>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/contact" className="bg-[#0099ff] text-white px-12 py-5 rounded-2xl font-black hover:bg-[#0088ee] transition-all shadow-2xl shadow-[#0099ff]/30">
            Apply for Partnership
          </Link>
          <Link href="mailto:partnerships@lagosdriverslink.com" className="border border-gray-200 text-gray-900 px-12 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">
            Direct Inquiries
          </Link>
        </div>
      </section>
    </div>
  );
}
