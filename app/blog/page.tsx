"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Clock, Bookmark, Share2, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Chauffeur Standards in Nigeria's Tech Hub",
    excerpt: "Exploring the intersection of high-tier vetting and AI-driven logistics in Lagos' corporate mobility landscape.",
    author: "Protocol Desk",
    date: "JAN 15, 2025",
    readTime: "5 min",
    category: "Logistics",
    image: "/blog-driving-future.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "SecureMile: Redefining Road Safety for Executives",
    excerpt: "A deep dive into our multi-layer monitoring system that ensures uncompromising passenger security.",
    author: "Safety Ops",
    date: "JAN 10, 2025",
    readTime: "7 min",
    category: "Safety",
    image: "/blog-safety-tips.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Etiquette 2.0: The Art of Professional Chauffeurism",
    excerpt: "Why technical driving skills are only 30% of the value we provide to our high-net-worth clients.",
    author: "Experience Lead",
    date: "JAN 05, 2025",
    readTime: "6 min",
    category: "Hospitality",
    image: "/blog-trust-building.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Navigating Lagos: Beyond the GPS Algorithms",
    excerpt: "Internal field reports on route optimization and traffic psychology in the world's most dynamic city.",
    author: "Field Report",
    date: "JAN 01, 2025",
    readTime: "8 min",
    category: "Mobility",
    image: "/blog-lagos-traffic.jpg",
    featured: false,
  },
];

const categories = ["All Insights", "Logistics", "Safety", "Hospitality", "Mobility", "Tech"];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      {/* Hero Header */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099ff]/[0.02] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0099ff]/10 text-[#0099ff] text-sm font-bold mb-8 uppercase tracking-widest">The Newsroom</span>
            <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Insights for <br /><span className="text-[#0099ff]">Modern Mobility.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Field reports, safety protocols, and industry analyses from the Lagos Drivers Link logistics desk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Cinematic */}
      {featuredPost && (
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col lg:flex-row h-full min-h-[600px] group cursor-pointer"
            >
              <div className="flex-1 relative overflow-hidden">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-10 left-10">
                  <div className="bg-[#0099ff] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">Featured Insight</div>
                </div>
              </div>
              <div className="flex-1 p-12 md:p-20 flex flex-col justify-center space-y-8">
                <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span className="text-[#0099ff]">{featuredPost.category}</span>
                  <span>&bull;</span>
                  <span>{featuredPost.readTime} Read</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight group-hover:text-[#0099ff] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#0099ff]">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-black text-gray-900 leading-none mb-1">{featuredPost.author}</div>
                      <div className="text-xs font-bold text-gray-400 uppercase">{featuredPost.date}</div>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#0099ff] transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Menu */}
      <section className="py-12 px-6 border-y border-gray-50 sticky top-[88px] bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-4 no-scrollbar">
          {categories.map((cat, i) => (
            <button key={i} className={`px-8 py-3 rounded-full text-sm font-black whitespace-nowrap transition-all ${i === 0 ? 'bg-gray-900 text-white shadow-xl shadow-gray-900/10' : 'bg-slate-50 text-gray-400 hover:bg-slate-100'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Regular Feed Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafbfd]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regularPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 leading-none">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readTime} Read</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight group-hover:text-[#0099ff] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow font-medium">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0099ff]">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-gray-900">{post.author}</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="text-gray-400 hover:text-[#0099ff] transition-colors"><Bookmark className="w-5 h-5" /></button>
                    <button className="text-gray-400 hover:text-[#0099ff] transition-colors"><Share2 className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Clean Slate */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#0099ff] rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-[#0099ff]/20">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <Zap className="w-12 h-12 text-white/50 mx-auto mb-8" />
            <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tighter">Insights in your <br /> Inbox. Weekly.</h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white/10 p-2 rounded-3xl border border-white/20">
              <input
                type="email"
                placeholder="Enter work email"
                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-white/40 font-bold px-6 py-4"
              />
              <button className="bg-white text-[#0099ff] px-10 py-5 rounded-2xl font-black hover:bg-slate-50 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
