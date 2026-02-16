
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-sm">verified</span>
            Same-Day Service Available
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Dryer Vent Cleaning in <span className="text-primary">Boca Raton</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Protect your home from fire risks and boost dryer efficiency with our professional cleaning services. Licensed & Insured. 5-Star Service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="px-10 py-5 bg-primary text-white rounded-full font-black text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all">
              Book Your Cleaning
            </button>
            <button className="px-10 py-5 bg-white border-2 border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary">call</span>
              Call (561) 555-0123
            </button>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
              <span className="font-bold text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <span className="font-bold text-sm">5-Star Service</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
            <img 
              alt="Modern clean laundry room with dryer" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/800/800?laundry"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
            <div className="size-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined scale-125">local_fire_department</span>
            </div>
            <div>
              <div className="text-2xl font-black">2,900+</div>
              <div className="text-sm text-slate-500">Yearly Dryer Fires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
