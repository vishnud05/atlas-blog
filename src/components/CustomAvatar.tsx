import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "@/utils/helperFunctions";

type CustomAvatarType = {
  src?: string;
  alt: string;
  name: string;
};

const CustomAvatar = ({ src, alt, name }: CustomAvatarType) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{getInitials(name || "User")}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
