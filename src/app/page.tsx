'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { PatternBackground } from '@/components/brand/PatternBackground';
import { Marquee } from '@/components/brand/Marquee';
import { ProductCard } from '@/components/shop/ProductCard';
import { PRODUCTS, TRAVEL_STORIES } from '@/data/products';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Feather } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = PRODUCTS;
  const featuredStories = TRAVEL_STORIES.slice(0, 2);

  return (
    <div className="w-full relative">
      
      {/* SECCIÓN HERO MONUMENTAL */}
      <section className="relative min-h-[90vh] flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-white">
        {/* Patrón de filigrana con reacción sutil al mouse */}
        <PatternBackground opacity={0.07} strokeColor="#852c26" interactive={true} />

        {/* Lema Superior */}
        <div className="relative z-10 pt-8 animate-fadeIn">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-baktra-rojo/5 rounded-full text-xs uppercase tracking-widest text-baktra-rojo font-semibold border border-baktra-rojo/10">
            <Logo variant="isologo" tone="bordo" className="w-3.5 h-auto" />
            Colección Media-Estación · "Colina de Oro"
          </span>
        </div>

        {/* Titular Enorme en Merosa Bold */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 my-auto py-12">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-baktra-rojo tracking-tight leading-[0.98]">
            El archivo de viaje de quien no viste uniforme.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl font-light text-baktra-rojo/80 leading-relaxed">
            Slow casualwear boho de autor. Prendas versátiles, modulares y reversibles pensadas para recorrer el mundo liviano, sin resignar identidad ni diseño.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/tienda"
              className="w-full sm:w-auto px-8 py-4 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 rounded"
              data-cursor-text="Comprar"
            >
              <span>Recorrer archivo de prendas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/valija"
              className="w-full sm:w-auto px-8 py-4 bg-baktra-marron text-white hover:bg-baktra-turquesa text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded shadow-md"
              data-cursor-text="Simular"
            >
              <span>Simulá tu valija de viaje</span>
            </Link>
          </div>
        </div>

        {/* Indicador de Scroll hacia abajo */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-baktra-marron animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Descubrí la historia</span>
          <div className="w-0.5 h-6 bg-baktra-marron/50 rounded-full" />
        </div>
      </section>

      {/* MARQUESINA 1: Tira interactiva que acelera con el scroll */}
      <Marquee variant="bordo" direction="left" speed={1.5} showTagline={true} />

      {/* SECCIÓN MANIFIESTO: "Ruta de la Seda / Valija como Archivo" */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-baktra-rojo text-white relative overflow-hidden">
        <PatternBackground opacity={0.05} strokeColor="#ffffff" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <Logo variant="isologotipo" tone="blanco" className="w-40 h-auto" />
          </div>

          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight text-white">
            "Para un nómade, la valija no es mero equipaje: es un archivo de nostalgias y hallazgos. Se trata de sostener lo propio y recibir lo nuevo."
          </blockquote>

          <div className="w-24 h-0.5 bg-baktra-turquesa mx-auto" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base font-light text-white/80 leading-relaxed">
            Nacimos inspirados en la antigua Bactra ("la madre de las ciudades"), oasis de confluencia en la Ruta de la Seda donde el cruce de culturas dio origen a algo nuevo y duradero. Creamos prendas de confección artesanal y modular pensadas para durar, transformarse y acompañarte donde vayas.
          </p>

          <div className="pt-4">
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-baktra-turquesa hover:text-white transition-colors border-b border-baktra-turquesa pb-1"
            >
              <span>Conocé nuestra historia completa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN COLECCIÓN DESTACADA: "Colina de Oro" */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-baktra-rojo/10 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
              Diseño de Autor Modular
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-baktra-rojo">
              Colección Colina de Oro
            </h2>
            <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light max-w-md">
              "Que no sea casualidad, llevá la suerte con vos". Prendas en conjuntos de 2 a 3 piezas modulares y reversibles.
            </p>
          </div>

          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-baktra-rojo hover:text-baktra-turquesa transition-colors"
          >
            <span>Ver catálogo completo ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grilla Editorial de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* MARQUESINA 2: Variante marrón en sentido opuesto */}
      <Marquee variant="marron" direction="right" speed={1.2} showTagline={false} />

      {/* SECCIÓN INTERACTIVA "ARMÁ TU VALIJA" (CON COLOR MARRÓN DE LA PALETA) */}
      <section className="py-24 bg-baktra-marron/15 px-4 sm:px-6 lg:px-8 border-y border-baktra-marron/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-baktra-rojo font-semibold flex items-center gap-2">
              <Compass className="w-4 h-4 text-baktra-turquesa" />
              Experiencia Nómada Modular
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-baktra-rojo leading-tight">
              ¿Cuánto espacio ocupás cuando viajás?
            </h2>
            <p className="text-sm text-baktra-rojo/85 font-light leading-relaxed">
              Combiná nuestros conjuntos modulares de prendas reversibles y medí en tiempo real el volumen que ocupan en tu valija (carry-on de 38L, mediana de 70L o grande de 100L). Multiplicá tus looks sin pagar exceso de equipaje.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-4 bg-white/90 rounded border border-baktra-marron/30 shadow-sm">
                <span className="text-2xl font-serif font-bold text-baktra-rojo block">12+</span>
                <span className="text-xs text-baktra-rojo/70">Combinaciones con 2 conjuntos</span>
              </div>
              <div className="p-4 bg-white/90 rounded border border-baktra-marron/30 shadow-sm">
                <span className="text-2xl font-serif font-bold text-baktra-turquesa block">-40%</span>
                <span className="text-xs text-baktra-rojo/70">Volumen en valija de cabina</span>
              </div>
            </div>

            <Link
              href="/valija"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors rounded shadow"
            >
              <span>Abrir simulador de valija</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-lg shadow-md border border-baktra-marron/30 space-y-6">
            <div className="flex items-center justify-between border-b border-baktra-rojo/10 pb-4">
              <span className="font-serif font-bold text-base text-baktra-rojo">Ejemplo de Set Rector</span>
              <span className="text-[10px] uppercase font-bold text-baktra-turquesa bg-baktra-turquesa/10 px-2 py-1 rounded">
                Volumen: 3.4 L
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs p-2 bg-baktra-rojo/5 rounded">
                <span className="font-medium">1. Chaleco Bolso Convertible (2 en 1)</span>
                <span className="text-baktra-marron">1.2 Litros</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 bg-baktra-rojo/5 rounded">
                <span className="font-medium">2. Pollera Antílope</span>
                <span className="text-baktra-marron">1.4 Litros</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 bg-baktra-rojo/5 rounded">
                <span className="font-medium">3. Top Mao</span>
                <span className="text-baktra-marron">0.8 Litros</span>
              </div>
            </div>

            <p className="text-[11px] text-baktra-rojo/70 italic border-t border-baktra-rojo/10 pt-3">
              * Con solo 3 piezas contás con múltiples configuraciones de abrigo, bolso de hombro, falda y top, ocupando menos de 4 litros en tu valija de cabina.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN COMUNIDAD: Muro de relatos de viajeros */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
            Voz Comunitaria
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-baktra-rojo">
            La palabra de los viajeros
          </h2>
          <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light">
            Historias y postales de creadores y nómades digitales recorriendo el mundo con Baktra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredStories.map((story) => (
            <div
              key={story.id}
              className="bg-baktra-marron/5 p-8 rounded border border-baktra-marron/25 shadow-sm space-y-4 hover:border-baktra-turquesa hover:bg-white transition-all"
            >
              <div className="flex items-center justify-between text-xs text-baktra-marron">
                <span className="font-semibold text-baktra-rojo">{story.destination}</span>
                <span>{story.authorHandle}</span>
              </div>
              <p className="font-serif italic text-lg text-baktra-rojo leading-snug">
                "{story.storyText}"
              </p>
              <div className="text-[11px] text-baktra-marron font-medium pt-2 border-t border-baktra-rojo/10 flex justify-between">
                <span>{story.authorName}</span>
                <span className="text-baktra-turquesa">Viajero verificado</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/comunidad"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-baktra-rojo hover:text-baktra-turquesa transition-colors border-b border-baktra-rojo pb-1"
          >
            <span>Ver mapa de rutas y sumar tu historia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* MARQUESINA 3: Variante turquesa previa al footer */}
      <Marquee variant="turquesa" direction="left" speed={1.8} showTagline={true} />

    </div>
  );
}
