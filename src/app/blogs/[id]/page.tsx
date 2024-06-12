import Comments from "@/components/Comment";
import HTMLContent from "@/components/HTMLContent";
import BlogCard1 from "@/components/custom-ui/BlogCard1";
import { getAllBlogs, getSingleBlog } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import { formatDate } from "@/utils/helperFunctions";
import { redirect } from "next/navigation";
import Image from "next/image";

async function SingleBlogPage({ params }: { params: { id: string } }) {
  const queryOpt = {
    id: params.id,
    populate: "author",
  };

  const response = await useQuery<BlogResponseWithAuthor>(
    getSingleBlog,
    queryOpt
  );

  if (response.status === "error" || !response.data) {
    redirect("/error");
  }
  const blog = response.data;

  const recentQueryOpt = {
    sort: "-createdAt",
    limit: "5",
    page: "1",
    populate: "author",
  };
  const recentResponse = await useQuery<BlogResponseWithAuthor[]>(
    getAllBlogs,
    recentQueryOpt
  );
  if (recentResponse.status === "error" || !recentResponse.data) {
    redirect("/error");
  }
  const recentBlogs = recentResponse.data;

  return (
    <div className="self-stretch container">
      <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
        <div className="flex flex-col w-[31%] max-lg:ml-0 max-lg:w-full">
          <div className="flex flex-col gap-8 justify-center px-5 text-sm font-semibold leading-5 max-lg:mt-8 max-lg:hidden">
            <div className="text-2xl leading-8 ">Recent blog posts</div>
            {recentBlogs.map((blog, idx) => {
              if (blog.id === params.id) return null;
              return <BlogCard1 blog={blog} key={idx} />;
            })}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[69%] max-lg:ml-0 max-lg:w-full">
          <div className="flex flex-col gap-5 grow self-stretch px-5 max-md:mt-8 max-md:max-w-full">
            <div className="text-sm font-semibold leading-5 text-violet-700 max-md:max-w-full">
              {blog.author.name} • {formatDate(blog.createdAt)}
            </div>
            <div className="mt-8 text-4xl font-bold leading-8  max-md:max-w-full">
              {blog.title}
            </div>
            <Image
              loading="lazy"
              src={blog.cover_image || "placeholder.svg"}
              alt="blog cover image"
              className="mt-8 w-full aspect-[1.82] max-md:max-w-full"
              width={1000}
              height={1000 / 1.82}
            />
            <div className="mt-8 text-base leading-6 text-slate-900 dark:text-neutral-300 max-md:max-w-full">
              <HTMLContent content={blog.content} />
            </div>

            <div className="flex gap-2 pr-20 mt-6 text-sm font-medium leading-5 text-center whitespace-nowrap max-md:flex-wrap max-md:pr-5">
              {blog.tags.map((tag, idx) => (
                <div
                  key={tag}
                  className="justify-center capitalize px-2.5 py-0.5 text-violet-700 bg-purple-50 rounded-2xl"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              <div className="space-y-6">
                {blog.comments.map((comment) => (
                  <Comments comment={comment} key={comment._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
