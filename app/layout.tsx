import type { Metadata } from "next";
import "@/public/styles.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Education / NextJS",
  description: "Education NextJS Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/mathfield.js" type="text/javascript"/>
        <Script src="/jquery-3.7.1.js" type="text/javascript"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
