"use client";

import { Briefcase, Shield, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CorporateServicesPage = () => {
  const corporateSolutions = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Executive Transportation",
      description: "Premium chauffeured services for your leadership team and VIP guests.",
      features: ["Luxury vehicles", "Professional drivers", "24/7 availability"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Shuttle",
      description: "Reliable daily transportation for your workforce across multiple locations.",
      features: ["Custom routes", "Real-time tracking", "Dedicated fleet"],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transport",
      description: "Discreet and protected movement for sensitive personnel and assets.",
      features: ["Armored options", "Trained personnel", "Confidentiality"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Event Transportation",
      description: "Seamless logistics for corporate events, conferences, and meetings.",
      features: ["Group coordination", "On-site management", "Flexible scheduling"],
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Airport Transfers",
      description: "Punctual and comfortable transfers to/from all major airports.",
      features: ["Flight tracking", "Meet & greet", "Luggage handling"],
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored programs designed for your specific business requirements.",
      features: ["Needs assessment", "Dedicated account manager", "Reporting"],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0099ff]/5 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/[0.02] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-6">
              For Business
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Corporate <span className="text-[#0099ff]">Mobility</span> Redefined
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Premium transportation solutions tailored for your business needs. Reliable, professional, and efficient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateSolutions.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-[#0099ff]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0099ff]/[0.06] flex items-center justify-center text-[#0099ff] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#0099ff] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#0099ff] font-bold group/link"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0099ff]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Elevate Your Business Logistics?
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Our team is ready to design a custom solution that meets your exact business requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                href="/contact"
                className="bg-[#0099ff] hover:bg-[#0088ee] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-[#0099ff]/20"
              >
                Contact Sales
              </Link>
              <Link
                href="tel:+2349032702233"
                className="border border-white/10 text-white hover:bg-white/5 font-bold py-4 px-10 rounded-2xl transition-all"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServicesPage;
