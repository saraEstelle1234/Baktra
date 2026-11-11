'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { formatARS, formatInstallments } from '@/lib/formatters';
import { useCartStore } from '@/store/useCartStore';
import { Plus, Check, RefreshCw, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [activeSide, setActiveSide] = useState<'A' | 'B'>('A');
  const [activeMode, setActiveMode] = useState<'modeA' | 'modeB'>('modeA');
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants[0];
    if (defaultVariant) {
      addItem(product, defaultVariant, activeSide);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    }
  };

  const toggleSide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.isReversible && product.sideBImage) {
      setActiveSide((prev) => (prev === 'A' ? 'B' : 'A'));
    }
  };

  const toggleConvertibleMode = (mode: 'modeA' | 'modeB', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMode(mode);
  };

  // Determine current image based on convertible / reversible / hover state
  let currentImg = product.sideAImage;

  if (product.isConvertible && product.convertibleData) {
    if (activeMode === 'modeB') {
      currentImg = product.convertibleData.modeB.image;
    } else {
      currentImg = isHovered && product.convertibleData.modeA.backImage
        ? product.convertibleData.modeA.backImage
        : product.convertibleData.modeA.image;
    }
  } else if (product.isReversible && product.sideBImage) {
    currentImg = activeSide === 'B' ? product.sideBImage : product.sideAImage;
  } else if (isHovered && product.gallery && product.gallery.length > 1) {
    currentImg = product.gallery[1];
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col bg-white border border-baktra-rojo/10 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-baktra-rojo/30 ${className}`}
      data-cursor-text="Ver"
    >
      {/* Contenedor de Imagen con Flip/Modo en Hover */}
      <Link href={`/tienda/${product.slug}`} className="block relative aspect-[4/5] bg-baktra-rojo/5 overflow-hidden">
        <img
          src={currentImg}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-baktra group-hover:scale-105"
        />

        {/* Badges superiores discretos y compactos en la esquina superior izquierda */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isConvertible && (
            <span className="px-1.5 py-0.5 text-[8.5px] uppercase font-bold tracking-wider bg-baktra-rojo text-white rounded-sm shadow-sm flex items-center gap-1 w-fit">
              <Sparkles className="w-2.5 h-2.5 text-baktra-turquesa" />
              2 en 1
            </span>
          )}
          {product.isReversible && !product.isConvertible && (
            <span className="px-1.5 py-0.5 text-[8.5px] uppercase font-bold tracking-wider bg-baktra-rojo text-white rounded-sm shadow-sm w-fit">
              Reversible
            </span>
          )}
          {product.isModular && !product.isConvertible && (
            <span className="px-1.5 py-0.5 text-[8.5px] uppercase font-bold tracking-wider bg-baktra-turquesa text-white rounded-sm shadow-sm w-fit">
              Modular
            </span>
          )}
          <span className="px-1.5 py-0.5 text-[8.5px] uppercase font-bold tracking-wider bg-baktra-marron text-white rounded-sm shadow-sm w-fit">
            {product.volumeLitres} L
          </span>
        </div>

        {/* Botón flotante para dar vuelta prendas reversibles tradicionales (esquina superior derecha) */}
        {product.isReversible && !product.isConvertible && (
          <button
            onClick={toggleSide}
            className="absolute top-2.5 right-2.5 p-1 bg-white/95 hover:bg-white text-baktra-rojo rounded-full shadow-md transition-all hover:scale-105 z-10 flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-wider px-2 border border-baktra-rojo/15"
            title="Dar vuelta prenda (Lado A / Lado B)"
            aria-label="Dar vuelta prenda"
          >
            <RefreshCw className="w-2.5 h-2.5 text-baktra-turquesa" />
            <span>Lado {activeSide}</span>
          </button>
        )}

        {/* Selector interactivo para Prenda CONVERTIBLE (ubicado en la esquina INFERIOR izquierda, sin superposición) */}
        {product.isConvertible && product.convertibleData && (
          <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center bg-white/95 p-0.5 rounded-full shadow-md border border-baktra-rojo/15">
            <button
              onClick={(e) => toggleConvertibleMode('modeA', e)}
              className={`px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider rounded-full transition-all ${
                activeMode === 'modeA'
                  ? 'bg-baktra-rojo text-white shadow-sm'
                  : 'text-baktra-rojo hover:text-baktra-turquesa'
              }`}
              title={`Ver como ${product.convertibleData.modeA.name}`}
            >
              {product.convertibleData.modeA.name}
            </button>
            <button
              onClick={(e) => toggleConvertibleMode('modeB', e)}
              className={`px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider rounded-full transition-all ${
                activeMode === 'modeB'
                  ? 'bg-baktra-turquesa text-white shadow-sm'
                  : 'text-baktra-rojo hover:text-baktra-turquesa'
              }`}
              title={`Ver como ${product.convertibleData.modeB.name}`}
            >
              {product.convertibleData.modeB.name}
            </button>
          </div>
        )}

        {/* Botón de compra rápida magnético en esquina inferior derecha */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-2.5 right-2.5 p-2 rounded-full shadow-lg transition-all duration-300 z-10 flex items-center justify-center ${
            added
              ? 'bg-baktra-turquesa text-white scale-110'
              : 'bg-white text-baktra-rojo hover:bg-baktra-rojo hover:text-white group-hover:opacity-100 opacity-90'
          }`}
          aria-label={`Sumar ${product.name} a la valija`}
        >
          {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </Link>

      {/* Info de Producto */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-widest text-baktra-marron block">
              {product.collection}
            </span>
            {product.isConvertible && (
              <span className="text-[9px] uppercase font-bold text-baktra-turquesa tracking-wider">
                Chaleco ⇄ Bolso
              </span>
            )}
            {product.isReversible && !product.isConvertible && (
              <span className="text-[9px] uppercase font-bold text-baktra-rojo tracking-wider">
                Doble Faz
              </span>
            )}
          </div>
          <Link href={`/tienda/${product.slug}`}>
            <h3 className="font-serif font-bold text-base text-baktra-rojo group-hover:text-baktra-turquesa transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-baktra-rojo/70 line-clamp-2 mt-0.5 font-light">
            {product.tagline}
          </p>
        </div>

        <div className="pt-2 border-t border-baktra-rojo/10 flex items-baseline justify-between">
          <div>
            <span className="text-base font-semibold text-baktra-rojo">
              {formatARS(product.price)}
            </span>
            <span className="block text-[11px] text-baktra-marron">
              {formatInstallments(product.price, 3)}
            </span>
          </div>

          <div className="text-[11px] text-baktra-rojo/60 uppercase tracking-wider">
            {product.variants.length} talles
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
