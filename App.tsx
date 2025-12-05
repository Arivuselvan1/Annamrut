import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { AboutSection } from './components/AboutSection';
import { ContactHub } from './components/ContactHub';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';
import { motion } from 'framer-motion';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home Page Component Composition
const HomePage: React.FC = () => {
  // Filter only best sellers for the featured section
  const featuredProducts = PRODUCTS.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <>
      <Hero />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="font-serif text-3xl font-bold text-brand-brown">Customer Favorites</h2>
                <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
            </motion.div>
            
            {/* Featured Grid - Uses 'featured' variant to avoid layout conflicts */}
            <ProductGrid products={featuredProducts} searchQuery="" variant="featured" />
        </div>
      </div>
      <AboutSection />
    </>
  );
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-cream font-sans text-brand-brown flex flex-col">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/products" 
              element={<ProductGrid products={PRODUCTS} searchQuery={searchQuery} variant="catalog" />} 
            />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactHub />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;