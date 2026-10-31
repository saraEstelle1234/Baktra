/**
 * Utilidades de formateo para la tienda Baktra
 * Moneda: ARS con convención argentina
 */

export function formatARS(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatInstallments(price: number, installments = 3): string {
  const perMonth = Math.round(price / installments);
  return `${installments} cuotas sin interés de ${formatARS(perMonth)}`;
}
