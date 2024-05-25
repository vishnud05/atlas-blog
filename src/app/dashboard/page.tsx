import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="h-screen mx-auto px-4 py-8 md:px-6 lg:py-12 bg-[#FFFAEB] dark:bg-[#FFEFE0]">
      <div className="container grid gap-8 lg:grid-cols-[1fr_3fr] h-full">
        <div className="rounded-lg bg-[#FFFAEB] p-6 dark:bg-[#FFEFE0] backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 shadow-lg">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">Jared Palmer</h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">
                jared@example.com
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="flex items-center justify-between">
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">Views</p>
              <p className="font-semibold">2,345</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">Likes</p>
              <p className="font-semibold">1,234</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">Comments</p>
              <p className="font-semibold">567</p>
            </div>
            <Button className="w-full" variant="outline">
              Edit Profile
            </Button>
          </div>
        </div>
        <div>
          <Tabs defaultValue="myBlogs">
            <TabsList className="mb-6 border-b">
              <TabsTrigger value="myBlogs">My Blogs</TabsTrigger>
              <TabsTrigger value="createBlog">Create New Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="myBlogs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold">
                      Building a Responsive Website with Tailwind CSS
                    </h4>
                    <p className="text-[#6B7280] dark:text-[#9CA3AF]">
                      Learn how to create a modern and responsive website using
                      Tailwind CSS, a utility-first CSS framework.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                        Published on May 12, 2023
                      </div>
                      <Link className="text-[#F59E0B] hover:underline" href="#">
                        Read More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold">
                      Mastering React Hooks: A Comprehensive Guide
                    </h4>
                    <p className="text-[#6B7280] dark:text-[#9CA3AF]">
                      Dive deep into the world of React Hooks and learn how to
                      leverage them to build powerful and efficient
                      applications.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                        Published on April 28, 2023
                      </div>
                      <Link className="text-[#F59E0B] hover:underline" href="#">
                        Read More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="createBlog">
              <Card className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Create a New Blog Post</CardTitle>
                  <CardDescription>
                    Fill out the form below to create a new blog post.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter the blog post title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <option>Select a category</option>
                        <option>Technology</option>
                        <option>Design</option>
                        <option>Lifestyle</option>
                        <option>Travel</option>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      className="min-h-[200px]"
                      id="content"
                      placeholder="Enter the blog post content"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Featured Image</Label>
                    <Input id="image" type="file" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="ml-auto bg-[#F59E0B] hover:bg-[#D97706] text-white"
                    type="submit"
                  >
                    Publish
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
