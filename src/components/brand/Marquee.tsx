'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/brand/Logo';

interface MarqueeProps {
  variant?: 'bordo' | 'crema' | 'outline' | 'turquesa' | 'marron';
  direction?: 'left' | 'right';
  speed?: number; // Base speed in px/frame
  className?: string;
  showTagline?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  variant = 'bordo',
  direction = 'left',
  speed = 1.2,
  className = '',
  showTagline = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Posición actual acumulada
  const posRef = useRef(0);
  const currentSpeedRef = useRef(speed);
  const targetSpeedRef = useRef(speed);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Escuchar scroll para acelerar e invertir sentido con inercia
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      // Acelera según la velocidad del scroll
      const boost = Math.min(Math.abs(delta) * 0.15, 6);
      const isScrollingUp = delta < 0;

      // Invierte dirección si se scrollea hacia arriba
      const factor = isScrollingUp ? -1 : 1;
      targetSpeedRef.current = (speed + boost) * factor;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!isHovered) {
        // Suave regreso a la velocidad base (inercia)
        currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.08;
        targetSpeedRef.current += (speed - targetSpeedRef.current) * 0.03;

        // Sentido base según prop
        const dirMultiplier = direction === 'left' ? -1 : 1;
        posRef.current += currentSpeedRef.current * dirMultiplier;

        if (trackRef.current) {
          // Wrap infinito al 50% del ancho del track (porque el contenido está duplicado)
          const halfWidth = trackRef.current.scrollWidth / 2;
          if (halfWidth > 0) {
            if (posRef.current <= -halfWidth) {
              posRef.current = 0;
            } else if (posRef.current >= 0) {
              posRef.current = -halfWidth;
            }
            trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, direction, speed]);

  // Estilos según la variante (incorporando Marrón y Celeste como pilares)
  const variantStyles = {
    bordo: 'bg-baktra-rojo text-white border-y border-white/10',
    crema: 'bg-baktra-marron/15 text-baktra-rojo border-y border-baktra-marron/30',
    outline: 'bg-transparent text-transparent border-y border-baktra-turquesa/30',
    turquesa: 'bg-baktra-turquesa text-white border-y border-white/20',
    marron: 'bg-baktra-marron text-white border-y border-white/15',
  };

  const textStyles = {
    bordo: 'text-white hover:text-baktra-turquesa',
    crema: 'text-baktra-rojo hover:text-baktra-turquesa',
    outline: 'text-stroke-turquesa hover:text-baktra-rojo transition-all',
    turquesa: 'text-white hover:text-baktra-rojo',
    marron: 'text-white hover:text-baktra-turquesa',
  };

  const isologoTone = variant === 'bordo' || variant === 'turquesa' || variant === 'marron' ? 'blanco' : 'bordo';

  // Conjunto de repeticiones (se clona x2 para loop continuo)
  const items = [
    { showTag: false },
    { showTag: showTagline },
    { showTag: false },
    { showTag: showTagline },
    { showTag: false },
    { showTag: showTagline },
  ];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`overflow-hidden select-none py-3.5 relative z-20 ${variantStyles[variant]} ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform items-center"
      >
        {/* Renderizado doble para loop sin cortes */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5">
            <span
              className={`text-2xl sm:text-4xl font-serif font-bold tracking-wider cursor-pointer transition-colors duration-300 inline-flex items-baseline ${textStyles[variant]}`}
            >
              {/* B mayúscula invertida como en el logo oficial */}
              <span className="inline-block transform -scale-x-100 origin-center mr-[0.06em] select-none">
                B
              </span>
              <span>aktra</span>
            </span>

            <Logo
              variant="isologo"
              tone={isologoTone}
              className="w-5 sm:w-7 h-auto opacity-80"
            />

            {item.showTag && (
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest opacity-80 px-2">
                "El origen de lo nuevo"
              </span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .text-stroke-turquesa {
          -webkit-text-stroke: 1.5px #5ca4b2;
          color: transparent;
        }
        .text-stroke-turquesa:hover {
          -webkit-text-stroke: 1.5px #852c26;
          color: #852c26;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
