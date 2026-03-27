"use client";

import gsap from "gsap";
import { useAnimation } from "@/hooks/use-animation";

import { ArchiveCol } from "@/modules/archive/components/archive-col";

import { ARCHIVES } from "@/modules/archive/data/archive.data";

export function ArchiveGrid() {
  const { ref: itemsRef } = useAnimation(() => {
    gsap.set(".archive-image", { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
    gsap.to(".archive-image", {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.6,
    });
  });

  return (
    <div
      ref={itemsRef}
      className="w-full grid grid-cols-8 gap-8 gap-y-30 text-xs tracking-tighter uppercase"
      style={{ rowGap: "7.5rem" }}
    >
      {ARCHIVES.map((archive, key) => (
        <ArchiveCol key={key} archive={archive} />
      ))}
    </div>
  );
}
