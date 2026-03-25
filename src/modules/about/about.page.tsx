import { Navbar } from "@/components/layout/navbar";
import { AboutFooter } from "@/modules/about/components/about-footer";
import { AboutContent } from "@/modules/about/components/about.content";

export function AboutPage() {
  return (
    <div id="about" className="w-screen h-screen">
      <Navbar />
      <AboutContent />
      <AboutFooter />
    </div>
  );
}
