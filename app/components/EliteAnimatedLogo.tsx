"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function EliteAnimatedLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { width: 120, height: 40, fontSize: 10 },
    md: { width: 200, height: 60, fontSize: 14 },
    lg: { width: 300, height: 90, fontSize: 20 },
  };

  const { width, height, fontSize } = sizes[size];
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStage((prev) => (prev + 1) % 3), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center" style={{ width, height }}>
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="skyBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0099ff" />
            <stop offset="100%" stopColor="#00bbff" />
          </linearGradient>
        </defs>
        <AnimatePresence mode="wait">
          <motion.g key={stage}>
            <motion.text
              x="50%" y="45%" textAnchor="middle" dominantBaseline="central"
              fill="url(#skyBlueGrad)" fontSize={fontSize} fontWeight="800" letterSpacing="0.08em"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            >
              {stage === 0 ? "LAGOS" : stage === 1 ? "DRIVERS" : "LINK"}
            </motion.text>
            <motion.text
              x="50%" y="80%" textAnchor="middle" dominantBaseline="central"
              fill="#94a3b8" fontSize={fontSize * 0.5} fontWeight="500" letterSpacing="0.15em"
              initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
            >
              {stage === 0 ? "PROFESSIONAL" : stage === 1 ? "YOU CAN TRUST" : "SINCE 2023"}
            </motion.text>
          </motion.g>
        </AnimatePresence>
      </svg>
    </div>
  );
}
