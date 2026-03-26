"use client";

import { ReactNode } from "react";
import { Link } from "next-view-transitions";
import gsap from "gsap";

import { useAnimation } from "@/hooks/use-animation";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function NavigationItems() {
  const ITEMS = [
    {
      href: "/",
      children: "Works",
    },
    {
      href: "/about",
      children: "About",
    },
    {
      href: "/archive",
      children: "Archive",
    },
    {
      href: "/contact",
      children: "Connect",
    },
  ];

  const { ref: containerRef } = useAnimation(() => {
    gsap.to(".navigation-item-link", {
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.5,
    });
  });

  return (
    <div ref={containerRef} className="flex flex-col -space-y-2 items-center">
      {ITEMS.map(({ href, children }) => (
        <NavigationItem key={href} href={href}>
          {children}
        </NavigationItem>
      ))}
    </div>
  );
}

type NavigationItemProps = {
  href: string;
  children: ReactNode;
};
function NavigationItem({ href, children }: NavigationItemProps) {
  const id = children?.toString().toLowerCase() + "-link";

  const splitMainLink = () => {
    new SplitText(".navigation-item-link", {
      type: "chars",
      charsClass: "main-link-char",
    });
    new SplitText(".navigation-item-absolute", {
      type: "chars",
      charsClass: "absolute-link-char translate-y-full",
    });
  };

  const { ref } = useAnimation(() => {
    splitMainLink();
  });

  const handleMouseEnter = () => {
    gsap.to(`#${id} .main-link-char`, {
      y: "-100%",
      ease: "power3.out",
      duration: 0.5,
      stagger: 0.02,
    });
    gsap.to(`#${id} .absolute-link-char`, {
      y: 0,
      ease: "power3.out",
      duration: 0.5,
      stagger: 0.02,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(`#${id} .main-link-char`, {
      y: 0,
      ease: "power3.out",
      duration: 0.5,
      stagger: 0.02,
    });
    gsap.to(`#${id} .absolute-link-char`, {
      y: "100%",
      ease: "power3.out",
      duration: 0.5,
      stagger: 0.02,
    });
  };

  return (
    <div
      ref={ref}
      className="w-fit text-8xl font-extrabold uppercase leading-[0.9] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} id={id} className="block relative">
        <div className="navigation-item-link tracking-tighter translate-y-full overflow-hidden">
          {children}
        </div>
        <div className="navigation-item-absolute absolute inset-0 tracking-tighter overflow-hidden">
          {children}
        </div>
      </Link>
    </div>
  );
}
