import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Headings: Playfair Display. Body text: Atkinson Hyperlegible (built for readability).
const headingFont = Playfair_Display({ variable: "--font-heading", subsets: ["latin"] });
const bodyFont = Atkinson_Hyperlegible({ variable: "--font-body", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Christian Haitian Outreach",
  description:
    "Christian Haitian Outreach (CHO) serves communities in Haiti through faith, education, and care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
