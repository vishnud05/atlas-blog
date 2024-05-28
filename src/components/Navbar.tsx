"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { signOut, useSession } from "next-auth/react";
import { filterLinks } from "@/utils/helperFunctions";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {}, [status]);

  const links = filterLinks(data?.user.role || "unverified");

  const handleAuthentication = () => {
    if (status === "authenticated") {
      signOut({ callbackUrl: "/", redirect: true });
    } else {
      router.push("/signup");
    }
  };

  return (
    <header className="flex items-center justify-between bg-transparent px-4 py-3 shadow-sm dark:bg-gray-950">
      <Link className="flex items-center gap-2" href="/">
        <Image alt="atlas-logo" src="atlas-logo.svg" width={30} height={30} />
        <span className="hidden md:block text-2xl font-bold text-gray-900 dark:text-gray-50">
          A T L A S
        </span>
      </Link>
      <div className="relative md:w-full max-w-[300px]">
        <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          className="h-8 w-full rounded-md border-gray-200 bg-gray-100 pl-8 text-sm focus:border-gray-400 focus:ring-0 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-50"
          placeholder="Search..."
          type="search"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:hidden">
          {links.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link
                className={`text-md text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50$`}
                href={
                  link.title === "Profile"
                    ? `${link.href}/${data?.user._id}`
                    : link.href
                }
                key={link.href}
              >
                {link.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center gap-6 text-sm font-medium">
        <nav className="hidden items-center md:flex gap-6">
          {links.map((link) => (
            <Link
              className={`text-md text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50$`}
              href={
                link.title === "Profile"
                  ? `${link.href}/${data?.user._id}`
                  : link.href
              }
              key={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <Button
          onClick={handleAuthentication}
          className=" inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          {status === "authenticated" ? "Sign Out" : "Get Started"}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
