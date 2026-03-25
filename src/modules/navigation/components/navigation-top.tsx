"use client";

import { Link } from "next-view-transitions";
import gsap from "gsap";

import { useAnimation } from "@/hooks/use-animation";

export function NavigationTop() {
  const { ref: containerRef } = useAnimation(() => {
    gsap.to(".navigation-top-text", {
      y: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: 0.3,
    });
  });

  return (
    <div
      ref={containerRef}
      className="px-4 py-2.5 w-full flex justify-between items-center uppercase"
    >
      <div className="text-xs font-medium tracking-tighter overflow-hidden">
        <p className="navigation-top-text translate-y-full">Andrianjaka Tony</p>
      </div>
      <div className="text-xs font-medium tracking-tighter overflow-hidden">
        <Link href="/" className="navigation-top-text block translate-y-full">
          Close
        </Link>
      </div>
    </div>
  );
}
