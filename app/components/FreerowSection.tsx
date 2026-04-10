"use client";

import { MapPin, CheckCircle2, ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  formatNgn,
  formatNgnThousandsK,
  placementProcessingFees,
} from "@/lib/constants/pricing";

export default function FreerowSection({
  heroTitle,
  heroSubtitle,
  ctaText = "Get started",
  ctaLink = "/hire",
}: {
  heroTitle: string;
  heroSubtitle: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  const serviceAreas = [
    "Ajah", "Ikeja", "Lekki", "Victoria Island", "Ikoyi", "Gbagada", "Surulere",
    "Yaba", "Maryland", "Magodo", "Ikorodu", "Eko Atlantic", "Amuwo Odofin",
    "Ilupaju", "Isolo", "Lagos Island", "Ogudu",
  ];

  const serviceHighlights = [
    "Thoroughly verified & background-indexed drivers",
    "Rapid placement within 3-10 business days",
    "Comprehensive HR management included",
    "Premium replacement guarantee",
  ];

  const packageOptions = [
    {
      title: "Managed Service Plan",
      price: formatNgn(placementProcessingFees.managedService),
      features: [
        "Full HR & Payroll administration",
        "Driver remains LDL qualified staff",
        "Ongoing training & verification",
        "Subsidized replacement support",
      ],
      bestFor: "Enterprise & Private Fleet Oversight",
    },
    {
      title: "Direct Employment Plan",
      price: formatNgn(placementProcessingFees.directEmployment),
      features: [
        "Driver becomes your direct employee",
        "Full background audit documentation",
        "Complete managerial control",
        "One-time specialized placement",
      ],
      bestFor: "Individual Employment Structure",
    },
  ];

  return (
    <section className="bg-white py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.01] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black bg-blue-50 px-4 py-2 rounded-full uppercase tracking-widest leading-none">
                Serving Lagos
              </span>
              <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
                {heroTitle.split(" ").map((word, i, arr) => (
                  <span key={i}>
                    {i >= arr.length - 2 ? (
                      <span className="text-blue-600">{word} </span>
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">{heroSubtitle}</p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                "Highly experienced & vetted professionals",
                "Fast matching and deployment",
                "Dedicated support for every driver",
                "Worry-free replacement guarantee",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-gray-900 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Link
                href={ctaLink}
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[15px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
              >
                {ctaText} <Zap className="w-4 h-4 fill-current" />
              </Link>
              <Link
                href="/hire"
                className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-black text-[15px] hover:bg-slate-50 transition-all border border-gray-100 flex items-center justify-center gap-3"
              >
                Talk to our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Logistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="bg-slate-50 rounded-[3rem] p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Service Areas</h3>
                  <p className="text-lg font-black text-gray-900">Across the City of Lagos</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-white text-gray-900 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-gray-50 hover:border-blue-600/30 hover:text-blue-600 hover:shadow-xl transition-all cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Managed Service Plan",
                  price: formatNgnThousandsK(placementProcessingFees.managedService),
                  features: ["Full HR & Payroll support", "Qualified LDL staff members", "Ongoing skills training", "Seamless replacement service"],
                  bestFor: "Families & Businesses",
                },
                {
                  title: "Direct Employment Plan",
                  price: formatNgnThousandsK(placementProcessingFees.directEmployment),
                  features: ["Driver joins your direct team", "Full background audit shared", "Complete personal control", "One-time expert matching"],
                  bestFor: "Private Households",
                },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h4 className="font-black text-gray-900 text-lg">{pkg.title}</h4>
                    </div>
                    <span className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-black tracking-tighter">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-500 font-medium list-none">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                        {f}
                      </li>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <Globe className="w-3.5 h-3.5" /> Best For: <span className="text-blue-600">{pkg.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
