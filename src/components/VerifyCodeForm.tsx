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

import { verifyCodeValidation } from "@/schemas/verifyCode";

import { toast } from "./ui/use-toast";
import Link from "next/link";

export function VerifyCodeForm({ username }: { username: string }) {
  const form = useForm<z.infer<typeof verifyCodeValidation>>({
    resolver: zodResolver(verifyCodeValidation),
    defaultValues: {
      verifyCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof verifyCodeValidation>) {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, verifyCode: values.verifyCode }),
      });
      if (response.status === 200) {
        return toast({
          title: "Verified Successfully",
          description: "User verified successfully. You can now login",
          action: <Link href="/signin">Login</Link>,
        });
      } else {
        throw new Error("Error verifying user");
      }
    } catch (error) {
      return toast({
        variant: "destructive",
        title: "Error verifying user",
        description: "User verification failed. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="verifyCode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Verify Code</Button>
      </form>
    </Form>
  );
}

export default VerifyCodeForm;
