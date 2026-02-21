import { ChangeEvent } from "react";
import { Home, Briefcase, Info, MapPin } from "lucide-react";

interface AddressInformation {
  homeAddress: string;
  officeAddress: string;
  hasAccommodation: boolean;
}

interface AddressInformationFormProps {
  data: AddressInformation;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

export default function AddressInformationForm({
  data,
  handleInputChange,
}: AddressInformationFormProps) {
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-y-8 gap-x-10">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Home Address
          </label>
          <div className="relative group">
            <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              required
              name="homeAddress"
              type="text"
              value={data.homeAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="Your complete home address"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Office Address (Optional)
          </label>
          <div className="relative group">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="officeAddress"
              type="text"
              value={data.officeAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="Where do you work?"
            />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <label className="relative flex items-center p-6 rounded-3xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white hover:border-blue-300 cursor-pointer transition-all group overflow-hidden">
          <input
            type="checkbox"
            name="hasAccommodation"
            checked={data.hasAccommodation || false}
            onChange={handleInputChange}
            className="w-6 h-6 rounded-lg border-gray-300 text-blue-700 focus:ring-blue-600 transition-all cursor-pointer"
          />
          <div className="ml-5">
            <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
              Accommodation available for driver
            </h4>
            <p className="text-gray-500 text-sm font-medium">
              Checking this makes it easier to find drivers who live further away.
            </p>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 opacity-5">
            <MapPin className="w-24 h-24 text-blue-600" />
          </div>
        </label>
      </div>

      <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 flex gap-4">
        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700 leading-relaxed font-medium">
          <strong>Note:</strong> We prioritize matching you with drivers who are closest to your residential area to ensure punctuality and reliability.
        </p>
      </div>
    </div>
  );
}
