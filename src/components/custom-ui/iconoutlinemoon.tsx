import type { NextPage } from "next";

export type IconoutlinemoonType = {
  className?: string;
};

const Iconoutlinemoon: NextPage<IconoutlinemoonType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[1.5rem] w-[1.5rem] rounded-xl bg-white dark:bg-black transition-all ease-in-out duration-300 flex flex-row items-start justify-start ${className}`}
    ></div>
  );
};

export default Iconoutlinemoon;
