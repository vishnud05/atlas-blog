import { Suspense } from "react";
import TrendingBlog from "./TrendingBlog";
import { LatestBlogsSkeleton, TrendingBlogSkeleton } from "./LoadingSkeletons";
import LatestBlogs from "./LatestBlogs";

export default function AllBlogs() {
  return (
    <main className="w-full mx-auto px-4 md:px-6 py-8 md:py-12 bg-[#FFF8F0] text-[#333]">
      <div className="container">
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-4 md:mb-6">Trending</h2>
          <Suspense fallback={<TrendingBlogSkeleton />}>
            <TrendingBlog />
          </Suspense>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 md:mb-6">Latest</h2>
          <Suspense fallback={<LatestBlogsSkeleton />}>
            <LatestBlogs />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
