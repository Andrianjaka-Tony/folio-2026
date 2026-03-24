import { ReactNode } from "react";
import ReactLenis from "lenis/react";

type Props = { children: ReactNode };
export function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis root options={{ duration: 1 }}>
      {children}
    </ReactLenis>
  );
}
