
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-background-light" id="pricing">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">Service Packages</h2>
        <p className="text-slate-500">Transparent pricing. No hidden fees. Just clean, safe vents.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Basic Clean */}
        <div className="p-10 rounded-3xl border-2 border-slate-200 bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-1 uppercase tracking-tight">Basic Clean</h3>
            <p className="text-slate-500 text-sm">Standard maintenance for efficient homes.</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold text-slate-400">Starting at</span>
              <span className="text-5xl font-black text-slate-900">$129</span>
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Included Services:</h4>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-slate-700 font-medium">Rotary brush cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-slate-700 font-medium">Lint trap & transition hose cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-slate-700 font-medium">Airflow test (before & after)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-slate-700 font-medium">Exterior vent cleaning</span>
              </li>
            </ul>
          </div>
          <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-black text-lg hover:bg-primary/5 transition-colors">
            Book This Package
          </button>
        </div>

        {/* Premium Safety Clean */}
        <div className="p-10 rounded-3xl border-4 border-primary bg-white flex flex-col shadow-2xl shadow-primary/20 relative transform md:scale-105 z-10">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest">
            Most Popular & Safest
          </div>
          <div className="mb-8 pt-2">
            <h3 className="text-2xl font-black mb-1 uppercase tracking-tight text-primary">Premium Safety Clean</h3>
            <p className="text-slate-500 text-sm">Comprehensive deep clean and hardware upgrade.</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold text-slate-400">Starting at</span>
              <span className="text-5xl font-black text-slate-900">$199</span>
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Everything in Basic, plus:</h4>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">add_circle</span>
                <span className="text-slate-900 font-bold">Semi-rigid vent upgrade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">add_circle</span>
                <span className="text-slate-900 font-bold">Before & after photos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">add_circle</span>
                <span className="text-slate-900 font-bold">Dryer interior deep clean</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">add_circle</span>
                <span className="text-slate-900 font-bold">1-year satisfaction guarantee</span>
              </li>
            </ul>
          </div>
          <button className="w-full py-4 rounded-full bg-primary text-white font-black text-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
            Book This Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
