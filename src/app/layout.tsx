import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import icon from "@/app/icon.png";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlintAPI",
  description: "Simplifying next gen infrastructure consumption simple API conventions",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.7,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    <SpeedInsights />
    </html>
  );
}


function Header() {
  return (
    <header className="max-h-20 px-8 py-4 md:py-6 md:px-20 lg:px-40 mx-auto rounded-lg flex place-items-center items-center justify-between">
      <Link href="/" className="font-[600] tracking-wide text-[14px] text-black dark:text-white flex items-center gap-2"><Image src={icon} width={22} className="border-[.5px] border-black/40 dark:border-slate-300/40 rounded-md" height={22} alt="Flintapi Logo" />  FlintAPI</Link>
      <ThemeToggle />
    </header>
  );
}
