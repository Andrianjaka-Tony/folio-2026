import { ArchiveText as T } from "@/modules/archive/types/archive-col.type";

type Props = { archive: T };
export function ArchiveText({ archive }: Props) {
  return (
    <div className="flex flex-col gap-4 text-xs tracking-tighter leading-tight uppercase">
      <h3>{archive.title}</h3>
      <p>{archive.description}</p>
    </div>
  );
}
