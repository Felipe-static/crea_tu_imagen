import { Category, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'testimoniales',
    name: 'Testimoniales',
    description: 'Piezas únicas que perpetúan el agradecimiento y el reconocimiento.',
    image: '/images/categories/testimoniales.jpg'
  },
  {
    id: 'galvanos',
    name: 'Galvanos',
    description: 'Elegancia clásica en madera y metal para distinciones formales.',
    image: '/images/categories/galvanos.jpg'
  },
  {
    id: 'reconocimientos-especiales',
    name: 'Reconocimientos Especiales',
    description: 'Diseños a medida para logros extraordinarios.',
    image: '/images/categories/especiales.jpg'
  },
  {
    id: 'pisa-papeles',
    name: 'Pisa Papeles',
    description: 'Funcionalidad y arte en cristal óptico.',
    image: '/images/categories/pisapapeles.jpg'
  },
  {
    id: 'llaveros',
    name: 'Llaveros',
    description: 'Detalles corporativos portables de alta gama.',
    image: '/images/categories/llaveros.jpg'
  },
  {
    id: 'medallones',
    name: 'Medallones',
    description: 'Símbolos de honor en metal fundido y acabado premium.',
    image: '/images/categories/medallones.jpg'
  },
  {
    id: 'porta-medallas',
    name: 'Porta Medallas',
    description: 'Exhibidores diseñados para resaltar cada logro.',
    image: '/images/categories/portamedallas.jpg'
  },
  {
    id: 'educacion',
    name: 'Educación',
    description: 'Distinciones académicas para licenciaturas y titulaciones.',
    image: '/images/categories/educacion.jpg'
  },
  {
    id: 'pines',
    name: 'Pines',
    description: 'Insignias corporativas de identidad y pertenencia.',
    image: '/images/categories/pines.jpg'
  }
];

export const products: Product[] = [
  // Testimoniales
  {
    id: '1',
    code: 'T-01',
    name: 'Cristal Prisma Honor',
    category: 'testimoniales',
    image: '/images/products/t01.jpg',
    description: 'La luz viaja a través del cristal óptico para iluminar el grabado interno, simbolizando la claridad y la integridad de quien recibe este honor.',
  },
  {
    id: '2',
    code: 'T-02',
    name: 'Columna Victoria',
    category: 'testimoniales',
    image: '/images/products/t02.jpg',
    description: 'Un pilar de solidez y aspiración. Su diseño vertical representa el crecimiento constante y el liderazgo que inspira a otros.',
  },
  // Galvanos
  {
    id: '3',
    code: 'G-01',
    name: 'Galvano Legado Roble',
    category: 'galvanos',
    image: '/images/products/g01.jpg',
    description: 'La calidez de la madera noble se une al brillo del metal dorado, creando una pieza clásica que transmite tradición y respeto profundo.',
  },
  {
    id: '4',
    code: 'G-02',
    name: 'Galvano Fusión Contemporánea',
    category: 'galvanos',
    image: '/images/products/g02.jpg',
    description: 'Líneas limpias y materiales modernos para celebrar los logros de hoy con la mirada puesta en la innovación del mañana.',
  },
   // Reconocimientos Especiales
   {
    id: '5',
    code: 'RE-01',
    name: 'Escultura de Identidad',
    category: 'reconocimientos-especiales',
    image: '/images/products/re01.jpg',
    description: 'No hay dos historias iguales. Creamos formas abstractas que materializan el ADN único de su marca o el hito específico que celebra.',
  },
  // Pisa Papeles
  {
    id: '6',
    code: 'PP-01',
    name: 'Cubo Memoria Eterna',
    category: 'pisa-papeles',
    image: '/images/products/pp01.jpg',
    description: 'Un recordatorio tangible de la excelencia en el espacio de trabajo diario. Pequeño en tamaño, pero inmenso en significado.',
  },
  // Llaveros
  {
    id: '7',
    code: 'LL-01',
    name: 'Llavero Luz Guía',
    category: 'llaveros',
    image: '/images/products/ll01.jpg',
    description: 'Lleve el orgullo de pertenencia a todas partes. La iluminación LED interna resalta el logo corporativo con un toque de magia.',
  },
  // Medallones
  {
    id: '8',
    code: 'M-01',
    name: 'Medalla Mérito Fundido',
    category: 'medallones',
    image: '/images/products/m01.jpg',
    description: 'El peso de la historia en la palma de la mano. Bronce fundido con relieves que narran hazañas y superación.',
  },
  // Porta Medallas
  {
    id: '9',
    code: 'PM-01',
    name: 'Exhibidor de Glorias',
    category: 'porta-medallas',
    image: '/images/products/pm01.jpg',
    description: 'Porque los logros no deben guardarse en un cajón. Un marco de terciopelo diseñado para proteger y exaltar el esfuerzo.',
  },
  // Educación
  {
    id: '10',
    code: 'ED-01',
    name: 'Galvano Alumno Destacado',
    category: 'educacion',
    image: '/images/products/ed01.jpg',
    description: 'El primer gran hito de una vida profesional. Diseñado para inspirar a las nuevas generaciones a seguir persiguiendo la excelencia.',
  },
  // Pines
  {
    id: '11',
    code: 'P-01',
    name: 'Insignia de Pertenencia',
    category: 'pines',
    image: '/images/products/p01.jpg',
    description: 'Un discreto pero poderoso símbolo de unidad. Metal esmaltado al fuego para vestir los colores de la organización con orgullo.',
  }
];
