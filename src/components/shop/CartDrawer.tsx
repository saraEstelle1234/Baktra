'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { formatARS } from '@/lib/formatters';
import { X, Trash2, Plus, Minus, ArrowRight, Tag, ShoppingBag, Briefcase } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    couponCode,
    discountPercent,
    applyCoupon,
    removeCoupon,
    getTotalItems,
    getTotalVolumeLitres,
    selectedLuggageType,
    setSelectedLuggageType,
    getSubtotal,
    getDiscountAmount,
    getTotal,
  } = useCartStore();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!inputCoupon.trim()) return;
    const success = applyCoupon(inputCoupon);
    if (!success) {
      setCouponError('Cupón no válido. Probá con ORIGEN10 o NOMADA15.');
    } else {
      setInputCoupon('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Backdrop con opacidad bordó */}
      <div
        className="fixed inset-0 bg-baktra-rojo/40 backdrop-blur-sm transition-opacity duration-500 ease-out"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition duration-500 ease-out bg-white text-baktra-rojo flex flex-col shadow-2xl border-l border-baktra-rojo/10">
          
          {/* Header del Drawer */}
          <div className="px-6 py-5 border-b border-baktra-rojo/10 flex items-center justify-between bg-baktra-rojo/5">
            <div className="flex items-center gap-3">
              <Logo variant="isologo" tone="bordo" className="w-7 h-auto" />
              <div>
                <h2 className="text-xl font-serif font-bold tracking-wide" id="slide-over-title">
                  Tu Valija
                </h2>
                <span className="text-xs uppercase tracking-widest text-baktra-marron">
                  {getTotalItems()} {getTotalItems() === 1 ? 'pieza de autor' : 'piezas de autor'}
                </span>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-baktra-rojo hover:text-baktra-turquesa transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-baktra-turquesa"
              aria-label="Cerrar valija"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Selector interactivo de valija y medidor dinámico en tiempo real */}
          {items.length > 0 && (() => {
            const luggageCapacities: Record<string, number> = {
              cabina: 38,
              mediana: 70,
              grande: 100,
            };
            const currentCapacity = luggageCapacities[selectedLuggageType] || 38;
            const usedVol = getTotalVolumeLitres();
            const pct = Math.min(100, Math.round((usedVol / currentCapacity) * 100));
            const isOver = usedVol > currentCapacity;

            return (
              <div className="px-6 py-3.5 bg-baktra-marron/15 border-b border-baktra-marron/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-baktra-rojo flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-baktra-turquesa" />
                    ¿Qué valija llevás en este viaje?
                  </span>
                  <span className="text-[11px] font-semibold text-baktra-rojo">
                    {currentCapacity} Litros
                  </span>
                </div>

                {/* 3 tipos de valija seleccionables */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/70 rounded border border-baktra-marron/25 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setSelectedLuggageType('cabina')}
                    className={`py-1 px-1 rounded text-center transition-all font-semibold ${
                      selectedLuggageType === 'cabina'
                        ? 'bg-baktra-rojo text-white shadow-sm'
                        : 'text-baktra-rojo/80 hover:bg-baktra-marron/20'
                    }`}
                  >
                    Carry-On (38L)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedLuggageType('mediana')}
                    className={`py-1 px-1 rounded text-center transition-all font-semibold ${
                      selectedLuggageType === 'mediana'
                        ? 'bg-baktra-marron text-white shadow-sm'
                        : 'text-baktra-rojo/80 hover:bg-baktra-marron/20'
                    }`}
                  >
                    Mediana (70L)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedLuggageType('grande')}
                    className={`py-1 px-1 rounded text-center transition-all font-semibold ${
                      selectedLuggageType === 'grande'
                        ? 'bg-baktra-turquesa text-white shadow-sm'
                        : 'text-baktra-rojo/80 hover:bg-baktra-marron/20'
                    }`}
                  >
                    Grande (100L)
                  </button>
                </div>

                {/* Progreso de llenado dinámico */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-baktra-rojo/80">
                      Ocupado: <strong className="text-baktra-rojo">{usedVol.toFixed(1)} L</strong>
                    </span>
                    <span className={`font-bold ${isOver ? 'text-baktra-rojo' : 'text-baktra-turquesa'}`}>
                      {pct}% {isOver ? '(Exceso de capacidad)' : 'ocupado'}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-baktra-rojo/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        isOver
                          ? 'bg-baktra-rojo'
                          : 'bg-gradient-to-r from-baktra-marron via-baktra-turquesa to-baktra-rojo'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Lista de productos en la valija */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-baktra-rojo/5 flex items-center justify-center text-baktra-marron">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="text-xl font-serif font-bold text-baktra-rojo">Tu valija está vacía</h3>
                <p className="text-sm text-baktra-rojo/70 max-w-xs">
                  Recorré nuestro archivo de slow casualwear y sumá piezas versátiles y reversibles para tu próximo viaje.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 px-6 py-3 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors"
                >
                  Explorar la tienda
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedVariant.id}`}
                  className="flex gap-4 pb-6 border-b border-baktra-rojo/10"
                >
                  {/* Thumbnail de la prenda */}
                  <div className="w-20 h-24 bg-baktra-rojo/5 rounded overflow-hidden flex-shrink-0 relative border border-baktra-rojo/10">
                    <img
                      src={item.activeSide === 'B' && item.product.sideBImage ? item.product.sideBImage : item.product.sideAImage}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    {item.product.isReversible && (
                      <span className="absolute bottom-1 left-1 text-[10px] uppercase font-bold bg-baktra-rojo text-white px-1 py-0.5 rounded">
                        Lado {item.activeSide || 'A'}
                      </span>
                    )}
                  </div>

                  {/* Info y Controles */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/tienda/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-serif font-bold text-base hover:text-baktra-turquesa transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedVariant.id)}
                          className="text-baktra-rojo/40 hover:text-baktra-rojo p-1 transition-colors"
                          aria-label={`Eliminar ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-baktra-marron mt-0.5">
                        Talle: <span className="font-semibold text-baktra-rojo">{item.selectedVariant.size}</span> · {item.selectedVariant.color}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Controles de cantidad */}
                      <div className="flex items-center border border-baktra-rojo/20 rounded">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedVariant.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-baktra-rojo/5 transition-colors text-baktra-rojo"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-baktra-rojo">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedVariant.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-baktra-rojo/5 transition-colors text-baktra-rojo"
                          disabled={item.quantity >= item.selectedVariant.stock}
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-semibold text-baktra-rojo">
                          {formatARS(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer del Drawer con resumen y checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-baktra-rojo/10 bg-baktra-rojo/5 space-y-4">
              {/* Cupón de descuento */}
              <form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Código de viaje (ej. ORIGEN10)"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="w-full text-xs uppercase px-3 py-2 border border-baktra-rojo/20 rounded bg-white text-baktra-rojo placeholder:text-baktra-marron focus:outline-none focus:border-baktra-turquesa"
                    />
                    <Tag className="w-3.5 h-3.5 absolute right-3 top-3 text-baktra-marron" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-baktra-marron text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-baktra-rojo transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
                {couponError && <p className="text-[11px] text-baktra-rojo font-medium">{couponError}</p>}
                {discountPercent > 0 && (
                  <div className="flex items-center justify-between text-xs text-baktra-turquesa font-semibold pt-1">
                    <span>Cupón {couponCode} aplicado ({discountPercent}% OFF)</span>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-baktra-rojo text-[11px] underline"
                    >
                      Quitar
                    </button>
                  </div>
                )}
              </form>

              {/* Subtotal y Total */}
              <div className="space-y-1.5 pt-2 border-t border-baktra-rojo/10 text-sm">
                <div className="flex justify-between text-baktra-rojo/80">
                  <span>Subtotal</span>
                  <span>{formatARS(getSubtotal())}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-baktra-turquesa font-semibold">
                    <span>Descuento</span>
                    <span>-{formatARS(getDiscountAmount())}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-baktra-marron">
                  <span>Envío a todo el país</span>
                  <span>Calculado en checkout</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-baktra-rojo pt-2 border-t border-baktra-rojo/10">
                  <span>Total estimado</span>
                  <span>{formatARS(getTotal())}</span>
                </div>
              </div>

              {/* Botón de Checkout */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors shadow-md rounded"
                >
                  <span>Iniciar compra simulada</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full text-center text-xs text-baktra-marron hover:text-baktra-rojo underline transition-colors"
                >
                  Seguir recorriendo el archivo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
