'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-baktra-marron text-white text-[11px] uppercase tracking-widest py-2 px-4 border-b border-white/20 relative z-40 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2">
          <Logo variant="isologo" tone="blanco" className="w-3.5 h-auto opacity-90" />
          <span className="font-light">Envíos a todo el país · 3 cuotas sin interés</span>
        </div>

        <div className="mx-auto md:mx-0 text-center font-medium">
          <span>Colección "Colina de Oro"</span>
          <Link
            href="/coleccion/colina-de-oro"
            className="ml-2 text-white font-bold underline hover:text-baktra-rojo transition-colors"
          >
            Ver editorial
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white/90">
          <span className="px-2 py-0.5 rounded-full bg-baktra-turquesa text-white text-[10px] font-bold">
            Taller Córdoba
          </span>
          <Link href="/intercambio" className="hover:text-baktra-rojo transition-colors">
            Kit modular
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
