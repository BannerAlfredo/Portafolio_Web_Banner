import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//@ts-ignore
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banner Casanotan | Desarrollador Web Creativo",
  description:
    "Desarrollador web creativo y diseñador gráfico. Creo experiencias digitales funcionales, limpias e innovadoras en Trujillo, Perú.",
  keywords: "desarrollador web, diseño web, frontend, Peru, Trujillo",
  authors: [{ name: "Banner Casanotan" }],
  icons: {
    icon: "/b.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    // url: "https://bannercasanotan.com",
    title: "Banner Casanotan | Desarrollador Web Creativo",
    description: "Creo experiencias digitales funcionales, limpias e innovadoras",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1e293b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${geistSans.className} font-sans antialiased`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
