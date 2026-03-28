"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function useAnimation(foo: (context: gsap.Context) => void) {
  const ref = useRef(null);
  useGSAP((context) => foo(context), { scope: ref });
  return { ref };
}
