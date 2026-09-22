import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadataBase),
  title: {
    default: siteConfig.schoolName,
    template: `%s | ${siteConfig.schoolName}`,
  },
  description: siteConfig.metaDescription,
  openGraph: {
    title: siteConfig.schoolName,
    description: siteConfig.metaDescription,
    url: siteConfig.metadataBase,
    siteName: siteConfig.schoolName,
    images: [
      {
        url: siteConfig.logo,
        width: 640,
        height: 640,
        alt: siteConfig.schoolName,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
