'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <Link href="/tienda" className="inline-flex items-center gap-1.5 text-xs text-baktra-marron hover:text-baktra-rojo transition-colors mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a la tienda
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
            Términos del Servicio
          </h1>
          <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light mt-1">
            Bases y condiciones de uso de la plataforma Baktra [PLACEHOLDER].
          </p>
        </div>

        <div className="space-y-6 text-xs text-baktra-rojo/80 leading-relaxed font-light">
          <p>
            El presente sitio web constituye el catálogo oficial y plataforma de interacción de BAKTRA ("El origen de lo nuevo"), marca de slow fashion registrada en la República Argentina.
          </p>
          <p>
            Toda transacción simulada realizada en este entorno de prototipado no representa una obligación contractual ni cobro real. La propiedad intelectual de los patrones, isologotipos y diseños rectores corresponde a la titularidad de marca Baktra 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
