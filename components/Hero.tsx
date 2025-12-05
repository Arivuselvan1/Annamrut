import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center bg-brand-cream">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-red/10 to-transparent rounded-l-full translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-tr-full -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-wider text-sm">
            SINCE 1995
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-brown leading-tight">
            Experience the <span className="text-brand-red italic">Divine Taste</span> of Annamrut.
          </h1>
          <p className="font-sans text-xl text-brand-brown/80 max-w-lg">
            Handcrafted with passion, using only the finest ingredients to bring you a symphony of flavors that melt in your heart.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/products')}
              className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-red/30 hover:bg-red-800 hover:shadow-brand-red/50 transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              Explore Flavors <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="px-8 py-4 rounded-full font-bold text-lg text-brand-brown border-2 border-brand-brown/20 hover:border-brand-brown hover:bg-brand-brown/5 transition-all"
            >
              Our Story
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Circle */}
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-white rounded-full shadow-2xl opacity-60 blur-3xl" />
          
          <img 
            src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80" 
            alt="Melting Ice Cream" 
            className="relative z-10 w-[80%] md:w-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-in-out border-8 border-white"
          />
        </motion.div>
      </div>
    </div>
  );
};