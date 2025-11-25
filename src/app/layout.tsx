import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ZeroDay Hackathon",
  description: "India's Premier Social Impact & AI/ML Hackathon",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/logo.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "ZeroDay Hackathon",
    description: "India's Premier Social Impact & AI/ML Hackathon",
    images: ["/wordlogo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroDay Hackathon",
    description: "India's Premier Social Impact & AI/ML Hackathon",
    images: ["/wordlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LenisProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
