
import React from 'react';

const WarningSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-1 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-red-50 p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-8 uppercase tracking-widest text-sm">
              <span className="material-symbols-outlined">warning</span>
              The Warning Signs
            </div>
            <h3 className="text-3xl font-black mb-8">Is your vent a ticking time bomb?</h3>
            <ul className="space-y-6">
              {[
                "Clothes take multiple cycles to dry",
                "Dryer is extremely hot to the touch",
                "Laundry room is unusually humid",
                "Musty smell on freshly dried clothes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-500 mt-1">error</span>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary p-12 lg:p-16 text-white">
            <div className="inline-flex items-center gap-2 text-white/80 font-bold mb-8 uppercase tracking-widest text-sm">
              <span className="material-symbols-outlined">task_alt</span>
              The Expert Solution
            </div>
            <h3 className="text-3xl font-black mb-8">Professional Deep Cleaning</h3>
            <ul className="space-y-6">
              {[
                "Same-day inspection & full debris removal",
                "Rotary brush deep-clean technology",
                "Airflow testing & optimization report",
                "Peace of mind for you and your family"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-white mt-1">check_circle</span>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-12 bg-white text-primary px-8 py-4 rounded-full font-black text-lg hover:bg-slate-100 transition-colors w-full sm:w-auto">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningSolution;
