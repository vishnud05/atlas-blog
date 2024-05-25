import { Document } from "mongoose";
import { Role } from "./constants";
import { Schema } from "mongoose";

// Database Models

export interface User extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  verificationCode: string;
  verificationTokenExpires: Date;
  bio: string;
  role: Role;
}

export interface Comment extends Document {
  author: string;
  content: string;
  createdAt: Date;
}

export interface Blog extends Document {
  title: string;
  author: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  likes: number;
  tags: string[];
  category: string;
  comments: Comment[];
  cover_image: string;
}

export interface BlogResponseWithAuthor extends Document {
  title: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  likes: number;
  tags: string[];
  category: string;
  comments: Comment[];
  cover_image: string;
}
// Email Templates

export interface EmailTemplateProps {
  username: string;
  verifyCode: string;
}

export interface sendVerificationEmailProps extends EmailTemplateProps {
  email: string;
}

export type ClientResponseObject<T> = {
  status: "success" | "error";
  message: string;
  data: T | null;
  error: Error | null;
};
