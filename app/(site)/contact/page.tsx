"use client";

import { Mail, Phone, MapPin, Clock, Send, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
              Let&apos;s Start a <span className="text-[#0099ff]">Conversation.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you! Reach out for inquiries, support, or to learn more about our professional driver network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email",
              info: "teams@lagosdriverslink.com",
              label: "Email our team",
              href: "mailto:teams@lagosdriverslink.com",
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Phone",
              info: "+234 903 270 2233",
              label: "Call us directly",
              href: "tel:+2349032702233",
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Location",
              info: "Lekki Phase 1, Lagos",
              label: "Get directions",
              href: "#",
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Hours",
              info: "8am - 6pm (WAT)",
              label: "Mon - Sat",
              href: "#",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#0099ff]/20 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/[0.06] text-[#0099ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-900 font-black text-sm mb-4 leading-tight">{item.info}</p>
              <div className="text-[#0099ff] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                {item.label} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Send Us a <span className="text-[#0099ff]">Service Request</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Have questions or special requests? Fill out the form and our elite support team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-50">
                  <div className="w-10 h-10 rounded-xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-gray-900">Encrypted & Secure Communication</p>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-50">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-gray-900">Direct WhatsApp Integration</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 ml-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-[#0099ff] transition-all placeholder-gray-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 ml-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-[#0099ff] transition-all placeholder-gray-400"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 ml-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-[#0099ff] transition-all placeholder-gray-400"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 ml-2">Message</label>
                  <textarea
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-gray-900 focus:ring-2 focus:ring-[#0099ff] transition-all placeholder-gray-400 h-40 resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0099ff] text-white font-bold py-5 rounded-2xl hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20 flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Card */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099ff]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Visit Our HQ</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                24a Bashorun R.I. Okusanya Ave, Lekki Phase 1, Lagos 105102, Nigeria
              </p>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">
                Open in Maps
              </button>
            </div>
            <div className="relative z-10 flex-1 w-full aspect-video rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <MapPin className="w-16 h-16 text-[#0099ff] animate-bounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
