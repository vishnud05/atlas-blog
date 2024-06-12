import { BlogResponseWithAuthor } from "@/types";
import {
  extractFirstParagraphText,
  formatDate,
  getShortDescription,
} from "@/utils/helperFunctions";
import React from "react";
import Link from "next/link";

import Image from "next/image";
const BlogCard4 = ({ blog }: { blog: BlogResponseWithAuthor }) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className="flex gap-5 max-md:flex-col max-md:gap-0 hover:opacity-80 transition-all"
    >
      <figure className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <Image
          loading="lazy"
          src={blog.cover_image}
          alt="Blog Cover Image"
          className="grow w-full aspect-[2.38] max-md:mt-8 max-md:max-w-full"
          width={1000}
          height={1000 / 2.38}
        />
      </figure>
      <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <time className="text-violet-700 max-md:max-w-full">
          {formatDate(blog.createdAt)}
        </time>
        <header className="flex gap-4 mt-3 text-2xl leading-8  max-md:flex-wrap">
          <h2 className="flex-1 max-md:max-w-full font-semibold">
            {blog.title}
          </h2>
          <Image
            loading="lazy"
            src="arrow-icon.svg"
            alt="Arrow Icon"
            className="shrink-0 my-auto w-6 aspect-square"
            width={24}
            height={24}
          />
        </header>
        <p className="mt-3 text-base leading-6  max-md:max-w-full font-semibold opacity-70">
          {getShortDescription(extractFirstParagraphText(blog.content))}
        </p>
        <div className="flex gap-2 pr-20 mt-6 font-medium text-center whitespace-nowrap max-md:flex-wrap max-md:pr-5">
          {blog.tags.map((tag, idx) => (
            <div
              key={tag}
              className="justify-center capitalize px-2.5 py-0.5 text-violet-700 bg-purple-50 rounded-2xl"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>
    </Link>
  );
};

export default BlogCard4;
