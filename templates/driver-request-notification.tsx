// components/email-templates/driver-request-notification.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
  Row,
  Column,
} from "@react-email/components";
import { driverRequestPlanDescriptionMap } from "@/lib/constants/pricing";

interface DriverRequestNotificationProps {
  selectedPlan: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerLocation: string;
  vehicleInformation: {
    vehicleType: string;
    transmissionType: string;
    insuranceType: string;
    brand: string;
    model: string;
    manufacturingYear: string;
  };
  additionalRequirements?: string;
}

const planDescriptions = driverRequestPlanDescriptionMap();

export function DriverRequestNotificationEmail({
  selectedPlan,
  customerName,
  customerEmail,
  customerPhoneNumber,
  customerLocation,
  vehicleInformation,
  additionalRequirements,
}: DriverRequestNotificationProps) {
  const planLine =
    planDescriptions[selectedPlan] ?? `Driver service (${selectedPlan})`;

  return (
    <Html>
      <Head />
      <Preview>New Driver Service Request - {planLine}</Preview>
      <Body className="bg-black text-white font-sans p-5">
        <Container className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-6">
          <Section className="pb-6 border-b border-gray-800 mb-6">
            <Row>
              <Column align="center">
                <Heading className="text-2xl font-bold text-yellow-400 mb-2">
                  🚗 New Driver Service Request
                </Heading>
                <Text className="text-gray-400 text-sm">{planLine}</Text>
              </Column>
            </Row>
          </Section>

          <Section className="pb-6">
            <Text className="text-gray-200 mb-4">Hello Team,</Text>
            <Text className="text-gray-200 mb-6">
              A new driver service request has been submitted. Here are the
              details:
            </Text>

            <Section className="bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-yellow-500">
              <Row>
                <Column>
                  <Text className="text-gray-400 text-sm font-medium mb-1">
                    Selected Service Plan
                  </Text>
                  <Text className="text-white font-semibold mb-4">{planLine}</Text>
                </Column>
              </Row>
              <Row className="mt-4">
                <Column>
                  <Text className="text-gray-400 text-sm font-medium mb-1">
                    Customer Name
                  </Text>
                  <Text className="text-white font-semibold mb-4">
                    {customerName}
                  </Text>
                </Column>
              </Row>
              <Row className="mt-4">
                <Column width="50%">
                  <Text className="text-gray-400 text-sm font-medium mb-1">
                    Email Address
                  </Text>
                  <Text className="text-white font-semibold mb-4">
                    {customerEmail}
                  </Text>
                </Column>
                <Column width="50%">
                  <Text className="text-gray-400 text-sm font-medium mb-1">
                    Phone Number
                  </Text>
                  <Text className="text-white font-semibold mb-4">
                    {customerPhoneNumber}
                  </Text>
                </Column>
              </Row>
              <Row className="mt-4">
                <Column>
                  <Text className="text-gray-400 text-sm font-medium mb-1">
                    Service Location
                  </Text>
                  <Text className="text-white font-semibold">
                    {customerLocation}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mb-6">
              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Vehicle Specifications
              </Text>
              <Hr className="border-gray-700 my-3" />
              <Section className="mt-4">
                <Row>
                  <Column width="50%">
                    <Text className="text-gray-400 text-sm font-medium mb-1">
                      Vehicle Type
                    </Text>
                    <Text className="text-white font-semibold mb-4">
                      {vehicleInformation.vehicleType}
                    </Text>
                  </Column>
                  <Column width="50%">
                    <Text className="text-gray-400 text-sm font-medium mb-1">
                      Transmission Type
                    </Text>
                    <Text className="text-white font-semibold mb-4">
                      {vehicleInformation.transmissionType}
                    </Text>
                  </Column>
                </Row>
                <Row className="mt-4">
                  <Column width="50%">
                    <Text className="text-gray-400 text-sm font-medium mb-1">
                      Insurance Coverage
                    </Text>
                    <Text className="text-white font-semibold mb-4">
                      {vehicleInformation.insuranceType}
                    </Text>
                  </Column>
                  <Column width="50%">
                    <Text className="text-gray-400 text-sm font-medium mb-1">
                      Vehicle Brand
                    </Text>
                    <Text className="text-white font-semibold mb-4">
                      {vehicleInformation.brand}
                    </Text>
                  </Column>
                </Row>
                <Row className="mt-4">
                  <Column width="50%">
                    <Text className="text-gray-400 text-sm font-medium mb-1">
                      Vehicle Model
                    </Text>
                    <Text className="text-white font-semibold mb-4">
                      {vehicleInformation.model}
                    </Text>
                  </Column>
                  <Column width="50%">
                    <Text className="text-gray-400 text-sm font-medium mb-1">
                      Manufacturing Year
                    </Text>
                    <Text className="text-white font-semibold">
                      {vehicleInformation.manufacturingYear}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            {additionalRequirements && (
              <Section className="mb-6">
                <Text className="text-yellow-400 text-lg font-semibold mb-2">
                  Additional Requirements
                </Text>
                <Hr className="border-gray-700 my-3" />
                <Text className="text-gray-300 bg-gray-800 p-4 rounded">
                  {additionalRequirements}
                </Text>
              </Section>
            )}

            <Text className="text-gray-500 text-center text-sm mt-6">
              Please respond to this request within 24 hours.
            </Text>
          </Section>

          <Section className="pt-6 border-t border-gray-800 text-center">
            <Text className="text-gray-600 text-xs">
              Lagos Drivers Link Service &copy; {new Date().getFullYear()}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
