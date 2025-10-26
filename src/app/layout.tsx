"use client"
 import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
 
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    const { theme } = useTheme();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
           <meta
            name="theme-color"
            content={theme === "dark" ? "#ffff" : "#1A1919"}
          />
           <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
