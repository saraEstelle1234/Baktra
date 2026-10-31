import { Product, CheckoutPayload, OrderConfirmation, ShippingOption } from '@/types';
import { PRODUCTS } from '@/data/products';

export interface ProductFilters {
  category?: string;
  collection?: string;
  isReversible?: boolean;
  isModular?: boolean;
  searchQuery?: string;
}

export interface StoreApiAdapter {
  getProducts(filters?: ProductFilters): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getRelatedProducts(productId: string): Promise<Product[]>;
  calculateShipping(postalCode: string): Promise<ShippingOption[]>;
  createOrder(payload: CheckoutPayload, items: any[], total: number): Promise<OrderConfirmation>;
}

/**
 * Adaptador local en memoria (Placeholder).
 * Diseñado para ser sustituido por ShopifyStoreAdapter o TiendaNubeStoreAdapter
 * sin alterar ningún componente de la interfaz de usuario.
 */
export class LocalStoreApi implements StoreApiAdapter {
  async getProducts(filters?: ProductFilters): Promise<Product[]> {
    let result = [...PRODUCTS];

    if (!filters) return result;

    if (filters.category && filters.category !== 'todos') {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.collection && filters.collection !== 'todas') {
      result = result.filter(p => p.collection === filters.collection);
    }

    if (filters.isReversible) {
      result = result.filter(p => p.isReversible);
    }

    if (filters.isModular) {
      result = result.filter(p => p.isModular);
    }

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const product = PRODUCTS.find(p => p.slug === slug);
    return product || null;
  }

  async getRelatedProducts(productId: string): Promise<Product[]> {
    const current = PRODUCTS.find(p => p.id === productId);
    if (!current) return PRODUCTS.slice(0, 3);

    if (current.compatibleModules && current.compatibleModules.length > 0) {
      const compatibles = PRODUCTS.filter(p => current.compatibleModules?.includes(p.id));
      if (compatibles.length > 0) return compatibles;
    }

    return PRODUCTS.filter(p => p.id !== productId).slice(0, 3);
  }

  async calculateShipping(postalCode: string): Promise<ShippingOption[]> {
    // Estimación simulada de envíos para Argentina
    return [
      {
        id: 'ship-standard',
        name: 'Envío Estándar a Domicilio (Todo el país)',
        estimatedDays: '3 a 5 días hábiles',
        price: 4900,
      },
      {
        id: 'ship-express',
        name: 'Envío Prioritario Nómada (CABA y GBA)',
        estimatedDays: '24 a 48 hs hábiles',
        price: 8500,
      },
      {
        id: 'ship-pickup',
        name: 'Retiro en Showroom / Taller Baktra (Córdoba Capital)',
        estimatedDays: 'Disponible en 24 hs',
        price: 0,
      },
    ];
  }

  async createOrder(payload: CheckoutPayload, items: any[], total: number): Promise<OrderConfirmation> {
    const orderId = `BKT-${Math.floor(100000 + Math.random() * 900000)}`;
    const confirmation: OrderConfirmation = {
      orderId,
      date: new Date().toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      customer: payload,
      items,
      subtotal: total - (payload.shippingOption === 'ship-express' ? 8500 : payload.shippingOption === 'ship-pickup' ? 0 : 4900),
      shippingCost: payload.shippingOption === 'ship-express' ? 8500 : payload.shippingOption === 'ship-pickup' ? 0 : 4900,
      total,
      status: 'completado_simulado',
    };

    return confirmation;
  }
}

// Instancia singleton exportada
export const storeApi = new LocalStoreApi();
