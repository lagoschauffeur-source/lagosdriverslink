import { ChangeEvent } from "react";
import { User, Calendar, Clock, ClipboardList } from "lucide-react";

// Define the shape of the data prop
interface DriverRequirements {
  driverType: string;
  contractDuration: string;
  salaryPackage: string;
  workSchedule: string;
  dutiesDescription: string;
  resumptionDate: string;
  resumptionTime: string;
  closingTime: string;
}

// Define the shape of the salaryRates prop
interface SalaryRates {
  weekdays: number;
  weekdaysSaturday: number;
  fullWeek: number;
  spyPolice: number;
  shift: number;
}

// Define the props interface for the component
interface DriverRequirementsFormProps {
  data: DriverRequirements;
  handleInputChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  salaryRates: SalaryRates;
}

export default function DriverRequirementsForm({
  data,
  handleInputChange,
  salaryRates,
}: DriverRequirementsFormProps) {
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-y-8 gap-x-10">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Type of Driver Needed
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              name="driverType"
              value={data.driverType}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="personal">Personal/Family Driver</option>
              <option value="corporate">Corporate Driver</option>
              <option value="executive">Executive Chauffeur</option>
              <option value="spy">Spy Police Driver</option>
              <option value="part-time">Part-Time Driver</option>
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
            Contract Duration
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              name="contractDuration"
              value={data.contractDuration}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="3-months">3 Months</option>
              <option value="6-months">6 Months</option>
              <option value="1-year">1 Year</option>
              <option value="2-years">2 Years</option>
              <option value="permanent">Permanent</option>
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
            Work Schedule & Salary
          </label>
          <div className="relative group">
            <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              name="workSchedule"
              value={data.workSchedule}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="weekdays">
                Monday-Friday (₦{salaryRates.weekdays.toLocaleString()})
              </option>
              <option value="weekdaysSaturday">
                Monday-Saturday (₦{salaryRates.weekdaysSaturday.toLocaleString()})
              </option>
              <option value="fullWeek">
                Monday-Sunday (₦{salaryRates.fullWeek.toLocaleString()})
              </option>
              <option value="spyPolice">
                Specialist Driver (₦{salaryRates.spyPolice.toLocaleString()})
              </option>
              <option value="shift">
                Daily Service (₦{salaryRates.shift.toLocaleString()})
              </option>
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
            Resumption Date
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="resumptionDate"
              type="date"
              value={data.resumptionDate}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm cursor-text"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Start Time
          </label>
          <div className="relative group">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="resumptionTime"
              type="time"
              value={data.resumptionTime}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            End Time
          </label>
          <div className="relative group">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              name="closingTime"
              type="time"
              value={data.closingTime}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-bold text-gray-700 ml-1">
          Tell us more about the duties
        </label>
        <textarea
          name="dutiesDescription"
          value={data.dutiesDescription}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-6 py-5 rounded-[24px] bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm resize-none"
          placeholder="E.g. Driving kids to school, interstate travel requirements, etc."
        />
      </div>
    </div>
  );
}
