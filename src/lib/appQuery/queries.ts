import { Blog } from "@/types";
import AtlasError from "../apiError";

export const getAllBlogs = async (queryOpt: any): Promise<Blog[]> => {
  const url = `${process.env.BASE_URL}/blogs?` + new URLSearchParams(queryOpt);

  const responseHeader = await fetch(url, { cache: "no-store" });

  if (!responseHeader.ok) {
    throw new AtlasError("Network request error.", 401);
  }

  const response = await responseHeader.json();

  if (response.status === "error") {
    throw new AtlasError(response.message, 402);
  }

  return response.data;
};

export const getSingleBlog = async (queryOpt: any) => {
  const id = queryOpt.id;
  delete queryOpt.id;

  const url =
    `${process.env.BASE_URL}/blogs/${id}?` + new URLSearchParams(queryOpt);

  const responseHeader = await fetch(url, { cache: "no-store" });

  if (!responseHeader.ok) {
    throw new Error("Network response was not ok");
  }

  const response = await responseHeader.json();

  if (response.status === "error") {
    throw new Error(response.message);
  }

  return response.data;
};

export const getUser = async (queryOpt: any) => {
  const id = queryOpt.id;
  delete queryOpt.id;

  const url =
    `${process.env.BASE_URL}/profile/${id}?` + new URLSearchParams(queryOpt);

  const responseHeader = await fetch(url, { cache: "no-store" });

  if (!responseHeader.ok) {
    throw new Error("Network response was not ok");
  }

  const response = await responseHeader.json();

  if (response.status === "error") {
    throw new Error(response.message);
  }

  return response.data;
};
