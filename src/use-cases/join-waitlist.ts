import { env } from "@/env.mjs";

// Subscribe the provided email address to waitlist with additional add-ons
export type WaitlistProps = {
  email: string;
  subscribeNewsletter: boolean;
};
export type TrackResponse = {
  success: boolean;
  contact: string;
  event: string;
  timestamp: string;
};

export async function joinWaitlist(
  args: WaitlistProps,
): Promise<TrackResponse> {
  const TRACK_EVENT_URL = `${env.PLUNK_API_URL}/v1/contacts`;
  try {
    const response = await fetch(TRACK_EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.PLUNK_SECRET_KEY}`,
      },
      body: JSON.stringify({
        // event: "join-waitlist",
        email: args.email,
        subscribed: true,
        data: {
          newsletter: args.subscribeNewsletter,
          project: "flintapi",
        },
      }),
    });

    console.log(response, TRACK_EVENT_URL, env.PLUNK_API_URL, "::;response");

    if (response.ok) {
      return (await response.json()) as TrackResponse;
    }

    // Something went wrong with the request
    // TODO: implement a re-try mechanism
    throw new SubscribeEmailError("Request could not be completed");
  } catch (err: any) {
    console.log(err.message, ":::error_subscribeEmail");
    throw new SubscribeEmailError(err.message ?? err.toString());
  }
}

class SubscribeEmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubscribeEmailError";
  }
}
