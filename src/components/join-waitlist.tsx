"use client";

import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

// const desktop = "(min-width: 768px)"

export default function JoinWaitlist() {
  //> control Credenza component open state
  const [open, setOpen] = useState(false);

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger asChild>
        <Button size="lg">Join the waitlist</Button>
      </CredenzaTrigger>
      <CredenzaContent className="min-h-[450px] py-6 md:py-12 px-6 md:px-12 bg-white dark:bg-zinc-950">
        <CredenzaHeader className="text-center">
          <CredenzaTitle className="text-2xl md:text-3xl text-black dark:text-white">
            Join the waitlist!
          </CredenzaTitle>
          <CredenzaDescription className="text-[20px] md:text-lg">
            Join the product waitlist to be among the first to get update when
            our products go live.
          </CredenzaDescription>
        </CredenzaHeader>
        <WaitlistForm />
      </CredenzaContent>
    </Credenza>
  );
}

// 1. define schema
const formSchema = z.object({
  email: z
    .string({
      required_error:
        "An email address is required to subscribe to the waitlist",
    })
    .email("Not a valid email address"),
});

function WaitlistForm() {
  // 2. define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 3. define the submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    //⏳ TODO: call server action to subscribe user email address into the plunk service
    console.log(values, ":::Form value on submit");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CredenzaBody className="text-left">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@test.com" {...field} />
                </FormControl>
                <FormDescription>
                  Email address will be subscribed for waitlist
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CredenzaBody>
        <CredenzaFooter className="mb-20 md:mb-0 p-4">
          {/* <CredenzaClose asChild> */}
          <Button type="submit">Submit</Button>
          {/* </CredenzaClose> */}
        </CredenzaFooter>
      </form>
    </Form>
  );
}
