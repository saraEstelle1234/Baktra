'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product, ProductVariant } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  couponCode: string;
  discountPercent: number;
  selectedLuggageType: 'cabina' | 'mediana' | 'grande';
  setSelectedLuggageType: (type: 'cabina' | 'mediana' | 'grande') => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, variant: ProductVariant, side?: 'A' | 'B') => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalVolumeLitres: () => number;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      couponCode: '',
      discountPercent: 0,
      selectedLuggageType: 'cabina',

      setSelectedLuggageType: (type) => set({ selectedLuggageType: type }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product, variant, side = 'A') => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.product.id === product.id && item.selectedVariant.id === variant.id
          );

          if (existingIndex > -1) {
            const updated = [...state.items];
            const currentQty = updated[existingIndex].quantity;
            if (currentQty < variant.stock) {
              updated[existingIndex].quantity += 1;
            }
            return { items: updated, isOpen: true };
          }

          return {
            items: [...state.items, { product, selectedVariant: variant, quantity: 1, activeSide: side }],
            isOpen: true,
          };
        });
      },

      removeItem: (productId, variantId) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product.id === productId && item.selectedVariant.id === variantId)
          ),
        }));
      },

      updateQuantity: (productId, variantId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter(
                (item) => !(item.product.id === productId && item.selectedVariant.id === variantId)
              ),
            };
          }

          return {
            items: state.items.map((item) => {
              if (item.product.id === productId && item.selectedVariant.id === variantId) {
                const safeQty = Math.min(quantity, item.selectedVariant.stock);
                return { ...item, quantity: safeQty };
              }
              return item;
            }),
          };
        });
      },

      applyCoupon: (code: string) => {
        const clean = code.trim().toUpperCase();
        if (clean === 'ORIGEN10') {
          set({ couponCode: clean, discountPercent: 10 });
          return true;
        } else if (clean === 'NOMADA15') {
          set({ couponCode: clean, discountPercent: 15 });
          return true;
        }
        return false;
      },

      removeCoupon: () => set({ couponCode: '', discountPercent: 0 }),

      clearCart: () => set({ items: [], couponCode: '', discountPercent: 0 }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalVolumeLitres: () => {
        return get().items.reduce(
          (total, item) => total + (item.product.volumeLitres || 2.5) * item.quantity,
          0
        );
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      getDiscountAmount: () => {
        const subtotal = get().getSubtotal();
        return Math.round((subtotal * get().discountPercent) / 100);
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscountAmount();
        return Math.max(0, subtotal - discount);
      },
    }),
    {
      name: 'baktra-valija-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        couponCode: state.couponCode,
        discountPercent: state.discountPercent,
        selectedLuggageType: state.selectedLuggageType,
      }),
    }
  )
);
