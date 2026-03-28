"use client";

import { ArchiveCol } from "@/modules/archive/components/archive-col";

import { ARCHIVES } from "@/modules/archive/data/archive.data";

export function ArchiveGrid() {
  return (
    <div
      className="w-full grid grid-cols-8 gap-8 gap-y-30 text-xs tracking-tighter uppercase"
      style={{ rowGap: "7.5rem" }}
    >
      {ARCHIVES.map((archive, key) => (
        <ArchiveCol key={key} archive={archive} />
      ))}
    </div>
  );
}
