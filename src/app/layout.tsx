import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider, ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import icon from "@/app/icon.png";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 1200,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@afullsnack",
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.7,
  maximumScale: 1.5,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div vaul-drawer-wrapper="" className="bg-background">
            {children}
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
      <SpeedInsights />
    </html>
  );
}

function Header() {
  return (
    <header className="max-h-20 px-8 py-4 md:py-6 md:px-20 lg:px-40 mx-auto rounded-lg flex place-items-center items-center justify-between">
      <Link
        href="/"
        className="font-[600] tracking-wide text-[14px] text-black dark:text-white flex items-center gap-2"
      >
        <Image
          src={icon}
          width={22}
          className="border-[.5px] border-black/40 dark:border-slate-300/40 rounded-md"
          height={22}
          alt="Flintapi Logo"
        />{" "}
        FlintAPI
      </Link>
      <ThemeToggle />
    </header>
  );
}
