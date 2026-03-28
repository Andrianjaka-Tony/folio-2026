"use client";

import gsap from "gsap";
import { useAnimation } from "@/hooks/use-animation";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function AboutContent() {
  const animateDescription = () => {
    const text = new SplitText(".description-paragraph", {
      mask: "lines",
      type: "lines",
    });
    gsap.set(text.lines, { y: "100%" });
    gsap.to(text.lines, {
      y: 0,
      ease: "power3.out",
      duration: 0.8,
      stagger: 0.05,
      delay: 0.6,
      onComplete: () => {
        text.revert();
      },
    });
  };

  const animateRightInformations = () => {
    const text = new SplitText(".right-informations", {
      mask: "lines",
      type: "lines",
    });
    gsap.set(text.lines, { y: "100%" });
    gsap.to(text.lines, {
      y: 0,
      ease: "power3.out",
      duration: 0.8,
      stagger: 0.05,
      delay: 0.75,
      onComplete: () => {
        text.revert();
      },
    });
  };

  const animateImage = () => {
    gsap.set(".tony-image", {
      opacity: 0,
      // clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(".tony-image", {
      opacity: 1,
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
      delay: 0.7,
    });
  };

  const { ref: containerRef } = useAnimation(() => {
    animateDescription();
    animateImage();
    animateRightInformations();
  });

  return (
    <div ref={containerRef} className="pt-50 pl-36 flex">
      <div className="w-5/12 mr-80 flex flex-col gap-10 text-2xl tracking-tighter leading-normal">
        <p className="description-paragraph">
          Tony is a creative developer crafting bold, refined digital experiences where design and
          technology meet with precision. He blends code, motion, and interaction to build immersive
          interfaces that feel both intuitive and striking. As a Young Jury 2026 at Awwwards, he
          brings a sharp eye for detail and a deep appreciation for innovation.
        </p>
        <p className="description-paragraph">
          Working as an independent, Tony collaborates with companies, agencies, and startups
          worldwide, delivering thoughtful digital products. Passionate about continuous growth, he
          loves learning and constantly refines his craft while exploring new technologies. His work
          balances sophistication and experimentation, designed to leave a lasting impression.
        </p>
      </div>

      <div className="w-2/12 flex flex-col gap-10 text-xs tracking-tighter uppercase">
        <div className="flex flex-col">
          <img
            src="/images/about/tony.jpg"
            className="tony-image mb-2 w-full aspect-square object-cover grayscale-70 brightness-40"
          />
          <p className="right-informations">Andrianjaka Tony</p>
          <p className="right-informations">young jury 2026 — Awwwards</p>
        </div>

        <div className="flex flex-col">
          <p className="right-informations">Email</p>
          <p className="right-informations">Github</p>
          <p className="right-informations">Linkedin</p>
          <p className="right-informations">Instagram</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="right-informations">Services</p>
          <div>
            <p className="right-informations">Creative Development</p>
            <p className="right-informations">Motion Design</p>
            <p className="right-informations">WebGL Experiences</p>
            <p className="right-informations">Frontend Development</p>
            <p className="right-informations">Performance Optimization</p>
            <p className="right-informations">Creative Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
