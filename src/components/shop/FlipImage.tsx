'use client';

import React, { useState } from 'react';
import { RefreshCw, Sparkles, Layers, ArrowRightLeft } from 'lucide-react';
import { ConvertibleData } from '@/types';

interface FlipImageProps {
  sideAImage: string;
  sideBImage?: string;
  alt: string;
  isReversible: boolean;
  isConvertible?: boolean;
  convertibleData?: ConvertibleData;
  gallery?: string[];
  className?: string;
}

export const FlipImage: React.FC<FlipImageProps> = ({
  sideAImage,
  sideBImage,
  alt,
  isReversible,
  isConvertible = false,
  convertibleData,
  gallery = [],
  className = '',
}) => {
  const [currentSide, setCurrentSide] = useState<'A' | 'B'>('A');
  const [activeConvertibleMode, setActiveConvertibleMode] = useState<'modeA' | 'modeB'>('modeA');
  const [chalecoView, setChalecoView] = useState<'frente' | 'espalda'>('frente');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggleReversible = () => {
    if (!isReversible || !sideBImage) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSide((prev) => (prev === 'A' ? 'B' : 'A'));
      setIsFlipping(false);
    }, 200);
  };

  const handleSwitchConvertible = (mode: 'modeA' | 'modeB') => {
    setIsFlipping(true);
    setSelectedGalleryImg(null);
    setTimeout(() => {
      setActiveConvertibleMode(mode);
      setIsFlipping(false);
    }, 200);
  };

  // Determine active display image
  let activeSrc = sideAImage;

  if (isConvertible && convertibleData) {
    if (selectedGalleryImg) {
      activeSrc = selectedGalleryImg;
    } else if (activeConvertibleMode === 'modeB') {
      activeSrc = convertibleData.modeB.image;
    } else {
      activeSrc = chalecoView === 'espalda' && convertibleData.modeA.backImage
        ? convertibleData.modeA.backImage
        : convertibleData.modeA.image;
    }
  } else if (isReversible && sideBImage) {
    activeSrc = currentSide === 'A' ? sideAImage : sideBImage;
  } else if (selectedGalleryImg) {
    activeSrc = selectedGalleryImg;
  }

  // Thumbnails to show below
  const allImages = gallery.length > 0 ? gallery : [sideAImage];

  return (
    <div className="space-y-4">
      {/* Contenedor Principal de la Imagen */}
      <div className={`relative overflow-hidden bg-baktra-rojo/5 rounded-sm border border-baktra-rojo/10 ${className}`}>
        
        {/* Imagen con transición suave */}
        <div
          className={`w-full h-full transition-all duration-300 ease-baktra ${
            isFlipping ? 'scale-95 opacity-50 blur-[2px]' : 'scale-100 opacity-100 blur-0'
          }`}
        >
          <img
            src={activeSrc}
            alt={`${alt} - ${isConvertible ? (activeConvertibleMode === 'modeA' ? 'Modo Chaleco' : 'Modo Bolso') : alt}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Badges superiores flotantes */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 pointer-events-none">
          {isConvertible && (
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-baktra-rojo text-white rounded-sm shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-baktra-turquesa" />
              Prenda Convertible 2 en 1
            </span>
          )}
          {isReversible && !isConvertible && (
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-baktra-rojo text-white rounded-sm shadow-md">
              Doble Faz Reversible
            </span>
          )}
        </div>

        {/* CONTROLES PARA PRENDA CONVERTIBLE (Chaleco ⇄ Bolso) */}
        {isConvertible && convertibleData && (
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-2 pointer-events-none">
            {/* Selector de Modo */}
            <div className="flex bg-white/95 p-1 rounded-lg shadow-lg border border-baktra-rojo/15 pointer-events-auto backdrop-blur-sm">
              <button
                type="button"
                onClick={() => handleSwitchConvertible('modeA')}
                className={`px-3 py-1.5 text-xs uppercase font-bold tracking-wider rounded-md transition-all flex items-center gap-1.5 ${
                  activeConvertibleMode === 'modeA'
                    ? 'bg-baktra-rojo text-white shadow-sm'
                    : 'text-baktra-rojo hover:text-baktra-turquesa'
                }`}
              >
                <span>Modo {convertibleData.modeA.name}</span>
              </button>
              <button
                type="button"
                onClick={() => handleSwitchConvertible('modeB')}
                className={`px-3 py-1.5 text-xs uppercase font-bold tracking-wider rounded-md transition-all flex items-center gap-1.5 ${
                  activeConvertibleMode === 'modeB'
                    ? 'bg-baktra-turquesa text-white shadow-sm'
                    : 'text-baktra-rojo hover:text-baktra-turquesa'
                }`}
              >
                <span>Modo {convertibleData.modeB.name}</span>
              </button>
            </div>

            {/* Sub-toggle Frente / Espalda si está en Modo Chaleco */}
            {activeConvertibleMode === 'modeA' && convertibleData.modeA.backImage && (
              <div className="flex bg-white/95 p-1 rounded-lg shadow-md border border-baktra-rojo/15 pointer-events-auto backdrop-blur-sm text-[11px]">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGalleryImg(null);
                    setChalecoView('frente');
                  }}
                  className={`px-2.5 py-1 uppercase font-semibold rounded ${
                    chalecoView === 'frente' && !selectedGalleryImg
                      ? 'bg-baktra-marron text-white'
                      : 'text-baktra-rojo'
                  }`}
                >
                  Frente
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGalleryImg(null);
                    setChalecoView('espalda');
                  }}
                  className={`px-2.5 py-1 uppercase font-semibold rounded ${
                    chalecoView === 'espalda' && !selectedGalleryImg
                      ? 'bg-baktra-marron text-white'
                      : 'text-baktra-rojo'
                  }`}
                >
                  Espalda
                </button>
              </div>
            )}
          </div>
        )}

        {/* Control interactivo Lado A / Lado B para prendas reversibles tradicionales */}
        {isReversible && !isConvertible && sideBImage && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex gap-1.5 pointer-events-auto">
              <button
                type="button"
                onClick={() => setCurrentSide('A')}
                className={`px-3 py-1.5 text-xs uppercase font-bold tracking-wider rounded shadow transition-all ${
                  currentSide === 'A'
                    ? 'bg-baktra-rojo text-white'
                    : 'bg-white/90 text-baktra-rojo hover:bg-white'
                }`}
              >
                Lado A
              </button>
              <button
                type="button"
                onClick={() => setCurrentSide('B')}
                className={`px-3 py-1.5 text-xs uppercase font-bold tracking-wider rounded shadow transition-all ${
                  currentSide === 'B'
                    ? 'bg-baktra-rojo text-white'
                    : 'bg-white/90 text-baktra-rojo hover:bg-white'
                }`}
              >
                Lado B
              </button>
            </div>

            <button
              type="button"
              onClick={handleToggleReversible}
              className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-baktra-rojo rounded shadow text-xs font-semibold uppercase tracking-wider transition-all"
              title="Dar vuelta prenda"
            >
              <RefreshCw className="w-3.5 h-3.5 text-baktra-turquesa" />
              <span className="hidden sm:inline">Dar vuelta</span>
            </button>
          </div>
        )}
      </div>

      {/* Banner Explicativo de Transformación (para convertibles) */}
      {isConvertible && convertibleData && (
        <div className="p-4 bg-baktra-marron/15 rounded-lg border border-baktra-marron/30 flex items-start gap-3 text-xs text-baktra-rojo">
          <ArrowRightLeft className="w-5 h-5 text-baktra-turquesa flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm text-baktra-rojo">
                Transformación Intuitiva de Prenda
              </span>
              <span className="px-2 py-0.5 bg-baktra-turquesa/20 text-baktra-rojo font-bold text-[10px] uppercase rounded">
                Doble Uso
              </span>
            </div>
            <p className="font-light text-baktra-rojo/85 leading-relaxed">
              {convertibleData.transformationTip}
            </p>
          </div>
        </div>
      )}

      {/* Tira de Miniaturas / Galería de Ángulos */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {allImages.map((img, idx) => {
            const isSelected = activeSrc === img;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedGalleryImg(img);
                }}
                className={`relative w-20 h-24 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                  isSelected
                    ? 'border-baktra-rojo ring-2 ring-baktra-turquesa/40 shadow-md'
                    : 'border-baktra-marron/25 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                {isConvertible && idx === 1 && (
                  <span className="absolute bottom-0 inset-x-0 bg-baktra-rojo/90 text-[8px] uppercase font-bold text-white text-center py-0.5">
                    Bolso
                  </span>
                )}
                {isConvertible && idx === 0 && (
                  <span className="absolute bottom-0 inset-x-0 bg-baktra-marron/90 text-[8px] uppercase font-bold text-white text-center py-0.5">
                    Chaleco
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FlipImage;
