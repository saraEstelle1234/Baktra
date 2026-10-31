'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { Briefcase, AlertCircle, Sparkles, Check, Info } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export type LuggageTypeKey = 'cabina' | 'mediana' | 'grande';

export interface LuggageConfig {
  id: LuggageTypeKey;
  name: string;
  litres: number;
  dimensions: string;
  badge: string;
  description: string;
}

export const LUGGAGE_TYPES: Record<LuggageTypeKey, LuggageConfig> = {
  cabina: {
    id: 'cabina',
    name: 'Carry-On de Cabina',
    litres: 38,
    dimensions: '55 × 35 × 25 cm',
    badge: 'Norma IATA (Sin despacho)',
    description: 'Equipaje de mano estándar para viajar liviano y subir a cabina sin esperar en cinta.',
  },
  mediana: {
    id: 'mediana',
    name: 'Valija Mediana',
    litres: 70,
    dimensions: '66 × 44 × 28 cm',
    badge: 'Bodega 15-20 días',
    description: 'Capacidad equilibrada para viajes itinerantes prolongados o climas cambiantes.',
  },
  grande: {
    id: 'grande',
    name: 'Valija Grande (Bodega)',
    litres: 100,
    dimensions: '76 × 52 × 30 cm',
    badge: 'Internacional 23 kg',
    description: 'Capacidad máxima de bodega para estancias largas o nómades de temporada completa.',
  },
};

interface LuggageMeterProps {
  usedLitres?: number;
  defaultType?: LuggageTypeKey;
  useCartItemsAsSource?: boolean;
  className?: string;
}

