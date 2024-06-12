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
  if (!date) return "Date";
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

export function getShortDescription(text: string): string {
  // Split the text into words using space as the delimiter
  const words = text.split(" ");

  // Check if the number of words is less than or equal to 15
  if (words.length <= 15) {
    return text; // Return the original text if it's 15 words or less
  }

  // Join the first 15 words and add "..." at the end
  const first15Words = words.slice(0, 15).join(" ");

  return `${first15Words}...`;
}

// utils/extractFirstParagraphText.ts

// utils/extractFirstParagraphText.ts

export function extractFirstParagraphText(htmlString: string): string {
  const regex = /<p\b[^>]*>(.*?)<\/p>/i;
  const match = regex.exec(htmlString);
  return match ? match[1].replace(/&nbsp;/g, " ").replace(/&rsquo;/g, "'") : "";
}
