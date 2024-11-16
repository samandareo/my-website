import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


// Fonts
const poppinsThin = localFont({
  src: "./fonts/PoppinsThin.ttf",
  variable: "--font-poppins-thin",
  weight: "100",
});

const poppinsExtraLight = localFont({
  src: "./fonts/PoppinsExtraLight.ttf",
  variable: "--font-poppins-extra-light",
  weight: "200",
});

const poppinsLight = localFont({
  src: "./fonts/PoppinsLight.ttf",
  variable: "--font-poppins-light",
  weight: "300",
});

const poppinsRegular = localFont({
  src: "./fonts/PoppinsRegular.ttf",
  variable: "--font-poppins-regular",
  weight: "400",
});

const poppinsMedium = localFont({
  src: "./fonts/PoppinsMedium.ttf",
  variable: "--font-poppins-medium",
  weight: "500",
});

const poppinsSemiBold = localFont({
  src: "./fonts/PoppinsSemiBold.ttf",
  variable: "--font-poppins-semibold",
  weight: "600",
});

const poppinsBold = localFont({
  src: "./fonts/PoppinsBold.ttf",
  variable: "--font-poppins-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "SPACE PROGRAMMER",
  description: "by SAMANDAREO",
  icons: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${poppinsThin.variable} 
        ${poppinsExtraLight.variable} 
        ${poppinsLight.variable} 
        ${poppinsRegular.variable} 
        ${poppinsMedium.variable} 
        ${poppinsSemiBold.variable} 
        ${poppinsBold.variable} 
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
