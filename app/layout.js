import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import { Laila, Inter } from "next/font/google";

const laila = Laila({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-laila",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "FeedLens",
  description:
    "Exploring how social media algorithms influence student content consumption.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${laila.variable} ${inter.variable} bg-[#FFFDF9] font-[var(--font-inter)] text-[#292524] antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}