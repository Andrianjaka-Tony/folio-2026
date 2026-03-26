"use client";

import { Link } from "next-view-transitions";
import gsap from "gsap";

import { useAnimation } from "@/hooks/use-animation";

export function Navbar() {
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
      className="px-4 py-2.5 fixed z-100 top-0 left-0 w-screen flex justify-between items-center text-xs uppercase"
    >
      <div className="font-medium tracking-tighter overflow-hidden">
        <p className="navigation-top-text translate-y-full">Andrianjaka Tony</p>
      </div>
      <div className="font-medium tracking-tighter overflow-hidden">
        <Link href="/navigation" className="navigation-top-text translate-y-full block">
          Menu
        </Link>
      </div>
    </div>
  );
}
