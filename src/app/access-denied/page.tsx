import Link from "next/link";
import React from "react";

const Denied = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-red-600  text-4xl">Access Denied</h1>
        <p>If you should have access to this page, Please contact support</p>
        <Link href="/" className="bg-blue-500 rounded-lg px-4 py-2 text-white">
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default Denied;
