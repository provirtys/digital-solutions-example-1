export enum Category {
  CNC_MACHINES = 'Станки ЧПУ',
  TOOLING = 'Оснастка',
  INSTRUMENTS = 'Режущий инструмент',
  CONSUMABLES = 'Расходные материалы'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  price?: string; // Optional, maybe "By Request"
  specs: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}