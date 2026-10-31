'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { PatternBackground } from '@/components/brand/PatternBackground';
import { ArrowRight, CheckCircle2, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-baktra-rojo text-white relative overflow-hidden pt-16 pb-12 border-t border-white/10">
      {/* Patrón de filigrana sutil de fondo */}
      <PatternBackground opacity={0.05} strokeColor="#ffffff" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Fila Principal: Logo monumental + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-16">
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="isologotipo" tone="blanco" className="w-56 h-auto" />
            <p className="text-sm font-light text-white/80 max-w-sm leading-relaxed">
              Slow casualwear boho de autor para el viajero contemporáneo. Prendas reversibles, modulares y con memoria textil confeccionadas conscientemente en Argentina.
            </p>
            <div className="text-xs uppercase tracking-widest text-baktra-marron">
              "Que no sea casualidad, llevá la suerte con vos"
            </div>
          </div>

          <div className="lg:col-span-7 bg-baktra-marron/20 p-8 rounded-xl border border-baktra-marron/35 shadow-inner">
            <h3 className="text-xl font-serif font-bold tracking-tight text-white mb-2">
              Unite a la bitácora de viaje
            </h3>
            <p className="text-xs text-white/80 mb-5 max-w-lg">
              Recibí relatos de ruta, nuevos módulos de temporada y accesos anticipados a ediciones limitadas de nuestra sastrería nómade de autor.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-baktra-turquesa text-sm font-medium py-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>¡Gracias por sumarte! Te enviamos la bienvenida a tu correo.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico de viaje"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 text-xs px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:border-baktra-turquesa"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-baktra-turquesa text-white hover:bg-white hover:text-baktra-rojo transition-all text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 rounded shadow-md"
                >
                  <span>Suscribirme</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Fila de Columnas de Enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-white/80 border-b border-white/10 pb-12">
          {/* Tienda */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              Archivo & Tienda
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/tienda" className="hover:text-baktra-turquesa transition-colors">Colección Colina de Oro</Link></li>
              <li><Link href="/valija" className="hover:text-baktra-turquesa transition-colors">Armá tu valija modular</Link></li>
              <li><Link href="/tienda?tag=reversible" className="hover:text-baktra-turquesa transition-colors">Prendas reversibles</Link></li>
              <li><Link href="/intercambio" className="hover:text-baktra-turquesa transition-colors">Intercambio de módulos</Link></li>
            </ul>
          </div>

          {/* Universo Baktra */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              La Marca
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/nosotros" className="hover:text-baktra-turquesa transition-colors">Bactra: origen del nombre</Link></li>
              <li><Link href="/nosotros#mision" className="hover:text-baktra-turquesa transition-colors">Misión & Manifiesto</Link></li>
              <li><Link href="/comunidad" className="hover:text-baktra-turquesa transition-colors">Comunidad de nómades</Link></li>
            </ul>
          </div>

          {/* Ayuda & Viajeros */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              Acompañamiento
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><Link href="/contacto" className="hover:text-baktra-turquesa transition-colors">Canales de contacto</Link></li>
              <li><Link href="/faq" className="hover:text-baktra-turquesa transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="/envios" className="hover:text-baktra-turquesa transition-colors">Envíos a todo el país</Link></li>
              <li><Link href="/cambios" className="hover:text-baktra-turquesa transition-colors">Cambios y devoluciones</Link></li>
            </ul>
          </div>

          {/* Contacto & Redes */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              Puntos de Contacto
            </h4>
            <div className="space-y-2 font-light text-white/70">
              <p>Córdoba Capital, Argentina</p>
              <p>hola@baktra.com.ar</p>
              <p>WhatsApp: +54 9 351 456-7890 [PLACEHOLDER]</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-baktra-turquesa text-white transition-colors"
                aria-label="Instagram de Baktra"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-baktra-turquesa text-white transition-colors text-xs font-bold"
                aria-label="TikTok de Baktra"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        {/* Fila Inferior de Copyright y Medios */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light text-white/60">
          <p>© 2026 BAKTRA · "El origen de lo nuevo". Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos de servicio</Link>
            <span>·</span>
            <span>Mercado Pago & Transferencia [PLACEHOLDER]</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
