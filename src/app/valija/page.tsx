'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { LuggageMeter } from '@/components/shop/LuggageMeter';
import { useCartStore } from '@/store/useCartStore';
import { formatARS } from '@/lib/formatters';
import { Check, Plus, Minus, ArrowRight, Sparkles, Briefcase, RefreshCw, Info, ShoppingBag, RotateCcw } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

export default function ValijaBuilderPage() {
  // Preselección inicial para la simulación
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(['prod-01', 'prod-02']);
  const [transferredToCart, setTransferredToCart] = useState(false);
  
  const { addItem, openCart, getTotalItems } = useCartStore();
  const realCartItemsCount = getTotalItems();

  const toggleProduct = (id: string) => {
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  const resetSimulation = () => {
    setSelectedProductIds([]);
  };

  const selectedProducts = PRODUCTS.filter((p) => selectedProductIds.includes(p.id));
  const totalVolumeLitres = selectedProducts.reduce((sum, p) => sum + p.volumeLitres, 0);
  const totalCost = selectedProducts.reduce((sum, p) => sum + p.price, 0);

  // Estimador de combinaciones: piezas reversibles duplican sus posibilidades
  const possibleLooks = Math.max(
    selectedProducts.length * 2 + (selectedProducts.some((p) => p.isReversible) ? 4 : 0),
    selectedProducts.length
  );

  const handleTransferToRealCart = () => {
    selectedProducts.forEach((p) => {
      const defaultVariant = p.variants[0];
      if (defaultVariant) {
        addItem(p, defaultVariant, 'A');
      }
    });
    setTransferredToCart(true);
    setTimeout(() => {
      setTransferredToCart(false);
      openCart();
    }, 900);
  };

  return (
    <div className="w-full bg-white min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* BANNER INFORMATIVO CLAVE: MODO SIMULACIÓN VISUAL (NO AFECTA EL CARRITO) */}
        <div className="bg-baktra-marron/15 border-2 border-dashed border-baktra-marron/40 rounded-xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-baktra-turquesa text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-baktra-rojo">
                  Laboratorio Virtual de Equipaje
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-baktra-turquesa text-white">
                  Modo Simulación
                </span>
              </div>
              <p className="text-xs sm:text-sm text-baktra-rojo/80 mt-1.5 max-w-2xl font-light leading-relaxed">
                <strong>Esto es un simulador interactivo de prueba:</strong> Las prendas que sumes o quites en esta pantalla <span className="underline decoration-baktra-turquesa font-medium">son solo un ensayo visual</span> y <strong>NO se añaden a tu carrito real</strong> a menos que decidas transferirlas explícitamente.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-baktra-marron/20 w-full md:w-auto justify-between md:justify-end text-xs">
            <div className="bg-white/80 px-3.5 py-2 rounded border border-baktra-marron/30 text-baktra-rojo">
              <span className="text-baktra-marron block text-[10px] uppercase font-semibold">Tu Carrito Real</span>
              <span className="font-bold text-sm text-baktra-rojo">
                {realCartItemsCount} {realCartItemsCount === 1 ? 'prenda' : 'prendas'}
              </span>
            </div>
            <button
              onClick={openCart}
              className="px-3.5 py-2 bg-baktra-rojo text-white rounded text-xs font-semibold hover:bg-baktra-turquesa transition-colors"
            >
              Ver Carrito
            </button>
          </div>
        </div>

        {/* Cabecera Principal */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4 text-baktra-turquesa" />
            Simulador Volumétrico Nómade
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-baktra-rojo tracking-tight">
            Simulá tu Valija de Viaje
          </h1>
          <p className="text-xs sm:text-sm text-baktra-rojo/80 font-light leading-relaxed max-w-2xl mx-auto">
            Seleccioná abajo las piezas que te gustaría llevar y descubrí cómo optimizan el espacio en una valija de cabina (38L), mediana (70L) o grande (100L).
          </p>
        </div>

        {/* Sección Medidor Volumétrico y Resumen de la Simulación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <LuggageMeter usedLitres={totalVolumeLitres} />
          </div>

          {/* Panel Lateral: Resultados del Ensayo */}
          <div className="lg:col-span-4 bg-gradient-to-br from-baktra-rojo to-[#6b221e] text-white p-6 rounded-xl shadow-lg space-y-6 border border-baktra-marron/30">
            <div className="border-b border-white/15 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-baktra-marron block font-semibold">
                  Ensayo de Equipaje
                </span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-baktra-turquesa/30 text-baktra-turquesa border border-baktra-turquesa/40 font-bold">
                  Borrador
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold mt-1">Tu Simulación Actual</h3>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between text-white/80">
                <span>Prendas en este ensayo</span>
                <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                  {selectedProducts.length}
                </span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Combinaciones posibles</span>
                <span className="font-bold text-baktra-turquesa flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> {possibleLooks} looks
                </span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Volumen ensayado</span>
                <span className="font-bold text-white">{totalVolumeLitres.toFixed(1)} L</span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold pt-3 border-t border-white/15 text-white">
                <span>Inversión estimada</span>
                <span>{formatARS(totalCost)}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/15">
              <button
                onClick={handleTransferToRealCart}
                disabled={selectedProducts.length === 0}
                className={`w-full py-3.5 px-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 rounded-md transition-all shadow-md ${
                  transferredToCart
                    ? 'bg-baktra-turquesa text-white'
                    : selectedProducts.length === 0
                    ? 'bg-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-white text-baktra-rojo hover:bg-baktra-turquesa hover:text-white'
                }`}
              >
                {transferredToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Transferido a tu carrito real!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Transferir este ensayo al carrito</span>
                  </>
                )}
              </button>

              {selectedProducts.length > 0 && (
                <button
                  type="button"
                  onClick={resetSimulation}
                  className="w-full text-center text-xs text-baktra-marron hover:text-white transition-colors flex items-center justify-center gap-1.5 py-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpiar simulación (empezar de cero)</span>
                </button>
              )}
            </div>

            <p className="text-[11px] text-white/60 font-light italic leading-snug">
              * Recordá: mientras estés probando prendas en esta mesa de trabajo, tu carrito de compras real permanece inalterado.
            </p>
          </div>
        </div>

        {/* Grilla Selectora para la Simulación */}
        <div className="space-y-6 pt-10 border-t border-baktra-marron/25">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
                Mesa de Ensayo
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-baktra-rojo">
                Prendas disponibles para simular
              </h2>
            </div>
            <span className="text-xs text-baktra-marron">
              Hacé clic para sumar o quitar piezas de la simulación
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => {
              const isSelected = selectedProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => toggleProduct(product.id)}
                  className={`group cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 relative bg-white ${
                    isSelected
                      ? 'border-baktra-turquesa ring-2 ring-baktra-turquesa/30 shadow-md bg-baktra-turquesa/5'
                      : 'border-baktra-marron/20 hover:border-baktra-marron/50 opacity-80 hover:opacity-100 hover:shadow-sm'
                  }`}
                >
                  <div className="aspect-[4/5] bg-baktra-rojo/5 rounded overflow-hidden relative mb-3">
                    <img
                      src={product.sideAImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Botón de estado en simulación */}
                    <div className="absolute top-2 right-2">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow ${
                          isSelected
                            ? 'bg-baktra-turquesa text-white'
                            : 'bg-white/90 text-baktra-rojo hover:bg-white'
                        }`}
                        title={isSelected ? 'Quitar de la simulación' : 'Sumar a la simulación'}
                      >
                        {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 flex gap-1">
                      <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 bg-baktra-rojo text-white rounded">
                        {product.volumeLitres} L
                      </span>
                      {product.isReversible && (
                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 bg-baktra-turquesa text-white rounded">
                          2 en 1
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className={`font-semibold uppercase tracking-wider text-[10px] ${
                      isSelected ? 'text-baktra-turquesa' : 'text-baktra-marron'
                    }`}>
                      {isSelected ? '✓ En Simulación' : '+ Probar'}
                    </span>
                    <span className="text-baktra-marron capitalize">{product.category}</span>
                  </div>

                  <h4 className="font-serif font-bold text-sm text-baktra-rojo line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-baktra-rojo/80 mt-1">
                    <span>{formatARS(product.price)}</span>
                    <span className="text-baktra-marron text-[11px]">{product.volumeLitres} L</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
