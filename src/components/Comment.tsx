import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Comment } from "@/types";
import { convertDatetoTimeAgo, getInitials } from "@/utils/helperFunctions";

function Comments({ comment }: { comment: Comment }) {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-10 w-10">
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
        <AvatarFallback>{getInitials(comment.author)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-medium">{comment.author}</div>
          <div className="text-xs text-[#ff9900] dark:text-[#ffcc80]">
            {convertDatetoTimeAgo(comment.createdAt.toString())}
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comments;
