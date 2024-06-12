import PostForm from "@/components/PostForm";

export default function Dashboard() {
  return (
    <div className="grid gap-6 w-full">
      <div className="grid gap-2 w-full">
        <h1 className="text-3xl font-bold">Create Your Blog</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Publish your blog content.
        </p>
      </div>
      <div className="w-full">
        <PostForm />
      </div>
    </div>
  );
}
