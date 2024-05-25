import React from "react";

export const TrendingBlogSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      <div className="relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-10">
          <span className="sr-only">View post</span>
        </div>
        <div className="w-full h-[400px] bg-gray-200 animate-pulse"></div>
        <div className="p-6 bg-[#FFF0E6]">
          <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 animate-pulse w-8 h-8"></div>
            <div>
              <div className="h-4 bg-gray-200 animate-pulse mb-1"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LatestBlogsSkeleton = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-10">
          <span className="sr-only">View post</span>
        </div>
        <div className="w-full h-[400px] bg-gray-200 animate-pulse"></div>
        <div className="p-6 bg-[#FFF0E6]">
          <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 animate-pulse w-8 h-8"></div>
            <div>
              <div className="h-4 bg-gray-200 animate-pulse mb-1"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-10">
          <span className="sr-only">View post</span>
        </div>
        <div className="w-full h-[400px] bg-gray-200 animate-pulse"></div>
        <div className="p-6 bg-[#FFF0E6]">
          <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 animate-pulse w-8 h-8"></div>
            <div>
              <div className="h-4 bg-gray-200 animate-pulse mb-1"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-10">
          <span className="sr-only">View post</span>
        </div>
        <div className="w-full h-[400px] bg-gray-200 animate-pulse"></div>
        <div className="p-6 bg-[#FFF0E6]">
          <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 animate-pulse w-8 h-8"></div>
            <div>
              <div className="h-4 bg-gray-200 animate-pulse mb-1"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
