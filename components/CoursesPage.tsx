import React from 'react';
import { BookOpen, Clock, Calendar, CheckCircle, Scissors, Award, Briefcase, ChevronRight } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (view: 'home' | 'courses' | 'work') => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  const modules = [
    {
      title: "Module 1: Foundations",
      weeks: "Weeks 1-4",
      topics: ["History of Barbering", "Hygiene & Bacteriology", "Tool Handling & Maintenance", "Draping & Client Protection"]
    },
    {
      title: "Module 2: The Art of Cutting",
      weeks: "Weeks 5-12",
      topics: ["Clipper Over Comb", "Scissor Over Comb", "Fading & Tapering", "Shear Techniques", "Texturizing"]
    },
    {
      title: "Module 3: Shaving & Facial Care",
      weeks: "Weeks 13-16",
      topics: ["Hot Towel Procedures", "Straight Razor Shaving", "Beard Sculpting", "Facials & Massage", "Skin Analysis"]
    },
    {
      title: "Module 4: Chemical Services",
      weeks: "Weeks 17-20",
      topics: ["Color Theory", "Hair Coloring Application", "Chemical Relaxers", "Perm Wrapping"]
    },
    {
      title: "Module 5: Business & Branding",
      weeks: "Weeks 21-24",
      topics: ["Shop Management", "Personal Branding", "Social Media Marketing", "State Board Prep", "Portfolio Building"]
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b7f304?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Master Barber Curriculum</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">A comprehensive, 1500-hour state board certified program designed to take you from novice to professional.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Program Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 -mt-24 relative z-20">
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-500">
            <Clock className="h-10 w-10 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Full-Time Schedule</h3>
            <p className="text-stone-600 mb-4">Mon - Fri, 9:00 AM - 4:00 PM</p>
            <p className="text-sm text-stone-500">Complete your hours in as little as 10 months with our accelerated track.</p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-500">
            <Scissors className="h-10 w-10 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Student Kit</h3>
            <p className="text-stone-600 mb-4">Valued at $1,200</p>
            <p className="text-sm text-stone-500">Includes Wahl Seniors, Andis T-Outliners, Japanese Shears, Mannequins, and Carrying Case.</p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-500">
            <Briefcase className="h-10 w-10 text-brand-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Career Placement</h3>
            <p className="text-stone-600 mb-4">98% Placement Rate</p>
            <p className="text-sm text-stone-500">We partner with top barbershops in the city to ensure you have a chair waiting for you.</p>
          </div>
        </div>

        {/* Detailed Syllabus */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Course Breakdown</h2>
            <div className="space-y-6">
              {modules.map((mod, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-stone-100 px-6 py-4 flex justify-between items-center border-b border-stone-200">
                    <h3 className="font-bold text-lg text-stone-800">{mod.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{mod.weeks}</span>
                  </div>
                  <div className="p-6">
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {mod.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                          <CheckCircle className="h-4 w-4 text-brand-500 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-stone-900 text-white p-8 rounded-sm shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-2">Tuition & Aid</h3>
              <p className="text-stone-400 text-sm mb-6">Invest in your future. Multiple payment plans available.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-end border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Total Tuition</span>
                  <span className="text-2xl font-bold text-brand-500">$12,000</span>
                </div>
                <div className="flex justify-between items-end border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Kit Fee</span>
                  <span className="text-xl font-bold text-white">Included</span>
                </div>
                <div className="flex justify-between items-end border-b border-stone-800 pb-2">
                  <span className="text-stone-300">Registration</span>
                  <span className="text-xl font-bold text-white">$150</span>
                </div>
              </div>

              <div className="bg-stone-800 p-4 rounded mb-6">
                <p className="text-xs text-stone-400 leading-relaxed">
                  * Monthly payment plans starting at $500/mo.
                  <br/>* VA Benefits & GI Bill Accepted.
                  <br/>* Merit-based scholarships available.
                </p>
              </div>

              <a 
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('book');
                    if(el) el.scrollIntoView({behavior: 'smooth'});
                  }, 100);
                }}
                className="block w-full text-center bg-brand-600 text-white font-bold py-4 rounded-sm hover:bg-brand-500 transition-colors"
              >
                Apply for Financial Aid
              </a>
            </div>

            <div className="bg-white p-6 border border-stone-200 rounded-sm">
               <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                 <Award className="h-5 w-5 text-brand-600" />
                 Certification
               </h4>
               <p className="text-sm text-stone-600 leading-relaxed">
                 Upon graduation, you will be prepared to sit for the State Barber Board Examination. Our alumni have a 98% pass rate on their first attempt.
               </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-20 bg-brand-50 border border-brand-100 rounded-sm p-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Ready to start your journey?</h2>
            <p className="text-stone-600 mb-8 max-w-2xl mx-auto">Classes start the first Monday of every month. Spots are limited to ensure personalized instruction.</p>
            <button 
               onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  const el = document.getElementById('book');
                  if(el) el.scrollIntoView({behavior: 'smooth'});
                }, 100);
              }}
              className="inline-flex items-center px-8 py-4 bg-stone-900 text-white font-bold rounded-sm hover:bg-stone-800 transition-all"
            >
              Start Application
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default CoursesPage;