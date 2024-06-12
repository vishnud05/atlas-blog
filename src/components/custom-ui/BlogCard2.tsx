import { BlogResponseWithAuthor } from "@/types";
import React from "react";
import Image from "next/image";
import {
  extractFirstParagraphText,
  formatDate,
  getShortDescription,
} from "@/utils/helperFunctions";
import Link from "next/link";

const BlogCard2 = ({ blog }: { blog: BlogResponseWithAuthor }) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className="max-md:max-w-full hover:opacity-80 cursor-pointer transition-all"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            className="grow w-full -[1.59] max-md:mt-6"
            alt="blog cover image"
            src={blog.cover_image || "placeholder.svg"}
            width={1000}
            height={1000 / 1.59}
          />
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-sm font-semibold leading-5 max-md:mt-6">
            <div className="text-violet-700">
              {blog.author.name} • {formatDate(blog.createdAt)}
            </div>
            <div className="mt-3 text-lg leading-7 ">{blog.title}</div>
            <div className="mt-2 text-base leading-6 text-gray-500">
              {getShortDescription(extractFirstParagraphText(blog.content))}
            </div>
            <div className="flex gap-2 mt-6 font-medium text-center flex-wrap">
              {blog.tags.map((tag, idx) => (
                <div
                  key={tag}
                  className="justify-center capitalize px-2.5 py-0.5 text-violet-700 bg-purple-50 rounded-2xl"
                >
                  {tag}
                </div>
              ))}
              {/* <div className="justify-center px-2.5 py-0.5 text-pink-700 bg-pink-50 rounded-2xl">
                Research
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard2;
