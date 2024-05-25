import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h1>
          Unexpected error occurred. Please try again later.If the problem
          persists, please contact support.
        </h1>
        <Link href="/" className="bg-blue-500 px-4 py-2 text-white rounded-lg">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
