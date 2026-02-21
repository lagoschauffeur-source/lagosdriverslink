"use client";

import {
  CheckCircle2,
  UserCheck,
  FileText,
  Clock,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Zap,
  Users,
  Search,
  MessageSquare
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: <FileText className="h-7 w-7" />,
      title: "Define Your Scope",
      description: "Specify your exact requirements—hours, vehicle type, and chauffeur expertise level. Our desk analyzes your logistical needs instantly.",
      image: "/professional-driver-service.webp",
    },
    {
      number: "02",
      icon: <Search className="h-7 w-7" />,
      title: "Elite Matching",
      description: "Our proprietary algorithm filters the top 3% of available chauffeurs who match your specific route and vehicle profile.",
      image: "/confident-professional-driver-side-view-600nw-2149539983.webp",
    },
    {
      number: "03",
      icon: <Handshake className="h-7 w-7" />,
      title: "The Handshake",
      description: "Review curated digital profiles. Conduct a virtual or physical interview to ensure a perfect cultural and professional fit.",
      image: "/smiling-cheerful-young-adult-african-600nw-1850821510.webp",
    },
    {
      number: "04",
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Verification Protocol",
      description: "We execute multi-layer vetting—criminal record indexing, health certification, and reference validation—before deployment.",
      image: "/close-portrait-happy-black-man-600nw-151566872.webp",
    },
    {
      number: "05",
      icon: <Zap className="h-7 w-7" />,
      title: "Onboarding Flow",
      description: "Digital documentation is finalized. Your designated chauffeur begins service with full 24/7 administrative oversight.",
      image: "/driver.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-8 uppercase tracking-widest leading-none">The Logistics Protocol</span>
            <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Streamlined <br /><span className="text-[#0099ff]">Intelligence.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              We've engineered the driver acquisition process to be seamless, secure, and rapid. From request to road in under 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Steps */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div className="text-7xl font-black text-[#0099ff] opacity-10 leading-none">{step.number}</div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight text-gray-900">{step.title}</h3>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="flex items-center gap-3 text-[#0099ff] font-bold">
                    <ArrowRight className="w-5 h-5" />
                    <span className="uppercase text-xs tracking-widest">Next Phase</span>
                  </div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative aspect-[4/3] w-full rounded-[4rem] overflow-hidden shadow-3xl border-4 border-slate-50"
              >
                <Image src={step.image} alt={step.title} fill className="object-cover" />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Advantages Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tight">The Platform Edge</h2>
            <p className="text-gray-500 font-medium">Why our methodology remains the industry standard.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck />, title: "3D Vetting", desc: "Digital, physical, and reference checks on every hire." },
              { icon: <MessageSquare />, title: "Handshake Guarantee", desc: "Interview as many as needed until it's a perfect fit." },
              { icon: <Zap />, title: "Rapid Turnaround", desc: "Most matches are finalized within 24-48 business hours." },
              { icon: <Users />, title: "Lifecycle Management", desc: "Ongoing payroll and performance overhead handled by us." }
            ].map((adv, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-black mb-3">{adv.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion-style Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tight">Technical Queries</h2>
            <p className="text-gray-500 font-medium">Deep diving into the operational specifics.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "What is the vetting depth?", a: "We index criminal history, medical fitness, reference validation, and perform a specialized driving skills assessment." },
              { q: "Can I swap a driver?", a: "Yes. Our replacement guarantee ensures you get a new vetted candidate within 48 hours if expectations aren't met." },
              { q: "Who handles the legalities?", a: "Lagos Drivers Link manages all contracts, payroll taxes, and health insurance for the chauffeurs on your behalf." },
              { q: "What about long-distance?", a: "Our elite tier chauffeurs are trained specifically for inter-state travel and overnight logistics." }
            ].map((faq, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-gray-100">
                <h4 className="text-xl font-black text-[#0099ff] mb-4">{faq.q}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-[4rem] p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0099ff]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-7xl font-black mb-12 tracking-tighter">Road Ready in Hours.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/hire" className="bg-[#0099ff] hover:bg-[#0088ee] py-5 px-12 rounded-2xl font-black transition-all shadow-xl shadow-[#0099ff]/20">
                Start Request
              </Link>
              <Link href="/contact" className="border border-white/10 hover:bg-white/5 py-5 px-12 rounded-2xl font-bold transition-all">
                Speak to Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
