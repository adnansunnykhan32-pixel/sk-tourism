import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { generateJsonLd } from "@/lib/seo";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import { CurrencyProvider } from "@/context/CurrencyContext";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SK Tourism | Luxury Dubai Tours & VIP Chauffeur Services",
    template: "%s | SK Tourism Dubai",
  },
  description:
    "Experience Dubai's premier ultra-luxury travel services. Private desert safaris, executive chauffeur transfers, helicopter tours, and 7-star hotel bookings.",
  keywords: [
    "SK Tourism",
    "Dubai Tourism Services",
    "Luxury Dubai Tours",
    "VIP Chauffeur Dubai",
    "Desert Safari VIP",
    "Dubai Airport Transfer",
    "Burj Al Arab Hotel Booking",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  authors: [{ name: "SK Tourism - Dubai Tourism Services" }],
  creator: "SK Tourism",
  metadataBase: new URL("https://sktourismdubai.com"),
  openGraph: {
    title: "SK Tourism | Dubai VIP Tourism & Luxury Chauffeur Services",
    description:
      "Luxury Dubai travel experiences. Private desert safaris, executive chauffeurs, and VIP hotel upgrades.",
    url: "https://sktourismdubai.com",
    siteName: "SK Tourism",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SK Tourism Dubai Skyline & VIP Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Tourism | Luxury Dubai Tours & VIP Chauffeur",
    description:
      "Book VIP Dubai tours, private desert safaris, and luxury chauffeurs with SK Tourism.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchemas = generateJsonLd();

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <head>
        {jsonLdSchemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased bg-[#F8F5F0] text-[#0F4A43] min-h-screen flex flex-col selection:bg-[#D9C6A5] selection:text-[#0F4A43]">
        <CurrencyProvider>
          {children}
          <WhatsAppFloatingButton />
        </CurrencyProvider>
      </body>
    </html>
  );
}
