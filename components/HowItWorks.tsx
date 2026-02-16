
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '1', title: 'Book Online', desc: 'Choose a same-day or future time slot.' },
    { num: '2', title: 'Deep Clean', desc: 'We remove all lint using rotary brushes.' },
    { num: '3', title: 'Pro Test', desc: 'We measure airflow to ensure 100% efficiency.' },
    { num: '4', title: 'Enjoy', desc: 'Safe home and faster drying times instantly.' }
  ];

  return (
    <section className="py-24 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">How It Works</h2>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-0"></div>
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
              <div className="size-24 rounded-full bg-white border-4 border-primary flex items-center justify-center text-3xl font-black text-primary mb-6 shadow-xl">
                {s.num}
              </div>
              <h4 className="font-bold mb-2">{s.title}</h4>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
