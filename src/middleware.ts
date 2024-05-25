import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { PathnamePriority, RolePriority } from "./constants";

export default withAuth(async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });

  if (!token) {
    return NextResponse.json(
      { status: "error", message: "Unauthorized" },
      { status: 401 }
    );
  }

  //   Priority based access

  const pathname = req.nextUrl.pathname;
  const userPriority = RolePriority[token.role || "unverified"];

  if (PathnamePriority[pathname] < userPriority) {
    return NextResponse.redirect(new URL("/access-denied", req.nextUrl));
  }
});

export const config = {
  matcher: ["/profile", "/dashboard"],
};
