import { User, Mail, Phone } from "lucide-react";

// Define the shape of the data prop
interface PersonalDetails {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  maritalStatus: string;
}

// Define the props interface for the component
interface PersonalDetailsFormProps {
  data: PersonalDetails;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function PersonalDetailsForm({
  data,
  handleInputChange,
}: PersonalDetailsFormProps) {
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-y-8 gap-x-10">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Full Name
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              required
              name="fullName"
              type="text"
              value={data.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="Your full name"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              required
              name="emailAddress"
              type="email"
              value={data.emailAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Phone Number
          </label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              required
              name="phoneNumber"
              type="tel"
              value={data.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pl-12 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm"
              placeholder="080 123 4567"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700 ml-1">
            Marital Status
          </label>
          <div className="relative">
            <select
              name="maritalStatus"
              value={data.maritalStatus}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="no">Single</option>
              <option value="yes">Married</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
