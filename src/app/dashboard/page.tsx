import BlogCard1 from "@/components/custom-ui/BlogCard1";
import Grid from "@/components/custom-ui/Grid";
import { getAllBlogs } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextRequestWithAuth } from "next-auth/middleware";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/[...nextauth]/options";
import GridRow from "@/components/custom-ui/GridRow";
import BlogCard3 from "@/components/custom-ui/BlogCard3";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }
  const queryOpt = {
    sort: "-createdAt",
    limit: "9",
    page: "1",
    author: session.user._id,
  };
  const response = await useQuery<BlogResponseWithAuthor[]>(
    getAllBlogs,
    queryOpt
  );
  if (response.status === "error" || !response.data) {
    redirect("/error");
  }
  const blogs = response.data;

  let blogsArray = [];

  for (let i = 0; i < blogs.length; i += 3) {
    blogsArray.push(blogs.slice(i, i + 3));
  }

  return (
    <Grid>
      {blogsArray.map((row, idx) => (
        <GridRow key={idx}>
          {row.map((blog, idx) => (
            <BlogCard3 blog={blog} key={idx} />
          ))}
        </GridRow>
      ))}
    </Grid>
  );
}
