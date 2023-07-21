import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="w-full mt-4 prose dark:prose-dark max-w-none">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              rehypePrism,
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                { properties: { className: ["anchor"] } },
              ],
            ],
            format: "mdx",
          },
        }}
      />
    </div>
  );
}
