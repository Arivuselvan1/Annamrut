import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-brand-brown/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-brand-brown font-bold text-sm shadow-sm">
          ${product.price}
        </div>
        {product.isBestSeller && (
            <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                BEST SELLER
            </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <div>
                 <h3 className="font-serif text-xl font-bold text-brand-brown group-hover:text-brand-red transition-colors">
                    {product.name}
                 </h3>
                 <span className="text-xs uppercase tracking-wider text-brand-brown/50 font-semibold">{product.category}</span>
            </div>
        </div>
        <p className="text-brand-brown/70 text-sm mb-6 line-clamp-2 h-10">
          {product.description}
        </p>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-brand-brown text-white py-2.5 rounded-xl font-medium hover:bg-brand-red transition-colors flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add to Cart
          </button>
          <button className="px-3 py-2.5 rounded-xl border border-brand-brown/20 text-brand-brown hover:bg-brand-brown/5 transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};