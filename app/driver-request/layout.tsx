import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

export default function DriverRequestLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
