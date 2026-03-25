"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function useAnimation(foo: () => void) {
  const ref = useRef(null);
  useGSAP(foo, { scope: ref });

  return { ref };
}
