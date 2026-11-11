import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    slug: 'chaleco-bolso-convertible',
    name: 'Chaleco Bolso Convertible',
    tagline: 'Prenda convertible 2 en 1: chaleco de autor en terciopelo bordó que muta a bolso tote',
    price: 185000,
    installments: { count: 3, amount: 61666 },
    category: 'abrigos',
    collection: 'Colina de Oro',
    description: 'Pieza insignia de diseño convertible y versatilidad nómade. Confeccionada artesanalmente en terciopelo bordó con apliques de filigrana con memoria textil. Mediante un ingenioso sistema de cremallera perimetral y moldería modular, se transforma de manera intuitiva de un chaleco estructurado a un bolso tote de mano o al hombro, ideal para optimizar el equipaje en tránsito.',
    story: 'Inspirado en los ropajes de tránsito de la antigua Bactra y la Ruta de la Seda, donde cada objeto debía cumplir múltiples propósitos para viajar liviano entre oasis y cordilleras.',
    craftsmanship: 'Taller de autor en Córdoba Capital. Confección en terciopelo de algodón con tacto gamuzado, forrería en satén de seda, cremalleras reforzadas de alta durabilidad y apliques de filigrana cosidos artesanalmente.',
    careInstructions: [
      'Lavado a mano con agua fría y jabón neutro o limpieza en seco.',
      'No retorcer ni centrifugar.',
      'Secado horizontal a la sombra.',
      'Planchar del revés con paño protector a temperatura baja/media.'
    ],
    isReversible: false,
    isModular: true,
    isConvertible: true,
    convertibleData: {
      modeA: {
        name: 'Chaleco',
        label: 'Modo Chaleco',
        image: '/assets/products/chaleco-bolso/chaleco-frente.webp',
        backImage: '/assets/products/chaleco-bolso/chaleco-espalda.jpg',
        description: 'Chaleco de autor con cierre central, sisa profunda y apliques de filigrana bordó en cintura.'
      },
      modeB: {
        name: 'Bolso',
        label: 'Modo Bolso',
        image: '/assets/products/chaleco-bolso/bolso.jpg',
        description: 'Bolso tote espacioso generado al unir la base con cierre perimetral y usar las sisas como asas.'
      },
      transformationTip: 'Cerrá la cremallera en la base inferior y utilizá las sisas superiores como asas: el chaleco muta instantáneamente en un bolso tote espacioso y resistente.'
    },
    sideAImage: '/assets/products/chaleco-bolso/chaleco-frente.webp',
    sideBImage: '/assets/products/chaleco-bolso/bolso.jpg',
    gallery: [
      '/assets/products/chaleco-bolso/chaleco-frente.webp',
      '/assets/products/chaleco-bolso/bolso.jpg',
      '/assets/products/chaleco-bolso/chaleco-espalda.jpg'
    ],
    compatibleModules: ['prod-02', 'prod-03', 'prod-04', 'prod-05'],
    volumeLitres: 1.2,
    variants: [
      { id: 'v1', size: 'S', color: 'Bordó Baktra', stock: 4 },
      { id: 'v2', size: 'M', color: 'Bordó Baktra', stock: 6 },
      { id: 'v3', size: 'L', color: 'Bordó Baktra', stock: 5 },
      { id: 'v4', size: 'XL', color: 'Bordó Baktra', stock: 2 }
    ],
    tags: ['Convertible 2 en 1', 'Chaleco & Bolso', 'Diseño Rector', 'Slow Fashion', 'Terciopelo']
  },
  {
    id: 'prod-05',
    slug: 'vestido-samarcanda-reversible',
    name: 'Vestido Samarcanda Reversible',
    tagline: 'Vestido midi reversible doble faz: seda con estampa mineral turquesa y lino marfil natural',
    price: 175000,
    installments: { count: 3, amount: 58333 },
    category: 'vestidos',
    collection: 'Colina de Oro',
    description: 'Vestido midi de autor con sistema reversible doble faz. Cara A presenta un satén fluido con estampa botánica-mineral en tonos turquesa y tierra de Samarcanda; Cara B ofrece una caída limpia en lino y seda color marfil natural. Destaca por sus tirantes finos regulables, escote geométrico con aberturas caleidoscópicas y un elegante tajo frontal que revela el contraste del reverso al caminar.',
    story: 'Inspirado en los oasis de Samarcanda, encrucijada donde las sedas orientales y los linos mediterráneos se fusionaban en indumentaria versátil para largas travesías.',
    craftsmanship: 'Confección artesanal con costuras francesas ocultas sin revés visible. Taller de autor en Córdoba Capital con moldería de desperdicio textil mínimo.',
    careInstructions: [
      'Lavado delicado a mano con agua fría y jabón neutro.',
      'No retorcer ni centrifugar.',
      'Secado vertical en percha a la sombra.',
      'Planchar a vapor suave del revés protegiendo la estampa.'
    ],
    isReversible: true,
    isModular: true,
    isConvertible: false,
    sideAImage: '/assets/products/vestido-samarcanda/vestido-frente-turquesa.jpg',
    sideBImage: '/assets/products/vestido-samarcanda/vestido-frente-marfil.jpg',
    gallery: [
      '/assets/products/vestido-samarcanda/vestido-frente-turquesa.jpg',
      '/assets/products/vestido-samarcanda/vestido-frente-marfil.jpg'
    ],
    compatibleModules: ['prod-01', 'prod-02', 'prod-03'],
    volumeLitres: 1.5,
    variants: [
      { id: 'v20', size: 'S', color: 'Turquesa Mineral / Marfil', stock: 5 },
      { id: 'v21', size: 'M', color: 'Turquesa Mineral / Marfil', stock: 8 },
      { id: 'v22', size: 'L', color: 'Turquesa Mineral / Marfil', stock: 4 }
    ],
    tags: ['Reversible 2 en 1', 'Vestido Midi', 'Doble Faz', 'Seda Estampada', 'Slow Fashion']
  },
  {
    id: 'prod-02',
    slug: 'pollera-antilope',
    name: 'Pollera Antílope',
    tagline: 'Falda midi fluida en twill de seda cruda con hilera de botones forrados y panel adaptable',
    price: 120000,
    installments: { count: 3, amount: 40000 },
    category: 'faldas',
    collection: 'Colina de Oro',
    description: 'Falda midi fluida de caída sutil y tono marfil natural. Destaca por su cintura limpia y un delicado detalle de botones forrados a mano que articulan la silueta y permiten modular el vuelo. Su tejido liviano y transpirable aporta frescura y movimiento orgánico en cualquier latitud.',
    story: 'Nombrada en honor a las gacelas y antílopes que cruzaban las estepas afganas hacia los valles de Oxus, simbolizando agilidad, frescura y libertad de movimiento.',
    craftsmanship: 'Moldería con residuo cero en Córdoba Capital. Ruedos con costuras francesas invisibles y forrería suave que previene transparencias.',
    careInstructions: [
      'Lavado delicado a mano con agua fría.',
      'Secado en percha a la sombra.',
      'Planchado suave con vapor a temperatura moderada.'
    ],
    isReversible: false,
    isModular: true,
    isConvertible: false,
    sideAImage: '/assets/products/pollera-antilope/pollera-frente.jpg',
    gallery: [
      '/assets/products/pollera-antilope/pollera-frente.jpg',
      '/assets/products/pollera-antilope/pollera-espalda.jpg',
      '/assets/products/pollera-antilope/pollera-detalle.jpg'
    ],
    compatibleModules: ['prod-01', 'prod-03', 'prod-04', 'prod-05'],
    volumeLitres: 1.4,
    variants: [
      { id: 'v5', size: 'S', color: 'Marfil / Blanco Roto', stock: 5 },
      { id: 'v6', size: 'M', color: 'Marfil / Blanco Roto', stock: 8 },
      { id: 'v7', size: 'L', color: 'Marfil / Blanco Roto', stock: 4 }
    ],
    tags: ['Falda Midi', 'Seda Cruda', 'Modular', 'Slow Fashion']
  },
  {
    id: 'prod-04',
    slug: 'top-reliquia',
    name: 'Top Reliquia',
    tagline: 'Top cuello halter con estampa de filigrana dorada y espalda descubierta',
    price: 65000,
    installments: { count: 3, amount: 21666 },
    category: 'camisas',
    collection: 'Colina de Oro',
    description: 'Prenda editorial con estampa exclusiva inspirada en las reliquias y filigranas de oro halladas en Tillya Tepe. Presenta un sofisticado cuello alto halter con abotonadura posterior, silueta geométrica envolvente y una sensual espalda descubierta con caída drapeada. Un diseño de autor de alto impacto para ocasiones especiales o paseos en ciudades cosmopolitas.',
    story: 'Una oda a los ornamentos dorados de la legendaria "Colina de Oro". Cada patrón de la estampa reproduce símbolos de protección y viaje del arte greco-bactriano.',
    craftsmanship: 'Estampado textil artesanal con pigmentos al agua no tóxicos. Confección en tejido fluido con memoria textil y tacto sedoso.',
    careInstructions: [
      'Lavado delicado a mano en agua fría con jabón neutro.',
      'No refregar sobre el área estampada.',
      'Secado horizontal a la sombra.'
    ],
    isReversible: false,
    isModular: true,
    isConvertible: false,
    sideAImage: '/assets/products/top-reliquia/top-reliquia-frente.jpg',
    gallery: [
      '/assets/products/top-reliquia/top-reliquia-frente.jpg',
      '/assets/products/top-reliquia/top-reliquia-espalda.jpg'
    ],
    compatibleModules: ['prod-01', 'prod-02'],
    volumeLitres: 0.7,
    variants: [
      { id: 'v12', size: 'S', color: 'Dorado / Arena Reliquia', stock: 4 },
      { id: 'v13', size: 'M', color: 'Dorado / Arena Reliquia', stock: 7 },
      { id: 'v14', size: 'L', color: 'Dorado / Arena Reliquia', stock: 4 }
    ],
    tags: ['Cuello Halter', 'Estampa Exclusiva', 'Filigrana', 'Diseño de Autor']
  },
  {
    id: 'prod-03',
    slug: 'top-mao',
    name: 'Top Mao',
    tagline: 'Top manga corta en satén marfil con cuello oriental y abertura en gota',
    price: 60000,
    installments: { count: 3, amount: 20000 },
    category: 'camisas',
    collection: 'Colina de Oro',
    description: 'Pieza esencial de silueta depurada y reminiscencias orientales. Confeccionado en satén suave de brillo mate color marfil, cuenta con cuello mao estructurado, abertura frontal en forma de gota con cierre por botón de autor, y mangas cortas de corte limpio. Una primera capa versátil que combina a la perfección bajo el Chaleco Convertible o con la Pollera Antílope.',
    story: 'El cuello mao evoca la elegancia sobria y ceremonial de las caravanas que comerciaban en los puestos fronterizos entre Asia Central y los reinos orientales.',
    craftsmanship: 'Costuras inglesas reforzadas a tono, terminación de cuello al bies y botón de nácar natural recuperado.',
    careInstructions: [
      'Lavar a mano o máquina en ciclo delicado con prendas del mismo tono.',
      'No retorcer ni usar blanqueadores.',
      'Planchar del revés a baja temperatura.'
    ],
    isReversible: false,
    isModular: true,
    isConvertible: false,
    sideAImage: '/assets/products/top-mao/top-mao-frente.jpg',
    gallery: [
      '/assets/products/top-mao/top-mao-frente.jpg',
      '/assets/products/top-mao/top-mao-espalda.jpg'
    ],
    compatibleModules: ['prod-01', 'prod-02'],
    volumeLitres: 0.8,
    variants: [
      { id: 'v8', size: 'S', color: 'Marfil Satén', stock: 6 },
      { id: 'v9', size: 'M', color: 'Marfil Satén', stock: 9 },
      { id: 'v10', size: 'L', color: 'Marfil Satén', stock: 5 },
      { id: 'v11', size: 'XL', color: 'Marfil Satén', stock: 3 }
    ],
    tags: ['Cuello Mao', 'Satén Marfil', 'Prenda Esencial', 'Slow Fashion']
  }
];

