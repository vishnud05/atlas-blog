"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBlogSchema } from "@/schemas/createBlogSchema";
import RTE from "./RTE";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { BaseSyntheticEvent } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";

export default function PostForm() {
  const { data } = useSession();
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof createBlogSchema>>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
      category: "",
      cover_image: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof createBlogSchema>,
    event: any
  ) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("tags", values.tags);
    formData.append("category", values.category);
    formData.append("cover_image", event.target[18].files[0]);
    formData.append("author", data?.user._id as string);

    try {
      const response = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unexpected Error Occurred");
      }
    } catch (error: any) {
      toast({
        title: "Error Creating Blog",
        description: `${error.message}. Please try again. If the problem persists, contact support.`,
      });
    }
  }

  return (
    <Form {...form}>
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <RTE {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cover_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <Input {...field} type="file" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder="Select Category"
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                    <SelectContent {...field}>
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="tutorials">Tutorials</SelectItem>
                      <SelectItem value="opinion">Opinion</SelectItem>
                      <SelectItem value="reviews">Reviews</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Form>
  );
}
