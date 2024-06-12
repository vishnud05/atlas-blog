import React, { ReactNode } from "react";

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-8 bg-background max-md:px-5">
      <div className="flex flex-col px-8 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full gap-4">
        {children}
      </div>
    </div>
  );
};

export default Grid;
