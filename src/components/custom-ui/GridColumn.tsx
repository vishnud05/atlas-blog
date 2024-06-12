import React, { ReactNode } from "react";

const GridColumn = ({ children, className }: { children: ReactNode, className? : string }) => {
  return (
    <div className={`flex flex-col flex-1 grow justify-center max-md:mt-8 max-md:w-full gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default GridColumn;
