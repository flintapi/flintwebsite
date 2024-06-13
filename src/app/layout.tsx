import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlintAPI",
  description: "Simplifying next gen infrastructure consumption simple API conventions",
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
    </html>
  );
}


function Header() {
  return (
    <header className="container max-h-20 px-3 py-3 md:py-6 md:px-6 mx-auto rounded-lg flex place-items-center items-center justify-between">
      <span>FlintAPI</span>
      <ThemeToggle />
    </header>
  );
}
