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
import { Checkbox } from "@/components/ui/checkbox";
import { Loader } from "@/components/ui/loader";
import { useState, useActionState } from "react";
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
import { join } from "@/app/actions";

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
          <CredenzaDescription className="text-[20px] md:text-sm">
            Subscribe to product waitlist and be among the first to get updated
            when our products go live.
          </CredenzaDescription>
        </CredenzaHeader>
        <WaitlistForm
          onFormSubmitted={(success) => setOpen(success ? false : true)}
        />
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
    .email("Pleaes enter a valid email address"),
  subscribeNewsletter: z.boolean().default(false),
});

type WaitlistFormProps = {
  onFormSubmitted: (success: boolean) => void;
};
function WaitlistForm({ onFormSubmitted }: WaitlistFormProps) {
  // initialise action state
  // 2. define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subscribeNewsletter: true,
    },
  });

  // 3. define the submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    //⏳ TODO: call server action to subscribe user email address into the plunk service
    console.log(values, ":::Form value on submit");
    const result = await join(values);

    // const result = await new Promise((resolve) => setTimeout(resolve, 3000));

    // Call formSubmitted function
    onFormSubmitted(true);

    console.log(result, ":::Result of track event");
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
                {/* <FormDescription>
                  Email address will be subscribed for waitlist
                </FormDescription> */}
                <FormMessage>
                  {/* Hack to avoid layout shift when an error message pops up */}
                  <div className="py-3" />
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subscribeNewsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Subscribe me to receive newsletter emails
                  </FormLabel>
                  <FormDescription>
                    We promise not to overload you with unnecessary emails, and
                    you can alway change your preference
                    {/* <Link href="/examples/forms">mobile settings</Link> page. */}
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </CredenzaBody>
        <CredenzaFooter className="mb-10 md:mb-0 w-full grid gap-3 place-items-center sm:space-x-0 sm:justify-normal">
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={form.formState.isLoading}
          >
            {form.formState.isSubmitting ? <Loader /> : "Submit"}
          </Button>
          <span className="text-xs">
            By subscribing you agree to our data{" "}
            <a className="text-sky-600" href="#" target="_blank">
              privacy policy
            </a>
          </span>
        </CredenzaFooter>
      </form>
    </Form>
  );
}
