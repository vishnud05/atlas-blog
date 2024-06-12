import { Blog } from "@/types";
import mongoose, { Model, Schema } from "mongoose";

const BlogSchema: Schema<Blog> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    likes: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: true,
    },
    cover_image: {
      type: String,
      default: "placeholder.svg",
    },
    comments: {
      type: [
        {
          author: String,
          content: String,
          createdAt: Date,
        },
      ],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

const BlogModel =
  (mongoose.models.Blog as Model<Blog>) ||
  mongoose.model<Blog>("Blog", BlogSchema);
export default BlogModel;
