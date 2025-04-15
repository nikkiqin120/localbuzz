import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocalBuzz - Family Travel Blog",
  description:
    "Discover family-friendly travel destinations, tips, and experiences for your next adventure.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YBM27K0QRR`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YBM27K0QRR');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9415695507045634"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-full antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
