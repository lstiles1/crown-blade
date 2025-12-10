import React from 'react';
import { Users, Target, Shield, ChevronRight, Star } from 'lucide-react';

interface AcademyPageProps {
  onNavigate: (view: 'home' | 'courses' | 'work' | 'academy') => void;
}

const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="relative bg-stone-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1503951914875-452162b7f304?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Barber Shop Interior" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">The Crown Standard</h1>
          <p className="text-xl text-stone-300 max-w-2xl leading-relaxed">
            We don't just teach you how to cut hair. We teach you the discipline, the culture, and the business of modern barbering.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Our Philosophy</h2>
          <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">Tradition Meets Innovation</h3>
          <p className="text-stone-600 text-lg leading-relaxed">
            Crown & Blade was founded to bridge the gap between old-school barbershops and high-end salons. Our students graduate with the technical skills of a master barber and the service mentality of a luxury stylist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-sm border border-stone-100 hover:shadow-lg transition-shadow">
            <div className="bg-stone-900 p-4 rounded-full mb-6 text-brand-500">
              <Shield className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold mb-3">Integrity</h4>
            <p className="text-stone-500 text-sm leading-relaxed">We honor the history of the trade. Every cut is performed with respect for the craft and the client.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-sm border border-stone-100 hover:shadow-lg transition-shadow">
            <div className="bg-stone-900 p-4 rounded-full mb-6 text-brand-500">
              <Target className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold mb-3">Precision</h4>
            <p className="text-stone-500 text-sm leading-relaxed">Good enough is not enough. We train your eyes to see the details others miss.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-sm border border-stone-100 hover:shadow-lg transition-shadow">
            <div className="bg-stone-900 p-4 rounded-full mb-6 text-brand-500">
              <Users className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold mb-3">Community</h4>
            <p className="text-stone-500 text-sm leading-relaxed">A barber is a pillar of their community. We teach you how to build lasting relationships.</p>
          </div>
        </div>
      </div>

      {/* Facility / CTA */}
      <div className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
             <h2 className="text-4xl font-serif font-bold text-stone-900">Training in a Real Barbershop</h2>
             <p className="text-stone-600 text-lg">
               Forget sterile classrooms. Our academy is designed to look, feel, and function exactly like a high-end barbershop. You'll work on real clients in real chairs, managing real appointments.
             </p>
             <ul className="space-y-3 pt-4">
               {[
                 "20 Professional Barber Chairs",
                 "Dedicated Theory Classroom",
                 "Retail & Front Desk Station",
                 "Student Lounge & Locker Room"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-stone-800 font-medium">
                   <Star className="h-5 w-5 text-brand-600 fill-brand-600" />
                   {item}
                 </li>
               ))}
             </ul>
             <div className="pt-6">
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('book');
                      if(el) el.scrollIntoView({behavior: 'smooth'});
                    }, 100);
                  }}
                  className="bg-stone-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-brand-600 transition-colors inline-flex items-center"
                >
                  Book a Campus Tour
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
             </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=800&fit=crop" className="rounded-sm shadow-lg translate-y-8" alt="Shop Interior" />
              <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop" className="rounded-sm shadow-lg" alt="Barber Tools" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;