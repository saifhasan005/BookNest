import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Services from "./Components/Service";
import ContactPage from "./Components/ContactPage";

const OutfitFont = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "BookNest",
  description: "BookNest is a online book store",
  icons: {
        icon: "/logo.png",
    },
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
          <ToastContainer/>
        </main>
        <Services/>
        <ContactPage/>
        <Footer/>
      </body>
    </html>
  );
}
