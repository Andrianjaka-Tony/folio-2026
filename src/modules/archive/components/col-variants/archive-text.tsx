"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import { useAnimation } from "@/hooks/use-animation";

import { ArchiveText as T } from "@/modules/archive/types/archive-col.type";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(SplitText);

type Props = { archive: T };
export function ArchiveText({ archive }: Props) {
  const id = `archive-${archive.title.toLowerCase().replace(" ", "-")}`;

  const [isDelayed, setIsDelayed] = useState(true);

  const paragraprhRef = useRef(null);
  const isInView = useInView(paragraprhRef, { once: true, margin: "0px 0px -10px 0px" });

  const { ref } = useAnimation(() => {
    const lines = new SplitText(`#${id} h3, #${id} p`, {
      type: "lines",
      mask: "lines",
      linesClass: "archive-line",
    });
    gsap.set(lines.lines, { y: "100%" });

    setTimeout(() => setIsDelayed(false), 100);
  });

  useEffect(() => {
    if (isInView) {
      gsap.to(`#${id} .archive-line`, {
        y: 0,
        ease: "power3.out",
        duration: 1.2,
        stagger: 0.05,
        delay: isDelayed ? 0.8 : 0,
      });
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      id={id}
      className="flex flex-col gap-4 text-xs tracking-tighter leading-tight uppercase"
    >
      <h3>{archive.title}</h3>
      <p ref={paragraprhRef}>{archive.description}</p>
    </div>
  );
}
