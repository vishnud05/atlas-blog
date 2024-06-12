"use client";
import type { NextPage } from "next";
import Iconoutlinemoon from "./custom-ui/iconoutlinemoon";
import Link from "next/link";
import { filterLinks } from "@/utils/helperFunctions";
import { signOut, useSession } from "next-auth/react";

import { useTheme } from "next-themes";
import { Skeleton } from "./ui/skeleton";
import CustomAvatar from "./CustomAvatar";
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const { data, status } = useSession();
  const { theme, setTheme } = useTheme();
  const links = filterLinks(data?.user.role || "unverified");

  return (
    <header className="flex justify-center items-center self-stretch px-16 py-6 bg-background max-md:px-5">
      <div className="flex gap-3.5 justify-between py-2.5 w-full max-md:flex-wrap max-md:max-w-full">
        <Link href="/" className="my-auto text-2xl  font-bold leading-6 ">
          ATLAS
        </Link>
        <div className="flex gap-3.5 justify-between  items-center pl-2 max-md:flex-wrap max-md:hidden ">
          {links.map((link) => (
            <Link
              href={
                link.title === "Profile"
                  ? `${link.href}/${data?.user._id}`
                  : link.href
              }
              className="self-stretch my-auto text-xl leading-6 "
              key={link.href}
            >
              {link.title}
            </Link>
          ))}

          <div
            className="rounded-10xl rounded-3xl cursor-pointer bg-foreground  flex flex-row items-start justify-start py-[0.5rem] px-[1rem] gap-[1rem]"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            <img
              className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] transition-all ease-in-out duration-300 "
              loading="lazy"
              alt=""
              src={
                theme === "light"
                  ? "/iconoutlinesun.svg"
                  : "/iconoutlinemoon.svg"
              }
            />
            <Iconoutlinemoon />
          </div>
          {status === "loading" ? (
            <Skeleton className="h-10 w-20 rounded-lg bg-gray-400" />
          ) : null}

          {status === "unauthenticated" ? (
            <Button className="text-lg ">
              <Link href="/signin" className="dark:text-black">
                Sign In
              </Link>
            </Button>
          ) : null}
          {status === "authenticated" ? (
            <>
              <Button
                className="text-lg"
                onClick={async () => {
                  await signOut({ callbackUrl: "/signout" });
                }}
              >
                Sign Out
              </Button>
              <CustomAvatar alt={"user=image"} name={data.user.name!} />
            </>
          ) : null}
        </div>
        <Drawer direction="right">
          <DrawerTrigger className="md:hidden">
            <svg
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </DrawerTrigger>
          <DrawerContent>
            <div className=" hidden max-md:flex flex-col gap-8 justify-center h-screen items-center pl-2 max-md:flex-wrap">
              <DrawerClose>
                <svg
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </DrawerClose>

              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    href={
                      link.title === "Profile"
                        ? `${link.href}/${data?.user._id}`
                        : link.href
                    }
                    className="self-stretch my-auto text-xl leading-6 "
                    key={link.href}
                  >
                    <DrawerClose> {link.title}</DrawerClose>
                  </Link>
                ))}
              </div>
              <div
                className="rounded-10xl rounded-3xl cursor-pointer bg-foreground  flex flex-row items-start justify-start py-[0.5rem] px-[1rem] gap-[1rem]"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                <img
                  className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] transition-all ease-in-out duration-300 "
                  loading="lazy"
                  alt=""
                  src={
                    theme === "light"
                      ? "/iconoutlinesun.svg"
                      : "/iconoutlinemoon.svg"
                  }
                />
                <Iconoutlinemoon />
              </div>
              {status === "loading" ? (
                <Skeleton className="h-10 w-20 rounded-lg bg-gray-400" />
              ) : null}

              {status === "unauthenticated" ? (
                <Button className="text-lg ">
                  <Link href="/signin" className="dark:text-black">
                    Sign In
                  </Link>
                </Button>
              ) : null}
              {status === "authenticated" ? (
                <>
                  <Button
                    className="text-lg"
                    onClick={async () => {
                      await signOut({ callbackUrl: "/signout" });
                    }}
                  >
                    Sign Out
                  </Button>
                  <CustomAvatar alt={"user=image"} name={data.user.name!} />
                </>
              ) : null}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
