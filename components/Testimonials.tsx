import React from 'react';
import { Quote, ChevronRight } from 'lucide-react';
import { View } from '../types';

interface TestimonialsProps {
  onNavigate?: (view: View) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  const testimonials = [
    {
      id: 1,
      name: "Darius Miller",
      role: "Owner, Miller's Cuts",
      text: "The business module of the Master Barber course changed everything for me. I opened my own shop 6 months after graduating.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Class of 2023",
      text: "I was intimidated holding clippers for the first time. The instructors are patient, strict on quality, and incredibly supportive.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Mike Ross",
      role: "Master Barber",
      text: "The Advanced Fades workshop gave me the confidence to charge premium prices. The ROI on this tuition is insane.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Success Stories</h2>
          <p className="text-stone-400">Join 500+ graduates who have successfully launched their careers.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-stone-800 p-8 rounded-sm shadow-xl border-t-4 border-brand-500 flex flex-col hover:transform hover:-translate-y-2 transition-transform duration-300">
              <Quote className="h-8 w-8 text-stone-600 mb-6" />
              <p className="text-stone-300 mb-6 italic leading-relaxed flex-grow">"{t.text}"</p>
              <div className="flex items-center pt-6 border-t border-stone-700">
                <div className="relative shrink-0">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="h-16 w-16 rounded-full object-cover mr-4 ring-2 ring-brand-500/50 shadow-md" 
                  />
                  <div className="absolute bottom-0 right-4 h-3 w-3 bg-green-500 border-2 border-stone-800 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-brand-500 text-xs uppercase tracking-wide font-bold mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {onNavigate && (
          <div className="text-center">
            <button 
              onClick={() => onNavigate('work')}
              className="inline-flex items-center text-white border-b border-stone-600 pb-1 hover:text-brand-500 hover:border-brand-500 transition-colors"
            >
              See more student work in our gallery
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;