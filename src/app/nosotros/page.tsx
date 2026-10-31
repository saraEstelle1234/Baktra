'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { PatternBackground } from '@/components/brand/PatternBackground';
import { Marquee } from '@/components/brand/Marquee';
import { Compass, Sparkles, Feather, ShieldCheck, Heart, RefreshCw, Scissors, MapPin } from 'lucide-react';

export default function NosotrosPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const values = [
    {
      title: 'Comodidad',
      subtitle: 'La prenda como refugio',
      desc: 'El viajero no debe resignar bienestar por estilo. Diseñamos siluetas amplias, géneros transpirables y terminaciones que no molestan tras horas de vuelo.',
      icon: Heart,
    },
    {
      title: 'Versatilidad',
      subtitle: 'Módulos & Doble Faz',
      desc: 'Prendas reversibles que multiplican combinaciones. Una valija de cabina se convierte en un archivo inagotable para semanas de estancia nómada.',
      icon: RefreshCw,
    },
    {
      title: 'Identidad',
      subtitle: 'Diseño de autor con carácter',
      desc: 'Frente al uniforme genérico deportivo de aeropuerto, Baktra rescata la elegancia bohemia, bordados de filigrana y detalles que cuentan una historia.',
      icon: Feather,
    },
    {
      title: 'Interculturalidad',
      subtitle: 'El origen del encuentro',
      desc: 'Inspirados en la antigua Ruta de la Seda: sostener lo propio y recibir lo nuevo con curiosidad, apertura y respeto por la memoria textil.',
      icon: Compass,
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Hero Editorial */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 bg-baktra-rojo text-white overflow-hidden">
        <PatternBackground opacity={0.06} strokeColor="#ffffff" interactive={true} />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center">
            <Logo variant="isologotipo" tone="blanco" className="w-44 h-auto" />
          </div>

          <span className="inline-block text-xs uppercase tracking-widest text-baktra-turquesa font-semibold">
            Manifiesto & Origen
          </span>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            El origen de lo nuevo
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base font-light text-white/80 leading-relaxed">
            Baktra nace para responder al dilema del viajero contemporáneo: la renuncia al estilo en favor de la practicidad. Creamos slow casualwear de autor para quienes viajan con identidad, curiosidad y memoria.
          </p>
        </div>
      </section>

      {/* Marquesina separadora con tono Marrón */}
      <Marquee variant="marron" direction="left" speed={1.2} showTagline={true} />

      {/* El Origen del Nombre: Bactra, "La madre de las ciudades" */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-baktra-turquesa" />
              Arqueología & Memoria Textil
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-baktra-rojo leading-tight">
              Bactra: "La madre de las ciudades"
            </h2>
            <p className="text-sm text-baktra-rojo/80 font-light leading-relaxed">
              El nombre de la marca proviene del persa antiguo Baktra (actual Balkh, Afganistán), una de las ciudades continuamente habitadas más antiguas del planeta y punto neurálgico de la Ruta de la Seda. Allí confluían caravanas persas, griegas, chinas e indias.
            </p>
            <p className="text-sm text-baktra-rojo/80 font-light leading-relaxed">
              En ese cruce de horizontes, la diversidad no se neutralizaba: se fusionaba para dar origen a algo nuevo, duradero y cargado de historia. Baktra es también un amuleto textil: un refugio que el viajero lleva consigo para sentirse en casa donde sea que despierte.
            </p>
          </div>

          <div className="lg:col-span-6 bg-baktra-marron/15 p-8 sm:p-12 rounded-lg border border-baktra-marron/30 space-y-6">
            <h3 className="font-serif font-bold text-2xl text-baktra-rojo">
              El Refugio del Viajero
            </h3>
            <p className="text-xs sm:text-sm text-baktra-rojo/80 font-light leading-relaxed">
              Baktra propone una experiencia textil cálida, libre y duradera. No diseñamos ropa para coleccionar fotos turísticas, sino prendas pensadas para habitar cafés, recorrer talleres artesanales, cruzar terminales y trabajar con total libertad de movimiento.
            </p>
            <div className="pt-2 border-t border-baktra-marron/20 flex items-center justify-between text-xs text-baktra-marron">
              <span className="font-medium text-baktra-rojo">Diseño de autor en Córdoba Capital</span>
              <span className="text-baktra-turquesa font-semibold">Comunidad nómade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cartas Interactivas de Valores (Hover / Flip) con fondo Marrón de marca */}
      <section className="py-20 bg-baktra-marron/15 border-y border-baktra-marron/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
              Pilares Fundamentales
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
              Nuestros Valores
            </h2>
            <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light">
              Tocá cada carta para descubrir el compromiso ético y textil detrás de cada prenda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              const isFlipped = flippedCard === idx;
              const iconColors = [
                'text-baktra-rojo bg-baktra-rojo/10',
                'text-baktra-turquesa bg-baktra-turquesa/15',
                'text-baktra-marron bg-baktra-marron/20',
                'text-baktra-turquesa bg-baktra-turquesa/15',
              ];
              return (
                <div
                  key={val.title}
                  onClick={() => setFlippedCard(isFlipped ? null : idx)}
                  className="cursor-pointer bg-white p-6 rounded-lg border border-baktra-marron/25 shadow-sm hover:shadow-md hover:border-baktra-turquesa transition-all min-h-[220px] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColors[idx % 4]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-baktra-rojo">{val.title}</h3>
                    <span className="text-[11px] uppercase tracking-wider text-baktra-marron block">{val.subtitle}</span>
                  </div>

                  <p className="text-xs text-baktra-rojo/80 font-light leading-relaxed pt-3 border-t border-baktra-marron/15">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proceso Slow Fashion & Trazabilidad */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
            Taller & Confección
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
            Cómo hacemos cada prenda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-baktra-marron/10 border border-baktra-marron/25 rounded space-y-4">
            <Scissors className="w-7 h-7 text-baktra-turquesa" />
            <h3 className="font-serif font-bold text-xl text-baktra-rojo">Confección Artesanal & Modular</h3>
            <p className="text-xs sm:text-sm text-baktra-rojo/80 font-light leading-relaxed">
              Diseñamos siluetas amplias y piezas reversibles con caída fluida. Cada costura y detalle de filigrana está pensado para acompañar el ritmo del viajero sin deteriorarse con el uso continuo.
            </p>
          </div>

          <div className="p-8 bg-baktra-marron/10 border border-baktra-marron/25 rounded space-y-4">
            <RefreshCw className="w-7 h-7 text-baktra-turquesa" />
            <h3 className="font-serif font-bold text-xl text-baktra-rojo">Recirculación de Módulos</h3>
            <p className="text-xs sm:text-sm text-baktra-rojo/80 font-light leading-relaxed">
              Al finalizar la vida útil de una parte de tu prenda, podés devolverla o intercambiarla en nuestro taller por un módulo compatible de nueva temporada, promoviendo un consumo consciente.
            </p>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors rounded shadow"
          >
            <span>Explorar el Archivo & Tienda</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
