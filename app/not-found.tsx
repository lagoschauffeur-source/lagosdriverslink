"use client";

import { Home, Car, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#fafbfd] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/[0.03] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-xl mx-auto space-y-8 relative z-10">
        {/* 404 */}
        <motion.div
          className="text-[160px] md:text-[200px] font-black text-[#0099ff] leading-none"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          404
        </motion.div>

        <div className="inline-flex items-center gap-2 bg-[#0099ff]/[0.06] text-[#0099ff] px-5 py-2.5 rounded-full font-semibold text-sm">
          <AlertTriangle className="w-4 h-4" /> Driver Not Found
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">This page took a wrong turn</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <motion.div
          className="h-24 flex items-center justify-center"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/car-driver-bro.svg" alt="Car" width={200} height={96} className="h-24 w-auto opacity-60" />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-8 py-4 bg-[#0099ff] text-white rounded-2xl font-semibold hover:bg-[#0088ee] transition-all shadow-[0_4px_16px_rgba(0,153,255,0.3)] flex items-center justify-center gap-2">
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <Link href="/hire" className="px-8 py-4 border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <Car className="w-5 h-5" /> Hire a Driver
          </Link>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          {[
            { name: "Contact", href: "/contact" },
            { name: "Recruit", href: "/recruit" },
            { name: "About", href: "/about" },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="text-[#0099ff] hover:text-[#007acc] transition-colors font-medium text-sm">
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
