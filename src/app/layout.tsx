import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for now, maybe nicer font later
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Crea Imagen | Reconocimientos en Cristal 3D y Metal",
    template: "%s | Crea Imagen"
  },
  description: "Obsequios corporativos de alta distinción. Reconocimientos en cristal 3D y metal grabado láser. Fabricación premium en Chile y Latinoamérica.",
  keywords: ["cristal 3d", "reconocimientos", "galvanos de cristal", "pisapapeles de cristal", "llaveros de cristal", "regalos corporativos", "grabado laser", "trofeos", "chile"],
  authors: [{ name: "Crea Imagen" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://crea-imagen.cl",
    title: "Crea Imagen | Reconocimientos en Cristal 3D y Metal",
    description: "Obsequios corporativos de alta distinción. Reconocimientos en cristal 3D y metal grabado láser.",
    siteName: "Crea Imagen",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
