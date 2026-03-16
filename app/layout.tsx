import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Zunaid Ali | Software Engineer Portfolio",
  description:
    "Portfolio of Md Zunaid Ali, Software Engineer specializing in Java Backend Development, Spring Boot, Android Development, and scalable applications.",

  keywords: [
    "Md Zunaid Ali",
    "Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Android Developer",
    "Backend Developer",
    "Portfolio"
  ],

  authors: [{ name: "Md Zunaid Ali" }],

  openGraph: {
    title: "Md Zunaid Ali | Software Engineer",
    description:
      "Java Backend Developer and Android Developer Portfolio",
    url: "https://zunaid-portfolio-app.vercel.app",
    siteName: "Md Zunaid Ali Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