export const LuggageMeter: React.FC<LuggageMeterProps> = ({
  usedLitres: propUsedLitres,
  defaultType = 'cabina',
  useCartItemsAsSource = false,
  className = '',
}) => {
  const [selectedType, setSelectedType] = useState<LuggageTypeKey>(defaultType);
  const { getTotalVolumeLitres, getTotalItems } = useCartStore();

  const activeLuggage = LUGGAGE_TYPES[selectedType];
  const effectiveUsedLitres = useCartItemsAsSource || propUsedLitres === undefined
    ? getTotalVolumeLitres()
    : propUsedLitres;

  const totalLitres = activeLuggage.litres;
  const percentage = Math.min(Math.round((effectiveUsedLitres / totalLitres) * 100), 100);
  const isOverweight = effectiveUsedLitres > totalLitres;
  const remainingLitres = Math.max(0, Number((totalLitres - effectiveUsedLitres).toFixed(1)));

  return (
    <div className={`bg-white border border-baktra-rojo/20 rounded-lg p-6 shadow-sm space-y-6 ${className}`}>
      {/* Selector de tamaño de valija */}
      <div className="space-y-3 border-b border-baktra-rojo/10 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-baktra-rojo" />
            <h3 className="font-serif font-bold text-lg text-baktra-rojo">
              Medidor Volumétrico de Valija
            </h3>
          </div>
          <span className="text-[11px] uppercase tracking-widest text-baktra-marron font-semibold">
            {activeLuggage.badge}
          </span>
        </div>

        {/* 3 tipos de valija interactivos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
          {(Object.keys(LUGGAGE_TYPES) as LuggageTypeKey[]).map((key) => {
            const item = LUGGAGE_TYPES[key];
            const isSelected = selectedType === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedType(key)}
                className={`p-3 rounded-md text-left transition-all border ${
                  isSelected
                    ? 'bg-baktra-rojo text-white border-baktra-rojo shadow-sm'
                    : 'bg-baktra-marron/5 text-baktra-rojo border-baktra-rojo/15 hover:border-baktra-rojo/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-sm">{item.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-baktra-turquesa" />}
                </div>
                <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-baktra-marron'}`}>
                  <span className="font-bold">{item.litres} L</span> · {item.dimensions}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ilustración de Valija interactiva con nivel de llenado */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 flex justify-center">
          <div
            className={`relative border-4 border-baktra-rojo/80 rounded-2xl p-2 bg-baktra-rojo/5 overflow-hidden shadow-inner flex flex-col justify-end transition-all duration-300 ${
              selectedType === 'grande'
                ? 'w-52 h-72'
                : selectedType === 'mediana'
                ? 'w-48 h-68'
                : 'w-44 h-64'
            }`}
          >
            {/* Manija telescópica */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-8 border-4 border-baktra-rojo/80 rounded-t-lg" />

            {/* Rueditas 360 */}
            <div className="absolute -bottom-2.5 left-4 w-4 h-4 bg-baktra-rojo rounded-full" />
            <div className="absolute -bottom-2.5 right-4 w-4 h-4 bg-baktra-rojo rounded-full" />

            {/* Relleno dinámico animado */}
            <div
              className={`w-full transition-all duration-700 ease-baktra rounded-b-lg relative overflow-hidden flex items-center justify-center text-white ${
                isOverweight
                  ? 'bg-baktra-rojo'
                  : 'bg-gradient-to-t from-baktra-rojo via-baktra-marron to-baktra-turquesa'
              }`}
              style={{ height: `${percentage}%` }}
            >
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
              {percentage > 12 && (
                <span className="relative z-10 font-serif font-bold text-sm drop-shadow-md">
                  {percentage}%
                </span>
              )}
            </div>

            {/* Guías de volumen 50% y 100% */}
            <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-baktra-rojo/30 pointer-events-none" />
          </div>
        </div>

        {/* Métricas dinámicas calculadas */}
        <div className="md:col-span-7 space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-baktra-rojo/5 p-3.5 rounded border border-baktra-rojo/10">
              <span className="text-[10px] uppercase tracking-wider text-baktra-marron block">
                Volumen Ocupado
              </span>
              <span className="text-2xl font-serif font-bold text-baktra-rojo">
                {effectiveUsedLitres.toFixed(1)} L
              </span>
              <span className="text-[10px] text-baktra-rojo/60 block mt-0.5">
                de {totalLitres} L ({percentage}% capacidad)
              </span>
            </div>

            <div className="bg-baktra-marron/10 p-3.5 rounded border border-baktra-marron/20">
              <span className="text-[10px] uppercase tracking-wider text-baktra-marron block">
                Espacio Disponible
              </span>
              <span className="text-2xl font-serif font-bold text-baktra-turquesa">
                {remainingLitres} L
              </span>
              <span className="text-[10px] text-baktra-rojo/70 block mt-0.5">
                para hallazgos y souvenirs
              </span>
            </div>
          </div>

          {/* Diagnóstico según ocupación */}
          <div className="p-3.5 bg-baktra-rojo/5 rounded border border-baktra-rojo/10">
            {isOverweight ? (
              <div className="flex items-start gap-2.5 text-baktra-rojo">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Superaste el volumen de {totalLitres}L de tu {activeLuggage.name.toLowerCase()}. Te sugerimos cambiar a una valija más amplia o aprovechar la reversibilidad de las prendas Baktra para reducir capas.
                </span>
              </div>
            ) : percentage > 80 ? (
              <div className="flex items-start gap-2.5 text-baktra-rojo">
                <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-baktra-turquesa" />
                <span>
                  Valija en capacidad óptima ({percentage}%). Tenés combinaciones completas para viajar con estilo sin exceso de equipaje.
                </span>
              </div>
            ) : percentage > 40 ? (
              <div className="flex items-start gap-2.5 text-baktra-marron">
                <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-baktra-turquesa" />
                <span>
                  Llenado balanceado ({percentage}%). Espacio generoso para sumar una falda, pantalón o accesorios de autor.
                </span>
              </div>
            ) : (
              <div className="flex items-start gap-2.5 text-baktra-rojo/80">
                <Logo variant="isologo" tone="bordo" className="w-4 h-auto flex-shrink-0 mt-0.5" />
                <span>
                  Tu valija aún tiene {remainingLitres} litros libres. Podés sumar prendas del archivo nómade sin comprometer peso ni volumen.
                </span>
              </div>
            )}
          </div>

          <p className="text-[11px] text-baktra-marron font-light leading-relaxed flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-baktra-turquesa flex-shrink-0" />
            <span>{activeLuggage.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuggageMeter;
