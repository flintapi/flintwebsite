"use server";

import { WaitlistProps, joinWaitlist } from "@/use-cases/join-waitlist";

export async function join(args: WaitlistProps) {
  return await joinWaitlist(args);
}
