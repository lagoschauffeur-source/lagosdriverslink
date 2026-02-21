"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { render } from "@react-email/render";
import Link from "next/link";
import {
  Car,
  User,
  Mail,
  Phone,
  MapPin,
  List,
  Pen,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { DriverRequestConfirmationEmail } from "../../emails/DriverRequestConfirmationEmail";
import DriverRequestEmail from "../../emails/DriverRequestEmail";
import { validateEmail, validatePhone } from "../../lib/validators";

// Force dynamic rendering to disable prerendering
export const dynamic = "force-dynamic";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  additionalNotes: string;
  plan: string;
  hasAccommodation: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>> & {
  form?: string;
};

export default function DriverRequestForm() {
  const router = useRouter();
  const [plan, setPlan] = useState("daily");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const selectedPlan = searchParams.get("plan");
    if (selectedPlan) {
      setPlan(selectedPlan);
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    additionalNotes: "",
    plan: "daily",
    hasAccommodation: false,
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, plan }));
  }, [plan]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccess(false);

    try {
      const [confirmationEmailHtml, teamEmailHtml] = await Promise.all([
        render(
          <DriverRequestConfirmationEmail
            plan={formData.plan}
            fullName={formData.fullName}
            requestId={Date.now().toString()}
          />
        ),
        render(
          <DriverRequestEmail
            fullName={formData.fullName}
            email={formData.email}
            phone={formData.phone}
            location={formData.location}
            requestDetails={formData.additionalNotes}
            plan={formData.plan}
            hasAccommodation={formData.hasAccommodation}
          />
        ),
      ]);

      const response = await fetch("/api/driver-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          confirmationEmail: { html: confirmationEmailHtml },
          teamEmail: { html: teamEmailHtml },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || "Failed to submit request";
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        additionalNotes: "",
        plan,
        hasAccommodation: false,
      });

      // Build URL with response data
      const params = new URLSearchParams({
        success: "true",
        ...(responseData.requestId && { requestId: responseData.requestId }),
        ...(responseData.processingTime && {
          processingTime: responseData.processingTime,
        }),
      });

      setTimeout(() => router.push(`/thank-you?${params.toString()}`), 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.";

      setErrors({
        ...errors,
        form: errorMessage,
      });

      // Navigate to thank-you page with error info
      const params = new URLSearchParams({
        success: "false",
        error: errorMessage,
      });
      setTimeout(() => router.push(`/thank-you?${params.toString()}`), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium"
            aria-label="Return to home page"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-50 rounded-2xl">
              <Car className="h-10 w-10 text-blue-600" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Need a professional driver? We&apos;ve got you covered.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our drivers are safe, polite, and know Lagos roads very well.
            Choose a plan that fits your life and we&apos;ll handle the rest.
          </p>
        </div>

        {/* Plan Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/driver-request/daily"
            className="group block p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Daily Driver</h3>
              <CheckCircle2 className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-extrabold text-blue-600">₦30,000</span>
              <span className="text-gray-500 ml-1">/day</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Perfect for one-time trips or busy days.
            </p>
          </Link>

          <Link
            href="/driver-request/weekday"
            className="group block p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Weekday</h3>
              <CheckCircle2 className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-extrabold text-blue-600">₦175k</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional service from Monday to Friday.
            </p>
          </Link>

          <Link
            href="/driver-request/weekdayPlus"
            className="group block p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Weekday+</h3>
              <CheckCircle2 className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-extrabold text-blue-600">₦195k</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Extended coverage from Monday to Saturday.
            </p>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Quick Request Form</h2>
            <p className="text-gray-500 mt-2">Just fill this out and we&apos;ll call you back.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-gray-700 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">
                  Phone Number
                </label>
                <div className="relative group">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                    aria-hidden="true"
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="080 123 4567"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-semibold text-gray-700 ml-1">
                  Where in Lagos?
                </label>
                <div className="relative group">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ikeja, Lekki, Surulere..."
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="plan" className="text-sm font-semibold text-gray-700 ml-1">
                Choose Your Plan
              </label>
              <div className="relative group">
                <List
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                  aria-hidden="true"
                />
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-10 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm cursor-pointer"
                >
                  <option value="daily">Daily Driver - ₦30,000/day</option>
                  <option value="weekday">Weekday (Mon-Fri) - ₦175,000/month</option>
                  <option value="weekdayPlus">Weekday+ (Mon-Sat) - ₦195,000/month</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="text-sm font-semibold text-gray-700 ml-1">
                Anything else we should know?
              </label>
              <div className="relative group">
                <Pen
                  className="absolute left-4 top-6 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                  aria-hidden="true"
                />
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Tell us about your car or any specific needs..."
                  className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm min-h-[120px]"
                />
              </div>
            </div>

            <div className="flex items-center px-1">
              <label className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="hasAccommodation"
                  checked={formData.hasAccommodation || false}
                  onChange={handleChange}
                  className="peer sr-only"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">
                  I have accommodation for the driver
                </span>
              </label>
            </div>

            {errors.form && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center font-medium border border-red-100">
                {errors.form}
              </div>
            )}

            {success && (
              <div className="p-4 bg-green-50 text-green-600 rounded-xl text-center font-medium border border-green-100">
                Excellent! Request sent. Redirecting you now...
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white shadow-lg transition-all duration-300 ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-200 transform hover:-translate-y-0.5 active:translate-y-0"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Working on it...
                </span>
              ) : (
                "Send My Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
