import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllBlogs } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import { formatDate, getInitials } from "@/utils/helperFunctions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function TrendingBlog() {
  const queryOpt = {
    sort: "-likes",
    limit: "1",
    populate: "author",
  };
  const response = await useQuery<BlogResponseWithAuthor[]>(
    getAllBlogs,
    queryOpt
  );
  if (response.status === "error" || !response.data || !response.data[0]) {
    redirect("/error");
  }
  const blog = response.data[0];

  const formattedDate = formatDate(blog.updatedAt);

  return (
    <div className=" grid grid-cols-1 gap-4 md:gap-6">
      <div className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href={`/blogs/${blog._id}`}>
          <span className="sr-only">View post</span>
        </Link>
        <Image
          alt="Blog post image"
          className="w-full h-[400px] object-cover group-hover:opacity-50 transition-opacity"
          height={600}
          src={blog.cover_image || "placeholder.svg"}
          style={{
            aspectRatio: "800/600",
            objectFit: "cover",
          }}
          width={800}
        />
        <div className="p-6 bg-[#FFF0E6]">
          <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
          <p className="text-[#666] line-clamp-3">{blog.content}</p>
          <div className="flex items-center gap-2 mt-4">
            <Avatar className="h-10 w-10">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>{getInitials(blog.author.name)}</AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm font-medium">{blog.author.name}</p>
              <p className="text-[#888] text-sm">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingBlog;
