import { Car, Home, User, CheckCircle, Lock } from "lucide-react";
import { JSX } from "react";
import { FormDataType } from "./useFormData";
import { canAccessSection, getSectionStatus } from "./formValidation";

type FormSection = "personal" | "driver" | "vehicle" | "address";

interface FormNavigationProps {
  activeSection: FormSection;
  setActiveSection: (section: FormSection) => void;
  formData: FormDataType;
}

const formSections: {
  id: FormSection;
  label: string;
  icon: JSX.Element;
}[] = [
    { id: "personal", label: "Personal Details", icon: <User size={18} /> },
    { id: "driver", label: "Project Details", icon: <User size={18} /> },
    { id: "vehicle", label: "Vehicle Details", icon: <Car size={18} /> },
    { id: "address", label: "Address Information", icon: <Home size={18} /> },
  ];

export default function FormNavigation({
  activeSection,
  setActiveSection,
  formData,
}: FormNavigationProps) {
  const sectionStatus = getSectionStatus(formData);

  return (
    <div className="grid grid-cols-4 border-b border-gray-100">
      {formSections.map((section) => {
        const isAccessible = canAccessSection(
          section.id,
          formData,
          activeSection
        );
        const isCompleted =
          sectionStatus[section.id as keyof typeof sectionStatus].isValid;
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => {
              if (isAccessible) {
                setActiveSection(section.id);
              }
            }}
            disabled={!isAccessible}
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-6 px-2 text-xs sm:text-sm font-bold transition-all relative border-r border-gray-100 last:border-r-0 ${isActive
                ? "bg-blue-50/50 text-blue-600 shadow-[inset_0_-2px_0_0_#2563eb]"
                : isCompleted
                  ? "text-green-600 hover:bg-gray-50"
                  : isAccessible
                    ? "text-gray-500 hover:bg-gray-50"
                    : "text-gray-300 cursor-not-allowed opacity-50"
              }`}
          >
            <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-blue-100 text-blue-600" :
                isCompleted ? "bg-green-100 text-green-600" :
                  "bg-gray-100 text-gray-400"
              }`}>
              {isCompleted && !isActive ? (
                <CheckCircle className="w-4 h-4" />
              ) : !isAccessible && !isCompleted ? (
                <Lock className="w-4 h-4" />
              ) : (
                section.icon
              )}
            </div>
            <span className="text-center sm:text-left leading-tight hidden xs:inline">
              {section.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
