import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelwilliams.org"),
  title: "Michael Williams | michaelwilliams.org",
  description:
    "The official website of Michael Williams. No, not THAT Michael Williams. THIS one. The one from Southern California who really loves St. Patrick's Day.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Michael Williams | The Definitive One",
    description:
      "Father. Friend. Chili Competitor. Trivia King (Self-Titled). Welcome to the official internet home of Michael Williams.",
    url: "https://michaelwilliams.org",
    siteName: "michaelwilliams.org",
    images: [{ url: "/images/pool-2023.jpg", width: 1400, height: 1050 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
