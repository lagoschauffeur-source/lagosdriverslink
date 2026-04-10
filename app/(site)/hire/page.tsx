"use client";

import { useState, useEffect, useMemo } from "react";
import { CheckCircle, SendHorizontal, MessageSquare, Sparkles } from "lucide-react";
import PersonalDetailsForm from "@/app/components/PersonalDetailsForm";
import DriverRequirementsForm from "@/app/components/DriverRequirementsForm";
import VehicleDetailsForm from "@/app/components/VehicleDetailsForm";
import AddressInformationForm from "@/app/components/AddressInformationForm";
import FormNavigation from "./_components/FormNavigation";
import ValidationErrors from "./_components/ValidationErrors";
import useFormData, { FormDataType } from "./_components/useFormData";
import { getSectionStatus } from "./_components/formValidation";
import { salaryRates } from "@/lib/constants/driver-plans";

type FormSection = "personal" | "driver" | "vehicle" | "address";

export default function HireDriverPage() {
  const [activeSection, setActiveSection] = useState<FormSection>("personal");
  const { formData, handleInputChange } = useFormData();
  const { isSubmitted, isLoading, handleFormSubmit } = useFormSubmission();

  // Get validation status for current section
  const sectionStatus = getSectionStatus(formData);
  const currentSectionValidation = sectionStatus[activeSection];

  const formSections: FormSection[] = useMemo(
    () => ["personal", "driver", "vehicle", "address"],
    []
  );

  // Track when user last interacted with the form to prevent auto-advance while typing
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const [isUserTyping, setIsUserTyping] = useState<boolean>(false);

  // Update interaction time when form data changes
  useEffect(() => {
    const now = Date.now();
    setLastInteractionTime(now);
    setIsUserTyping(true);

    // Clear typing flag after user stops typing for 3 seconds
    const typingTimer = setTimeout(() => {
      setIsUserTyping(false);
    }, 3000);

    return () => clearTimeout(typingTimer);
  }, [formData]);

  // Auto-advance to next section only when:
  // 1. Section is valid
  // 2. User has stopped typing for at least 3 seconds
  // 3. Not on the last section
  // 4. User hasn't manually navigated recently
  useEffect(() => {
    const timeSinceLastInteraction = Date.now() - lastInteractionTime;
    const shouldAutoAdvance =
      currentSectionValidation.isValid &&
      activeSection !== "address" &&
      !isUserTyping &&
      timeSinceLastInteraction >= 3000;

    if (shouldAutoAdvance) {
      const currentIndex = formSections.findIndex(
        (section) => section === activeSection
      );
      if (currentIndex < formSections.length - 1) {
        // Add a delay before auto-advancing to give user time to see completion
        const timer = setTimeout(() => {
          // Double-check user hasn't started typing again
          if (Date.now() - lastInteractionTime >= 3000 && !isUserTyping) {
            setActiveSection(formSections[currentIndex + 1]);
          }
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentSectionValidation.isValid, activeSection, formSections, isUserTyping, lastInteractionTime]);

  // Section Label Mapping for human-readability
  const sectionLabels: Record<FormSection, string> = {
    personal: "About You",
    driver: "The Driver You Need",
    vehicle: "Your Vehicle Details",
    address: "Where You Are",
  };

  return (
    <section className="min-h-screen bg-white text-gray-900 py-24 px-6 sm:px-12 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Finding your perfect driver</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
            Welcome! Let&apos;s find your next driver.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Tell us a bit about what you looking for, and we&apos;ll match you with a
            vetted, professional driver in Lagos within 24 hours. Safe and simple!
          </p>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center text-sm font-bold px-4 mb-2">
              <span className="text-gray-500">Step {Object.values(sectionStatus).filter((s) => s.isValid).length + 1} of 4</span>
              <span className="text-blue-600">
                {Math.round((Object.values(sectionStatus).filter((s) => s.isValid).length / 4) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-blue-700 h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${(Object.values(sectionStatus).filter((s) => s.isValid).length / 4) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center p-12 md:p-20 rounded-[32px] shadow-2xl border-4 border-white transform transition-all animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">We&apos;ve got it!</h2>
            <p className="text-xl max-w-lg mx-auto leading-relaxed text-blue-50">
              Our team is already looking through our database for you.
              We&apos;ll reach out within the next 24 hours to discuss the next steps.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="mt-10 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-md rounded-[32px] shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-1">
              <FormNavigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                formData={formData}
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {sectionLabels[activeSection]}
                </h2>
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
              </div>

              {/* Display validation errors for current section */}
              <ValidationErrors errors={currentSectionValidation.errors} />

              {/* Success message when section is completed */}
              {currentSectionValidation.isValid &&
                activeSection !== "address" && (
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 animate-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <CheckCircle className="w-6 h-6 text-blue-500" />
                      </div>
                      <span className="text-blue-700 font-bold text-lg">
                        Looks good! Taking you to the next part...
                      </span>
                    </div>
                  </div>
                )}

              <div className="space-y-8">
                {activeSection === "personal" && (
                  <PersonalDetailsForm
                    data={formData.personalDetails}
                    handleInputChange={(event) =>
                      handleInputChange(event, "personalDetails")
                    }
                  />
                )}
                {activeSection === "driver" && (
                  <DriverRequirementsForm
                    data={formData.projectDetails}
                    handleInputChange={(event) =>
                      handleInputChange(event, "projectDetails")
                    }
                    salaryRates={salaryRates}
                  />
                )}
                {activeSection === "vehicle" && (
                  <VehicleDetailsForm
                    data={formData.vehicleDetails}
                    handleInputChange={(event) =>
                      handleInputChange(event, "vehicleDetails")
                    }
                  />
                )}
                {activeSection === "address" && (
                  <AddressInformationForm
                    data={formData.addressInformation}
                    handleInputChange={(event) =>
                      handleInputChange(event, "addressInformation")
                    }
                  />
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-gray-100">
                <div className="flex gap-4 w-full sm:w-auto">
                  {activeSection !== "personal" && (
                    <button
                      type="button"
                      onClick={() => {
                        const currentIndex = formSections.findIndex(
                          (section) => section === activeSection
                        );
                        if (currentIndex > 0) {
                          setActiveSection(formSections[currentIndex - 1]);
                        }
                      }}
                      className="flex-1 sm:flex-none px-8 py-4 rounded-2xl border-2 border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-all"
                    >
                      Go Back
                    </button>
                  )}
                </div>

                <div className="w-full sm:w-auto">
                  {activeSection !== "address" ? (
                    <button
                      type="button"
                      onClick={() => {
                        const currentIndex = formSections.findIndex(
                          (section) => section === activeSection
                        );
                        if (currentIndex < formSections.length - 1) {
                          setActiveSection(formSections[currentIndex + 1]);
                        }
                      }}
                      disabled={!currentSectionValidation.isValid}
                      className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-bold transition-all shadow-lg ${currentSectionValidation.isValid
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                        }`}
                    >
                      {currentSectionValidation.isValid
                        ? "Save and Continue"
                        : "Please complete this section"}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={(e) => handleFormSubmit(e as any, formData)}
                      disabled={isLoading || !currentSectionValidation.isValid}
                      className={`w-full sm:w-auto px-12 py-4 rounded-2xl text-white font-black transition-all shadow-xl flex items-center justify-center gap-3 ${currentSectionValidation.isValid && !isLoading
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-200 transform hover:-translate-y-1"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                        }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Just a moment...
                        </>
                      ) : (
                        <>
                          Find My Driver
                          <SendHorizontal className="w-6 h-6" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50/50 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 font-medium text-center">
                Join 500+ Lagosians who found their trusted drivers here.
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function useFormSubmission(): {
  isSubmitted: boolean;
  isLoading: boolean;
  handleFormSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    data: FormDataType
  ) => Promise<void>;
} {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    data: FormDataType
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isSubmitted, isLoading, handleFormSubmit };
}
