import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://baktra.com.ar';

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/tienda/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    '',
    '/tienda',
    '/valija',
    '/coleccion/colina-de-oro',
    '/comunidad',
    '/nosotros',
    '/contacto',
    '/intercambio',
    '/faq',
    '/envios',
    '/cambios',
    '/terminos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
