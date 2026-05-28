import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/modal-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-dm-serif" 
});

export const metadata: Metadata = {
  title: "Beca Match | Encuentra la beca internacional hecha para ti",
  description: "Descubre qué becas internacionales tienes mayor probabilidad de ganar según tu perfil. Sistema inteligente de matching de becas. $9.99/mes.",
  alternates: {
    canonical: "https://comunidaddelintercambio.com/beca-match",
  },
  openGraph: {
    title: "Beca Match | Encuentra la beca internacional hecha para ti",
    description: "Descubre qué becas internacionales tienes mayor probabilidad de ganar según tu perfil. Sistema inteligente de matching de becas. $9.99/mes.",
    url: "https://comunidaddelintercambio.com/beca-match",
    siteName: "Comunidad del Intercambio",
    images: [
      {
        url: "https://comunidaddelintercambio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beca Match Platform",
      },
    ],
    locale: "es_LA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Beca Match",
    "applicationCategory": "EducationalApplication",
    "description": "Sistema inteligente de matching de becas. Descubre qué becas internacionales tienes mayor probabilidad de ganar según tu perfil.",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "9.99",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "3200"
    }
  };

  return (
    <html lang="es" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--color-background)]">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
