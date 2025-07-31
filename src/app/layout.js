import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS",
  },
  keywords: ["Next.js", "React", "JavaScript", "Learning", "Playground"],
  description: "Trying to learn NextJS as best as we can.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${poppins.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
