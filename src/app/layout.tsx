import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const notoSansSC = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "几何视界 GeometryVision - 用数学的力量，开启视觉智能的新视界",
  description: "源自香港中文大学数学系的科技创业公司，将几何分析与拟共形映射等数学研究成果应用于视觉AI领域",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/icons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/icons/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} ${notoSansSC.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
