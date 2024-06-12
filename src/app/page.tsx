import BlogCard1 from "@/components/custom-ui/BlogCard1";
import BlogCard2 from "@/components/custom-ui/BlogCard2";
import Grid from "@/components/custom-ui/Grid";
import GridColumn from "@/components/custom-ui/GridColumn";
import GridHeader from "@/components/custom-ui/GridHeader";
import GridRow from "@/components/custom-ui/GridRow";
import { getAllBlogs } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import { redirect } from "next/navigation";

export default async function Component() {
  const queryOpt = {
    sort: "-createdAt",
    limit: "3",
    page: "1",
    populate: "author",
  };
  const response = await useQuery<BlogResponseWithAuthor[]>(
    getAllBlogs,
    queryOpt
  );
  if (response.status === "error" || !response.data) {
    redirect("/error");
  }
  const blogs = response.data;
  return (
    <section>
      <div className="justify-center mt-12 font-bold border-t border-b border-solid border-black dark:border-white border-opacity-30 text-[18vw] text-center ">
        THE BLOG
      </div>
      <Grid>
        <GridHeader>Latest Posts</GridHeader>
        <GridRow>
          <BlogCard1 blog={blogs[0]} />
          <GridColumn className="justify-between">
            {blogs.slice(1).map((blog,idx) => <BlogCard2 blog={blog} key={idx}/>)
            }
          </GridColumn>
        </GridRow>
      </Grid>
    </section>
  );
}
