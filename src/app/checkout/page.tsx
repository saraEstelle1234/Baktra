'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { storeApi } from '@/lib/store-api';
import { formatARS } from '@/lib/formatters';
import { CheckoutPayload, OrderConfirmation } from '@/types';
import { Logo } from '@/components/brand/Logo';
import { Check, ShieldCheck, Truck, CreditCard, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotal, getSubtotal, getDiscountAmount, discountPercent, couponCode, clearCart } = useCartStore();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmation | null>(null);

  // Formulario de checkout
  const [formData, setFormData] = useState<CheckoutPayload>({
    name: 'Sara Valenzuela',
    email: 'sara@viajera.com.ar',
    phone: '11 5544 3322',
    dni: '38.450.210',
    address: 'Belgrano 740, Barrio Güemes',
    city: 'Córdoba Capital',
    province: 'Córdoba',
    postalCode: '1414',
    shippingOption: 'ship-standard',
    paymentMethod: 'mercadopago_mock',
  });

  const shippingCost = formData.shippingOption === 'ship-express' ? 8500 : formData.shippingOption === 'ship-pickup' ? 0 : 4900;
  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const totalFinal = Math.max(0, subtotal - discount + shippingCost);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const confirmation = await storeApi.createOrder(formData, items, totalFinal);
      setOrderConfirmation(confirmation);
      clearCart();
      setStep('success');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (step === 'success' && orderConfirmation) {
    return (
      <div className="w-full bg-white min-h-[85vh] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border border-baktra-rojo/20 rounded-lg p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-baktra-turquesa/10 flex items-center justify-center text-baktra-turquesa animate-bounce">
              <Check className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
              Compra Simulada Exitosa
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
              ¡Tu valija está en camino!
            </h1>
            <p className="text-xs sm:text-sm text-baktra-rojo/70 font-light">
              Orden #{orderConfirmation.orderId} registrada con éxito. Te enviamos la bitácora de seguimiento a <span className="font-semibold text-baktra-rojo">{orderConfirmation.customer.email}</span>.
            </p>
          </div>

          <div className="p-4 bg-baktra-rojo/5 rounded border border-baktra-rojo/10 text-left text-xs space-y-2">
            <div className="flex justify-between font-bold text-baktra-rojo">
              <span>Destino de envío:</span>
              <span>{orderConfirmation.customer.address}, {orderConfirmation.customer.city}</span>
            </div>
            <div className="flex justify-between text-baktra-marron">
              <span>Total abonado:</span>
              <span className="font-bold text-baktra-rojo">{formatARS(orderConfirmation.total)}</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/tienda"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors rounded shadow"
            >
              <span>Volver a la tienda</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0 && step === 'form') {
    return (
      <div className="w-full bg-white min-h-[70vh] py-20 px-4 text-center flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-baktra-rojo">No tenés piezas en tu valija</h2>
        <p className="text-sm text-baktra-rojo/70 max-w-sm">
          Para realizar una compra, sumá al menos una prenda de autor desde la tienda.
        </p>
        <Link
          href="/tienda"
          className="mt-4 px-6 py-3 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors"
        >
          Explorar el archivo
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Cabecera */}
        <div className="border-b border-baktra-rojo/10 pb-6 flex items-center justify-between">
          <div>
            <Link href="/tienda" className="inline-flex items-center gap-1.5 text-xs text-baktra-marron hover:text-baktra-rojo transition-colors mb-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Volver a la tienda
            </Link>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-baktra-rojo">
              Finalizar Recorrido y Compra
            </h1>
          </div>
          <Logo variant="isologo" tone="bordo" className="w-8 h-auto" />
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Formulario de Envío y Datos */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Paso 1: Datos del Viajero */}
            <div className="space-y-4 bg-white p-6 rounded border border-baktra-rojo/10 shadow-sm">
              <h2 className="font-serif font-bold text-lg text-baktra-rojo flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-baktra-rojo text-white text-xs flex items-center justify-center font-serif">1</span>
                Datos del Viajero
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Nombre y Apellido</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Teléfono Móvil (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">DNI / Identificación</label>
                  <input
                    type="text"
                    required
                    value={formData.dni}
                    onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
              </div>
            </div>

            {/* Paso 2: Domicilio de Envío */}
            <div className="space-y-4 bg-white p-6 rounded border border-baktra-rojo/10 shadow-sm">
              <h2 className="font-serif font-bold text-lg text-baktra-rojo flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-baktra-rojo text-white text-xs flex items-center justify-center font-serif">2</span>
                Domicilio de Recepción
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="block text-baktra-marron font-medium mb-1">Dirección y Piso/Depto</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Ciudad / Barrio</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Código Postal</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
              </div>

              {/* Opciones de Envío */}
              <div className="space-y-2 pt-2">
                <label className="block text-baktra-marron font-medium text-xs mb-1">Modalidad de entrega</label>
                <div className="space-y-2 text-xs">
                  <label className={`flex items-center justify-between p-3 rounded border cursor-pointer ${formData.shippingOption === 'ship-standard' ? 'border-baktra-rojo bg-baktra-rojo/5' : 'border-baktra-rojo/10'}`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipping"
                        checked={formData.shippingOption === 'ship-standard'}
                        onChange={() => setFormData({ ...formData, shippingOption: 'ship-standard' })}
                        className="accent-baktra-rojo"
                      />
                      <span>Envío Estándar a Domicilio (3 a 5 días)</span>
                    </div>
                    <span className="font-bold text-baktra-rojo">{formatARS(4900)}</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded border cursor-pointer ${formData.shippingOption === 'ship-express' ? 'border-baktra-rojo bg-baktra-rojo/5' : 'border-baktra-rojo/10'}`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipping"
                        checked={formData.shippingOption === 'ship-express'}
                        onChange={() => setFormData({ ...formData, shippingOption: 'ship-express' })}
                        className="accent-baktra-rojo"
                      />
                      <span>Envío Prioritario Nómada (24 a 48 hs)</span>
                    </div>
                    <span className="font-bold text-baktra-rojo">{formatARS(8500)}</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded border cursor-pointer ${formData.shippingOption === 'ship-pickup' ? 'border-baktra-rojo bg-baktra-rojo/5' : 'border-baktra-rojo/10'}`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipping"
                        checked={formData.shippingOption === 'ship-pickup'}
                        onChange={() => setFormData({ ...formData, shippingOption: 'ship-pickup' })}
                        className="accent-baktra-rojo"
                      />
                      <span>Retiro en Showroom Córdoba Capital (Gratis)</span>
                    </div>
                    <span className="font-bold text-baktra-turquesa">Sin cargo</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Paso 3: PaymentProvider (Mock preparado para Mercado Pago) */}
            <div className="space-y-4 bg-white p-6 rounded border border-baktra-rojo/10 shadow-sm">
              <h2 className="font-serif font-bold text-lg text-baktra-rojo flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-baktra-rojo text-white text-xs flex items-center justify-center font-serif">3</span>
                Medio de Pago Simulado
              </h2>

              {/* PaymentProvider Component Wrapper */}
              <div className="p-4 bg-baktra-rojo/5 rounded border border-baktra-rojo/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-baktra-rojo">
                  <CreditCard className="w-4 h-4 text-baktra-turquesa" />
                  <span>Pasarela de Pago Simulada (Checkout Pro)</span>
                </div>
                <p className="text-[11px] text-baktra-rojo/70 leading-relaxed font-mono">
                  {/* TODO: Integrar Mercado Pago SDK oficial (mp.bricks o Preference ID) */}
                  // Hook de integración Mercado Pago listo en src/lib/store-api.ts.
                  // Esta transacción no realizará ningún débito monetario real.
                </p>
                <div className="flex gap-4 pt-1">
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'mercadopago_mock'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'mercadopago_mock' })}
                      className="accent-baktra-rojo"
                    />
                    <span>Mercado Pago (Tarjetas, Débito, Cuotas)</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Resumen de la Orden (en tono Marrón de marca) */}
          <div className="lg:col-span-5 bg-baktra-marron/15 p-6 sm:p-8 rounded-xl border border-baktra-marron/30 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-xl text-baktra-rojo border-b border-baktra-rojo/10 pb-4">
              Tu Valija ({items.length} {items.length === 1 ? 'pieza' : 'piezas'})
            </h3>

            <div className="space-y-4 max-h-72 overflow-y-auto pr-2 divide-y divide-baktra-rojo/10">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedVariant.id}`} className="flex gap-3 pt-3 first:pt-0">
                  <div className="w-14 h-16 bg-white rounded overflow-hidden flex-shrink-0 border border-baktra-rojo/10">
                    <img
                      src={item.product.sideAImage}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-xs">
                    <h4 className="font-bold text-baktra-rojo line-clamp-1">{item.product.name}</h4>
                    <span className="text-baktra-marron block">Talle {item.selectedVariant.size} · Cantidad: {item.quantity}</span>
                    <span className="font-semibold text-baktra-rojo">{formatARS(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotales y Descuento */}
            <div className="space-y-2 pt-4 border-t border-baktra-rojo/10 text-xs">
              <div className="flex justify-between text-baktra-rojo/80">
                <span>Subtotal de prendas</span>
                <span>{formatARS(subtotal)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-baktra-turquesa font-semibold">
                  <span>Descuento ({couponCode})</span>
                  <span>-{formatARS(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-baktra-rojo/80">
                <span>Costo de envío</span>
                <span>{shippingCost === 0 ? 'Gratis' : formatARS(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-baktra-rojo pt-3 border-t border-baktra-rojo/10">
                <span>Total a confirmar</span>
                <span>{formatARS(totalFinal)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-baktra-rojo hover:bg-baktra-turquesa text-white text-xs uppercase tracking-widest font-semibold rounded shadow-md transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Procesando compra...</span>
              ) : (
                <>
                  <span>Confirmar compra simulada</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-baktra-marron">
              <ShieldCheck className="w-4 h-4 text-baktra-turquesa" />
              <span>Garantía de cambio por 30 días sin costo</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
