import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10),
  tags: z.string(),
  category: z.string(),
  cover_image: z.any(),
});
