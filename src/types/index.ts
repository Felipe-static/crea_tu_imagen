export type CategoryId = 
  | 'testimoniales'
  | 'galvanos'
  | 'reconocimientos-especiales'
  | 'pisa-papeles'
  | 'llaveros'
  | 'medallones'
  | 'porta-medallas'
  | 'educacion'
  | 'pines';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: CategoryId;
  image: string;
  description?: string;
  features?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
