'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { FlipImage } from '@/components/shop/FlipImage';
import { SizeGuide } from '@/components/shop/SizeGuide';
import { ProductCard } from '@/components/shop/ProductCard';
import { useCartStore } from '@/store/useCartStore';
import { formatARS, formatInstallments } from '@/lib/formatters';
import { ArrowLeft, Check, ShieldCheck, Truck, RefreshCw, Scissors, Sparkles, BookOpen } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedSide, setSelectedSide] = useState<'A' | 'B'>('A');
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, selectedSide);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Módulos compatibles / sugerencias para armar el conjunto
  const relatedProducts = PRODUCTS.filter((p) =>
    product.compatibleModules?.includes(p.id) || (p.id !== product.id && p.collection === product.collection)
  ).slice(0, 3);

  return (
    <div className="w-full bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb de navegación */}
        <div className="flex items-center gap-2 text-xs text-baktra-marron">
          <Link href="/tienda" className="hover:text-baktra-rojo transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al archivo</span>
          </Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-baktra-rojo font-medium truncate max-w-xs">{product.name}</span>
        </div>

        {/* Fila Principal: Visor Flip + Selector de Compra */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Visor Flip Lado A / Lado B / Modo Convertible */}
          <div className="lg:col-span-7 space-y-4">
            <FlipImage
              sideAImage={product.sideAImage}
              sideBImage={product.sideBImage}
              alt={product.name}
              isReversible={product.isReversible}
              isConvertible={product.isConvertible}
              convertibleData={product.convertibleData}
              gallery={product.gallery}
              className="w-full aspect-[4/5] shadow-sm"
            />

            {/* Badges y Sellos de Producción celebrando los 3 pilares */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="p-3 bg-baktra-rojo/10 rounded border border-baktra-rojo/25 text-baktra-rojo">
                <Scissors className="w-4 h-4 mx-auto mb-1 text-baktra-rojo" />
                <span className="font-semibold block">Confección</span>
                <span className="text-[10px] text-baktra-rojo/80">Diseño de autor</span>
              </div>
              <div className="p-3 bg-baktra-marron/20 rounded border border-baktra-marron/35 text-baktra-rojo">
                <RefreshCw className="w-4 h-4 mx-auto mb-1 text-baktra-marron" />
                <span className="font-semibold block">
                  {product.isConvertible
                    ? 'Convertible 2 en 1'
                    : product.isReversible
                    ? 'Reversible 2 en 1'
                    : 'Prenda Modular'}
                </span>
                <span className="text-[10px] text-baktra-rojo/80">
                  {product.isConvertible
                    ? 'Chaleco ⇄ Bolso'
                    : product.isReversible
                    ? 'Doble faz de viaje'
                    : 'Slow Fashion'}
                </span>
              </div>
              <div className="p-3 bg-baktra-turquesa/20 rounded border border-baktra-turquesa/35 text-baktra-rojo">
                <Sparkles className="w-4 h-4 mx-auto mb-1 text-baktra-turquesa" />
                <span className="font-semibold block">Slow Fashion</span>
                <span className="text-[10px] text-baktra-rojo/80">Taller Córdoba Capital</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información y Formulario de Compra */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2 border-b border-baktra-rojo/10 pb-6">
              <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
                Colección {product.collection}
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo leading-tight">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light">
                {product.tagline}
              </p>

              {/* Precio y Cuotas */}
              <div className="pt-4 space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-baktra-rojo">
                  {formatARS(product.price)}
                </div>
                <div className="text-xs font-semibold text-baktra-marron">
                  {formatInstallments(product.price, 3)}
                </div>
              </div>
            </div>

            {/* Selectores de Talle y Guía */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-baktra-rojo">
                  Seleccioná tu talle
                </span>
                <button
                  type="button"
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-baktra-marron hover:text-baktra-turquesa underline transition-colors"
                >
                  Ver guía de talles
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    disabled={v.stock === 0}
                    className={`py-3 text-xs font-bold uppercase rounded border transition-all ${
                      selectedVariant.id === v.id
                        ? 'bg-baktra-rojo text-white border-baktra-rojo shadow'
                        : v.stock === 0
                        ? 'bg-baktra-rojo/5 text-baktra-rojo/30 border-dashed cursor-not-allowed'
                        : 'bg-white text-baktra-rojo border-baktra-rojo/20 hover:border-baktra-rojo'
                    }`}
                  >
                    <span>{v.size}</span>
                    {v.stock < 3 && v.stock > 0 && (
                      <span className="block text-[9px] font-normal text-baktra-turquesa">
                        Últimos {v.stock}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector para Prenda Convertible (Chaleco ⇄ Bolso) */}
            {product.isConvertible && product.convertibleData && (
              <div className="space-y-2 text-xs p-4 bg-baktra-marron/10 rounded-lg border border-baktra-marron/25">
                <span className="font-semibold uppercase tracking-wider text-baktra-rojo block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-baktra-turquesa" />
                  Configuración inicial de uso
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedSide('A')}
                    className={`flex-1 py-2.5 text-xs font-semibold uppercase rounded border transition-all ${
                      selectedSide === 'A'
                        ? 'border-baktra-rojo bg-baktra-rojo text-white font-bold shadow'
                        : 'border-baktra-rojo/20 bg-white text-baktra-rojo hover:border-baktra-rojo'
                    }`}
                  >
                    Usar como {product.convertibleData.modeA.name}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSide('B')}
                    className={`flex-1 py-2.5 text-xs font-semibold uppercase rounded border transition-all ${
                      selectedSide === 'B'
                        ? 'border-baktra-turquesa bg-baktra-turquesa text-white font-bold shadow'
                        : 'border-baktra-rojo/20 bg-white text-baktra-rojo hover:border-baktra-rojo'
                    }`}
                  >
                    Usar como {product.convertibleData.modeB.name}
                  </button>
                </div>
                <p className="text-[11px] text-baktra-rojo/70 font-light mt-1">
                  * Ambas funciones vienen integradas en la misma pieza. Podés alternar libremente en cualquier momento.
                </p>
              </div>
            )}

            {/* Selector de Lado si es Reversible */}
            {product.isReversible && !product.isConvertible && (
              <div className="space-y-2 text-xs">
                <span className="font-semibold uppercase tracking-wider text-baktra-rojo block">
                  Reverso inicial en valija
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedSide('A')}
                    className={`flex-1 py-2 text-xs font-semibold uppercase rounded border transition-all ${
                      selectedSide === 'A'
                        ? 'border-baktra-rojo bg-baktra-rojo/10 text-baktra-rojo font-bold'
                        : 'border-baktra-rojo/20 text-baktra-rojo/70'
                    }`}
                  >
                    Lado A (Principal)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSide('B')}
                    className={`flex-1 py-2 text-xs font-semibold uppercase rounded border transition-all ${
                      selectedSide === 'B'
                        ? 'border-baktra-rojo bg-baktra-rojo/10 text-baktra-rojo font-bold'
                        : 'border-baktra-rojo/20 text-baktra-rojo/70'
                    }`}
                  >
                    Lado B (Reverso)
                  </button>
                </div>
              </div>
            )}

            {/* Botón Principal "Sumar a la Valija" */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-3 rounded shadow-md transition-all duration-300 ${
                  added
                    ? 'bg-baktra-turquesa text-white'
                    : 'bg-baktra-rojo hover:bg-baktra-turquesa text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Sumado a tu valija!</span>
                  </>
                ) : (
                  <>
                    <span>Sumar a la valija</span>
                    <span>·</span>
                    <span>{formatARS(product.price * quantity)}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-baktra-marron pt-2">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Envíos a todo el país
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Devolución y cambio ágil
                </span>
              </div>
            </div>

            {/* Descripción Breve */}
            <div className="prose text-xs text-baktra-rojo/80 leading-relaxed border-t border-baktra-rojo/10 pt-6">
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        {/* Bloques Narrativos de Marca y Transparencia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-baktra-rojo/10 pt-16">
          {/* Historia de la Pieza */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-baktra-rojo">
              <BookOpen className="w-4 h-4 text-baktra-turquesa" />
              <h3 className="font-serif font-bold text-lg">La historia de la pieza</h3>
            </div>
            <p className="text-xs text-baktra-rojo/80 leading-relaxed font-light">
              {product.story}
            </p>
          </div>

          {/* Cómo se Hizo / Slow Fashion */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-baktra-rojo">
              <Scissors className="w-4 h-4 text-baktra-turquesa" />
              <h3 className="font-serif font-bold text-lg">Moldería y confección</h3>
            </div>
            <p className="text-xs text-baktra-rojo/80 leading-relaxed font-light">
              {product.craftsmanship}
            </p>
          </div>

          {/* Cuidados Ilustrados */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-baktra-rojo">
              <ShieldCheck className="w-4 h-4 text-baktra-turquesa" />
              <h3 className="font-serif font-bold text-lg">Etiqueta de cuidados</h3>
            </div>
            <ul className="text-xs text-baktra-rojo/80 space-y-1.5 font-light">
              {product.careInstructions.map((care, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-baktra-turquesa font-bold">·</span>
                  <span>{care}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección "Completá tu Conjunto" */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-baktra-rojo/10 pt-16 space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
                  Modularidad en Tránsito
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-baktra-rojo">
                  Completá tu conjunto rector
                </h2>
              </div>
              <Link
                href="/valija"
                className="text-xs uppercase tracking-widest font-semibold text-baktra-rojo hover:text-baktra-turquesa transition-colors underline"
              >
                Probar en el simulador de valija
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modal de Guía de Talles */}
      <SizeGuide
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}
