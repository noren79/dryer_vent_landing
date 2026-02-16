
import React from 'react';

const ServiceArea: React.FC = () => {
  const locations = ["Boca Raton", "Delray Beach", "Highland Beach", "Deerfield Beach", "Parkland", "Coconut Creek"];

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6">Service Area</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">We proudly serve all of Southern Palm Beach County. If you live in these areas, we can likely provide same-day service.</p>
            <div className="grid grid-cols-2 gap-4">
              {locations.map(loc => (
                <div key={loc} className="flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {loc}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[400px] border border-slate-200 shadow-xl relative bg-white">
            <img 
              alt="Map area" 
              className="w-full h-full object-cover opacity-60 contrast-125" 
              src="https://picsum.photos/800/600?map"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-slate-200 text-center">
                    <span className="material-symbols-outlined text-primary text-4xl block mb-2">map</span>
                    <span className="font-black text-slate-800">Boca Raton & Surrounding</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
