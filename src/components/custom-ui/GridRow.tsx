import React, { ReactNode } from "react";

const GridRow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-5 grow max-md:flex-col max-md:gap-0">
      {children}
    </div>
  );
};

export default GridRow;
