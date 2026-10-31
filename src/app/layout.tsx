import type { Metadata } from 'next';
import '@/styles/globals.css';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Preloader } from '@/components/motion/Preloader';
import { CustomCursor } from '@/components/motion/CustomCursor';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/shop/CartDrawer';

export const metadata: Metadata = {
  title: 'BAKTRA — "El origen de lo nuevo" | Slow Casualwear Boho de Autor',
  description: 'Prendas versátiles, modulares y reversibles para el viajero contemporáneo. Slow casualwear de autor con confección artesanal y memoria textil.',
  keywords: ['Baktra', 'slow fashion', 'casualwear de autor', 'nómades digitales', 'ropa reversible', 'Ruta de la Seda', 'Colina de Oro', 'moda argentina'],
  authors: [{ name: 'Baktra' }],
  metadataBase: new URL('https://baktra.com.ar'),
  openGraph: {
    title: 'BAKTRA — El origen de lo nuevo',
    description: 'Slow casualwear boho de autor. Comodidad, versatilidad y memoria textil para recorrer el mundo.',
    url: 'https://baktra.com.ar',
    siteName: 'Baktra',
    locale: 'es_AR',
    type: 'website',
  },
  icons: {
    icon: '/assets/brand/isologo.svg',
    shortcut: '/assets/brand/isologo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className="min-h-screen flex flex-col bg-white text-baktra-rojo antialiased selection:bg-baktra-turquesa selection:text-white">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <AnnouncementBar />
          <Header />
          <main className="flex-1 w-full relative">{children}</main>
          <Footer />
          <CartDrawer />
        </SmoothScroll>
      </body>
    </html>
  );
}
