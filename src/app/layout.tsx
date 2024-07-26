"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html lang="pt-BR">
      <Head>
        <title>Portifólio Rawlinson Rolim</title>
        <meta>Portifólio de projetos do Rawlinson Rolim</meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
