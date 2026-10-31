'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Marquee } from '@/components/brand/Marquee';
import { Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedCollection, setSelectedCollection] = useState<string>('todas');
  const [onlyReversible, setOnlyReversible] = useState<boolean>(false);
  const [onlyModular, setOnlyModular] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'todos') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedCollection !== 'todas') {
      list = list.filter((p) => p.collection === selectedCollection);
    }

    if (onlyReversible) {
      list = list.filter((p) => p.isReversible);
    }

    if (onlyModular) {
      list = list.filter((p) => p.isModular);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedCategory, selectedCollection, onlyReversible, onlyModular, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('todos');
    setSelectedCollection('todas');
    setOnlyReversible(false);
    setOnlyModular(false);
    setSortBy('featured');
  };

  const categories = [
    { id: 'todos', label: 'Todo el Archivo' },
    { id: 'abrigos', label: 'Abrigos & Ponchos' },
    { id: 'faldas', label: 'Faldas Modulares' },
    { id: 'vestidos', label: 'Vestidos Nómada' },
    { id: 'camisas', label: 'Camisas de Lino' },
    { id: 'pantalones', label: 'Pantalones Nómada' },
    { id: 'accesorios', label: 'Accesorios & Cuellos' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Editorial de la Tienda (con tono Marrón de la paleta) */}
      <section className="bg-baktra-marron/15 border-b border-baktra-marron/25 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-baktra-marron font-semibold">
            Archivo Textil 2026
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-baktra-rojo tracking-tight">
            Tienda & Archivo de Viaje
          </h1>
          <p className="max-w-xl text-sm sm:text-base font-light text-baktra-rojo/80 leading-relaxed">
            Slow casualwear de autor. Prendas pensadas para armar conjuntos de 2 a 3 piezas modulares y reversibles con confección artesanal y diseño consciente.
          </p>
        </div>
      </section>

      {/* Marquesina Fina separadora */}
      <Marquee variant="marron" speed={1} showTagline={false} />

      {/* Contenido Principal con Filtros y Grilla */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Barra de Filtros y Ordenamiento */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-baktra-marron/20">
          
          {/* Pestañas de Categoría */}
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-baktra-rojo text-white shadow-sm ring-2 ring-baktra-turquesa/40'
                    : 'bg-baktra-marron/15 text-baktra-rojo hover:bg-baktra-turquesa hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filtros de Reversible, Modular y Sort */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-baktra-rojo select-none">
              <input
                type="checkbox"
                checked={onlyReversible}
                onChange={(e) => setOnlyReversible(e.target.checked)}
                className="rounded accent-baktra-turquesa"
              />
              <span className="font-semibold">Solo reversibles</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-baktra-rojo select-none">
              <input
                type="checkbox"
                checked={onlyModular}
                onChange={(e) => setOnlyModular(e.target.checked)}
                className="rounded accent-baktra-turquesa"
              />
              <span className="font-semibold">Solo modulares</span>
            </label>

            <div className="flex items-center gap-2 pl-2 border-l border-baktra-rojo/20">
              <span className="text-baktra-marron">Orden:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-baktra-rojo font-semibold focus:outline-none cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resumen de resultados */}
        <div className="flex items-center justify-between py-6 text-xs text-baktra-marron">
          <span>Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'prenda' : 'prendas'}</span>
          {(selectedCategory !== 'todos' || onlyReversible || onlyModular || sortBy !== 'featured') && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-baktra-rojo hover:text-baktra-turquesa transition-colors underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {/* Grilla Asimétrica Editorial */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <h3 className="font-serif font-bold text-2xl text-baktra-rojo">No encontramos piezas con esos filtros</h3>
            <p className="text-sm text-baktra-rojo/70 max-w-sm mx-auto">
              Probá restableciendo los filtros para ver todo el archivo de la colección.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-baktra-rojo text-white text-xs uppercase tracking-widest font-semibold hover:bg-baktra-turquesa transition-colors"
            >
              Ver todo el catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
