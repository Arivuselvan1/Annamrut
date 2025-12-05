import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-brand-cream py-12 border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Annamrut</h3>
            <p className="max-w-sm text-brand-cream/60">
              Delivering moments of pure joy through handcrafted, premium ice creams since 1995.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Links</h4>
            <ul className="space-y-2 text-brand-cream/60">
              <li className="hover:text-white cursor-pointer transition-colors">Products</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-colors">Store Locator</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red cursor-pointer transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red cursor-pointer transition-colors">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red cursor-pointer transition-colors">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-brand-cream/40">
          © {new Date().getFullYear()} Annamrut Ice Creams. All rights reserved.
        </div>
      </div>
    </footer>
  );
};