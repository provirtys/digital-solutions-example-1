import React from 'react';
import { Hexagon, Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Hexagon className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg">METAL<span className="text-accent">PRO</span></span>
            </div>
            <p className="text-sm text-gray-400">
              Комплексные поставки металлообрабатывающего оборудования, инструмента и оснастки от ведущих мировых производителей.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="hover:text-accent transition-colors">Каталог оборудования</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Сервис и услуги</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">О компании</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span>г. Москва, ул. Промышленная 1, офис 101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+7 (999) 000-00-00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>sales@metalpro.ru</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MetalPro. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;