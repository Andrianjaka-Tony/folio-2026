"use client";

import { ReactNode } from "react";
import { Link } from "next-view-transitions";
import gsap from "gsap";

import { useAnimation } from "@/hooks/use-animation";

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
      children: "Contact",
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
    <div ref={containerRef} className="flex flex-col items-center uppercase">
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
  return (
    <div className="w-fit text-8xl tracking-tighter font-extrabold leading-[0.9] overflow-hidden">
      <Link href={href} className="navigation-item-link block translate-y-full">
        {children}
      </Link>
    </div>
  );
}
