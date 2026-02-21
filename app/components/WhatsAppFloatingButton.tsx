"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      <div className="bg-white text-gray-600 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
        💬 Chat with us
      </div>
      <Link
        href="https://wa.me/2349032702233?text=Hello!%20I%20need%20a%20professional%20driver."
        target="_blank"
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-2xl shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-all duration-200 hover:-translate-y-[1px]"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>
    </div>
  );
}
