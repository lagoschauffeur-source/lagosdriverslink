import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Download,
  Eye,
  CheckCircle2,
  Car,
  Shield,
  Clock,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export const metadata: Metadata = {
  title: "Driver Handbook | Lagos Drivers Link",
  description: "Complete guide for drivers on Lagos Drivers Link platform. Learn about policies, procedures, safety guidelines, and best practices for professional driving.",
};

export default function DriverHandbookPage() {
  const sections = [
    {
      icon: <Car className="h-7 w-7" />,
      title: "The Elite Fleet",
      items: ["Valid inter-state registration & gold-tier insurance", "Bi-weekly multi-point mechanical audits", "Zero-tolerance on vehicle aesthetics (Internal/External)", "Premium climate control & navigation redundancy systems"]
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "SecureMile Protocol",
      items: ["Mandatory seatbelt indexing for all cabin seats", "Strict adherence to the 100km/h highway limit", "Zero-device policy during vehicle motion", "Active incident reporting via the SecureMile desk"]
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Executive Etiquette",
      items: ["Polished arrival (White shirt, Black suit standard)", "White-glove luggage & entry assistance", "Total cabin privacy & discretion guarantee", "Concierge-level route planning & proactive updates"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0099ff]/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold uppercase tracking-widest">Training & Standards</span>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
                The <span className="text-[#0099ff]">Chauffeur</span> <br />Handbook.
              </h1>
              <p className="text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                Our operational blueprint for excellence. These guidelines define the Lagos Drivers Link standard of professional mobility.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 flex items-center justify-center gap-3">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <Link href="/hire" className="border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center">
                  Join Network
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white">
              <Image
                src="/confident-professional-driver-side-view-600nw-2149539983.webp"
                alt="Driver Standard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Manual Sections */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-8">
          {sections.map((section, i) => (
            <div key={i} className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-20 h-20 rounded-2xl bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <div className="flex-1 space-y-8">
                  <h3 className="text-3xl lg:text-4xl font-black tracking-tighter">{section.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, j) => (
                      <div key={j} className="flex gap-4 items-start p-6 rounded-3xl bg-slate-50 border border-gray-50">
                        <CheckCircle2 className="w-5 h-5 text-[#0099ff] mt-1 flex-shrink-0" />
                        <span className="font-bold text-gray-900 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Matrix (Dark Cinematic) */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-900 text-white rounded-[5rem] mx-6 md:mx-12 lg:mx-24 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0099ff]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight"><span className="text-[#0099ff]">CRITICAL:</span> Emergency Response</h2>
            <p className="text-gray-400 font-medium">Operational protocols for high-stress incidents.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Accident Flow", desc: "Prioritize cabin safety, execute secure evacuation, and contact the SecureMile emergency desk instantly." },
              { title: "Medical Delta", desc: "Engage onboard first-aid kits, coordinate with LASAMBUS, and notify the protocol desk immediately." },
              { title: "Vehicle Offline", desc: "Move to a secure zone, initiate backup chauffeur deployment, and stay with the client till hand-off." }
            ].map((p, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center animate-pulse">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black tracking-tight">{p.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resource Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Eye />, title: "Training Videos", desc: "Visual guides on professional etiquette and route mapping." },
            { icon: <BookOpen />, title: "Digital Manual", desc: "Our 200-page operational roadmap for professional chauffeurs." },
            { icon: <Phone />, title: "Chauffeur Helpdesk", desc: "24/7 dedicated support line for on-road technical assistance." }
          ].map((r, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-gray-50 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0099ff] mx-auto mb-8 group-hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <h4 className="text-xl font-black mb-4">{r.title}</h4>
              <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">{r.desc}</p>
              <div className="text-[#0099ff] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                Access Hub <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
