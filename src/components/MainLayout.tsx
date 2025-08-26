"use client";
import React, { useEffect, useRef } from "react";
import { Vortex } from "./VortexBackground";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { useLenis } from "../hooks/useLenis";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const backgroundRef = useRef(null);
  
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="overflow-x-hidden relative bg-black">
      <div
        className="fixed w-full h-screen opacity-80 -z-50"
        ref={backgroundRef}
      >
        <Vortex />
      </div>
      <div className="fixed w-full h-screen opacity-20 -z-50">
        <BackgroundGradientAnimation />
      </div>

      <div className="flex items-center justify-center z-50">
        <div className="flex flex-col w-full max-w-5xl">
          {children}

          <div className="absolute bottom-0 w-full overflow-hidden -z-50 hidden lg:block overflow-x-hidden left-0 -hue-rotate-[30deg]">
            <div className="flex justify-center relative w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014] to-[#030014]"></div>
              <video
                src="/farkhanmaul/blackhole.webm"
                loop
                autoPlay
                muted
                className="rotate-3 brightness-100 relative transform translate-y-[32%] w-[70vw]"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}