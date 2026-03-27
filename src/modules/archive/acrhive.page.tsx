import { Navbar } from "@/components/layout/navbar";
import { ArchiveContent } from "@/modules/archive/components/archive-content";

export function ArchivePage() {
  return (
    <div id="archive" className="min-h-screen w-screen">
      <Navbar />
      <ArchiveContent />
    </div>
  );
}
