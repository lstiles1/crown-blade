import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import CoursesPage from './components/CoursesPage';
import StudentWorkPage from './components/StudentWorkPage';
import AcademyPage from './components/AcademyPage';
import { Service, BusinessConfig, View } from './types';
import { Award, Users, Clock, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';

// Mock Data
const businessConfig: BusinessConfig = {
  name: "Crown & Blade Academy",
  industry: "Barber Academy",
  about: "Crown & Blade Academy is the premier institution for barbering excellence. We combine old-school tradition with modern techniques to train the next generation of top-tier barbers.",
  services: [
    {
      id: "1",
      title: "Barbering 101",
      description: "The foundation. Learn hygiene, tool handling, and basic cuts. Perfect for beginners with zero experience.",
      price: "$2,500",
      duration: "4 Weeks",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "2",
      title: "Master Barber Certification",
      description: "Our comprehensive 6-month program covering fading, shaving, business management, and state board prep.",
      price: "$12,000",
      duration: "6 Months",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "3",
      title: "Advanced Fades & Designs",
      description: "A weekend intensive for licensed barbers looking to upskill their fading techniques and portrait work.",
      price: "$850",
      duration: "2 Days",
      image: "https://images.unsplash.com/photo-1593702295094-aea22597af65?w=800&auto=format&fit=crop&q=60"
    }
  ]
};

const App: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-brand-200 selection:text-brand-900">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="absolute -top-12 left-0 bg-brand-600 text-white px-4 py-2 z-50 focus:top-0 transition-all rounded-br-sm font-semibold"
      >
        Skip to main content
      </a>
      
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      
      <main id="main-content" tabIndex={-1}>
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            
            {/* Enhanced Value Proposition Strip */}
            <div className="bg-stone-900 text-stone-300 py-16 border-y border-stone-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between text-center gap-10 relative z-10">
                <div className="flex-1 flex flex-col items-center group">
                  <div className="mb-4 bg-stone-800 p-4 rounded-full group-hover:bg-stone-700 transition-colors">
                    <Award className="h-8 w-8 text-brand-500" />
                  </div>
                  <p className="text-4xl font-serif font-bold text-white mb-2 group-hover:scale-110 transition-transform">98%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-brand-500 transition-colors">Licensure Rate</p>
                </div>
                <div className="w-px bg-stone-800 hidden md:block"></div>
                <div className="flex-1 flex flex-col items-center group">
                  <div className="mb-4 bg-stone-800 p-4 rounded-full group-hover:bg-stone-700 transition-colors">
                    <Users className="h-8 w-8 text-brand-500" />
                  </div>
                  <p className="text-4xl font-serif font-bold text-white mb-2 group-hover:scale-110 transition-transform">500+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-brand-500 transition-colors">Graduates Hired</p>
                </div>
                <div className="w-px bg-stone-800 hidden md:block"></div>
                <div className="flex-1 flex flex-col items-center group">
                   <div className="mb-4 bg-stone-800 p-4 rounded-full group-hover:bg-stone-700 transition-colors">
                    <Clock className="h-8 w-8 text-brand-500" />
                  </div>
                  <p className="text-4xl font-serif font-bold text-white mb-2 group-hover:scale-110 transition-transform">10k+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-brand-500 transition-colors">Hours of Training</p>
                </div>
              </div>
            </div>

            <Services 
              services={businessConfig.services} 
              onSelectService={handleSelectService} 
              onNavigate={handleNavigate}
            />
            
            <div id="about" className="py-24 bg-white border-t border-stone-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1 relative group">
                    <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-500 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1532710093739-9470acff878f?w=800&auto=format&fit=crop&q=60" 
                      alt="Founder" 
                      className="relative z-10 shadow-xl w-full object-cover h-[600px] sepia-[20%] group-hover:sepia-0 transition-all duration-700"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Our Philosophy</h2>
                    <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">More Than Just a Haircut</h3>
                    <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                      Crown & Blade was founded on the belief that barbering is an art form that deserves respect. We don't just teach you how to pass the state board; we teach you how to build a loyal clientele and run a profitable business.
                    </p>
                    <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                      Our academy replicates a high-end shop environment, so when you graduate, you don't just have a license—you have experience.
                    </p>
                    <div className="border-l-4 border-brand-500 pl-6 py-2 italic text-stone-800 text-xl font-serif bg-stone-50 rounded-r-md">
                      "Excellence is in the details. We train your eyes as much as your hands."
                    </div>
                    <div className="mt-8">
                       <button 
                        onClick={() => handleNavigate('academy')}
                        className="text-brand-600 font-bold hover:text-brand-800 transition-colors border-b-2 border-brand-200 hover:border-brand-600 pb-1"
                       >
                         Learn more about our academy
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Testimonials onNavigate={handleNavigate} />
            
            <BookingForm 
              selectedServiceId={selectedServiceId} 
              services={businessConfig.services}
            />
          </>
        )}

        {currentView === 'courses' && <CoursesPage onNavigate={handleNavigate} />}
        {currentView === 'work' && <StudentWorkPage onNavigate={handleNavigate} />}
        {currentView === 'academy' && <AcademyPage onNavigate={handleNavigate} />}
      </main>

      <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-white tracking-tight mb-6">Crown & Blade</h2>
              <p className="text-stone-500 max-w-sm mb-6">
                The leading destination for premium barber education. Empowering the next generation of master barbers.
              </p>
              <div className="flex gap-4">
                 <a href="#" aria-label="Follow us on Instagram" className="p-2 bg-stone-900 rounded-full hover:bg-brand-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950"><Instagram className="h-5 w-5" aria-hidden="true" /></a>
                 <a href="#" aria-label="Subscribe to our YouTube channel" className="p-2 bg-stone-900 rounded-full hover:bg-brand-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950"><Youtube className="h-5 w-5" aria-hidden="true" /></a>
                 <a href="#" aria-label="Like us on Facebook" className="p-2 bg-stone-900 rounded-full hover:bg-brand-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950"><Facebook className="h-5 w-5" aria-hidden="true" /></a>
              </div>
            </div>
            <nav aria-label="Footer navigation">
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => handleNavigate('courses')} className="hover:text-brand-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-md px-2 py-1 font-medium">Courses</button></li>
                <li><button onClick={() => handleNavigate('academy')} className="hover:text-brand-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-md px-2 py-1 font-medium">Academy Info</button></li>
                <li><button onClick={() => handleNavigate('work')} className="hover:text-brand-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-md px-2 py-1 font-medium">Student Work</button></li>
                <li><button onClick={() => { handleNavigate('home'); setTimeout(() => document.getElementById('book')?.scrollIntoView(), 100);}} className="hover:text-brand-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-md px-2 py-1 font-medium">Apply Now</button></li>
              </ul>
            </nav>
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">Visit Us</h4>
              <address className="not-italic flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p>123 Blade Avenue,<br/>Design District, NY 10012</p>
              </address>
            </div>
          </div>
          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">© 2025 Crown & Blade Academy. Licensed by State Board of Cosmetology.</p>
            <nav aria-label="Footer legal links" className="flex gap-6 text-xs">
              <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-md px-2 py-1">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-stone-950 rounded-md px-2 py-1">Terms of Service</a>
            </nav>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
};

export default App;