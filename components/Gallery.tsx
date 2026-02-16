
import React from 'react';

const Gallery: React.FC = () => {
  const cases = [
    { 
      label: 'Clogged Exterior Vent', 
      before: 'https://picsum.photos/400/500?vent1', 
      after: 'https://picsum.photos/400/500?clean1' 
    },
    { 
      label: 'Lint-Packed Interior Duct', 
      before: 'https://picsum.photos/400/500?vent2', 
      after: 'https://picsum.photos/400/500?clean2' 
    },
    { 
      label: 'Bird Nest Blockage', 
      before: 'https://picsum.photos/400/500?vent3', 
      after: 'https://picsum.photos/400/500?clean3' 
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Real Results for Boca Raton Homeowners</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">See the difference a professional rotary brush cleaning makes for your home's safety and efficiency.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="group">
              <div className="flex flex-col gap-2 p-2 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                <div className="flex gap-1 overflow-hidden rounded-xl">
                  <div className="relative w-1/2 aspect-[4/5]">
                    <img alt="Before" className="w-full h-full object-cover" src={c.before}/>
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">Before</div>
                  </div>
                  <div className="relative w-1/2 aspect-[4/5]">
                    <img alt="After" className="w-full h-full object-cover" src={c.after}/>
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">After</div>
                  </div>
                </div>
                <div className="px-3 py-2 text-center">
                  <span className="font-bold text-sm text-slate-700">{c.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
