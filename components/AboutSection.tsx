import React from 'react';
import { motion } from 'framer-motion';
import { Play, User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="bg-brand-cream min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-6"
          >
            Crafting Happiness Since 1995
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-brand-brown/70 leading-relaxed"
          >
            Annamrut was born from a simple desire: to create ice cream that feels like a warm hug on a cold day, and a cool breeze on a summer afternoon. We source our milk from happy, free-range cows and our fruits from the finest orchards.
          </motion.p>
        </div>

        {/* Video Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group cursor-pointer mb-24"
        >
          {/* Placeholder Video / Image */}
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80" 
            alt="Making of Ice Cream" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-brand-red/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1 fill-current" />
            </div>
          </div>

          <div className="absolute bottom-8 left-8 text-white">
             <h3 className="text-2xl font-bold mb-2">The Art of Churning</h3>
             <p className="text-sm opacity-90">Watch how we blend tradition with taste.</p>
          </div>
        </motion.div>

        {/* Founders Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl font-bold text-brand-brown">Meet the Visionaries</h3>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="flex flex-col items-center text-center group"
            >
              <div className="w-56 h-56 mb-6 relative">
                 <div className="absolute inset-0 bg-brand-red/20 rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                 <div className="w-full h-full bg-brand-brown/5 rounded-full border-4 border-white shadow-xl relative z-10 flex items-center justify-center">
                    <User className="w-20 h-20 text-brand-brown/20" />
                 </div>
              </div>
              <h4 className="font-serif text-2xl font-bold text-brand-brown">Selvam</h4>
              <p className="text-brand-red font-medium text-sm tracking-wider uppercase mb-3">Co-Founder</p>
              <p className="text-brand-brown/70 italic max-w-xs">"We don't just make ice cream; we freeze memories into every scoop."</p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="flex flex-col items-center text-center group"
            >
               <div className="w-56 h-56 mb-6 relative">
                 <div className="absolute inset-0 bg-brand-gold/20 rounded-full transform -translate-x-3 translate-y-3 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                 <div className="w-full h-full bg-brand-brown/5 rounded-full border-4 border-white shadow-xl relative z-10 flex items-center justify-center">
                    <User className="w-20 h-20 text-brand-brown/20" />
                 </div>
              </div>
              <h4 className="font-serif text-2xl font-bold text-brand-brown">Sanker</h4>
              <p className="text-brand-red font-medium text-sm tracking-wider uppercase mb-3">Co-Founder</p>
              <p className="text-brand-brown/70 italic max-w-xs">"Purity isn't an option for us. It's the only ingredient that truly matters."</p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: 'Flavors', value: '50+' },
                { label: 'Outlets', value: '12' },
                { label: 'Happy Customers', value: '1M+' },
                { label: 'Years', value: '30' }
            ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-brand-brown/5">
                    <div className="text-4xl font-serif font-bold text-brand-red mb-2">{stat.value}</div>
                    <div className="text-brand-brown/60 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};