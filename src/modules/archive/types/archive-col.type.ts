export type ArchiveText = {
  type: "text";
  title: string;
  description: string;
};

export type ArchiveImage = {
  type: "image";
  source: string;
  alt: string;
  aspectRatio: number;
};

export type ArchiveEmpty = {
  type: "empty";
};

export type ArchiveCol = ArchiveText | ArchiveImage | ArchiveEmpty;
