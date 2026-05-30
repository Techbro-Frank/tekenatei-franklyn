import { Inter, JetBrains_Mono, Dancing_Script } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
});
