"use client";

import { ShieldCheck, AlertCircle, CheckCircle2, X, Info, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatNgn, placementProcessingFees } from "@/lib/constants/pricing";

export default function ProcessingFeesHighlight() {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  const plans = [
    {
      name: "Managed Service Plan",
      fee: formatNgn(placementProcessingFees.managedService),
      bullets: [
        "LagosDriversLink handles all HR administration",
        "Driver remains our qualified staff",
        "Includes full training & verification",
        "Replacement at subsidized fee",
      ],
      note: "For worry-free corporate driver management",
      popular: true,
      detailedInfo: `Under this service model, LagosDriversLink handles all HR administration for your assigned driver, ensuring complete personnel management without any administrative burden on your organization.

Complete HR Oversight — LagosDriversLink manages all human resources matters including salary processing, statutory payments, benefits administration, and personnel records.

Qualified Staff Retention — The assigned driver remains our qualified staff member throughout the contract period.

Comprehensive Training & Verification — Every driver undergoes comprehensive training and verification processes including background checks, security clearances, skill assessments, periodic training, reverification, address confirmation, and guarantor verification.

Flexible Replacement Policy — Should replacement be necessary, we provide qualified substitutes at a subsidized fee.`,
    },
    {
      name: "Direct Employment Plan",
      fee: formatNgn(placementProcessingFees.directEmployment),
      bullets: [
        "Driver becomes your direct employee",
        "Full background audit documentation",
        "Complete control over driver management",
        "Verified & background-checked",
      ],
      note: "For those wanting complete employment control",
      popular: false,
      detailedInfo: `This plan provides a verified driver to individuals and companies who want complete control over the welfare of the driver. This is a one-off service where the driver subsequently becomes your direct employee.

Cost: A one-off service charge of ${formatNgn(placementProcessingFees.directEmployment)} to be paid before deployment. You get 2 drivers to select from. The background check details and personal data of the selected driver will be transferred to you.

Background check details include:
• Driver Proof of Address
• Driver Employment History Check
• NIN verification
• Guarantor Checks

You are entitled to 1 free replacement within the first month after selecting a driver.`,
    },
  ];

  return (
    <section className="bg-[#fafbfd] py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-24">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black bg-blue-50 px-4 py-2 rounded-full mb-6 uppercase tracking-widest leading-none">
              <AlertCircle className="w-3.5 h-3.5" /> Simple One-Time Fees
            </span>
            <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-4">
              Getting <span className="text-blue-600">Started.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              These are one-time processing fees for vetting and matching your driver. Chauffeur salaries are paid separately.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[3.5rem] p-12 bg-white border transition-all duration-300 relative group overflow-hidden ${p.popular
                ? "border-blue-600/30 shadow-2xl"
                : "border-gray-100 hover:border-blue-600/20 shadow-sm hover:shadow-xl"
                }`}
            >
              {p.popular && (
                <div className="absolute top-0 right-0 py-2 px-10 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest -rotate-0 rounded-bl-[2rem]">
                  Most Popular
                </div>
              )}

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{p.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-blue-600">{p.fee}</span>
                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Processing Fee</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-50">
                  {p.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-500 font-bold text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest mb-8">{p.note}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedModal(idx)}
                      className="flex-1 py-4 text-xs font-black text-blue-600 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest"
                    >
                      <Info className="w-4 h-4" /> Why this plan?
                    </button>
                    <Link href="/hire" className="flex-1 py-4 text-xs font-black bg-gray-900 text-white rounded-2xl hover:bg-black transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-center">
                      Select <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-950/60 backdrop-blur-md z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[4rem] max-w-xl w-full max-h-[85vh] overflow-hidden shadow-3xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-10 lg:p-14 overflow-y-auto max-h-[85vh] space-y-12">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Plan Details</span>
                    <h3 className="text-3xl font-black text-gray-900">{plans[selectedModal].name}</h3>
                    <p className="text-blue-600 text-2xl font-black">{plans[selectedModal].fee}</p>
                  </div>
                  <button onClick={() => setSelectedModal(null)} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-6 text-gray-500 font-medium text-[15px] leading-relaxed whitespace-pre-line border-t border-gray-100 pt-10">
                  {selectedModal === 0 ? (
                    `Our Managed Service is the ultimate worry-free experience for your personal or business logistics.

Full HR Management — We take care of everything. From salary processing and benefits to all administrative records, you don't have to lift a finger.

Qualified Staff — The driver is a member of our trusted team. We handle their career growth, training, and welfare.

Continuous Training — Every driver in this plan receives ongoing support, background re-verifications, and skills training to maintain our elite standards.

Seamless Replacements — If you ever need a change or your driver is unavailable, we provide a qualified substitute immediately.`
                  ) : (
                    `The Direct Employment plan is perfect if you want to be the primary manager of your driver's welfare.

One-Off Matching — We find you the best talent, and they become a direct member of your household or team.

Verified & Audited — You receive a complete portfolio of the driver's background, including identity verification, employment history, and guarantor checks.

Personal Control — You manage the driver's daily schedule and compensation directly after the initial placement.

Safety Guarantee — We ensure every candidate is thoroughly vetted before you even meet them.`
                  )}
                </div>

                <button
                  onClick={() => setSelectedModal(null)}
                  className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-[2rem] transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3 group"
                >
                  I understand this plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
