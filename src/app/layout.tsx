import type { Metadata } from "next";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URl || "https://connectec.app"),
  title: "Connect EC: The Gamified Ethical Hiring Platform",
  description:
    "Unlock Connect EC for gamified, ethical hiring. Empowering employers, candidates & recruiters with AI tools—from sourcing to onboarding.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Connect EC: The Gamified Ethical Hiring Platform",
    description:
      "Unlock Connect EC for gamified, ethical hiring. Empowering employers, candidates & recruiters with AI tools—from sourcing to onboarding.",
    images: {
      url: "/EC_Connect.svg",
      width: 1200,
      height: 640,
      alt: "Connect EC: The Gamified Ethical Hiring Platform",
    },
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2.className} bg-white relative
       antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
