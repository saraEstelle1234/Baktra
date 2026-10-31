'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { useCartStore } from '@/store/useCartStore';
import { ShoppingBag, Menu, X, Search, Compass, MapPin } from 'lucide-react';
import { PatternBackground } from '@/components/brand/PatternBackground';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/tienda', label: 'Tienda', subtitle: 'Slow casualwear & archivo' },
    { href: '/valija', label: 'Armá tu valija', subtitle: 'Simulador volumétrico de viaje' },
    { href: '/coleccion/colina-de-oro', label: 'Colina de Oro', subtitle: 'Colección rectora 1978' },
    { href: '/comunidad', label: 'Comunidad', subtitle: 'Muro de viajeros nómades' },
    { href: '/nosotros', label: 'Nosotros', subtitle: 'Bactra, origen y slow fashion' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-baktra-rojo/10 py-3'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Botón Menú Mobile */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-baktra-rojo hover:text-baktra-turquesa transition-colors"
                aria-label="Abrir menú de navegación"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Links Izquierda Desktop */}
            <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-baktra-rojo">
              <Link
                href="/tienda"
                className={`transition-colors hover:text-baktra-turquesa ${
                  pathname.startsWith('/tienda') ? 'text-baktra-turquesa font-bold border-b border-baktra-turquesa pb-0.5' : ''
                }`}
              >
                Tienda
              </Link>
              <Link
                href="/valija"
                className={`transition-colors hover:text-baktra-turquesa ${
                  pathname === '/valija' ? 'text-baktra-turquesa font-bold border-b border-baktra-turquesa pb-0.5' : ''
                }`}
              >
                Armá tu valija
              </Link>
              <Link
                href="/coleccion/colina-de-oro"
                className={`transition-colors hover:text-baktra-turquesa ${
                  pathname.startsWith('/coleccion') ? 'text-baktra-turquesa font-bold border-b border-baktra-turquesa pb-0.5' : ''
                }`}
              >
                Colina de Oro
              </Link>
            </nav>

            {/* Logo Central */}
            <div className="flex items-center justify-center">
              <Logo
                href="/"
                variant="logotipo"
                tone="bordo"
                className="w-48 sm:w-56 h-auto hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Links Derecha Desktop & Acciones */}
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-baktra-rojo">
                <Link
                  href="/comunidad"
                  className={`transition-colors hover:text-baktra-turquesa ${
                    pathname === '/comunidad' ? 'text-baktra-turquesa font-bold border-b border-baktra-turquesa pb-0.5' : ''
                  }`}
                >
                  Comunidad
                </Link>
                <Link
                  href="/nosotros"
                  className={`transition-colors hover:text-baktra-turquesa ${
                    pathname === '/nosotros' ? 'text-baktra-turquesa font-bold border-b border-baktra-turquesa pb-0.5' : ''
                  }`}
                >
                  Nosotros
                </Link>
              </nav>

              {/* Búsqueda */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-baktra-rojo hover:text-baktra-turquesa transition-colors"
                aria-label="Buscar en la tienda"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Botón Valija (Carrito) */}
              <button
                onClick={toggleCart}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-baktra-marron/15 hover:bg-baktra-turquesa hover:text-white text-baktra-rojo transition-all group focus-visible:ring-2 focus-visible:ring-baktra-turquesa"
                aria-label={`Abrir valija, ${totalItems} prendas guardadas`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-baktra-turquesa text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs uppercase tracking-widest font-semibold">
                  Valija
                </span>
              </button>
            </div>
          </div>

          {/* Barra de Búsqueda Desplegable */}
          {searchOpen && (
            <div className="pt-3 pb-2 border-t border-baktra-rojo/10 mt-3 animate-fadeIn">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = `/tienda?q=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="relative max-w-md mx-auto"
              >
                <input
                  type="text"
                  placeholder="Buscar prendas modulares, lino, abrigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-xs px-4 py-2.5 pl-10 border border-baktra-rojo/20 rounded bg-white text-baktra-rojo placeholder:text-baktra-marron focus:outline-none focus:border-baktra-turquesa"
                />
                <Search className="w-4 h-4 text-baktra-marron absolute left-3 top-3" />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-2.5 text-xs text-baktra-marron hover:text-baktra-rojo"
                >
                  Esc
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Menú a Pantalla Completa (Mobile y Expandido) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-baktra-rojo text-white overflow-y-auto flex flex-col justify-between p-6 sm:p-12 animate-fadeIn">
          {/* Patrón de fondo tenue */}
          <PatternBackground opacity={0.06} strokeColor="#ffffff" />

          {/* Header del Menú */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
            <Logo variant="isologotipo" tone="blanco" className="w-36 sm:w-44 h-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-baktra-turquesa transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Cerrar menú"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Enlaces Principales en Merosa Bold */}
          <div className="relative z-10 py-8 space-y-6">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="border-b border-white/10 pb-4">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex flex-col"
                >
                  <span className="text-3xl sm:text-5xl font-serif font-bold text-white group-hover:text-baktra-turquesa transition-colors tracking-tight">
                    {link.label}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-baktra-marron font-light mt-1">
                    {link.subtitle}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Pie del Menú Mobile */}
          <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/80">
            <div>
              <p className="font-serif font-bold text-white text-sm">baktra · "El origen de lo nuevo"</p>
              <p className="font-light text-white/60">Córdoba Capital, Argentina</p>
            </div>
            <div className="flex gap-4 uppercase tracking-widest text-[11px]">
              <Link href="/contacto" className="hover:text-baktra-turquesa transition-colors">
                Contacto
              </Link>
              <Link href="/intercambio" className="hover:text-baktra-turquesa transition-colors">
                Intercambio
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
