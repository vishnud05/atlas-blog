import BlogCard4 from "@/components/custom-ui/BlogCard4";
import { getAllBlogs } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import * as React from "react";
import { redirect } from "next/navigation";

const Pagination: React.FC = () => (
  <nav className="flex justify-center items-center px-16 py-8 w-full text-sm font-medium leading-5 whitespace-nowrap  max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between items-start pt-5 w-full border-t border-solid border-gray-200 border-opacity-30 max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-2 justify-center mt-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/609b7d0df9932c996b6c6cc81dd1e5f1306b5b8c39d72c39894333721d6a6063?apiKey=465f61beb0264131b80c2629d78776b3&"
          alt="Previous"
          className="shrink-0 w-5 aspect-square"
        />
        <span>Previous</span>
      </div>
      <ul className="flex gap-0.5 self-stretch text-center">
        <li className="justify-center items-center px-4 w-10 h-10 bg-purple-50 rounded-lg text-neutral-900">
          1
        </li>
        <li className="justify-center items-start px-4 py-2.5 rounded-lg">2</li>
        <li className="justify-center items-start px-4 py-2.5 rounded-lg">3</li>
        <li className="justify-center px-3.5 py-2.5 rounded-lg">...</li>
        <li className="justify-center items-start px-4 py-2.5 rounded-lg">8</li>
        <li className="justify-center items-start px-4 py-2.5 rounded-lg">9</li>
        <li className="justify-center px-3 py-2.5 rounded-lg">10</li>
      </ul>
      <div className="flex gap-2 justify-center mt-2.5">
        <span>Next</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b75940ba2566f12939122b1ba96a3b82243443342b607bc6cac601e49e4d75?apiKey=465f61beb0264131b80c2629d78776b3&"
          alt="Next"
          className="shrink-0 w-5 aspect-square"
        />
      </div>
    </div>
  </nav>
);

const BlogsPage: React.FC = async () => {
  const queryOpt = {
    sort: "-createdAt",
    limit: "10",
    page: "1",
    populate: "author",
  };
  const response = await useQuery<BlogResponseWithAuthor[]>(
    getAllBlogs,
    queryOpt
  );
  if (response.status === "error" || !response.data) {
    redirect("/error");
  }
  const blogs = response.data;

  return (
    <main className="flex flex-col pb-20 ">
      <header className="flex justify-center items-center px-16 py-8 w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1216px] max-md:max-w-full">
          <h1 className="justify-center self-center text-7xl font-bold text-white border-b border-white border-solid max-md:text-4xl">
            ALL BLOGS
          </h1>
          <section className="mt-16 max-md:mt-10 max-md:max-w-full flex flex-col gap-8">
            {blogs.map((entry, index) => (
              <BlogCard4 blog={entry} key={index} />
            ))}
          </section>
        </div>
      </header>
      <Pagination />
    </main>
  );
};

export default BlogsPage;
