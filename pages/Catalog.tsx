import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import { Filter, Search } from 'lucide-react';

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Каталог Продукции</h1>
          <p className="text-gray-600">Более 5000 позиций на складе и под заказ.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-semibold">
                <Filter className="h-5 w-5" />
                <span>Фильтры</span>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === 'All' ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Все категории
                </button>
                {Object.values(Category).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-wide mb-2 block">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="space-y-1 mb-6">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="text-xs text-gray-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                          {spec}
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-2.5 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors text-sm">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Товары не найдены.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;