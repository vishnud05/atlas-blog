"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { signUpSchema } from "@/schemas/signUpSchema";
import { useState } from "react";

import { toast } from "@/components/ui/use-toast";
import VerifyCodeForm from "@/components/VerifyCodeForm";

function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      name: "",
    },
  });

  const [isVerifyCodeSent, setIsVerifyCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState<string>("");

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);

    try {
      setIsLoading(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.status === 200) {
        setIsVerifyCodeSent(true);
        setUsername(values.username);
        return toast({
          title: "Registered Successfully",
          description: "User registered successfully. Verification email sent.",
        });
      } else {
        toast({
          title: "Registration failed",
          description: data.message,
        });
        throw new Error("Error registering user");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
    setIsVerifyCodeSent(true);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-[40rem] mx-auto p-4  rounded-lg shadow-lg "
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-4xl font-semibold mb-4">
            Start Your Journey With This Amazing Platform
          </h1>
          <p className="text-center text-xl ">
            Create an account to get started
          </p>
          <p className="text-center mb-8 text-lg">
            Already have an account ?{" "}
            <a href="/signin" className="underline">
              Sign In
            </a>
          </p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

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
        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
        <Dialog>
          <DialogTrigger
            asChild
            className={`${
              isVerifyCodeSent ? "block" : "hidden"
            } bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 text-sm font-medium  text-center cursor-pointer transition-all duration-1`}
          >
            <Button>Verify Email</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Verify Code</DialogTitle>
              <DialogDescription>
                An email has been sent to your email address. Please enter the
                code to verify your account.
              </DialogDescription>
            </DialogHeader>

            <VerifyCodeForm username={username} />
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}

export default SignUpForm;
