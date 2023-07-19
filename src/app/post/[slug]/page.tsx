import { getPost } from "@/service/sanity";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params }: Props) {
  const data = await getPost(params.slug);
  return (
    <div className="xl:divide-gray-200 xl:divide-y xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-teal-500">
                {data._createdAt}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="pt-10 pb-8 prose prose-lg max-w-none dark:prose-invert"></div>
        </div>
      </div>
    </div>
  );
}
