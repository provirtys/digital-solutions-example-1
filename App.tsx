import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top on route change wrapper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<div className="p-20 text-center text-xl">Страница "О компании" в разработке</div>} />
          </Routes>
        </main>
        <AIConsultant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;