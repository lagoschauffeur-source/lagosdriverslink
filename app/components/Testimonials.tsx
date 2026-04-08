"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star, ShieldCheck, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Tehilah Adekunle",
    role: "Hospitality Business Owner",
    quote: "For my business, reliability is very important. My driver is always on time, respectful, and handles Lagos traffic very well.",
    photo: "/Fanta_blog_2020-08-28-Traore-29-Edit-800x533.jpg",
    rating: 5
  },
  {
    name: "Emmanuel Kalu",
    role: "Executive Director",
    quote: "It is hard to find a driver who understands executive work, but Lagos Drivers Link made it easy. Our driver is calm, discreet, and very professional.",
    photo: "/360_F_246149382_KHkt8Mw8pptlmVuiqmhavvHBC4SEqBu1.jpg",
    rating: 5
  },
  {
    name: "Tolulope Adebayo",
    role: "Fleet Operations Manager",
    quote: "Their driver checks are thorough. We saved time and cost, and our trips are now safer and better organized.",
    photo: "/rose.jpeg",
    rating: 5
  },
  {
    name: "Chinedu Okoro",
    role: "Chief Medical Consultant",
    quote: "After long hospital shifts, I do not have strength to drive in traffic. My driver handles the road well, so I can rest on my way home.",
    photo: "/istockphoto-1081381240-612x612.jpg",
    rating: 5
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrevious = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-white py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest leading-none">What Our Clients Say</span>
            <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Trusted by People <br /><span className="text-blue-600">Across Lagos.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
              We are proud of every driver we place. See what Lagos families and businesses are saying about our service.
            </p>
            <div className="flex gap-8 items-center pt-8 border-t border-gray-100">
              <div className="flex -space-x-3">
                {testimonials.map((test, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                    <Image src={test.photo} alt={test.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-blue-600 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Top Rated by Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Interactive Slider */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#0099ff]/[0.02] rounded-[4rem] blur-[60px] translate-y-10" />
            <div className="relative min-h-[440px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, x: direction === "right" ? 40 : -40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: direction === "right" ? -40 : 40 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="w-full"
                >
                  <div className="bg-white rounded-[4rem] p-10 lg:p-16 border border-gray-100 shadow-3xl hover:shadow-2xl transition-all duration-500 relative">
                    <div className="absolute top-12 right-12 opacity-5">
                      <Quote className="w-24 h-24 text-gray-900" />
                    </div>

                    <div className="relative z-10 space-y-10">
                      <div className="flex gap-2">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#0099ff] fill-current" />)}
                      </div>

                      <p className="text-2xl lg:text-3xl text-gray-700 font-black leading-tight tracking-tight">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-6 pt-10 border-t border-gray-50">
                        <div className="relative w-20 h-20 rounded-[2rem] overflow-hidden shadow-xl ring-4 ring-[#0099ff]/5">
                          <Image src={t.photo} alt={t.name} fill className="object-cover" />
                        </div>
                        <div className="space-y-1">
                          <div className="font-black text-gray-900 text-xl tracking-tight flex items-center gap-2">
                            {t.name} <BadgeCheck className="w-5 h-5 text-[#0099ff]" />
                          </div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Refined Navigation */}
              <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between pointer-events-none">
                <div className="flex gap-4 pointer-events-auto">
                  <button
                    onClick={handlePrevious}
                    className="w-14 h-14 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-[#0099ff] hover:border-[#0099ff]/20 shadow-sm hover:shadow-xl transition-all flex items-center justify-center group"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-14 h-14 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-[#0099ff] hover:border-[#0099ff]/20 shadow-sm hover:shadow-xl transition-all flex items-center justify-center group"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2 pointer-events-auto">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > index ? "right" : "left"); setIndex(i); }}
                      className={`h-2 rounded-full transition-all duration-500 ${i === index ? "bg-[#0099ff] w-12" : "bg-gray-200 hover:bg-gray-300 w-2"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
