'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, Package, Clock } from 'lucide-react';

export default function EnviosPage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <Link href="/tienda" className="inline-flex items-center gap-1.5 text-xs text-baktra-marron hover:text-baktra-rojo transition-colors mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a la tienda
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
            Envíos y Logística de Viaje
          </h1>
          <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light mt-1">
            Llegamos a donde te encuentres transitando.
          </p>
        </div>

        <div className="space-y-6 text-xs text-baktra-rojo/80 leading-relaxed font-light">
          <div className="p-6 bg-baktra-marron/15 rounded-lg border border-baktra-marron/30 space-y-3">
            <h3 className="font-serif font-bold text-base text-baktra-rojo flex items-center gap-2">
              <Truck className="w-4 h-4 text-baktra-turquesa" />
              Modalidades de Envío en Argentina
            </h3>
            <p>
              Despachamos todas las órdenes desde nuestro taller en Córdoba Capital en un plazo de 24 a 48 horas hábiles tras la confirmación del pedido.
            </p>
            <ul className="space-y-1 pl-4 list-disc text-baktra-rojo/80">
              <li><strong>Envío Estándar:</strong> 3 a 5 días hábiles a todo el país.</li>
              <li><strong>Envío Express Nómada:</strong> Entrega prioritaria en 24 a 48 hs.</li>
              <li><strong>Retiro en Showroom Córdoba Capital:</strong> Sin cargo con cita previa.</li>
            </ul>
          </div>

          <div className="p-6 bg-baktra-turquesa/10 rounded-lg border border-baktra-turquesa/25 space-y-3">
            <h3 className="font-serif font-bold text-base text-baktra-rojo flex items-center gap-2">
              <Package className="w-4 h-4 text-baktra-marron" />
              Empaque Sustentable de Viaje
            </h3>
            <p>
              Toda prenda viaja protegida en bolsas de lienzo de algodón reutilizable y cajas de cartón reciclado con cinta vegetal, listas para ser reutilizadas en tus valijas como organizadores de viaje.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
