// app/auth/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const backgroundImages = [
  "/young-black-handsome-cab-driver-600nw-1434428810.webp",
  "/blog-post-ZA-1024x536.webp",
  "/dreamstime_xxl_99965748-600x400.jpg",
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [index]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Panel — Image Showcase */}
      <div className="relative w-1/2 hidden md:block">
        {backgroundImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Lagos Driver Agency Background"
            fill
            className={clsx(
              "object-cover absolute inset-0 transition-opacity duration-1000",
              i === index ? "opacity-100 z-10" : "opacity-0"
            )}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0099ff]/70 via-[#0077cc]/60 to-gray-950/80 z-20" />

        {/* Text content */}
        <div className="absolute inset-0 z-30 p-10 flex flex-col justify-end pb-20">
          <div className="mb-6">
            <Image
              src="/ldl_logo.png"
              alt="Lagos Drivers Logo"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white">
            Lagos Drivers Link
          </h1>
          <p className="mt-2 text-lg text-white/70 max-w-sm">
            Trusted. Verified. Available across Lagos.
          </p>
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-8 left-10 right-10 flex gap-2 z-40">
          {backgroundImages.map((_, i) => (
            <div
              key={i}
              className="relative h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className={clsx(
                  "absolute top-0 left-0 h-full bg-white rounded-full transition-all",
                  {
                    "w-full": i < index,
                    "w-0": i > index,
                  }
                )}
                style={i === index ? { width: `${progress}%` } : {}}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white px-6 py-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
