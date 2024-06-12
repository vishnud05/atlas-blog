"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SignInPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { data, status } = useSession();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const result = await signIn("credentials", {
      username: values.identifier,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      toast({
        title: "Error",
        description: "Invalid username or password",
      });
    } else {
      form.reset();
      router.push("/");
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-[40rem]  mx-auto mt-10 p-4 rounded-lg shadow-lg "
      >
        <h1 className="text-center text-3xl font-semibold">Sign In</h1>
        <p className="text-center text-lg mb-8">
          Sign in to access all the cool features.
        </p>
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username/Email</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={status === "loading"}>
          Submit
        </Button>
        <p className="text-center">
          Not registered ?{" "}
          <Link href="/signup" className="underline">
            Signup
          </Link>
        </p>
      </form>
    </Form>
  );
}

export default SignInPage;
