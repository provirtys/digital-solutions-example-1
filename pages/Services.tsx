import React from 'react';
import { SERVICES } from '../constants';
import { Wrench, Settings, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  'Wrench': <Wrench className="h-8 w-8" />,
  'Settings': <Settings className="h-8 w-8" />,
  'GraduationCap': <GraduationCap className="h-8 w-8" />
};

const Services: React.FC = () => {
  return (
    <div className="bg-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Сервис и Поддержка</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Мы обеспечиваем бесперебойную работу вашего производства 24/7. Наша задача — не просто продать станок, а заставить его приносить вам прибыль.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-start md:items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white text-accent rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                  {iconMap[service.icon]}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
              </div>
              <div>
                 <Link to="/contact" className="flex items-center gap-2 text-accent font-semibold hover:text-accent-hover">
                   Заказать <ArrowRight className="h-5 w-5" />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Block */}
      <div className="mt-24 bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна консультация инженера?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Наши технические специалисты помогут подобрать оптимальный режим резания, составят карту наладки и подберут инструмент под вашу деталь.
            </p>
            <Link to="/contact" className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Связаться с отделом инжиниринга
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;