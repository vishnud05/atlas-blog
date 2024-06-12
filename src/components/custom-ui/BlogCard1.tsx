import { BlogResponseWithAuthor } from "@/types";
import React from "react";
import {
  extractFirstParagraphText,
  formatDate,
  getShortDescription,
} from "@/utils/helperFunctions";
import Link from "next/link";
import Image from "next/image";

const BlogCard1 = ({ blog }: { blog: BlogResponseWithAuthor }) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className="flex flex-col flex-1 max-md:ml-0 max-md:w-full hover:opacity-80 transition-all"
    >
      <div className="flex flex-col grow self-stretch text-sm font-semibold leading-5 max-md:mt-8 max-md:max-w-full">
        <Image
          loading="lazy"
          src={blog.cover_image || "placeholder.svg"}
          alt="blog cover image"
          className="w-full aspect-[2.56] max-md:max-w-full"
          width={1000}
          height={1000 / 2.56}
        />
        <div className="mt-8 text-violet-700 max-md:max-w-full">
          {blog.author.name} • {formatDate(blog.createdAt)}
        </div>
        <div className="flex gap-4 mt-3 text-2xl leading-8  max-md:flex-wrap">
          <div className="flex-1 max-md:max-w-full">{blog.title}</div>
          <Image
            loading="lazy"
            src="arrow-icon.svg"
            alt="Arrow Icon"
            className="shrink-0 my-auto w-6 aspect-square"
            width={24}
            height={24}
          />
        </div>
        <div className="mt-3 text-base leading-6 text-gray-500 max-md:max-w-full">
          {getShortDescription(extractFirstParagraphText(blog.content))}
        </div>
        <div className="flex gap-2 pr-20 mt-6 font-medium text-center  flex-wrap max-md:pr-5">
          {blog.tags.map((tag, idx) => (
            <div
              key={tag}
              className="justify-center capitalize px-2.5 py-0.5 text-violet-700 bg-purple-50 rounded-2xl"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard1;
