'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: '¿Qué significa que una prenda sea "modular"?',
      a: 'Nuestras prendas modulares cuentan con sistemas de botones, broches y presillas que permiten desmontar o acoplar piezas (cuellos, mangas, sobrefaldas). Con esto podés transformar una prenda de abrigo en una ligera o cambiar su impronta visual sin cargar ropa extra.',
    },
    {
      q: '¿Cómo funciona la reversibilidad (Lado A / Lado B)?',
      a: 'Las prendas de doble faz están confeccionadas con costuras francesas e inglesas totalmente pulidas y etiquetas removibles o estampadas. Ambos lados ofrecen acabados impecables, permitiéndote tener dos estéticas distintas en una sola pieza.',
    },
    {
      q: '¿Hacen envíos a nómades que residen temporalmente en el país o en el exterior?',
      a: 'Sí. Realizamos envíos a todo el territorio argentino a través de correo prioritario y coordinamos entregas especiales en alojamientos temporales, residencias creativas o aparts.',
    },
    {
      q: '¿Cómo funciona el programa de intercambio de módulos?',
      a: 'Si compraste una prenda modular Baktra y querés renovar un accesorio desgastado o cambiar de color por cambio de clima, podés ingresar a /intercambio y solicitar la recirculación de tu módulo.',
    },
    {
      q: '¿Las prendas se arrugan en la valija?',
      a: 'Nuestros linos y sargas de algodón reciben un tratamiento de pre-lavado rústico. Las arrugas del lino forman parte de su textura noble natural; además, con el vapor de una ducha tibia en tu habitación recuperan su caída relajada en minutos.',
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <Link href="/tienda" className="inline-flex items-center gap-1.5 text-xs text-baktra-marron hover:text-baktra-rojo transition-colors mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a la tienda
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
            Preguntas Frecuentes
          </h1>
          <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light mt-1">
            Respuestas a dudas comunes sobre el uso, cuidado y compra de slow casualwear de autor.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border space-y-2 ${
                idx % 2 === 0
                  ? 'bg-baktra-marron/15 border-baktra-marron/30'
                  : 'bg-baktra-rojo/5 border-baktra-rojo/15'
              }`}
            >
              <h3 className="font-serif font-bold text-base text-baktra-rojo flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-baktra-turquesa flex-shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-baktra-rojo/80 leading-relaxed font-light pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
