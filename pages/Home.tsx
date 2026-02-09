import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-primary overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Factory Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Инновации в <br/>
              <span className="text-accent">Металлообработке</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Поставляем передовые станки с ЧПУ, высокоточную оснастку и инструмент для вашего производства. Полный цикл внедрения: от подбора до пусконаладки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/catalog" 
                className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-accent/25"
              >
                В Каталог
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-all"
              >
                Наши Услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают MetalPro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы не просто продаем оборудование, мы предлагаем готовые технологические решения для повышения эффективности вашего бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Рост Производительности</h3>
              <p className="text-gray-600">
                Подбираем оборудование с оптимальным циклом обработки, сокращая время простоя и себестоимость детали.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Инжиниринг и Сервис</h3>
              <p className="text-gray-600">
                Собственный штат сервисных инженеров. Реакция на заявку в течение 24 часов. Склад запчастей в Москве.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Гарантия Качества</h3>
              <p className="text-gray-600">
                Работаем только с проверенными производителями из Европы и Азии. Расширенная гарантия до 3 лет.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Snippet */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Наши Направления</h2>
              <p className="text-gray-400">Комплексное оснащение предприятий</p>
            </div>
            <Link to="/catalog" className="text-accent hover:text-white transition-colors flex items-center gap-1">
              Весь каталог <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Токарные центры', 'Фрезерные станки', 'Измерительный инструмент', 'Оснастка станочная'].map((item, idx) => (
              <div key={idx} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img 
                  src={`https://picsum.photos/400/500?random=${10+idx}`} 
                  alt={item} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="text-xl font-bold group-hover:text-accent transition-colors">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы модернизировать производство?</h2>
          <p className="text-xl opacity-90 mb-8">
            Оставьте заявку на бесплатный технический аудит вашего цеха. Наши специалисты подберут оптимальное решение.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-accent font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;