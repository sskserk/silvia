import type { Metadata } from "next";
import "@/public/styles.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
