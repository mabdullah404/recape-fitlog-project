import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Pick a lift, lock it into today's plan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
    >
      <body className="bg-neutral-950 text-white">

        <Navbar></Navbar>
        
        <main>
          {children}
        </main>

        <Footer></Footer>
        
        </body>
    </html>
  );
}
