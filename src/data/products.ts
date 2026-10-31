import { Product } from '@/types';

// Helper to create clean vector placeholders with brand palette and ornament
function createProductSvg(title: string, side: 'A' | 'B', bg: string, accent: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
    <rect width="100%" height="100%" fill="${bg}" />
    <!-- Filigrana de fondo sutil -->
    <circle cx="400" cy="460" r="280" fill="none" stroke="${accent}" stroke-width="1.5" stroke-dasharray="4 8" opacity="0.3" />
    <circle cx="400" cy="460" r="190" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.2" />
    
    <!-- Silueta esquemática de la prenda de autor -->
    <path d="M260 280 C260 240, 350 220, 400 240 C450 220, 540 240, 540 280 L620 440 L540 470 L500 370 L510 740 C450 760, 350 760, 290 740 L300 370 L260 470 L180 440 Z" fill="none" stroke="${accent}" stroke-width="3" stroke-linejoin="round" />
    
    <!-- Detalle de bordado / estampa de autor -->
    <path d="M360 380 Q400 420 440 380 Q400 460 360 380" fill="${accent}" opacity="0.4" />
    <path d="M340 500 Q400 550 460 500 Q400 600 340 500" fill="none" stroke="${accent}" stroke-width="2" />
    
    <!-- Tag Lado A / Lado B -->
    <rect x="50" y="50" width="120" height="40" rx="4" fill="${accent}" opacity="0.15" />
    <text x="110" y="75" font-family="sans-serif" font-size="16" font-weight="bold" fill="${accent}" text-anchor="middle" letter-spacing="2">LADO ${side}</text>
    
    <!-- Nombre de la pieza -->
    <text x="400" y="880" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="${accent}" text-anchor="middle">${title}</text>
    <text x="400" y="915" font-family="sans-serif" font-size="15" fill="${accent}" text-anchor="middle" opacity="0.8" letter-spacing="3">COLECCIÓN COLINA DE ORO</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    slug: 'campera-rectora-reversible-balkh',
    name: 'Campera Rectora Reversible Balkh',
    tagline: 'Prenda rectora: bordado ceremonial en Cara A y abrigo minimalista en Cara B',
    price: 185000,
    installments: { count: 3, amount: 61666 },
    category: 'abrigos',
    collection: 'Colina de Oro',
    description: 'Diseño rector de la colección. Confeccionada artesanalmente en sarga de algodón pesada y forrería de lino rústico. Cuello alto ajustable, puños bordados con motivos de la filigrana Baktra y botones metálicos de alpaca cincelada.',
    story: 'Inspirada en las túnicas de tránsito que resguardaban a los viajeros en el cruce de las cordilleras afganas hacia la cuenca del Indo.',
    craftsmanship: 'Taller de autor en Córdoba Capital. Confección artesanal y bordado de filigrana con memoria textil. Trazabilidad 100% verificada.',
    careInstructions: [
      'Lavar a mano con agua fría y jabón neutro.',
      'No retorcer ni centrifugar.',
      'Secado horizontal a la sombra.',
      'Planchar a temperatura media del revés protegiendo los bordados.'
    ],
    isReversible: true,
    isModular: true,
    sideAImage: createProductSvg('Campera Balkh (Bordada)', 'A', '#852c26', '#ffffff'),
    sideBImage: createProductSvg('Campera Balkh (Lino Crudo)', 'B', '#b08c74', '#852c26'),
    gallery: [
      createProductSvg('Campera Balkh (Detalle Puños)', 'A', '#852c26', '#5ca4b2'),
      createProductSvg('Campera Balkh (Cierre y Forrería)', 'B', '#ffffff', '#852c26')
    ],
    compatibleModules: ['prod-02', 'prod-05'],
    volumeLitres: 4.2,
    variants: [
      { id: 'v1', size: 'S', color: 'Bordó / Crudo', stock: 5 },
      { id: 'v2', size: 'M', color: 'Bordó / Crudo', stock: 8 },
      { id: 'v3', size: 'L', color: 'Bordó / Crudo', stock: 4 },
      { id: 'v4', size: 'XL', color: 'Bordó / Crudo', stock: 2 }
    ],
    tags: ['Reversible', 'Modular', 'Diseño Rector', 'Slow Fashion']
  },
  {
    id: 'prod-02',
    slug: 'falda-superpuesta-tillya-tepe',
    name: 'Falda Superpuesta Tillya Tepe',
    tagline: 'Falda modular doble capa con sobrefalda desmontable y lazo ceñidor',
    price: 125000,
    installments: { count: 3, amount: 41666 },
    category: 'faldas',
    collection: 'Colina de Oro',
    description: 'Falda envolvente de largo midi con sistema de broches interiores que permite anexar el panel decorativo o llevarla como pollera de lino fluido para climas cálidos. Bolsillos invisibles profundos para pasaporte y teléfono.',
    story: 'Lleva el nombre del yacimiento de 1978 donde florecieron los broches dorados con turquesas que inspiraron los acentos de la marca.',
    craftsmanship: 'Moldería sin desperdicio textil. Ruedo asimétrico regulable con jareta de algodón teñida artesanalmente.',
    careInstructions: [
      'Lavado delicado en lavarropas con bolsa de red.',
      'Secar colgado de las presillas interiores.',
      'Vaporizado suave.'
    ],
    isReversible: true,
    isModular: true,
    sideAImage: createProductSvg('Falda Tillya Tepe (Bordó)', 'A', '#852c26', '#5ca4b2'),
    sideBImage: createProductSvg('Falda Tillya Tepe (Marrón)', 'B', '#b08c74', '#ffffff'),
    gallery: [
      createProductSvg('Falda Tillya Tepe (Plisado)', 'A', '#ffffff', '#852c26')
    ],
    compatibleModules: ['prod-01', 'prod-03'],
    volumeLitres: 2.1,
    variants: [
      { id: 'v5', size: 'S', color: 'Bordó / Marrón', stock: 6 },
      { id: 'v6', size: 'M', color: 'Bordó / Marrón', stock: 9 },
      { id: 'v7', size: 'L', color: 'Bordó / Marrón', stock: 3 }
    ],
    tags: ['Modular', 'Reversible', 'Slow Fashion']
  },
  {
    id: 'prod-03',
    slug: 'camisa-oversize-oasis-oxus',
    name: 'Camisa Oversize Oasis de Oxus',
    tagline: 'Lino puro prelavado con puños convertibles y cuello mao',
    price: 110000,
    installments: { count: 3, amount: 36666 },
    category: 'camisas',
    collection: 'Colina de Oro',
    description: 'Camisa fluida de caída generosa. Canesú ventilado con forrería en gasa de algodón y botones de madera de lenga patagónica recuperada. Ideal tanto para días de calor en tránsito como primera capa bajo la campera rectora.',
    story: 'El río Oxus (actual Amu Daria) irrigó los valles de Bactriana, transformando la aridez en puntos de encuentro fértiles.',
    craftsmanship: 'Tejido artesanal pre-lavado para garantizar encogimiento cero en los sucesivos viajes.',
    careInstructions: [
      'Lavar con prendas del mismo tono.',
      'Planchar húmedo para resaltar el brillo natural del lino.'
    ],
    isReversible: false,
    isModular: true,
    sideAImage: createProductSvg('Camisa Oasis (Turquesa)', 'A', '#5ca4b2', '#ffffff'),
    gallery: [
      createProductSvg('Camisa Oasis (Detalle Cuello)', 'A', '#ffffff', '#5ca4b2')
    ],
    compatibleModules: ['prod-01', 'prod-02', 'prod-04'],
    volumeLitres: 1.5,
    variants: [
      { id: 'v8', size: 'S', color: 'Turquesa Suave', stock: 7 },
      { id: 'v9', size: 'M', color: 'Turquesa Suave', stock: 12 },
      { id: 'v10', size: 'L', color: 'Turquesa Suave', stock: 8 },
      { id: 'v11', size: 'XL', color: 'Turquesa Suave', stock: 5 }
    ],
    tags: ['Lino Puro', 'Modular', 'Transpirable']
  },
  {
    id: 'prod-04',
    slug: 'pantalon-nomade-pamir',
    name: 'Pantalón Nómada Pamir',
    tagline: 'Pantalón sastrero relajado con cintura elastizada oculta y bota regulable',
    price: 135000,
    installments: { count: 3, amount: 45000 },
    category: 'pantalones',
    collection: 'Colina de Oro',
    description: 'La fusión perfecta entre la comodidad de un jogger de viaje y la elegancia de una pinza sastrera de autor. Confeccionado en gabardina de algodón satinado con elastano de baja memoria. No se deforma tras 14 horas de vuelo.',
    story: 'Diseñado pensando en quienes trabajan desde aeropuertos, trenes y cafés de ciudades desconocidas.',
    craftsmanship: 'Costuras reforzadas a 5 hilos y forros de bolsillo con estampa del patrón Baktra.',
    careInstructions: [
      'Lavado estándar en agua fría.',
      'No usar blanqueadores.',
      'Secado en sombra.'
    ],
    isReversible: false,
    isModular: true,
    sideAImage: createProductSvg('Pantalón Pamir (Marrón)', 'A', '#b08c74', '#ffffff'),
    gallery: [
      createProductSvg('Pantalón Pamir (Cintura Ajustable)', 'A', '#ffffff', '#b08c74')
    ],
    compatibleModules: ['prod-01', 'prod-03'],
    volumeLitres: 2.3,
    variants: [
      { id: 'v12', size: 'S', color: 'Marrón Macaroon', stock: 4 },
      { id: 'v13', size: 'M', color: 'Marrón Macaroon', stock: 10 },
      { id: 'v14', size: 'L', color: 'Marrón Macaroon', stock: 7 },
      { id: 'v15', size: 'XL', color: 'Marrón Macaroon', stock: 3 }
    ],
    tags: ['Slow Casualwear', 'Viajero', 'Anti-Arrugas']
  },
  {
    id: 'prod-05',
    slug: 'cuello-modular-intercambiable-seda',
    name: 'Cuello & Pechera Intercambiable Seda',
    tagline: 'Módulo desmontable compatible con todas las prendas rectoras Baktra',
    price: 48000,
    installments: { count: 3, amount: 16000 },
    category: 'accesorios',
    collection: 'Colina de Oro',
    description: 'Pieza de diseño modular que se acopla a las camperas y camisas mediante broches invisibles. Cambiá la apariencia completa de tu conjunto de viaje ocupando apenas 200 gramos en la valija.',
    story: 'Inspirado en los collares votivos del tesoro de Bactra que alternaban piedras y orfebrería según la ceremonia.',
    craftsmanship: 'Hecho con retazos nobles de la confección de autor, logrando un aprovechamiento del 98% del tejido.',
    careInstructions: [
      'Limpieza delicada a mano.'
    ],
    isReversible: true,
    isModular: true,
    sideAImage: createProductSvg('Cuello Modular (Estampa)', 'A', '#852c26', '#5ca4b2'),
    sideBImage: createProductSvg('Cuello Modular (Liso)', 'B', '#5ca4b2', '#ffffff'),
    gallery: [],
    compatibleModules: ['prod-01', 'prod-03'],
    volumeLitres: 0.4,
    variants: [
      { id: 'v16', size: 'Único', color: 'Bordó / Turquesa', stock: 15 }
    ],
    tags: ['Módulo Intercambiable', 'Reversible', 'Diseño de Autor']
  },
  {
    id: 'prod-06',
    slug: 'tunica-poncho-caravana',
    name: 'Túnica Poncho Caravana',
    tagline: 'Túnica envolvente convertible en manta de viaje con ruedo asimétrico',
    price: 155000,
    installments: { count: 3, amount: 51666 },
    category: 'abrigos',
    collection: 'Colina de Oro',
    description: 'Tejida en hilado mixto de lana merino y viscosa de bambú. Suave como una segunda piel, abriga en la cabina del avión y se convierte en poncho editorial para paseos nocturnos.',
    story: 'La pieza de refugio que todo nómade lleva consigo para sentirse en casa donde sea que aterrice.',
    craftsmanship: 'Tejido de punto menguado sin cortes de tela sobrante.',
    careInstructions: [
      'Lavar a mano en agua fría con shampoo neutro.',
      'No centrifugar.',
      'Secar en plano.'
    ],
    isReversible: true,
    isModular: false,
    sideAImage: createProductSvg('Poncho Caravana (Bordó)', 'A', '#852c26', '#ffffff'),
    sideBImage: createProductSvg('Poncho Caravana (Marrón)', 'B', '#b08c74', '#852c26'),
    gallery: [],
    compatibleModules: ['prod-04'],
    volumeLitres: 2.8,
    variants: [
      { id: 'v17', size: 'Único', color: 'Bordó / Marrón', stock: 9 }
    ],
    tags: ['Reversible', 'Lana Merino', 'Refugio']
  },
  {
    id: 'prod-07',
    slug: 'sobretodo-liviano-estratos',
    name: 'Sobretodo Liviano Estratos',
    tagline: 'Piloto impermeable respirable con cinturón de filigrana bordada',
    price: 210000,
    installments: { count: 3, amount: 70000 },
    category: 'abrigos',
    collection: 'Colina de Oro',
    description: 'Corte fluido con solapas desestructuradas. Membrana técnica de base celulósica que repele lloviznas suaves sin perder la caída bohemia característica de Baktra.',
    story: 'Las múltiples capas geológicas de la colina de Balkh protegieron los tesoros durante milenios.',
    craftsmanship: 'Terminaciones al bies con hilados de algodón teñidos con tintes vegetales.',
    careInstructions: ['Limpieza en seco profesional o paño húmedo local.'],
    isReversible: false,
    isModular: true,
    sideAImage: createProductSvg('Sobretodo Estratos (Marrón)', 'A', '#b08c74', '#852c26'),
    gallery: [],
    compatibleModules: ['prod-02', 'prod-03'],
    volumeLitres: 3.4,
    variants: [
      { id: 'v18', size: 'S', color: 'Marrón Cálido', stock: 4 },
      { id: 'v19', size: 'M', color: 'Marrón Cálido', stock: 6 },
      { id: 'v20', size: 'L', color: 'Marrón Cálido', stock: 3 }
    ],
    tags: ['Slow Fashion', 'Resistente al Clima', 'Modular']
  },
  {
    id: 'prod-08',
    slug: 'bolso-totebag-archivo-de-viaje',
    name: 'Bolso Tótem "Archivo de Viaje"',
    tagline: 'Bolso plegable de lona reforzada con compartimento para prendas modulares',
    price: 65000,
    installments: { count: 3, amount: 21666 },
    category: 'accesorios',
    collection: 'Esenciales de Viaje',
    description: 'Diseñado para anclarse a la manija de la valija de cabina o llevarse al hombro. Cuenta con separadores internos para trasladar los módulos de recambio limpios y protegidos.',
    story: 'La valija de un nómade no es un contenedor: es un archivo de nostalgias y hallazgos.',
    craftsmanship: 'Lona pesada de algodón 100% orgánico con manijas de cuero vegetal vacuno argentino con curtido libre de cromo.',
    careInstructions: ['Limpieza con esponja suave humedecida.'],
    isReversible: false,
    isModular: false,
    sideAImage: createProductSvg('Bolso Tótem (Bordó)', 'A', '#852c26', '#ffffff'),
    gallery: [],
    volumeLitres: 1.1,
    variants: [
      { id: 'v21', size: 'Único', color: 'Bordó Profundo', stock: 18 }
    ],
    tags: ['Accesorios', 'Viajero', 'Lona Orgánica']
  },
  {
    id: 'prod-09',
    slug: 'vestido-nomada-convertible-samarcanda',
    name: 'Vestido Nómada Samarcanda',
    tagline: 'Vestido midi holgado en lino lavado color bordó con lazos ajustables y tajo lateral',
    price: 165000,
    installments: { count: 3, amount: 55000 },
    category: 'vestidos',
    collection: 'Colina de Oro',
    description: 'Vestido midi fluido de autor diseñado para climas cambiantes de viaje. Confeccionado en lino puro lavado artesanalmente en tono bordó profundo. Sus lazos interiores permiten regular el largo y la silueta.',
    story: 'Inspirado en las túnicas nobles de la antigua Samarcanda, diseñadas para la libertad de movimiento en travesías largas.',
    craftsmanship: 'Taller de confección en Córdoba Capital. Costuras francesas y botones de nácar natural.',
    careInstructions: [
      'Lavado delicado en agua fría.',
      'Secado en percha a la sombra.'
    ],
    isReversible: false,
    isModular: true,
    sideAImage: createProductSvg('Vestido Samarcanda (Bordó)', 'A', '#852c26', '#ffffff'),
    sideBImage: createProductSvg('Vestido Samarcanda (Marrón)', 'B', '#b08c74', '#852c26'),
    gallery: [],
    compatibleModules: ['prod-01', 'prod-05'],
    volumeLitres: 1.8,
    variants: [
      { id: 'v22', size: 'S', color: 'Bordó Profundo', stock: 5 },
      { id: 'v23', size: 'M', color: 'Bordó Profundo', stock: 8 },
      { id: 'v24', size: 'L', color: 'Bordó Profundo', stock: 4 }
    ],
    tags: ['Slow Casualwear', 'Lino Puro', 'Boho Chic']
  }
];

