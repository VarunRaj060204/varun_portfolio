import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackgroundParticles from "@/components/BackgroundParticles";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Varun Raj | Full Stack Developer",
  description: "Portfolio of Varun Raj, a Full Stack Developer building scalable and production-ready web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-canvas text-ink selection:bg-batman-red selection:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <BackgroundParticles />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
