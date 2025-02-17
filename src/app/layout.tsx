import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { scheduler } from "@/cron/schedule";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";


const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "Generated by create next app",
};

// scheduler();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`${inter.className} bg-primary-foreground`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
