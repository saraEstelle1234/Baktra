'use client';

import React, { useState } from 'react';
import { TRAVEL_STORIES, TRAVEL_TIPS } from '@/data/products';
import { PatternBackground } from '@/components/brand/PatternBackground';
import { Marquee } from '@/components/brand/Marquee';
import { Logo } from '@/components/brand/Logo';
import { MapPin, Compass, Send, CheckCircle2, Instagram, Sparkles, BookOpen } from 'lucide-react';

export default function ComunidadPage() {
  const [selectedStory, setSelectedStory] = useState<any>(TRAVEL_STORIES[0]);
  const [submittedStory, setSubmittedStory] = useState(false);
  const [filterDestination, setFilterDestination] = useState('todos');

  const [newStory, setNewStory] = useState({
    name: '',
    handle: '',
    destination: '',
    text: '',
    consent: false,
  });

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.consent) return;
    setSubmittedStory(true);
  };

  const destinations = ['todos', 'Estambul', 'Samarcanda', 'Bologna', 'Oaxaca'];

  const filteredStories = filterDestination === 'todos'
    ? TRAVEL_STORIES
    : TRAVEL_STORIES.filter((s) => s.destination.toLowerCase().includes(filterDestination.toLowerCase()));

  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-baktra-turquesa" />
            La Marca le cede la palabra a su comunidad
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-baktra-rojo tracking-tight">
            Bitácora de Viajeros Nómadas
          </h1>
          <p className="text-sm sm:text-base text-baktra-rojo/80 font-light leading-relaxed">
            Un archivo vivo de postales, rutas y aprendizajes de quienes recorren el mundo con una valija de autor.
          </p>
        </div>

        {/* 1. MAPA ESTILIZADO DE RUTAS CON PINES INTERACTIVOS (COMBINANDO BORDÓ Y MARRÓN) */}
        <div className="bg-gradient-to-br from-baktra-rojo via-[#73241f] to-baktra-marron text-white p-6 sm:p-10 rounded-xl relative overflow-hidden shadow-xl border border-white/10 space-y-6">
          <PatternBackground opacity={0.06} strokeColor="#ffffff" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Mapa de Rutas de la Comunidad</h2>
              <span className="text-xs text-white/70">Tocá los pines para leer el relato de cada destino</span>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-baktra-turquesa font-semibold">
              Ruta Global [PLACEHOLDER]
            </span>
          </div>

          {/* Lienzo del Mapa estilizado (vectorial) */}
          <div className="relative z-10 w-full h-80 sm:h-96 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
            {/* Esbozo geográfico de la Ruta de la Seda */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 150 250 Q 250 180 350 200 T 550 220 T 750 280 T 850 220"
                fill="none"
                stroke="#5ca4b2"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <circle cx="200" cy="240" r="120" fill="none" stroke="#fff" strokeWidth="1" />
              <circle cx="550" cy="220" r="180" fill="none" stroke="#fff" strokeWidth="1" />
              <circle cx="800" cy="250" r="140" fill="none" stroke="#fff" strokeWidth="1" />
            </svg>

            {/* Pines de los relatos */}
            {TRAVEL_STORIES.map((story) => {
              const isSelected = selectedStory?.id === story.id;
              return (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  style={{
                    left: `${story.routeCoordinates.xPercent}%`,
                    top: `${story.routeCoordinates.yPercent}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 group ${
                    isSelected ? 'bg-baktra-turquesa text-white scale-125 z-20 shadow-lg' : 'bg-white text-baktra-rojo hover:scale-110 z-10'
                  }`}
                  aria-label={`Ver relato de ${story.destination}`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {story.routeCoordinates.locationName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Modal / Card del Relato Seleccionado en el Mapa */}
          {selectedStory && (
            <div className="relative z-10 bg-white/10 p-5 rounded border border-white/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-baktra-turquesa">
                  Destino: {selectedStory.destination} · {selectedStory.authorHandle}
                </span>
                <p className="font-serif italic text-base sm:text-lg text-white">
                  "{selectedStory.storyText}"
                </p>
              </div>
              <span className="text-xs text-white/60 flex-shrink-0">
                Viajero: {selectedStory.authorName} [PLACEHOLDER]
              </span>
            </div>
          )}
        </div>

        {/* 2. MURO EDITORIAL DE RELATOS DE VIAJEROS */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-baktra-rojo/10 pb-4">
            <h2 className="text-2xl font-serif font-bold text-baktra-rojo">
              Muro de Relatos
            </h2>

            {/* Filtros de Destino */}
            <div className="flex flex-wrap gap-2 text-xs">
              {destinations.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilterDestination(d)}
                  className={`px-3 py-1 rounded-full capitalize font-semibold transition-colors ${
                    filterDestination === d
                      ? 'bg-baktra-rojo text-white'
                      : 'bg-baktra-rojo/5 text-baktra-rojo hover:bg-baktra-rojo/10'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white p-6 rounded border border-baktra-rojo/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-baktra-turquesa transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-baktra-marron">
                    <span className="font-bold text-baktra-rojo">{story.destination}</span>
                    <span>{story.authorHandle}</span>
                  </div>
                  <p className="font-serif italic text-sm text-baktra-rojo/90 leading-relaxed">
                    "{story.storyText}"
                  </p>
                </div>

                <div className="pt-3 border-t border-baktra-rojo/10 text-[11px] text-baktra-marron flex justify-between items-center">
                  <span>{story.authorName}</span>
                  <span className="text-baktra-turquesa font-semibold">Verificado</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. TIPS DE VIAJE (CARRUSEL / CARDS DE CUIDADO Y VALIJA CON TONOS MARRÓN Y CELESTE) */}
        <div className="bg-baktra-marron/15 p-8 rounded-xl border border-baktra-marron/30 space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-baktra-turquesa" />
            <h2 className="text-xl font-serif font-bold text-baktra-rojo">
              Tips de Viaje & Cuidados en Ruta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAVEL_TIPS.map((tip) => (
              <div key={tip.id} className="bg-white p-5 rounded-lg border border-baktra-marron/20 shadow-sm space-y-2 hover:border-baktra-turquesa transition-colors">
                <span className="text-[10px] uppercase font-bold tracking-widest text-baktra-turquesa">
                  Lectura {tip.readingTime}
                </span>
                <h3 className="font-serif font-bold text-base text-baktra-rojo">{tip.title}</h3>
                <p className="text-xs text-baktra-rojo/80 font-light leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FORMULARIO "SUMÁ TU HISTORIA" */}
        <div className="bg-white p-8 rounded-lg border border-baktra-rojo/15 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-serif font-bold text-baktra-rojo">
              Sumá tu historia al archivo
            </h2>
            <p className="text-xs text-baktra-rojo/70 font-light">
              ¿Viajaste con una prenda Baktra? Compartí tu experiencia con la comunidad de nómades.
            </p>
          </div>

          {submittedStory ? (
            <div className="p-8 bg-baktra-turquesa/10 rounded text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-baktra-turquesa mx-auto" />
              <h3 className="font-serif font-bold text-lg text-baktra-rojo">¡Gracias por sumar tu voz!</h3>
              <p className="text-xs text-baktra-rojo/80">
                Tu relato fue recibido en nuestro taller para su revisión e incorporación al mapa de rutas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleStorySubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={newStory.name}
                    onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
                <div>
                  <label className="block text-baktra-marron font-medium mb-1">Usuario de Instagram / TikTok</label>
                  <input
                    type="text"
                    required
                    placeholder="@tu_usuario"
                    value={newStory.handle}
                    onChange={(e) => setNewStory({ ...newStory, handle: e.target.value })}
                    className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-baktra-marron font-medium mb-1">Destino o Ciudad</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Kioto, Japón"
                  value={newStory.destination}
                  onChange={(e) => setNewStory({ ...newStory, destination: e.target.value })}
                  className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                />
              </div>

              <div>
                <label className="block text-baktra-marron font-medium mb-1">Tu relato de viaje con Baktra</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Contanos cómo te acompañó tu prenda modular o reversible..."
                  value={newStory.text}
                  onChange={(e) => setNewStory({ ...newStory, text: e.target.value })}
                  className="w-full p-2.5 border border-baktra-rojo/20 rounded focus:outline-none focus:border-baktra-turquesa"
                />
              </div>

              <label className="flex items-start gap-2 cursor-pointer text-baktra-rojo/80 pt-1">
                <input
                  type="checkbox"
                  required
                  checked={newStory.consent}
                  onChange={(e) => setNewStory({ ...newStory, consent: e.target.checked })}
                  className="mt-0.5 rounded accent-baktra-rojo"
                />
                <span className="text-[11px] leading-tight">
                  Autorizo a Baktra a publicar este relato y mención en su tienda online y bitácora de viaje.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors rounded shadow flex items-center justify-center gap-2"
              >
                <span>Enviar relato</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
