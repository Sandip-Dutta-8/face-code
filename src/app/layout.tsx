import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Header } from "./header";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Facecode',
  description: 'Facecode is a platform where you can solve your coding doubts with others.',
  icons: {
    icon: '../../public/icon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* <Toaster /> */}
          <NextTopLoader />
          <Header />
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
