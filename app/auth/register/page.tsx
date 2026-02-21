"use client";

import Link from "next/link";
import { User, LockKeyhole, Mail, Eye, EyeOff, Calendar, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast, Toast } from "@/app/components/Toast";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { trigger } = useToast();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          dob: formData.dob,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        trigger("error", `Registration failed: ${response.status === 401 ? "Invalid credentials" : response.status === 404 ? "Service not found" : response.status === 409 ? "Email already exists" : `Server error (${response.status})`}`);
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        let errorMessage = data.error || "Something went wrong.";

        if (response.status === 401) {
          errorMessage = "Invalid credentials. Please check your email and try again.";
        } else if (response.status === 404) {
          errorMessage = "Registration service not found. Please try again later.";
        } else if (response.status === 409) {
          errorMessage = "This email is already registered. Please use a different email or sign in.";
        } else if (response.status === 400) {
          errorMessage = data.error || "Please check all fields and try again.";
        } else if (response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        }

        trigger("error", errorMessage);
      } else {
        trigger("success", "Account created successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      }
    } catch (error) {
      const errorMessage = error instanceof Error
        ? `Network error: ${error.message}`
        : "Unable to connect to server. Please check your internet connection and try again.";
      trigger("error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-white border ${errors[field] ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200 focus:ring-[#0099ff]/20 focus:border-[#0099ff]"
    } rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition-colors text-[15px]`;

  const inputClassPr12 = (field: string) =>
    `w-full bg-white border ${errors[field] ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-gray-200 focus:ring-[#0099ff]/20 focus:border-[#0099ff]"
    } rounded-xl py-3 pl-10 pr-12 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition-colors text-[15px]`;

  return (
    <>
      <Toast />
      <div className="w-full max-w-md mx-auto py-4">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/[0.06] flex items-center justify-center mb-4">
            <User className="h-6 w-6 text-[#0099ff]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Create account</h2>
          <p className="text-gray-400 mt-1 text-sm">Join our network of trusted clients</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
            </div>
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={inputClassPr12("password")}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2">
                {showPassword ? <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" /> : <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
            <div className="relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputClassPr12("confirmPassword")}
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2">
                {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" /> : <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={inputClass("dob")}
              />
            </div>
            {errors.dob && <p className="text-sm text-red-500 mt-1">{errors.dob}</p>}
          </div>

          {/* Terms */}
          <div className="flex items-start text-sm text-gray-500 pt-1">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 mt-0.5 text-[#0099ff] focus:ring-[#0099ff] border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 leading-relaxed">
              I agree to the{" "}
              <Link href="/terms" className="text-[#0099ff] hover:text-[#007acc] font-medium transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#0099ff] hover:text-[#007acc] font-medium transition-colors">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-[#0099ff] hover:bg-[#0088ee] focus:outline-none focus:ring-2 focus:ring-[#0099ff]/30 transition-all duration-200 shadow-[0_4px_16px_rgba(0,153,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,153,255,0.4)] text-[15px] ${isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>

          {/* Login link */}
          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-[#0099ff] hover:text-[#007acc] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
