export type PostMinimal = {
  title: string;
  overview: string;
  _id: string;
  _createdAt: string;
};

export type Post = PostMinimal & {
  content: string;
  readingTime: number;
  slug: {
    current: string;
  };
};
