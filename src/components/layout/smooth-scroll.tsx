"use client";

import { ReactNode, useEffect } from "react";
import ReactLenis from "lenis/react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = { children: ReactNode };

function LenisScrollTriggerBridge() {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (!lenis) return;

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        syncTouch: false,
      }}
      autoRaf={false}
    >
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
