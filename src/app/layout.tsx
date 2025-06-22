import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Xcentic",
  description: "Xcentic Technologies",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans relative bg-gray-50 overflow-x-hidden`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