export const TRAVEL_STORIES = [
  {
    id: 'story-1',
    authorName: 'Camila V.',
    authorHandle: '@camila_nomada',
    destination: 'Estambul, Turquía',
    country: 'Turquía',
    storyText: 'Recorrer el Gran Bazar con el Chaleco puesto y luego transformarlo en bolso para llevar los libros que compré en Gálata. Nadie sospechó que tenía solo 3 prendas en el carry-on.',
    imageAlt: 'Viajera en Estambul con chaleco bolso Baktra',
    routeCoordinates: { xPercent: 54, yPercent: 42, locationName: 'Estambul' },
    verifiedTraveler: true
  },
  {
    id: 'story-2',
    authorName: 'Mateo R.',
    authorHandle: '@mateo.remote',
    destination: 'Samarcanda, Uzbekistán',
    country: 'Uzbekistán',
    storyText: 'Usé el Vestido Samarcanda reversible en una cena formal sobre la Cara A turquesa y al día siguiente di vuelta la prenda para visitar mezquitas en tono marfil. Nadie notó que era la misma pieza.',
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
    storyText: 'Tres meses viviendo en residencias temporales. La pollera Antílope junto al Top Mao se convirtieron en mi uniforme de trabajo y de museos. La comodidad de prendas nobles.',
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
    storyText: 'La versatilidad de las piezas convertibles y reversibles es revolucionaria para no acumular ropa en la valija. Baktra redefine cómo empacamos los nómades.',
    imageAlt: 'Mercado de Oaxaca con prendas Baktra',
    routeCoordinates: { xPercent: 24, yPercent: 56, locationName: 'Oaxaca' },
    verifiedTraveler: true
  }
];

export const TRAVEL_TIPS = [
  {
    id: 'tip-1',
    title: 'La regla de las piezas convertibles y reversibles',
    category: 'valija' as const,
    content: 'Una prenda convertible como el Chaleco Bolso o reversible como el Vestido Samarcanda cumple doble función ocupando apenas 1.2 a 1.5 litros en tu valija. Duplica tu equipaje sin sumar peso.',
    readingTime: '2 min'
  },
  {
    id: 'tip-2',
    title: 'Cuidado de sedas y terciopelos en viaje',
    category: 'cuidados' as const,
    content: 'Colgá tus prendas en el baño mientras te duchás con agua tibia. El vapor suave relaja el terciopelo y la seda eliminando arrugas sin necesidad de plancha.',
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
