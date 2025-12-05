import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { FilterX } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  searchQuery: string;
  variant?: 'catalog' | 'featured';
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  searchQuery, 
  variant = 'catalog' 
}) => {
  
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.category.toLowerCase().includes(lowerQuery)
    );
  }, [products, searchQuery]);

  // Styles based on variant
  const containerClass = variant === 'catalog' 
    ? "py-16 bg-brand-cream min-h-screen" 
    : "w-full";
  
  const innerClass = variant === 'catalog' 
    ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
    : "w-full";

  return (
    <div className={containerClass}>
      <div className={innerClass}>
        
        {variant === 'catalog' && (
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-brown mb-4">Our Divine Collection</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
            {searchQuery && (
                <p className="mt-4 text-brand-brown/60">
                    Showing results for "<span className="text-brand-red font-bold">{searchQuery}</span>"
                </p>
            )}
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 opacity-50">
             <FilterX className="w-16 h-16 mx-auto mb-4 text-brand-brown" />
             <p className="text-xl">No flavors found matching your taste.</p>
             <button onClick={() => window.location.reload()} className="mt-4 text-brand-red underline">Reset Filters</button>
          </div>
        ) : (
            <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
            <AnimatePresence>
                {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </AnimatePresence>
            </motion.div>
        )}
      </div>
    </div>
  );
};