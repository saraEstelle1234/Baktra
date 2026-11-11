export interface ProductVariant {
  id: string;
  size: 'S' | 'M' | 'L' | 'XL' | 'Único';
  color: string;
  stock: number;
}

export interface ConvertibleMode {
  name: string; // ej: "Chaleco" | "Bolso"
  label: string; // ej: "Modo Chaleco" | "Modo Bolso"
  image: string;
  backImage?: string;
  description?: string;
}

export interface ConvertibleData {
  modeA: ConvertibleMode;
  modeB: ConvertibleMode;
  transformationTip: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number; // En ARS
  installments?: {
    count: number;
    amount: number;
  };
  category: 'abrigos' | 'faldas' | 'vestidos' | 'camisas' | 'pantalones' | 'accesorios';
  collection: 'Colina de Oro' | 'Esenciales de Viaje' | 'Ruta de la Seda';
  description: string;
  story: string; // Conexión con Colina de Oro, Bactra y Ruta de la Seda
  craftsmanship: string; // Slow fashion, confección artesanal, trazabilidad
  careInstructions: string[];
  isReversible: boolean;
  isModular: boolean;
  isConvertible?: boolean; // Prenda con doble funcionalidad (ej: Chaleco <-> Bolso)
  convertibleData?: ConvertibleData;
  sideAImage: string;
  sideBImage?: string; // Para indumentaria reversible (Lado A / Lado B)
  gallery: string[];
  compatibleModules?: string[]; // IDs de prendas para conjuntos de 2 a 3 prendas
  volumeLitres: number; // Para el simulador "Armá tu valija"
  variants: ProductVariant[];
  tags: string[];
}

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
  activeSide?: 'A' | 'B';
  activeMode?: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  estimatedDays: string;
  price: number;
}

export interface CheckoutPayload {
  name: string;
  email: string;
  phone: string;
  dni: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  shippingOption: string;
  paymentMethod: 'mercadopago_mock' | 'transferencia_mock';
}

export interface OrderConfirmation {
  orderId: string;
  date: string;
  customer: CheckoutPayload;
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  total: number;
  status: 'completado_simulado';
}

export interface CommunityStory {
  id: string;
  authorName: string;
  authorHandle: string;
  destination: string;
  country: string;
  storyText: string;
  imageAlt: string;
  routeCoordinates: {
    xPercent: number; // Porcentaje x en el mapa estilizado (0-100)
    yPercent: number; // Porcentaje y en el mapa estilizado (0-100)
    locationName: string;
  };
  verifiedTraveler: boolean;
}

export interface TravelTip {
  id: string;
  title: string;
  category: 'valija' | 'cuidados' | 'ruta';
  content: string;
  readingTime: string;
}
