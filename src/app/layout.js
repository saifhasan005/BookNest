import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const OutfitFont = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "BookNest",
  description: "BookNest is a online book store",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