export const TRAVEL_STORIES = [
  {
    id: 'story-1',
    authorName: 'Camila V.',
    authorHandle: '@camila_nomada',
    destination: 'Estambul, Turquía',
    country: 'Turquía',
    storyText: 'Recorrer el Gran Bazar y luego trabajar 4 horas en una terraza de Gálata con la campera Balkh dada vuelta. Nadie sospechó que tenía solo 3 prendas en el carry-on.',
    imageAlt: 'Viajera en Estambul con campera Baktra',
    routeCoordinates: { xPercent: 54, yPercent: 42, locationName: 'Estambul' },
    verifiedTraveler: true
  },
  {
    id: 'story-2',
    authorName: 'Mateo R.',
    authorHandle: '@mateo.remote',
    destination: 'Samarcanda, Uzbekistán',
    country: 'Uzbekistán',
    storyText: 'Estar parado frente a la mezquita de Bibi-Khanum y ver los azulejos turquesa exactos del lema de la marca. Sentí que llevaba un pedazo de esa historia bordado en el pecho.',
    imageAlt: 'Viajero en Samarcanda frente a cúpula turquesa',
    routeCoordinates: { xPercent: 64, yPercent: 44, locationName: 'Samarcanda' },
    verifiedTraveler: true
  },
  {
    id: 'story-3',
    authorName: 'Lucía B.',
    authorHandle: '@lucia.archivos',
    destination: 'Bologna, Italia',
    country: 'Italia',
    storyText: 'Tres meses viviendo en residencias temporales. La falda Tillya Tepe se convirtió en mi uniforme de trabajo y de museos. La comodidad de no tener que pensar en códigos rígidos.',
    imageAlt: 'Viajera en biblioteca histórica de Bologna',
    routeCoordinates: { xPercent: 48, yPercent: 38, locationName: 'Bologna' },
    verifiedTraveler: true
  },
  {
    id: 'story-4',
    authorName: 'Joaquín D.',
    authorHandle: '@joacod_travel',
    destination: 'Oaxaca, México',
    country: 'México',
    storyText: 'Intercambié el cuello bordado por uno de otra temporada en el showroom de Córdoba Capital antes de partir. La idea del kit modular es revolucionaria para no acumular.',
    imageAlt: 'Mercado de Oaxaca con bolso Baktra',
    routeCoordinates: { xPercent: 24, yPercent: 56, locationName: 'Oaxaca' },
    verifiedTraveler: true
  }
];

export const TRAVEL_TIPS = [
  {
    id: 'tip-1',
    title: 'La regla 3:1 de la valija modular',
    category: 'valija' as const,
    content: 'Por cada prenda inferior (falda o pantalón), llevá 3 partes superiores compatibles. Con 2 conjuntos modulares Baktra obtenés hasta 12 combinaciones diferentes sin repetir silueta.',
    readingTime: '2 min'
  },
  {
    id: 'tip-2',
    title: 'Cuidado del lino en habitaciones de hotel',
    category: 'cuidados' as const,
    content: 'Colgá tu camisa en el baño mientras te duchás con agua tibia. El vapor natural elimina las arrugas de viaje sin necesidad de pedir plancha.',
    readingTime: '1 min'
  },
  {
    id: 'tip-3',
    title: 'El mapa invisible del nómade digital',
    category: 'ruta' as const,
    content: 'Buscar cafeterías de especialidad cerca de bibliotecas públicas asegura buena conexión Wi-Fi, luz natural para trabajar y vecinos creativos con quienes conversar.',
    readingTime: '3 min'
  }
];
