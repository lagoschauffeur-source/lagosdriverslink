"use client";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Globe, Phone, Mail } from "lucide-react";
import Link from "next/link";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function PremiumFooter() {
  const categories = [
    {
      title: "Services", links: [
        { name: "Private Drivers", href: "/services/private" },
        { name: "Corporate Drivers", href: "/services/corporate" },
        { name: "Logistics Drivers", href: "/services/logistics" },
        { name: "Event Drivers", href: "/services/events" },
      ]
    },
    {
      title: "Company", links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partnerships", href: "/partners" },
      ]
    },
    {
      title: "Support", links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety", href: "/safety" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ]
    },
    {
      title: "Resources", links: [
        { name: "Blog", href: "/blog" },
        { name: "Driver Handbook", href: "/handbook" },
        { name: "Community", href: "/community" },
        { name: "FAQs", href: "/faq" },
      ]
    },
  ];

  return (
    <footer className="bg-[#003d66] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link href="/" className="relative block w-[100px] h-[60px]">
              <Image src="/ldl_logo.png" alt="Lagos Drivers Logo" fill className="object-contain" priority />
            </Link>
            <p className="text-blue-200/70 mt-5 text-sm leading-relaxed max-w-xs">
              Connecting you with trusted professional drivers in Lagos since 2023.
            </p>
            <div className="flex gap-2 mt-5">
              {[
                { icon: <Facebook className="w-3.5 h-3.5" />, href: "#" },
                { icon: <XIcon className="w-3.5 h-3.5" />, href: "#" },
                { icon: <Instagram className="w-3.5 h-3.5" />, href: "#" },
                { icon: <Linkedin className="w-3.5 h-3.5" />, href: "#" },
                { icon: <Youtube className="w-3.5 h-3.5" />, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-blue-200 hover:text-white hover:bg-[#0099ff] hover:border-[#0099ff] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold text-sm mb-4">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-blue-200/70 hover:text-white transition-colors text-sm">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
          <div className="flex items-center gap-4 text-blue-200/60">
            <span>© 2023 LagosDriversLink</span>
            <div className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" /> English</div>
            <span>₦ NGN</span>
          </div>
          <div className="flex flex-wrap gap-4 text-blue-200/70">
            <span className="text-xs">24a Bashorun Okunsanya St, Off Admiralty Way, Lekki Phase 1</span>
            <Link href="mailto:teams@lagosdriverslink.com" className="flex items-center gap-1 hover:text-white transition-colors text-xs">
              <Mail className="h-3 w-3" /> teams@lagosdriverslink.com
            </Link>
            <Link href="tel:+2349032702233" className="flex items-center gap-1 hover:text-white transition-colors text-xs">
              <Phone className="h-3 w-3" /> +234 903 270 2233
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["✓ Verified Drivers", "🔒 Secure Payments", "⭐ 4.9/5 Ratings"].map((badge, i) => (
            <span key={i} className="px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-blue-100 text-xs font-medium">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
