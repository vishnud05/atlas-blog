import { PathnamePriority, RolePriority, links } from "@/constants";

export const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const filterLinks = (role: string) => {
  return links.filter((link) => {
    return PathnamePriority[link.href] >= RolePriority[role];
  });
};

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export function convertDatetoTimeAgo(dateStr: string): string {
  // Parse the input date string to a Date object
  const pastDate = new Date(dateStr);

  // Get the current date
  const now = new Date();

  // Calculate the difference in milliseconds
  const diff = now.getTime() - pastDate.getTime();

  // Convert the difference from milliseconds to days
  const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Return the result in the desired format
  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else {
    return `${daysAgo} days ago`;
  }
}

export function getInitials(fullName: string): string {
  // Split the full name by spaces
  const nameParts = fullName.split(" ");

  // Map each part to its initial letter and join them
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
}
