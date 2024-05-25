import { BlogResponseWithAuthor } from "@/types";
import { formatDate, getInitials } from "@/utils/helperFunctions";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

function HorizontalBlog({ blog }: { blog: BlogResponseWithAuthor }) {
  const formattedDate = formatDate(blog.updatedAt);

  return (
    <Link
      href={`/blogs/${blog._id}`}
      className="flex items-center gap-4 md:gap-6 hover:opacity-75"
    >
      <Image
        alt="Blog post image"
        className="rounded-lg w-20 h-15 object-cover"
        height={75}
        src={blog.cover_image || "placeholder.svg"}
        style={{
          aspectRatio: "100/75",
          objectFit: "cover",
        }}
        width={100}
      />
      <div>
        <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>{getInitials(blog.author.name)}</AvatarFallback>
          </Avatar>
          <p className="text-[#888] text-sm">
            {`${blog.author.name} - ${formattedDate}`}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default HorizontalBlog;
