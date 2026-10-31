/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Override the default Tailwind colors completely to preserve brand fidelity
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      baktra: {
        rojo: '#852c26',       // Bordó / Pantone 1815 CP
        turquesa: '#5ca4b2',   // Pantone 2219 C
        marron: '#b08c74',     // Pantone 16-1323 TPG Macaroon
        blanco: '#ffffff',
        // Tonal scales mixed with white (no neutral grays or #000 allowed)
        'rojo-90': 'color-mix(in srgb, #852c26 90%, white)',
        'rojo-80': 'color-mix(in srgb, #852c26 80%, white)',
        'rojo-60': 'color-mix(in srgb, #852c26 60%, white)',
        'rojo-40': 'color-mix(in srgb, #852c26 40%, white)',
        'rojo-20': 'color-mix(in srgb, #852c26 20%, white)',
        'rojo-10': 'color-mix(in srgb, #852c26 10%, white)',
        'rojo-5':  'color-mix(in srgb, #852c26 5%, white)',

        'marron-90': 'color-mix(in srgb, #b08c74 90%, white)',
        'marron-70': 'color-mix(in srgb, #b08c74 70%, white)',
        'marron-50': 'color-mix(in srgb, #b08c74 50%, white)',
        'marron-30': 'color-mix(in srgb, #b08c74 30%, white)',
        'marron-15': 'color-mix(in srgb, #b08c74 15%, white)',
        'marron-8':  'color-mix(in srgb, #b08c74 8%, white)',

        'turquesa-90': 'color-mix(in srgb, #5ca4b2 90%, white)',
        'turquesa-70': 'color-mix(in srgb, #5ca4b2 70%, white)',
        'turquesa-50': 'color-mix(in srgb, #5ca4b2 50%, white)',
        'turquesa-30': 'color-mix(in srgb, #5ca4b2 30%, white)',
        'turquesa-15': 'color-mix(in srgb, #5ca4b2 15%, white)',
      }
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-merosa)', 'Georgia', 'serif'],
        sans: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'insignia': 'linear-gradient(180deg, #852c26 0%, #852c26 35%, #5ca4b2 100%)',
        'bordo-turquesa': 'linear-gradient(180deg, #852c26 0%, #5ca4b2 100%)',
        'marron-bordo': 'linear-gradient(180deg, #b08c74 0%, #852c26 100%)',
        'turquesa-marron': 'linear-gradient(180deg, #5ca4b2 0%, #b08c74 100%)',
      },
      transitionTimingFunction: {
        'baktra': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
};
