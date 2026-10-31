'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { RefreshCw, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function IntercambioPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    currentModule: 'Cuello & Pechera Seda (Bordó)',
    requestedModule: 'Cuello & Pechera Seda (Turquesa)',
    reason: 'Cambio por temporada / viaje a nuevo destino',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-baktra-rojo/5 rounded-full text-xs uppercase tracking-widest text-baktra-rojo font-semibold border border-baktra-rojo/10">
            <RefreshCw className="w-3.5 h-3.5 text-baktra-turquesa" />
            Economía Circular & Slow Fashion
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-baktra-rojo tracking-tight">
            Programa de Intercambio de Módulos
          </h1>
          <p className="text-sm sm:text-base text-baktra-rojo/80 font-light max-w-2xl mx-auto leading-relaxed">
            Las prendas Baktra están concebidas para transformarse en el tiempo. Si cambiaste de clima, renovaste tu paleta de viaje o necesitás reemplazar un panel gastado, podés intercambiar tus módulos compatibles.
          </p>
        </div>

        {/* Los 3 pasos del intercambio celebrando los 3 pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-baktra-rojo/10 p-6 rounded-lg border border-baktra-rojo/25 space-y-2">
            <span className="text-2xl font-serif font-bold text-baktra-rojo">01</span>
            <h3 className="font-bold text-sm text-baktra-rojo">Elegí tu módulo</h3>
            <p className="text-xs text-baktra-rojo/80 font-light">
              Identificá el código o nombre del cuello, sobrefalda o puño que deseás recircular.
            </p>
          </div>

          <div className="bg-baktra-marron/20 p-6 rounded-lg border border-baktra-marron/35 space-y-2">
            <span className="text-2xl font-serif font-bold text-baktra-marron">02</span>
            <h3 className="font-bold text-sm text-baktra-rojo">Enviá o entregá</h3>
            <p className="text-xs text-baktra-rojo/80 font-light">
              Coordinamos el retiro en tu ciudad o podés acercarte al showroom en Córdoba Capital.
            </p>
          </div>

          <div className="bg-baktra-turquesa/15 p-6 rounded-lg border border-baktra-turquesa/30 space-y-2">
            <span className="text-2xl font-serif font-bold text-baktra-turquesa">03</span>
            <h3 className="font-bold text-sm text-baktra-rojo">Recibí tu recambio</h3>
            <p className="text-xs text-baktra-rojo/80 font-light">
              Te entregamos el nuevo módulo sanitizado y acondicionado con garantía de calce.
            </p>
          </div>
        </div>

        {/* Formulario de Solicitud */}
        <div className="bg-white p-8 rounded-lg border border-baktra-rojo/15 shadow-sm space-y-6">
          <h2 className="text-xl font-serif font-bold text-baktra-rojo">
            Iniciar solicitud de intercambio
          </h2>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-baktra-turquesa/10 rounded border border-baktra-turquesa/20">
              <CheckCircle2 className="w-12 h-12 text-baktra-turquesa mx-auto" />
              <h3 className="font-serif font-bold text-xl text-baktra-rojo">
                ¡Solicitud de intercambio recibida!
              </h3>
              <p className="text-xs text-baktra-rojo/80 max-w-md mx-auto">
                Registramos tu pedido simulado. Un asesor de nuestro taller se comunicará para coordinar la entrega de tu nuevo módulo.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-baktra-rojo underline"
              >
                Cargar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Nombre completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Sara Maggi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    placeholder="sara@baktra.com.ar"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Módulo que entregás</label>
                  <input
                    type="text"
                    required
                    value={formData.currentModule}
                    onChange={(e) => setFormData({ ...formData, currentModule: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Módulo que solicitás a cambio</label>
                  <input
                    type="text"
                    required
                    value={formData.requestedModule}
                    onChange={(e) => setFormData({ ...formData, requestedModule: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-baktra-marron font-medium mb-1">Motivo del intercambio</label>
                <textarea
                  rows={3}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors rounded shadow flex items-center justify-center gap-2"
              >
                <span>Enviar pedido de intercambio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
