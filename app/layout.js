import { Lora, Raleway, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const space = Space_Mono({
  weight: "400",
  variable: "--font-space",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "twite for X/twitter.",
  description: "build in public. stay visible.",
  openGraph: {
    images: "/thumbnail.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme" className="scroll-smooth">
      <body
        className={`${lora.variable} ${raleway.variable} ${space.variable} ${inter.variable} antialiased`}
      >
        <div className="font-lora font-bold lowercase">
          <Toaster />
        </div>
        {children}
      </body>
    </html>
  );
}
