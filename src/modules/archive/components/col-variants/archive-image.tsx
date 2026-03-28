"use client";

import { ArchiveImage as T } from "@/modules/archive/types/archive-col.type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = { archive: T };
export function ArchiveImage({ archive }: Props) {
  const { source, alt, aspectRatio } = archive;

  const ref = useRef(null);
  const [isDelayed, setIsDelayed] = useState(true);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useGSAP(
    () => {
      gsap.set(ref.current, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      setTimeout(() => setIsDelayed(false), 100);
    },
    { scope: ref },
  );

  useEffect(() => {
    if (isInView) {
      gsap.to(ref.current, {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power4.out",
        delay: isDelayed ? 0.8 : 0,
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className="archive-image w-full" style={{ aspectRatio }}>
      <img
        src={source}
        alt={alt}
        className="w-full object-cover"
        style={{ aspectRatio }}
        draggable={false}
      />
    </div>
  );
}
