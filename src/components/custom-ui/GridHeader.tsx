import React, { ReactNode } from "react";

const GridHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-2xl font-semibold leading-8  max-md:max-w-full">
      {children}
    </div>
  );
};

export default GridHeader;
