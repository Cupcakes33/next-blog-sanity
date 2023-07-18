import { client } from "@/lib/sanity";
import { Post } from "@/types/post";
import dayjs from "dayjs";
import readingTime from "reading-time";

export async function getData(): Promise<Post[]> {
  const query = `*[_type == "post"]`;
  const result = await client.fetch(query);
  return result.map((post: any) => {
    return {
      ...post,
      _createdAt: dayjs(post._createdAt).format("YY.MM.DD"),
      readingTime: Math.ceil(readingTime(post.content).minutes),
    };
  });
}
