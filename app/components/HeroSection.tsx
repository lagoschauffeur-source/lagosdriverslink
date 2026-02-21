"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

const slides = [
  {
    title: "Your Trusted Chauffeur for Your Daily Commute",
    subtitle: "Experience stress-free travel with our pre-vetted, professional drivers tailored to your family and personal needs in Lagos.",
    image: "/Whisk_cto1gtyyqgn4kjm40inxedotuwy3qtlhr2yi1yy.jpeg",
    tagline: "Personal & Family Driving",
  },
  {
    title: "Premium Corporate Driving for Your Business",
    subtitle: "Reliable logistics for your executive team. We provide polished, professional chauffeurs who understand corporate standards.",
    image: "/confident-professional-driver-side-view-600nw-2149539983.webp",
    tagline: "Corporate & Executive Service",
  },
  {
    title: "Vetted Drivers for School & Special Occasions",
    subtitle: "Safety first. Our background-checked drivers ensure your loved ones get to their destination securely and on time.",
    image: "/young-black-handsome-cab-driver-600nw-1434428810.webp",
    tagline: "Safe & Reliable Transport",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[700px] h-[700px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content side */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest leading-none">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {slides[currentSlide].tagline}
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter">
                  {slides[currentSlide].title.split(" ").map((word, i, arr) => (
                    <span key={i} className={i >= arr.length - 2 ? "text-blue-600" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>

                <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-medium">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="/hire"
                    className="group px-10 py-5 bg-blue-600 text-white rounded-[24px] font-black text-base hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    Hire Your Driver
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/operators"
                    className="px-10 py-5 bg-gray-50 text-gray-900 rounded-[24px] font-bold text-base hover:bg-white hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center"
                  >
                    Explore Drivers
                  </a>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                  <div className="flex -space-x-3">
                    {[
                      "/Fanta_blog_2020-08-28-Traore-29-Edit-800x533.jpg",
                      "/360_F_246149382_KHkt8Mw8pptlmVuiqmhavvHBC4SEqBu1.jpg",
                      "/rose.jpeg"
                    ].map((img, i) => (
                      <div key={i} className="relative w-12 h-12 rounded-2xl border-4 border-white bg-blue-100 overflow-hidden shadow-sm">
                        <Image src={img} alt={`User ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-yellow-500 mb-0.5">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-sm font-bold text-gray-900">Trusted by 500+ Residents</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative w-full h-full"
              >
                <div className="w-full h-full rounded-[48px] overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Status Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-[32px] shadow-2xl border border-gray-50 max-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Ready Pool</span>
                  </div>
                  <div className="text-4xl font-black text-blue-600 leading-none">47+</div>
                  <p className="text-xs font-bold text-gray-500 mt-2">Vetted Drivers Available Today</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-12 -left-6 md:-left-12 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 hidden sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-none">Fully Verified</p>
                      <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase">Background Checked</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? "w-8 bg-blue-600" : "w-2.5 bg-gray-200"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
