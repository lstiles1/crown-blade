import React from 'react';
import { Service, View } from '../types';
import { Clock, Award, ChevronRight } from 'lucide-react';

interface ServicesProps {
  services: Service[];
  onSelectService: (serviceId: string) => void;
  onNavigate: (view: View) => void;
}

const Services: React.FC<ServicesProps> = ({ services, onSelectService, onNavigate }) => {
  return (
    <section id="services" className="py-24 bg-white" aria-label="Our Courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Professional Training</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Choose Your Path</h3>
          <p className="text-stone-600 text-lg">Whether you're starting from scratch or looking to master advanced techniques, our curriculum is designed to make you shop-ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`relative group flex flex-col transition-all duration-300 ${
                index === 1 
                  ? 'bg-stone-50 border-stone-200 shadow-[0_0_40px_rgba(180,83,9,0.15)] scale-105 z-10' 
                  : 'bg-white border-stone-200 hover:shadow-xl hover:-translate-y-1'
              } border rounded-sm overflow-hidden`}
            >
              {index === 1 && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 z-30"></div>
              )}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-brand-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider z-20 shadow-lg rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all z-10"></div>
                 <div className="absolute top-4 right-4 z-20">
                   {index === 1 && (
                      <span className="bg-stone-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wide">
                        Best Value
                      </span>
                   )}
                 </div>
                 <img src={service.image} alt="" role="presentation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"/>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">{service.title}</h4>
                <div className="flex items-baseline mb-6 border-b border-stone-200 pb-4">
                  <span className="text-3xl font-bold text-brand-600">{service.price}</span>
                  <span className="text-stone-500 ml-2 text-sm font-medium">/ tuition</span>
                </div>
                
                <div className="flex items-center text-stone-500 mb-6 text-sm font-medium">
                  <Clock className="h-4 w-4 mr-2 text-brand-500" aria-hidden="true" />
                  <span className="sr-only">Duration:</span>
                  {service.duration}
                  <span className="mx-2 text-stone-300" aria-hidden="true">|</span>
                  <Award className="h-4 w-4 mr-2 text-brand-500" aria-hidden="true" />
                  Certificate Included
                </div>

                <p className="text-stone-600 mb-8 flex-grow leading-relaxed text-sm">{service.description}</p>

                <button
                  onClick={() => {
                    onSelectService(service.id);
                    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label={`Enroll in ${service.title}`}
                  className={`w-full py-4 px-6 font-bold uppercase tracking-wide text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 flex items-center justify-center gap-2 ${
                    index === 1 
                      ? 'bg-stone-900 text-white hover:bg-brand-600 shadow-lg' 
                      : 'bg-white border border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  Enroll Now
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 transition-colors border-b-2 border-brand-200 hover:border-brand-600 pb-1"
          >
            View Full Curriculum Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;