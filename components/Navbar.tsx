import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // If user starts typing, automatically take them to products page to see results
    if (query.length > 0 && location.pathname !== '/products') {
      navigate('/products');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2" 
            onClick={() => navigate('/')}
          >
             <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-brand-cream font-bold text-xl font-serif">A</div>
            <span className="font-serif text-2xl font-bold text-brand-red tracking-tight">Annamrut</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-brand-red' : 'text-brand-brown hover:text-brand-red'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Search & Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Find a flavor..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full bg-white border border-brand-brown/10 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red w-48 transition-all duration-300 group-hover:w-64 text-brand-brown placeholder-brand-brown/40"
              />
              <Search className="w-5 h-5 text-brand-brown/50 absolute left-3 top-2.5" />
            </div>
            <button className="text-brand-brown hover:text-brand-red transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button className="text-brand-brown" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-brown/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
               {/* Mobile Search */}
               <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search flavors..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-brand-brown/20 focus:outline-none focus:border-brand-red text-brand-brown"
                  />
                  <Search className="w-5 h-5 text-brand-brown/50 absolute left-3 top-2.5" />
               </div>

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'bg-brand-red text-white' : 'text-brand-brown hover:bg-brand-brown/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};