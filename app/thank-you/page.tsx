"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ChevronRight, Home, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, Suspense } from "react";
import { Notification, useNotification } from "../components/Notification";

export const dynamic = "force-dynamic";

const fadeInAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session = useSession();
  const authenticationStatus = session?.status ?? "loading";
  const { notification, showSuccess, showError, hideNotification } =
    useNotification();

  useEffect(() => {
    const success = searchParams.get("success");
    const requestId = searchParams.get("requestId");
    const processingTime = searchParams.get("processingTime");
    const error = searchParams.get("error");

    if (success === "true" && requestId) {
      showSuccess(
        "Request Submitted Successfully!",
        "Our team is now matching you with the perfect driver. You will receive a confirmation shortly.",
        { requestId, processingTime: processingTime || undefined }
      );
    } else if (success === "false" || error) {
      showError(
        "Request Error",
        error || "We encountered a minor issue. Please try again or contact support.",
        { error: error || undefined, processingTime: processingTime || undefined }
      );
    } else {
      showSuccess(
        "Request Confirmed!",
        "Your request is now in our system. Expect a call from our logistics team within 24 hours."
      );
    }
  }, [searchParams, showSuccess, showError]);

  const handleDashboardClick = (event: React.MouseEvent) => {
    if (authenticationStatus !== "authenticated") {
      event.preventDefault();
      router.push(`/auth/login?callbackUrl=${encodeURIComponent("/dashboard")}`);
    }
  };

  if (authenticationStatus === "loading") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#0099ff]/20 border-t-[#0099ff] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <Notification notification={notification} onClose={hideNotification} />

      <motion.div
        className="w-full max-w-5xl bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
      >
        {/* Left Side: Confirmation */}
        <div className="flex-1 p-12 md:p-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-24 h-24 rounded-3xl bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] mb-10 shadow-sm"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter leading-none">
            Excellent. <br /><span className="text-[#0099ff]">Confirmed.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-sm leading-relaxed font-medium">
            Your request has been securely received by our logistics desk.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md">
            <Link
              href="/"
              className="flex-1 bg-gray-900 text-white px-8 py-5 rounded-2xl font-black hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link
              href="/dashboard"
              onClick={handleDashboardClick}
              className="flex-1 border border-gray-200 text-gray-900 px-8 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              {authenticationStatus === "authenticated" ? "Dashboard" : "Go to Login"}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Process */}
        <div className="flex-1 bg-slate-50 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0099ff]/[0.03] rounded-full blur-[80px]" />
          <div className="relative z-10 space-y-12">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Our Process Now:</h3>
            <div className="space-y-10">
              {[
                { title: "Matching", desc: "Our AI selects the highest-rated driver for your route profile." },
                { title: "Verification", desc: "A dispatcher manually double-checks vehicle safety logs." },
                { title: "Activation", desc: "You'll receive a final handshake call to confirm start time." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0099ff] font-black flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-gray-900">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 flex items-center gap-4 text-gray-400">
              <ShieldCheck className="w-6 h-6 text-[#0099ff]" />
              <p className="text-xs font-bold uppercase tracking-widest leading-none">Secured by DrivePro Protocol</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#0099ff]/20 border-t-[#0099ff] rounded-full animate-spin" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
