import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olso | 맞춤형 AI 학습 프로그램",
  description: "AI를 활용한 개인 맞춤형 학습 프로그램, 올소. 문제 은행 기반 취약점 분석 및 맞춤형 교재 페이지 추천.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
