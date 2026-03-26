"use client";

import gsap from "gsap";
import { useAnimation } from "@/hooks/use-animation";

export function AboutFooter() {
  const { ref: containerRef } = useAnimation(() => {
    gsap.to(".about-bottom-text", {
      y: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: 0.65,
    });
  });

  return (
    <div
      ref={containerRef}
      className="px-4 py-2.5 fixed z-100 bottom-0 left-0 w-screen flex justify-between items-center text-xs uppercase"
    >
      <div className="font-medium tracking-tighter overflow-hidden">
        <p className="about-bottom-text translate-y-full">Let’s build something exceptional</p>
      </div>
      <div className="font-medium tracking-tighter overflow-hidden">
        <p className="about-bottom-text block translate-y-full">10:51 PM — madagascar</p>
      </div>
    </div>
  );
}
