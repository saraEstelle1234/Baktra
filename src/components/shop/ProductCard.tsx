'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { formatARS, formatInstallments } from '@/lib/formatters';
import { useCartStore } from '@/store/useCartStore';
import { Plus, Check, RefreshCw } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [activeSide, setActiveSide] = useState<'A' | 'B'>('A');
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

  const currentImg = activeSide === 'B' && product.sideBImage ? product.sideBImage : product.sideAImage;

  return (
    <div
      className={`group relative flex flex-col bg-white border border-baktra-rojo/10 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-baktra-rojo/30 ${className}`}
      data-cursor-text="Ver"
    >
      {/* Contenedor de Imagen con Flip en Hover */}
      <Link href={`/tienda/${product.slug}`} className="block relative aspect-[4/5] bg-baktra-rojo/5 overflow-hidden">
        <img
          src={currentImg}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-baktra group-hover:scale-105"
        />

        {/* Badges superiores combinando los 3 pilares de la paleta */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isReversible && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-baktra-rojo text-white rounded-sm shadow-sm">
              Reversible
            </span>
          )}
          {product.isModular && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-baktra-turquesa text-white rounded-sm shadow-sm">
              Modular
            </span>
          )}
          <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-baktra-marron text-white rounded-sm shadow-sm">
            {product.volumeLitres} L
          </span>
        </div>

        {/* Botón flotante para dar vuelta la prenda si es reversible */}
        {product.isReversible && (
          <button
            onClick={toggleSide}
            className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-white text-baktra-rojo rounded-full shadow-md transition-all hover:scale-110 z-10 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2"
            title="Dar vuelta prenda (Lado A / Lado B)"
            aria-label="Dar vuelta prenda"
          >
            <RefreshCw className="w-3 h-3 text-baktra-turquesa" />
            <span>Lado {activeSide}</span>
          </button>
        )}

        {/* Botón de compra rápida magnético en esquina inferior */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 right-3 p-2.5 rounded-full shadow-lg transition-all duration-300 z-10 flex items-center justify-center ${
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
          <span className="text-[10px] uppercase tracking-widest text-baktra-marron block mb-1">
            {product.collection}
          </span>
          <Link href={`/tienda/${product.slug}`}>
            <h3 className="font-serif font-bold text-base text-baktra-rojo group-hover:text-baktra-turquesa transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-baktra-rojo/70 line-clamp-1 mt-0.5">
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
