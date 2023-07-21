import CalenderIcon from "@/icons/CalendarIcon";
import { Post } from "@/types/post";
import Link from "next/link";
import React from "react";

type Props = {
  posts: Post[];
};
export default function PostsWrapper({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`/post/${post.slug.current}`} prefetch key={post._id}>
          <li className="p-2 py-4 space-y-3 transition-all rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 xl:col-span-2">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                {post.title}
              </h3>
              <p className="prose text-gray-500 max-w-none dark:text-gray-400 line-clamp-2">
                {post.overview}
              </p>

              <div className="flex items-center space-x-1 text-xs leading-6 text-teal-500 font-msedium">
                <CalenderIcon width={14} height={14} />
                <span>{post._createdAt}</span>
              </div>
            </article>
          </li>
        </Link>
      ))}
    </ul>
  );
}
