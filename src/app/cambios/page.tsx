'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, ShieldCheck } from 'lucide-react';

export default function CambiosPage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <Link href="/tienda" className="inline-flex items-center gap-1.5 text-xs text-baktra-marron hover:text-baktra-rojo transition-colors mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a la tienda
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
            Políticas de Cambios y Devoluciones
          </h1>
          <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light mt-1">
            Garantía de confort y flexibilidad para el viajero.
          </p>
        </div>

        <div className="space-y-6 text-xs text-baktra-rojo/80 leading-relaxed font-light">
          <div className="p-6 bg-baktra-marron/15 rounded-lg border border-baktra-marron/30 space-y-3">
            <h3 className="font-serif font-bold text-base text-baktra-rojo flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-baktra-turquesa" />
              Plazo de 30 Días
            </h3>
            <p>
              Podés solicitar el cambio de talle, color o modelo dentro de los 30 días corridos posteriores a la recepción de tu prenda. El primer cambio por talle no tiene costo de envío dentro de la República Argentina.
            </p>
          </div>

          <div className="p-6 bg-baktra-turquesa/10 rounded-lg border border-baktra-turquesa/25 space-y-3">
            <h3 className="font-serif font-bold text-base text-baktra-rojo flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-baktra-turquesa" />
              Estado de las Prendas
            </h3>
            <p>
              Para ser admitida para cambio o devolución, la prenda debe encontrarse en su estado original, sin uso ni lavados, con sus etiquetas especiales y en su bolsa de lienzo correspondiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
