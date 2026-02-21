"use client";

import { Users, Globe, Award, BarChart2, ShieldCheck, Zap, Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "5,000+",
      label: "Drivers Placed",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "36",
      label: "States Reached",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      value: "100%",
      label: "Vetting Success",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "2023",
      label: "Since Inception",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description: "We operate with radical transparency and honesty in all our driver placements and client relations.",
      icon: <ShieldCheck className="w-6 h-6 text-[#0099ff]" />,
    },
    {
      title: "Excellence",
      description: "We set the highest benchmarks for driver training and professional conduct across Lagos.",
      icon: <Zap className="w-6 h-6 text-[#0099ff]" />,
    },
    {
      title: "Client-Centric",
      description: "Your safety and comfort are our North Star. We tailor solutions to your specific mobility needs.",
      icon: <Heart className="w-6 h-6 text-[#0099ff]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.03] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-semibold mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 tracking-tight">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099ff] to-[#00bbff]">Professional</span> Mobility in Lagos
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Lagos Drivers Link was born from a simple need: reliable, professional, and vetted drivers who understand the soul of the city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-[#0099ff]/40">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Our Mission</h2>
                <p className="text-xl text-gray-500 leading-relaxed">
                  To revolutionize the driving industry in Nigeria by providing a seamless, trusted, and professional bridge between elite drivers and discerning clients.
                </p>
              </div>
              <div className="grid gap-6">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-50 hover:border-[#0099ff]/20 hover:bg-[#0099ff]/[0.02] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#0099ff]/[0.06] flex items-center justify-center flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{v.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src="/about-mission.jpg"
                alt="Lagos Drivers Link Mission"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0099ff]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement - Full Width */}
      <section className="py-24 px-6 bg-[#0099ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-6">Our Vision</h2>
          <blockquote className="text-2xl md:text-4xl font-black text-white leading-tight">
            "To become Africa&apos;s most trusted mobility partner, setting the gold standard for professionalism, safety, and reliability in every journey."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
