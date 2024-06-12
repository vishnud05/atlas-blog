import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/models/Blog.Model";
import { NextRequest } from "next/server";
import APIFeatures from "@/lib/apiFeatures";
import supabase from "@/utils/supabaseConfig";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  dbConnect();
  try {
    const formData = await req.formData();
    const coverImage = formData.get("cover_image") as File;

    if (!coverImage) {
      throw new Error("Cover image is required");
    }

    // UPLOAD TO SUPABASE STORAGE AND GET PUBLIC URL
    const { data, error } = await supabase.storage
      .from("cover-images")
      .upload(`${randomUUID()}.${coverImage.name.split(".")[1]}`, coverImage, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      throw new Error(error.message);
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("cover-images").getPublicUrl(data.path);

    const blogData = Object.fromEntries(formData);
    const tags = (formData.get("tags") as string).split(" ");
    blogData.cover_image = publicUrl;

    console.log(blogData);

    const newBlog = await BlogModel.create({ ...blogData, tags });
    console.log(newBlog);

    if (!newBlog) {
      throw new Error("Error creating blog");
    }

    return Response.json(
      {
        status: "success",
        message: "Blog created successfully",
        data: newBlog,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return Response.json(
      {
        status: "error",
        message: error.message,
        data: error,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  dbConnect();

  try {
    const queryParams = Object.fromEntries(req.nextUrl.searchParams);

    const features = new APIFeatures(BlogModel.find(), queryParams)
      .filter()
      .sort()
      .selectFields()
      .paginate()
      .populate();

    const blogs = await features.query;

    if (!blogs) {
      throw new Error("Error fetching blogs");
    }

    return Response.json({
      status: "success",
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error: any) {
    return Response.json({
      status: "error",
      message: "Error fetching blogs",
      data: error.message,
    });
  }
}
