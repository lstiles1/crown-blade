import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-900 min-h-screen flex items-center" aria-label="Hero Section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          role="presentation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/95 to-stone-900/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-700 fade-in">
            {/* Badge */}
            <div 
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full px-5 py-2.5 shadow-xl cursor-default"
              role="status"
              aria-label="Status: Enrollment Open for Fall 2024"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              <span className="text-sm font-bold tracking-wide uppercase text-stone-100">Enrollment Open: Fall 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
              Forge Your Legacy as a <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600 italic pr-2">Master Barber</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-lg border-l-4 border-brand-600 pl-6">
              Join the elite. Our academy provides hands-on training, business mentorship, and the certification you need to launch a 6-figure grooming career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#book" 
                aria-label="Start your application process"
                className="group inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white rounded-sm font-bold text-lg hover:bg-brand-500 transition-all shadow-[0_0_20px_rgba(180,83,9,0.3)] hover:shadow-[0_0_30px_rgba(180,83,9,0.5)] transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                Start Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <button 
                onClick={() => onNavigate('courses')}
                aria-label="View academy curriculum and courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-stone-600 rounded-sm font-bold text-lg hover:bg-white hover:text-stone-900 hover:border-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                View Curriculum
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6 text-sm font-medium text-stone-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-500" aria-hidden="true" />
                <span>State Board Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-500" aria-hidden="true" />
                <span>Job Placement Help</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Static Image Card */}
          <div className="relative group perspective-1000 hidden lg:block" aria-hidden="true">
            {/* Card Container */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-[8px] border-white/5 bg-stone-900 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Image Element */}
              <div className="relative h-[600px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-stone-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop"
                  alt="Barber Cutting Hair"
                  className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              
              {/* Floating Content Card */}
              <div className="absolute bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 border-brand-500 z-20 max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-brand-500" aria-label="5 out of 5 stars">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Student Reviews</span>
                </div>
                <p className="text-stone-800 font-medium text-base italic leading-snug">"The instructors don't just teach you how to cut; they teach you how to build a brand."</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-10 w-10 rounded-full bg-stone-200 overflow-hidden ring-2 ring-stone-100">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Student Marcus T." className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-xs font-bold uppercase tracking-wider">Marcus T.</p>
                    <p className="text-stone-500 text-[10px]">Class of '23</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-brand-500/20 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;