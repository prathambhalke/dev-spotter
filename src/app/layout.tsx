import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import LayoutContainer from "./components/LayoutContainer";

const inter = Inter({ subsets: ["latin"] });
const SpaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DevSpotter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaceMono.className}>
        <LayoutContainer>
        {children}
        </LayoutContainer>
        </body>
    </html>
  );
}
