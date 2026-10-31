'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { Mail, Phone, MapPin, Clock, Instagram, Send, CheckCircle2 } from 'lucide-react';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consulta sobre prendas modulares',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
            Canales de Encuentro
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-baktra-rojo tracking-tight">
            Contactate con Baktra
          </h1>
          <p className="text-sm sm:text-base text-baktra-rojo/80 font-light leading-relaxed">
            Escribinos para consultas sobre talles, envíos internacionales para nómades o visitas a nuestro showroom y taller en Córdoba Capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Información Directa con balance Bordó + Marrón */}
          <div className="lg:col-span-5 bg-gradient-to-br from-baktra-rojo via-[#73241f] to-baktra-marron text-white p-8 sm:p-10 rounded-xl shadow-lg space-y-8 border border-white/10">
            <div className="space-y-3">
              <Logo variant="isologotipo" tone="blanco" className="w-36 h-auto" />
              <h2 className="text-2xl font-serif font-bold">Atención personalizada</h2>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Respondemos con calidez y cercanía. Te asesoramos para elegir la moldería adecuada según los destinos y climas de tu próximo viaje.
              </p>
            </div>

            <div className="space-y-4 text-xs font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-baktra-turquesa flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">Showroom & Taller</span>
                  <span className="text-white/80">Barrio Güemes / Nueva Córdoba, Córdoba Capital, Argentina [PLACEHOLDER]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-baktra-turquesa flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">Horarios de atención</span>
                  <span className="text-white/80">Lunes a Viernes de 10:00 a 19:00 hs · Sábados con cita previa</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-baktra-turquesa flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">Correo electrónico</span>
                  <span className="text-white/80">hola@baktra.com.ar</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-baktra-turquesa flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">WhatsApp de Viajeros</span>
                  <span className="text-white/80">+54 9 351 456-7890 [PLACEHOLDER]</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs">
              <span className="text-white/70">Seguinos en redes:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-baktra-turquesa flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-7 bg-white p-8 rounded-lg border border-baktra-rojo/15 shadow-sm space-y-6">
            <h2 className="text-xl font-serif font-bold text-baktra-rojo">
              Dejanos tu mensaje
            </h2>

            {submitted ? (
              <div className="p-8 bg-baktra-turquesa/10 rounded border border-baktra-turquesa/20 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-baktra-turquesa mx-auto" />
                <h3 className="font-serif font-bold text-lg text-baktra-rojo">¡Mensaje enviado con éxito!</h3>
                <p className="text-xs text-baktra-rojo/80">
                  Nos pondremos en contacto con vos a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-baktra-rojo underline"
                >
                  Enviar otro mensaje
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
                      placeholder="Tu nombre"
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
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Asunto</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa bg-white"
                  >
                    <option value="Consulta sobre prendas modulares">Consulta sobre prendas modulares</option>
                    <option value="Asesoramiento de talles para viaje">Asesoramiento de talles para viaje</option>
                    <option value="Visita al showroom en Córdoba Capital">Visita al showroom en Córdoba Capital</option>
                    <option value="Programa de intercambio de módulos">Programa de intercambio de módulos</option>
                    <option value="Otro asunto">Otro asunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Mensaje</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Escribí tu consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-baktra-turquesa text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-rojo transition-all rounded shadow-md flex items-center justify-center gap-2"
                >
                  <span>Enviar mensaje</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
