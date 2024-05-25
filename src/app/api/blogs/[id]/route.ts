import APIFeatures from "@/lib/apiFeatures";
import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/models/Blog.Model";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  dbConnect();
  try {
    const { id } = params;
    const queryParams = Object.fromEntries(req.nextUrl.searchParams);

    const blogQuery = new APIFeatures(BlogModel.findById(id), queryParams)
      .selectFields()
      .populate();
    const blog = await blogQuery.query;

    if (!blog) {
      throw new Error("Error fetching blog");
    }
    return Response.json({
      status: "success",
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: "Error fetching blog",
      data: error,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  dbConnect();
  try {
    const { id } = params;
    const blog = await BlogModel.findByIdAndDelete(id);
    if (!blog) {
      throw new Error("Error deleting blog");
    }
    return Response.json({
      status: "success",
      message: "Blog deleted successfully",
      data: null,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: "Error deleting blog",
      data: error,
    });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  dbConnect();

  try {
    const { id } = params;

    const data = await req.json();

    const blog = await BlogModel.findByIdAndUpdate(id, {
      ...data,
      updatedAt: new Date(Date.now()),
    });

    if (!blog) {
      throw new Error("Error updating blog");
    }
    return Response.json({
      status: "success",
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: "Error updating blog",
      data: error,
    });
  }
}
