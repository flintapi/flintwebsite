"use client"

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
} from "@/components/ui/credenza"

// const desktop = "(min-width: 768px)"

export default function JoinWaitlist() {

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button size="lg">Join the waitlist</Button>
      </CredenzaTrigger>
      <CredenzaContent className="min-h-[450px] py-6 md:py-12 px-6 md:px-12">
        <CredenzaHeader className="text-center">
          <CredenzaTitle className="text-2xl md:text-3xl">Join the waitlist!</CredenzaTitle>
          <CredenzaDescription className="text-[20px] md:text-lg">
            Join the product waitlist to be among the first to get update when our products go live.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody className="text-center">
          This component is built using shadcn/ui&apos;s dialog and drawer
          component, which is built on top of Vaul.
        </CredenzaBody>
        <CredenzaFooter className="mb-20 md:mb-0 p-4">
          <CredenzaClose asChild>
            <Button>Submit</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>

  )
}
