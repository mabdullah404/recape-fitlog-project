import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
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
      <body className= {`${oswald.variable} bg-neutral-950 text-white`}>

        <Navbar></Navbar>
        
        <main>
          {children}
        </main>

        <Footer></Footer>
        
        </body>
    </html>
  );
}
