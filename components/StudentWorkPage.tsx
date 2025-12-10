import React from 'react';
import { ChevronRight } from 'lucide-react';

interface StudentWorkPageProps {
  onNavigate: (view: 'home' | 'courses' | 'work' | 'academy') => void;
}

const StudentWorkPage: React.FC<StudentWorkPageProps> = ({ onNavigate }) => {
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=800&auto=format&fit=crop", type: "Fade", student: "Marcus T." },
    { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop", type: "Beard Trim", student: "Sarah J." },
    { src: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=800&auto=format&fit=crop", type: "Classic Cut", student: "David R." },
    { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", type: "Shave", student: "Alex M." },
    { src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=800&auto=format&fit=crop", type: "Styling", student: "Jessica K." },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", type: "Texture", student: "Sarah J." }
  ];

  return (
    <div className="bg-stone-900 min-h-screen text-white animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Student Work</h1>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg">
          The proof is in the cut. Browse the gallery of work created by our current students and recent graduates.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm bg-stone-800 shadow-xl border border-stone-800 hover:border-brand-500/50 transition-all duration-300">
              <img 
                src={img.src} 
                alt={`${img.type} by ${img.student}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-2 py-1 bg-brand-600 text-[10px] font-bold uppercase tracking-wider text-white mb-2 rounded-sm">
                  {img.type}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="font-serif font-bold text-xl text-white">by {img.student}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / CTA */}
        <div className="mt-20 text-center">
           <button 
             onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  const el = document.getElementById('book');
                  if(el) el.scrollIntoView({behavior: 'smooth'});
                }, 100);
             }}
             className="inline-flex items-center px-8 py-4 bg-white text-stone-900 font-bold rounded-sm hover:bg-stone-200 transition-all"
           >
             Book Your Own Chair
             <ChevronRight className="ml-2 h-5 w-5" />
           </button>
        </div>
      </div>

    </div>
  );
};

export default StudentWorkPage;