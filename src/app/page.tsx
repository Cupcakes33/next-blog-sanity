import PostsWrapper from "@/components/Home/PostsWrapper";

import { getData } from "@/service/sanity";
import generateSanityImage from "@/util/generateSanityImage";
import Image from "next/image";

export const revalidate = 60 * 60;

export default async function MainPage() {
  const data = await getData("asc");
  const image = generateSanityImage(data[0].cover);

  return (
    <div>
      <div className="pt-6 pb-4 space-y-2 md:space-y-8">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Today I Learned
        </h1>
        <Image src={image} alt="" width={500} height={200} />
        <hr className="w-full transition-all border-1 border-neutral-300 dark:border-neutral-600" />
      </div>
      <PostsWrapper posts={data} />
    </div>
  );
}
