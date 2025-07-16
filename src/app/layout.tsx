import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Aplicación Next.js",
  description: "Aplicación creada con Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body
        style={{
          backgroundColor: "#F9FAFB",
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          height: "100vh",
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
