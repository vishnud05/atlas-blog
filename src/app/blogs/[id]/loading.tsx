import React from "react";

const Loading: React.FC = () => {
  return (
    <main className="w-full bg-[#fffaf0]">
      <div className="flex container flex-col items-center justify-center py-12 md:py-24 lg:py-32 ">
        <div className="mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
            <div className="animate-pulse bg-gray-200 h-full w-full"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-[#fffaf0]">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="animate-pulse bg-gray-200 h-20 w-20 md:h-24 md:w-24 rounded-full" />
            <div className="mt-4 text-center md:text-left">
              <div className="animate-pulse bg-gray-200 h-4 w-24 mb-2" />
              <div className="animate-pulse bg-gray-200 h-3 w-16" />
            </div>
          </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <div className="animate-pulse bg-gray-200 h-4 w-3/4 mb-4" />
            <div className="animate-pulse bg-gray-200 h-4 w-5/6 mb-4" />
            <div className="animate-pulse bg-gray-200 h-4 w-2/3 mb-4" />
            <div className="animate-pulse bg-gray-200 h-4 w-3/4 mb-4" />
            <div className="animate-pulse bg-gray-200 h-4 w-5/6 mb-4" />
            <div className="animate-pulse bg-gray-200 h-4 w-2/3 mb-4" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-[#fffaf0]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="space-y-6">
              <div className="animate-pulse bg-gray-200 h-4 w-1/2 mb-4" />
              <div className="animate-pulse bg-gray-200 h-4 w-3/4 mb-4" />
              <div className="animate-pulse bg-gray-200 h-4 w-5/6 mb-4" />
            </div>
          </div>
          <div className="bg-[#fffaf0] dark:bg-[#1a1a1a] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="animate-pulse bg-gray-200 h-4 w-1/4" />
              <div className="flex items-center gap-2">
                <div className="animate-pulse bg-gray-200 h-5 w-5 rounded-full" />
                <div className="animate-pulse bg-gray-200 h-4 w-6" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="animate-pulse bg-gray-200 h-6 w-16 rounded-full" />
              <div className="animate-pulse bg-gray-200 h-6 w-12 rounded-full" />
              <div className="animate-pulse bg-gray-200 h-6 w-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
