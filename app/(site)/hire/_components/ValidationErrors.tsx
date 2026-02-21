import { AlertCircle } from "lucide-react";

interface ValidationErrorsProps {
  errors: string[];
}

export default function ValidationErrors({ errors }: ValidationErrorsProps) {
  if (errors.length === 0) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
      <div className="flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-blue-700 font-bold mb-3 text-lg">
            Almost there! Please complete these fields:
          </h4>
          <ul className="space-y-2">
            {errors.map((error, index) => (
              <li key={index} className="text-blue-600 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                {error}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
