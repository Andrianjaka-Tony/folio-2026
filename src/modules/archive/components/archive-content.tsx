"use client";

import gsap from "gsap";
import { useAnimation } from "@/hooks/use-animation";

import { SmoothScroll } from "@/components/layout/smooth-scroll";

import { ArchiveGrid } from "@/modules/archive/components/archive-grid";
import { ArchiveTitle } from "@/modules/archive/components/archive-title";

export function ArchiveContent() {
  const { ref } = useAnimation(() => {
    gsap.to(".archive-layout-mode", {
      y: 0,
      ease: "power3.out",
      duration: 0.8,
      stagger: 0.1,
      delay: 0.8,
    });
  });

  return (
    <SmoothScroll>
      <div className="py-60 px-8 overflow-y-hidden h-fit">
        <ArchiveTitle />

        <div
          ref={ref}
          className="mb-16 w-full grid grid-cols-8 gap-8 text-xs tracking-tighter uppercase"
        >
          <div className="col-span-2 overflow-hidden">
            <p className="archive-layout-mode w-fit cursor-pointer! translate-y-full">Grid</p>
          </div>
          <div className="opacity-40 col-span-2 overflow-hidden">
            <p className="archive-layout-mode w-fit cursor-pointer! translate-y-full">List</p>
          </div>
        </div>

        <ArchiveGrid />
      </div>
    </SmoothScroll>
  );
}
