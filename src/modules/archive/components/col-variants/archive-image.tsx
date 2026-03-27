import { ArchiveImage as T } from "@/modules/archive/types/archive-col.type";

type Props = { archive: T };
export function ArchiveImage({ archive }: Props) {
  const { source, alt, aspectRatio } = archive;

  return (
    <div className="archive-image mt-30 w-full" style={{ aspectRatio }}>
      <img
        src={source}
        alt={alt}
        className="w-full object-cover"
        style={{ aspectRatio }}
        draggable={false}
      />
    </div>
  );
}
