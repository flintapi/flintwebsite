import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },

  // Server env's should never be seen by the client
  server: {
    PLUNK_API_URL: z
      .string()
      .min(1, "Provide the plunk email service provider API url"),
    PLUNK_SECRET_KEY: z
      .string()
      .min(1, "Provide the plunk email service secret key"),
  },

  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    PLUNK_API_URL: process.env.PLUNK_API_URL,
    PLUNK_SECRET_KEY: process.env.PLUNK_SECRET_KEY,
  },
});
