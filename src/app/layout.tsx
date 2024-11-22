import type { Metadata } from "next";
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { SocialCTA } from '@/components/shared/SocialCTA'

import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <main>
          <Header /> 
          <SocialCTA />                           
          { children }
          <Footer />
        </main>
      </body>
    </html>
  );
}
