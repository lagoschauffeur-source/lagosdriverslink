"use client";

// _components/useFormData.ts
import { useState, ChangeEvent } from "react";
import { salaryRates } from "@/lib/constants/driver-plans";

interface PersonalDetails {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  maritalStatus: string;
}

interface ProjectDetails {
  driverType: string;
  contractDuration: string;
  salaryPackage: string;
  workSchedule: string;
  dutiesDescription: string;
  resumptionDate: string;
  resumptionTime: string;
  closingTime: string;
}

interface VehicleDetails {
  providesVehicle: string;
  vehicleType: string;
  transmissionType: string;
  insuranceType: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;
}

interface AddressInformation {
  homeAddress: string;
  officeAddress: string;
  hasAccommodation: boolean;
}

// Rename to FormDataType to match the import, or keep as FormData
export interface FormDataType {
  personalDetails: PersonalDetails;
  projectDetails: ProjectDetails;
  vehicleDetails: VehicleDetails;
  addressInformation: AddressInformation;
}

const initialFormData: FormDataType = {
  personalDetails: {
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    maritalStatus: "no",
  },
  projectDetails: {
    driverType: "personal",
    contractDuration: "6-months",
    salaryPackage: "195000",
    workSchedule: "weekdays",
    dutiesDescription: "",
    resumptionDate: "",
    resumptionTime: "",
    closingTime: "",
  },
  vehicleDetails: {
    providesVehicle: "yes",
    vehicleType: "sedan",
    transmissionType: "automatic",
    insuranceType: "comprehensive",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: "",
  },
  addressInformation: {
    homeAddress: "",
    officeAddress: "",
    hasAccommodation: false,
  },
};

export default function useFormData() {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    section: keyof FormDataType
  ) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;

    if (section === "projectDetails" && name === "workSchedule") {
      const rate = salaryRates[value as keyof typeof salaryRates];
      if (rate) {
        setFormData((previousData) => ({
          ...previousData,
          projectDetails: {
            ...previousData.projectDetails,
            workSchedule: value,
            salaryPackage: rate.toString(),
          },
        }));
      }
    } else {
      setFormData((previousData) => ({
        ...previousData,
        [section]: {
          ...previousData[section],
          [name]: type === "checkbox" ? checked : value,
        },
      }));
    }
  };

  return { formData, handleInputChange };
}
