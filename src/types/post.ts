export type Post = {
  title: string;
  overview: string;
  content: any;
  _id: string;
  _createdAt: string;
  readingTime: number;
  slug: {
    current: string;
  };
};
