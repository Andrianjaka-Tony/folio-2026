"use client";

import Link from "next/link";
import gsap from "gsap";

import { useAnimation } from "@/hooks/use-animation";

export function NavigationLinks() {
  const { ref: containerRef } = useAnimation(() => {
    gsap.to(".navigation-sociale-link", {
      y: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: 0.45,
    });
  });

  return (
    <div
      ref={containerRef}
      className="px-4 py-2.5 w-full flex justify-between items-center uppercase"
    >
      <div className="flex gap-4">
        <div className="w-24 text-xs font-medium tracking-tighter overflow-hidden">
          <Link href="#" target="_blank" className="navigation-sociale-link block translate-y-full">
            Instagram
          </Link>
        </div>
        <div className="w-24 text-xs font-medium tracking-tighter overflow-hidden">
          <Link href="#" target="_blank" className="navigation-sociale-link block translate-y-full">
            Linkedin
          </Link>
        </div>
      </div>
      <div className="text-xs font-medium tracking-tighter overflow-hidden">
        <Link
          href="mailto:andrianjaka.tony@gmail.com"
          className="navigation-sociale-link block translate-y-full"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
