import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "FlintAPI",
  author: "afullsnack",
  description: "Simplifying infrastructure for nextgen builder",
  keywords: [
    "API",
    "Infrastructure",
    "Web3",
    "Blockchain",
    "Virtual card",
    "Cards",
    "Debit cards",
    "Credit cards",
    "Card storage",
    "User experience",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://afullsnack.dev",
  },
  links: {
    github: "https://github.com/flintapi/flintwebsite",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/icon.png`,
};
