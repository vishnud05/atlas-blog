import Comments from "@/components/Comment";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getSingleBlog } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { BlogResponseWithAuthor } from "@/types";
import { getInitials } from "@/utils/helperFunctions";
import { Link } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

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

  return (
    <main className="w-full bg-[#fffaf0]">
      <div className="flex container flex-col items-center justify-center py-12 md:py-24 lg:py-32 ">
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
            <Image
              alt="Cover Image"
              className="h-full w-full object-cover object-center"
              height={1080}
              src={blog.cover_image}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff9900]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-[#fffaf0]">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-20 w-20 md:h-24 md:w-24">
              <AvatarImage alt="Author" src="/placeholder-avatar.jpg" />
              <AvatarFallback>{getInitials(blog.author.name)}</AvatarFallback>
            </Avatar>

            <div className="mt-4 text-center md:text-left">
              <div className="font-medium">{blog.author.name}</div>
              <div className="text-[#ff9900] dark:text-[#ffcc80] text-sm">
                {blog.author.username}
              </div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-[#fffaf0]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="space-y-6">
              {blog.comments.map((comment) => (
                <Comments comment={comment} key={comment._id} />
              ))}
            </div>
          </div>
          <div className="bg-[#fffaf0] dark:bg-[#1a1a1a] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-medium">Likes & Tags</div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <HeartIcon className="h-5 w-5 text-[#ff9900] dark:text-[#ffcc80]" />
                  <p className="text-[#ff9900] dark:text-[#ffcc80] ">
                    {blog.likes}
                  </p>
                </Button>
                <Button size="icon" variant="ghost">
                  <ShareIcon className="h-5 w-5 text-[#ff9900] dark:text-[#ffcc80]" />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-[#f5f5f5] dark:bg-[#333333] rounded-full px-3 py-1 text-sm text-[#ff9900] dark:text-[#ffcc80]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export default SingleBlogPage;
