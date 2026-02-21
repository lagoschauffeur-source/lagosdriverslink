"use client";

import Link from "next/link";
import { Mail, ArrowLeft, Key } from "lucide-react";
import { useState } from "react";
import { useToast, Toast } from "@/app/components/Toast";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const { trigger } = useToast();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!email) {
            trigger("error", "Please enter your email address.");
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSent(true);
            trigger("success", "Password reset link sent to your email!");
        } catch (error) {
            trigger("error", "Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Toast />
            <div className="w-full max-w-md mx-auto">
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/auth/login"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to sign in
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/[0.06] flex items-center justify-center mb-5">
                        <Key className="h-6 w-6 text-[#0099ff]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Forgot password?</h2>
                    <p className="text-gray-400 mt-1 text-sm">No worries, we&apos;ll send you reset instructions.</p>
                </div>

                {isSent ? (
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50 text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Check your email</h3>
                        <p className="text-sm text-gray-500 mb-6 font-medium">
                            We&apos;ve sent a password reset link to <span className="text-gray-900 font-bold">{email}</span>
                        </p>
                        <button
                            onClick={() => setIsSent(false)}
                            className="text-sm font-bold text-[#0099ff] hover:text-[#007acc] transition-colors"
                        >
                            Didn&apos;t receive the email? Click to retry
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0099ff]/20 focus:border-[#0099ff] transition-colors text-[15px]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-[#0099ff] hover:bg-[#0088ee] focus:outline-none focus:ring-2 focus:ring-[#0099ff]/30 transition-all duration-200 shadow-[0_4px_16px_rgba(0,153,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,153,255,0.4)] text-[15px] ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending instructions...
                                </span>
                            ) : (
                                "Reset password"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
