'use client';

import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Si es un dispositivo táctil, no activar cursor custom
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // El usuario pidió: NO cursor turquesa en general (mouse normal del sistema),
      // PERO cuando pase por la parte superior (Header: Tienda, Armá tu valija, etc.)
      // activar el efecto turquesa interactivo.
      const inHeader = target.closest('header, [data-cursor-nav]');
      if (!inHeader) {
        setIsVisible(false);
        setIsHovered(false);
        return;
      }

      mouse.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      const interactive = target.closest('a, button, [data-cursor]');
      const customLabel = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (customLabel) {
        setCursorText(customLabel);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let frameId: number;
    const updatePosition = () => {
      // Inercia suave (lerp)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.22;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(updatePosition);
    };

    frameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
        isHovered
          ? 'w-10 h-10 bg-baktra-turquesa/30 border-2 border-baktra-turquesa backdrop-blur-[1px] scale-110 shadow-lg shadow-baktra-turquesa/20'
          : 'w-4 h-4 bg-baktra-turquesa/80 border border-white'
      }`}
      style={{ willChange: 'transform' }}
    >
      {cursorText && (
        <span className="text-[10px] tracking-wider uppercase font-semibold text-white select-none">
          {cursorText}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
