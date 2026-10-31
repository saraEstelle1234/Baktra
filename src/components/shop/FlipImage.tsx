'use client';

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface FlipImageProps {
  sideAImage: string;
  sideBImage?: string;
  alt: string;
  isReversible: boolean;
  className?: string;
}

export const FlipImage: React.FC<FlipImageProps> = ({
  sideAImage,
  sideBImage,
  alt,
  isReversible,
  className = '',
}) => {
  const [currentSide, setCurrentSide] = useState<'A' | 'B'>('A');
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggle = () => {
    if (!isReversible || !sideBImage) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSide((prev) => (prev === 'A' ? 'B' : 'A'));
      setIsFlipping(false);
    }, 250);
  };

  const imageSrc = currentSide === 'A' || !sideBImage ? sideAImage : sideBImage;

  return (
    <div className={`relative overflow-hidden bg-baktra-rojo/5 rounded-sm border border-baktra-rojo/10 ${className}`}>
      {/* Imagen con transición suave */}
      <div
        className={`w-full h-full transition-all duration-300 ease-baktra ${
          isFlipping ? 'scale-95 opacity-50 blur-[2px]' : 'scale-100 opacity-100 blur-0'
        }`}
      >
        <img
          src={imageSrc}
          alt={`${alt} - Cara ${currentSide}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Control interactivo Lado A / Lado B */}
      {isReversible && sideBImage && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex gap-1.5 pointer-events-auto">
            <button
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
            onClick={handleToggle}
            className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-baktra-rojo rounded shadow text-xs font-semibold uppercase tracking-wider transition-all"
            title="Dar vuelta prenda"
          >
            <RefreshCw className="w-3.5 h-3.5 text-baktra-turquesa" />
            <span className="hidden sm:inline">Dar vuelta</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FlipImage;
