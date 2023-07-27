import { client } from "@/lib/sanity";
import { Post, PostMinimal } from "@/types/post";
import CalculateReadingTime from "@/util/CalculateReadingTime";
import formattingDayJs from "@/util/formattingDayJs";

type Sort = "asc" | "desc";

export async function getData(sort: Sort = "asc"): Promise<PostMinimal[]> {
  const query =
    sort === "asc"
      ? `*[_type == "post"] | order(_createdAt desc)`
      : `*[_type == "post"] | order(_createdAt asc)`;

  const result = await client.fetch(query);
  return result.map((post: Post) => {
    return {
      ...post,
      _createdAt: formattingDayJs(post._createdAt),
    };
  });
}

export async function getPost(slug: string): Promise<Post> {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const data = await client.fetch(query, { slug });
  return {
    ...data,
    _createdAt: formattingDayJs(data._createdAt),
    readingTime: CalculateReadingTime(data.content),
  };
}
