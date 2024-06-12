import React from "react";
import Link from "next/link";
import { BlogResponseWithAuthor } from "@/types";
import {
  extractFirstParagraphText,
  formatDate,
  getShortDescription,
} from "@/utils/helperFunctions";
import Image from "next/image";
const BlogCard3 = ({
  blog,
  className,
}: {
  blog: BlogResponseWithAuthor;
  className?: string;
}) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className={`flex flex-col justify-center px-5 text-sm font-semibold leading-5 max-md:mt-8 hover:opacity-80 transition-all ${className}`}
    >
      <Image
        loading="lazy"
        src={blog.cover_image || "placeholder.svg"}
        alt="blog cover image"
        className="mt-8 w-full aspect-[1.67]"
        width={1000}
        height={1000 / 1.67}
      />
      <div className="mt-8 text-violet-700">{formatDate(blog.createdAt)}</div>
      <div className="flex gap-4 mt-3 text-2xl leading-8 ">
        <div className="flex-1">{blog.title}</div>
        <Image
          loading="lazy"
          src="arrow-icon.svg"
          alt="Arrow Icon"
          className="shrink-0 my-auto w-6 aspect-square"
          width={24}
          height={24}
        />
      </div>
      <div className="mt-3 text-base leading-6 opacity-70">
        {getShortDescription(extractFirstParagraphText(blog.content))}
      </div>
      <div className="flex gap-2 pr-16 mt-6 font-medium text-center flex-wrap max-md:pr-5">
        {blog.tags.map((tag, idx) => (
          <div
            key={tag}
            className="justify-center capitalize px-2.5 py-0.5 text-violet-700 bg-purple-50 rounded-2xl"
          >
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default BlogCard3;
