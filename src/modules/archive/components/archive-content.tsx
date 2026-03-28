import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ArchiveGrid } from "@/modules/archive/components/archive-grid";
import { ArchiveTitle } from "@/modules/archive/components/archive-title";

export function ArchiveContent() {
  return (
    <SmoothScroll>
      <div className="py-60 px-8 overflow-y-hidden h-fit">
        <ArchiveTitle />

        <div className="mb-16 w-full grid grid-cols-8 gap-8 text-xs tracking-tighter uppercase">
          <div className="col-span-2">
            <p className="cursor-pointer">Grid</p>
          </div>
          <div className="opacity-40 col-span-2">
            <p className="cursor-pointer">List</p>
          </div>
        </div>

        <ArchiveGrid />
      </div>
    </SmoothScroll>
  );
}
