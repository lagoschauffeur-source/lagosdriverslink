"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Instagram, Facebook, Twitter, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Drivers", href: "/operators" },
  { name: "Recruit", href: "/recruit" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  if (pathname === "/auth/login" || pathname === "/auth/register") return null;

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.02)] border-b border-gray-100/50"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-[110px] h-[70px] z-[110]">
          <Image src="/ldl_logo.png" alt="Lagos Drivers Logo" fill className="object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          <div className="flex gap-10">
            {navigationLinks.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-[15px] font-bold tracking-tight transition-all duration-300 group ${pathname === href
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                {name}
                <span className={`absolute -bottom-2 left-0 h-[3px] bg-blue-600 rounded-full transition-all duration-300 ${pathname === href ? "w-full" : "w-0 group-hover:w-1/2"}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-gray-100">
            <Link
              href="/auth/login"
              className="px-6 py-3 text-[14px] font-bold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/hire"
              className="px-7 py-3.5 bg-blue-600 text-white text-[14px] font-black rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Hire a Driver
            </Link>
          </div>
        </nav>

        {/* Sleeker Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-end group">
            <span className={`h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4 group-hover:w-6"}`} />
            <span className={`h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"}`} />
          </div>
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-white transition-all duration-700 ease-in-out md:hidden ${menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Menu Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="h-full flex flex-col px-8 pt-32 pb-12 relative z-10 overflow-y-auto">
          {/* Main Links */}
          <div className="flex flex-col gap-6 mb-12">
            {navigationLinks.map(({ name, href }, index) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`text-4xl font-black tracking-tighter transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  } ${pathname === href ? "text-blue-600" : "text-gray-900"}`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className={`space-y-4 mb-12 transition-all duration-500 delay-400 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            <Link
              href="/hire"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between w-full p-6 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-500/20"
            >
              <span className="text-xl font-black">Hire a Driver</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="p-5 text-center bg-gray-50 text-gray-900 rounded-2xl font-bold border border-gray-100"
              >
                Sign In
              </Link>
              <Link
                href="/recruit"
                onClick={() => setMenuOpen(false)}
                className="p-5 text-center bg-white text-gray-900 rounded-2xl font-bold border border-gray-100"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className={`mt-auto transition-all duration-500 delay-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            <div className="flex flex-col gap-4 mb-8">
              <a href="tel:+234000000000" className="flex items-center gap-3 text-gray-500 font-medium">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <span>Call Us Today</span>
              </a>
              <a href="mailto:teams@lagosdriverslink.com" className="flex items-center gap-3 text-gray-500 font-medium">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  <Mail className="w-5 h-5" />
                </div>
                <span>teams@lagosdriverslink.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-100 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
