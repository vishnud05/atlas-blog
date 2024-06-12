import React from "react";


const Loading: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full container">
      <div className="flex flex-col gap-5 grow self-stretch px-5 max-md:mt-8 max-md:max-w-full">
        <div className="text-sm font-semibold leading-5 text-violet-700 max-md:max-w-full">
          <div className="animate-pulse bg-gray-300 h-4 w-1/4"></div>
        </div>
        <div className="mt-8 text-4xl font-bold leading-8 text-white max-md:max-w-full">
          <div className="animate-pulse bg-gray-300 h-8 w-3/4"></div>
        </div>
        <div className="mt-8">
          <div className="animate-pulse bg-gray-300 h-96 w-full"></div>
        </div>
        <div className="mt-8 text-base leading-6 text-neutral-300 max-md:max-w-full">
          <div className="animate-pulse bg-gray-300 h-4 w-3/4"></div>
        </div>
        <div className="flex gap-2 pr-20 mt-6 text-sm font-medium leading-5 text-center whitespace-nowrap max-md:flex-wrap max-md:pr-5">
          <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
        </div>
        <div>
          
          <div className="space-y-6">
            <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
            <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
            <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Loading;
