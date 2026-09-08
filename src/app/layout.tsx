import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Wedding Invitation`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["wedding", "invitation", "Veer", "Zara", "Taj Mahal Palace", "Mumbai", "2027"],
  authors: [{ name: "PreludePost", url: SITE.url }],
  creator: "PreludePost",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — Wedding Invitation`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
  },
  robots: {
    // Private invitation — discourage search engine indexing
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
