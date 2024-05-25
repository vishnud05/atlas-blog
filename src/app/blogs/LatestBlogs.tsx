import HorizontalBlog from "@/components/HorizontalBlog";
import { getAllBlogs } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

async function LatestBlogs() {
  const queryOpt = {
    sort: "-createdAt",
    limit: "3",
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
    <div className="space-y-4 md:space-y-6">
      {blogs.map((blog) => (
        <HorizontalBlog blog={blog} key={blog._id} />
      ))}
    </div>
  );
}

export default LatestBlogs;
