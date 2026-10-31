'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { PatternBackground } from '@/components/brand/PatternBackground';
import { Marquee } from '@/components/brand/Marquee';
import { Logo } from '@/components/brand/Logo';
import { ArrowRight, Sparkles, MapPin, Feather, Compass } from 'lucide-react';

export default function ColinaDeOroPage() {
  const collectionProducts = PRODUCTS.filter((p) => p.collection === 'Colina de Oro');

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Portada Narrativa Monumental */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 bg-baktra-rojo text-white overflow-hidden">
        <PatternBackground opacity={0.06} strokeColor="#ffffff" interactive={true} />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <div className="flex justify-center">
            <Logo variant="isologotipo" tone="blanco" className="w-44 h-auto" />
          </div>

          <span className="inline-block text-xs uppercase tracking-widest text-baktra-turquesa font-semibold">
            Colección Media-Estación · 1978 — 2026
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
            Colina de Oro
          </h1>

          <blockquote className="text-xl sm:text-2xl font-serif italic text-white/90 max-w-2xl mx-auto">
            "Que no sea casualidad, llevá la suerte con vos."
          </blockquote>

          <div className="w-20 h-0.5 bg-baktra-turquesa mx-auto" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base font-light text-white/80 leading-relaxed">
            En 1978, en el montículo arqueológico de Tillya Tepe (antigua Bactra), se desenterraron más de 20.000 piezas de orfebrería de la Ruta de la Seda. Un testimonio vivo de un mundo donde el intercambio cultural no borraba identidades, sino que daba nacimiento a algo irrepetible.
          </p>
        </div>
      </section>

      {/* Marquesina Marrón a juego */}
      <Marquee variant="marron" direction="left" speed={1.2} showTagline={true} />

      {/* Relato del Yacimiento y Diseño Rector */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold flex items-center gap-2">
              <Compass className="w-4 h-4 text-baktra-turquesa" />
              El Concepto Rector
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo leading-tight">
              Prendas que guardan tesoros y memorias de tránsito.
            </h2>
            <p className="text-sm text-baktra-rojo/80 font-light leading-relaxed">
              Cada prenda de esta colección fue pensada como una coraza liviana: tejidos nobles de algodón y lino rústico que soportan el desgaste de las rutas, forrerías estampadas con la filigrana de Baktra, y sistemas de broches modulares que permiten transformar una campera de abrigo en un chaleco desestructurado.
            </p>
            <p className="text-sm text-baktra-rojo/80 font-light leading-relaxed">
              No creemos en las temporadas descartables de la moda rápida. Diseñamos piezas que evolucionan con cada kilómetro recorrido y que recirculan entre viajeros a través de nuestro programa de intercambio de módulos.
            </p>
          </div>

          <div className="lg:col-span-6 bg-baktra-marron/15 p-8 sm:p-12 rounded-xl border border-baktra-marron/30 space-y-6">
            <h3 className="font-serif font-bold text-xl text-baktra-rojo">
              Los pilares de la colección:
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-baktra-rojo text-white flex items-center justify-center font-serif font-bold flex-shrink-0 shadow-sm">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-baktra-rojo text-sm">Conjuntos de 2 a 3 piezas</h4>
                  <p className="text-baktra-rojo/70 font-light mt-0.5">Módulos compatibles diseñados para superponerse sin abultar.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-baktra-marron text-white flex items-center justify-center font-serif font-bold flex-shrink-0 shadow-sm">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-baktra-rojo text-sm">Doble faz & Reversibilidad</h4>
                  <p className="text-baktra-rojo/70 font-light mt-0.5">Una cara ornamental con bordado y una cara minimalista serena.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-baktra-turquesa text-white flex items-center justify-center font-serif font-bold flex-shrink-0 shadow-sm">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-baktra-rojo text-sm">Confección Artesanal de Autor</h4>
                  <p className="text-baktra-rojo/70 font-light mt-0.5">Prendas concebidas para durar temporadas completas y acompañar al viajero en cualquier latitud.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Horizontal / Carrusel de Prendas de la Colección */}
      <section className="py-20 bg-baktra-marron/15 border-t border-baktra-marron/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-end justify-between border-b border-baktra-rojo/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
                Lookbook & Piezas
              </span>
              <h2 className="text-3xl font-serif font-bold text-baktra-rojo">
                Las piezas de Colina de Oro
              </h2>
            </div>
            <Link
              href="/tienda"
              className="text-xs uppercase tracking-widest font-semibold text-baktra-rojo hover:text-baktra-turquesa underline transition-colors"
            >
              Ver en la tienda
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
