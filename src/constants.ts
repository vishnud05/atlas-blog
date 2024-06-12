export enum Role {
  ADMIN = "admin",
  USER = "user",
  CREATOR = "creator",
  UNVERIFIED = "unverified",
}

export const RolePriority: { [key: string]: number } = {
  admin: 1,
  creator: 2,
  user: 3,
  unverified: 4,
};

export const PathnamePriority: { [key: string]: number } = {
  "/profile": 3,
  "/dashboard": 3,
  "/": 4,
  "/blogs": 4,
};

export const links = [
  { href: "/", title: "Home" },
  { href: "/dashboard", title: "Dashboard" },
  { href: "/profile", title: "Profile" },
  { href: "/blogs", title: "Blogs" },
];
