import { Category, Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Главная', path: '/' },
  { label: 'Каталог', path: '/catalog' },
  { label: 'Услуги', path: '/services' },
  { label: 'О компании', path: '/about' },
  { label: 'Контакты', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MP-500 Vertical Machining Center',
    category: Category.CNC_MACHINES,
    description: 'Высокоскоростной вертикальный обрабатывающий центр для серийного производства.',
    image: 'https://picsum.photos/400/300?random=1',
    specs: ['Шпиндель 12000 об/мин', 'Стол 1000x500мм', 'ЧПУ Fanuc'],
  },
  {
    id: '2',
    name: 'Turning Center TC-200',
    category: Category.CNC_MACHINES,
    description: 'Токарный центр с приводным инструментом и осью Y.',
    image: 'https://picsum.photos/400/300?random=2',
    specs: ['Диаметр точения 300мм', 'РМЦ 500мм', '12 позиций револьвер'],
  },
  {
    id: '3',
    name: 'Hydraulic Chuck HSK-A63',
    category: Category.TOOLING,
    description: 'Гидропластовый патрон высокой точности для чистовой обработки.',
    image: 'https://picsum.photos/400/300?random=3',
    specs: ['Биение < 0.003мм', 'Балансировка G2.5', 'HSK-A63'],
  },
  {
    id: '4',
    name: 'Carbide End Mill 12mm',
    category: Category.INSTRUMENTS,
    description: 'Монолитная твердосплавная фреза с покрытием AlTiN.',
    image: 'https://picsum.photos/400/300?random=4',
    specs: ['D=12mm', '4 зуба', 'Твердость 55 HRC'],
  },
  {
    id: '5',
    name: 'Coolant Emulsion Pro-X',
    category: Category.CONSUMABLES,
    description: 'Универсальная СОЖ для лезвийной обработки.',
    image: 'https://picsum.photos/400/300?random=5',
    specs: ['Бочка 200л', 'Биостабильность', 'Антикоррозия'],
  },
];

export const SERVICES = [
  {
    title: 'Пусконаладочные работы',
    description: 'Профессиональная установка, нивелирование и запуск оборудования на вашей площадке.',
    icon: 'Wrench'
  },
  {
    title: 'Сервисное обслуживание',
    description: 'Гарантийный и постгарантийный ремонт, поставка запчастей в кратчайшие сроки.',
    icon: 'Settings'
  },
  {
    title: 'Обучение персонала',
    description: 'Курсы для операторов и технологов по работе с системами ЧПУ Fanuc, Siemens, Mitsubishi.',
    icon: 'GraduationCap'
  }
];