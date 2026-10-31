'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { PatternBackground } from '@/components/brand/PatternBackground';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-white text-baktra-rojo overflow-hidden">
      <PatternBackground opacity={0.06} strokeColor="#852c26" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        {/* Isologo que "se desarma" / rota sutilmente */}
        <div className="flex justify-center">
          <div className="animate-spin-slow p-4">
            <Logo variant="isologo" tone="bordo" className="w-16 h-auto opacity-75" />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-baktra-turquesa" />
            Desvío de Ruta · Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-baktra-rojo">
            Te saliste del mapa
          </h1>
          <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light leading-relaxed">
            A veces perderse es parte del viaje, pero esta coordenada no contiene ninguna pieza de nuestro archivo.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors rounded shadow"
          >
            Volver al inicio
          </Link>
          <Link
            href="/tienda"
            className="px-6 py-3 bg-baktra-rojo/5 text-baktra-rojo border border-baktra-rojo/20 text-xs uppercase tracking-widest font-semibold hover:bg-baktra-rojo/10 transition-colors rounded"
          >
            Explorar tienda
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
