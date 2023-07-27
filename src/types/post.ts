import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ImageUrlSource = {
  _type: string;
  _key: string;
  url: string;
};
export type Cover = SanityImageSource | ImageUrlSource[];

export type PostMinimal = {
  _id: string;
  title: string;
  overview: string;
  cover: Cover;
  category: string;
  tag: string[];
  _createdAt: string;
  slug: {
    current: string;
  };
};

export type Post = PostMinimal & {
  content: string;
  readingTime: number;
};
