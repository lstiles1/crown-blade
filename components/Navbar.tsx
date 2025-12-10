import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View, sectionId?: string) => {
    onNavigate(view);
    setIsOpen(false);
    if (sectionId && view === 'home') {
       setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHome = currentView === 'home';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-2' : 'bg-transparent py-6'
      }`} 
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center group cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className={`p-2 rounded-lg transition-colors ${scrolled || !isHome ? 'bg-stone-900' : 'bg-white'}`} aria-hidden="true">
              <Scissors className={`h-6 w-6 ${scrolled || !isHome ? 'text-brand-500' : 'text-stone-900'}`} />
            </div>
            <span className={`ml-3 text-xl font-bold font-serif tracking-tight transition-colors ${scrolled || !isHome ? 'text-stone-900' : 'text-white'}`}>
              Crown & Blade
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-medium" role="menubar">
            <button 
              onClick={() => handleNavClick('courses')}
              className={`relative group px-1 py-2 transition-colors ${scrolled || !isHome ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}
              role="menuitem"
            >
              Courses
              <span className={`absolute left-0 bottom-0 h-0.5 bg-brand-500 transition-all duration-300 ${currentView === 'courses' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            
            <button 
              onClick={() => handleNavClick('academy')}
              className={`relative group px-1 py-2 transition-colors ${scrolled || !isHome ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}
              role="menuitem"
            >
              Academy
              <span className={`absolute left-0 bottom-0 h-0.5 bg-brand-500 transition-all duration-300 ${currentView === 'academy' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <button 
              onClick={() => handleNavClick('work')}
              className={`relative group px-1 py-2 transition-colors ${scrolled || !isHome ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}
              role="menuitem"
            >
              Student Work
              <span className={`absolute left-0 bottom-0 h-0.5 bg-brand-500 transition-all duration-300 ${currentView === 'work' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            
            <button 
              onClick={() => handleNavClick('home', 'book')}
              className="bg-brand-600 text-white px-6 py-2.5 rounded-sm font-medium hover:bg-brand-500 transition-all shadow-[0_4px_14px_0_rgba(180,83,9,0.39)] hover:shadow-[0_6px_20px_rgba(180,83,9,0.23)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              role="menuitem"
              aria-label="Apply for admission now"
            >
              Apply Now
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1 ${scrolled || !isHome ? 'text-stone-900' : 'text-white'}`}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-stone-900/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} id="mobile-menu">
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-stone-400 hover:text-white"
            >
              <X className="h-8 w-8" />
            </button>
            <button onClick={() => handleNavClick('courses')} className="text-3xl font-serif font-bold text-white hover:text-brand-500 transition-colors text-left">Courses</button>
            <button onClick={() => handleNavClick('academy')} className="text-3xl font-serif font-bold text-white hover:text-brand-500 transition-colors text-left">Academy</button>
            <button onClick={() => handleNavClick('work')} className="text-3xl font-serif font-bold text-white hover:text-brand-500 transition-colors text-left">Student Work</button>
            <div className="pt-8">
              <button onClick={() => handleNavClick('home', 'book')} className="block w-full text-center bg-brand-600 text-white px-8 py-4 rounded-sm font-bold text-xl uppercase tracking-widest hover:bg-brand-500">Apply Now</button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;