import type { Metadata } from "next";
import "./globals.css";

// 使用系统默认字体，不再使用谷歌字体
export const metadata: Metadata = {
  title: "Create Next App 2024",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}