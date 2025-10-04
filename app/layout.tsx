import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import {
  Poppins,
  // PT_Serif,
  Oswald,
} from "next/font/google";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "BDAI Project",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  preload: true,
  style: ["normal", "italic"],
});

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["latin"],
  preload: true,
  style: ["normal"],
});

// const pt_serif = PT_Serif({
//   weight: ["400", "700"],
//   variable: "--font-pt-serif",
//   subsets: ["latin"],
//   preload: true,
//   style: ["normal", "italic"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
