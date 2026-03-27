"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import { useAnimation } from "@/hooks/use-animation";

gsap.registerPlugin(SplitText);

export function ArchiveTitle() {
  const { ref: titleRef } = useAnimation(() => {
    const title = new SplitText("#archive-title", {
      type: "lines",
      mask: "lines",
    });
    gsap.set(title.lines, { y: "100%" });
    gsap.to(title.lines, {
      y: 0,
      ease: "power3.out",
      duration: 0.8,
      stagger: 0.05,
      delay: 0.6,
      onComplete: () => {
        title.revert();
      },
    });
  });

  return (
    <h1
      ref={titleRef}
      className="mb-32 mx-auto w-2/5 text-5xl font-light tracking-tighter text-center leading-[1.2]"
    >
      <p id="archive-title">
        Fleeting fragments of motion, code, and unfinished digital explorations
      </p>
    </h1>
  );
}
