import { ChangeEvent } from "react";
import { Car, Shield, Settings, Info, Calendar } from "lucide-react";

interface VehicleDetails {
  vehicleType: string;
  transmissionType: string;
  insuranceType: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;
}

interface VehicleDetailsFormProps {
  data: VehicleDetails;
  handleInputChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export default function VehicleDetailsForm({
  data,
  handleInputChange,
}: VehicleDetailsFormProps) {
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-y-8 gap-x-10">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Vehicle Type
          </label>
          <div className="relative">
            <select
              name="vehicleType"
              value={data.vehicleType}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
              <option value="luxury">Luxury Vehicle</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Transmission
          </label>
          <div className="relative group">
            <Settings className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              name="transmissionType"
              value={data.transmissionType}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              <option value="both">Both</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Insurance Type
          </label>
          <div className="relative group">
            <Shield className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              name="insuranceType"
              value={data.insuranceType}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="comprehensive">Comprehensive Insurance</option>
              <option value="third-party">Third Party Insurance</option>
              <option value="none">No Insurance</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Vehicle Brand
          </label>
          <div className="relative group">
            <Car className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="vehicleBrand"
              type="text"
              value={data.vehicleBrand}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="e.g. Toyota, Mercedes"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Vehicle Model
          </label>
          <div className="relative group">
            <Info className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="vehicleModel"
              type="text"
              value={data.vehicleModel}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="e.g. Camry, GLE 450"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Year of Manufacture
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="vehicleYear"
              type="text"
              value={data.vehicleYear}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="e.g. 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
