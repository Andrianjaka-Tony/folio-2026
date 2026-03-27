import { ArchiveImage } from "@/modules/archive/components/col-variants/archive-image";
import { ArchiveText } from "@/modules/archive/components/col-variants/archive-text";
import { ArchiveCol as T } from "@/modules/archive/types/archive-col.type";

type Props = { archive: T };
export function ArchiveCol({ archive }: Props) {
  if (archive.type === "text") return <ArchiveText archive={archive} />;
  if (archive.type === "image") return <ArchiveImage archive={archive} />;
  if (archive.type === "empty") return <div />;
}
