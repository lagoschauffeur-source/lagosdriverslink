"use client";

import { Mail, ArrowRight, ShieldCheck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.03] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0099ff]/[0.03] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] mx-auto mb-8 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tighter leading-none">
            Reset <span className="text-[#0099ff]">Password</span>
          </h1>
          <p className="text-gray-500 font-medium">
            Enter your email to receive a secure reset link
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-2xl"
        >
          <form className="space-y-8">
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-bold text-gray-900 ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-gray-900 focus:ring-2 focus:ring-[#0099ff] transition-all placeholder-gray-400 font-medium"
                  placeholder="name@email.com"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0099ff] text-white font-black py-5 rounded-2xl hover:bg-[#0088ee] transition-all shadow-xl shadow-[#0099ff]/20 flex items-center justify-center gap-3"
            >
              Send Reset Link
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <Link
              href="/auth/login"
              className="text-[#0099ff] hover:text-[#0088ee] text-sm font-black flex items-center justify-center gap-2 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to login
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm font-medium">
            Struggling to gain access?{" "}
            <Link href="/help" className="text-[#0099ff] font-bold hover:underline">
              Contact support
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
