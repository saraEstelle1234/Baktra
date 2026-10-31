'use client';

import React from 'react';
import { X, Check } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export const SizeGuide: React.FC<SizeGuideProps> = ({ isOpen, onClose, category }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-baktra-rojo/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white text-baktra-rojo rounded-sm max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-baktra-rojo/20 z-10 animate-fadeIn">
        <div className="flex items-center justify-between border-b border-baktra-rojo/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <Logo variant="isologo" tone="bordo" className="w-6 h-auto" />
            <h3 className="font-serif font-bold text-xl text-baktra-rojo">
              Guía de Talles para Viajeros
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-baktra-rojo/60 hover:text-baktra-rojo transition-colors rounded-full"
            aria-label="Cerrar guía de talles"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-baktra-rojo/80 mb-6 leading-relaxed">
          Nuestras prendas de slow casualwear están pensadas para transitar aeropuertos y climas variables con total soltura. Su moldería desestructurada ofrece un calce relajado y confortable.
        </p>

        {/* Tabla de medidas en cm */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-baktra-rojo/20 text-baktra-marron uppercase tracking-wider">
                <th className="py-2.5 px-3">Talle</th>
                <th className="py-2.5 px-3">Pecho (cm)</th>
                <th className="py-2.5 px-3">Cintura (cm)</th>
                <th className="py-2.5 px-3">Cadera (cm)</th>
                <th className="py-2.5 px-3">Largo Manga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-baktra-rojo/10">
              <tr>
                <td className="py-2.5 px-3 font-bold text-baktra-rojo">S</td>
                <td className="py-2.5 px-3">88 - 94</td>
                <td className="py-2.5 px-3">70 - 76</td>
                <td className="py-2.5 px-3">92 - 98</td>
                <td className="py-2.5 px-3">61 cm</td>
              </tr>
              <tr className="bg-baktra-rojo/5">
                <td className="py-2.5 px-3 font-bold text-baktra-rojo">M</td>
                <td className="py-2.5 px-3">95 - 102</td>
                <td className="py-2.5 px-3">77 - 84</td>
                <td className="py-2.5 px-3">99 - 106</td>
                <td className="py-2.5 px-3">63 cm</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-baktra-rojo">L</td>
                <td className="py-2.5 px-3">103 - 110</td>
                <td className="py-2.5 px-3">85 - 92</td>
                <td className="py-2.5 px-3">107 - 114</td>
                <td className="py-2.5 px-3">65 cm</td>
              </tr>
              <tr className="bg-baktra-rojo/5">
                <td className="py-2.5 px-3 font-bold text-baktra-rojo">XL</td>
                <td className="py-2.5 px-3">111 - 118</td>
                <td className="py-2.5 px-3">93 - 100</td>
                <td className="py-2.5 px-3">115 - 122</td>
                <td className="py-2.5 px-3">66 cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tips para no errarle */}
        <div className="bg-baktra-rojo/5 p-4 rounded border border-baktra-rojo/10 space-y-2 text-xs">
          <h4 className="font-serif font-bold text-baktra-rojo">Recomendación para viajar liviano:</h4>
          <ul className="space-y-1.5 text-baktra-rojo/80">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-baktra-turquesa flex-shrink-0" />
              <span>Si dudás entre dos talles, elegí el mayor para prendas de abrigo o el menor si preferís un calce más ceñido.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-baktra-turquesa flex-shrink-0" />
              <span>Las faldas y pantalones cuentan con jaretas interiores que admiten un ajuste de hasta 6 cm.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
