"use client";

import Link from "next/link";
import { Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast, Toast } from "@/app/components/Toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { trigger } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      trigger("error", "Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.ok) {
        trigger("success", "Logged in successfully! Redirecting...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        let errorMessage = "Invalid email or password.";

        if (res?.error) {
          if (res.error === "CredentialsSignin") {
            errorMessage = "Invalid email or password. Please check your credentials and try again.";
          } else if (res.error.includes("401") || res.error.includes("Unauthorized")) {
            errorMessage = "Invalid credentials. Please check your email and password.";
          } else if (res.error.includes("404")) {
            errorMessage = "Authentication service not found. Please try again later.";
          } else {
            errorMessage = res.error;
          }
        }

        trigger("error", errorMessage);
      }
    } catch (error) {
      const errorMessage = error instanceof Error
        ? `Login error: ${error.message}`
        : "Unable to connect to server. Please check your internet connection and try again.";
      trigger("error", errorMessage);
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
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/[0.06] flex items-center justify-center mb-5">
            <Mail className="h-6 w-6 text-[#0099ff]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-gray-400 mt-1 text-sm">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 pr-12 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0099ff]/20 focus:border-[#0099ff] transition-colors text-[15px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
                )}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-500">
              <input
                type="checkbox"
                className="h-4 w-4 text-[#0099ff] focus:ring-[#0099ff] border-gray-300 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-[#0099ff] hover:text-[#007acc] font-medium transition-colors"
            >
              Forgot password?
            </Link>
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
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </button>

          {/* Register link */}
          <p className="text-sm text-center text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-[#0099ff] hover:text-[#007acc] transition-colors"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
