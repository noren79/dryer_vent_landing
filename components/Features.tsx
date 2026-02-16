
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'shield_with_heart',
      title: 'Fire Risk Reduction',
      desc: '90% of appliance fires start in the dryer vent. We eliminate the fuel source before it ignites.'
    },
    {
      icon: 'speed',
      title: 'Faster Drying',
      desc: 'Get your clothes dry in a single cycle. Save hours of time every week on your laundry routine.'
    },
    {
      icon: 'payments',
      title: 'Lower Energy Bills',
      desc: 'A clean vent allows your dryer to run shorter cycles, cutting monthly utility costs by up to 30%.'
    }
  ];

  return (
    <section className="py-24 bg-background-light" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">Why Professional Cleaning Matters</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Our specialized high-pressure equipment removes lint buildup that causes fires and wastes energy.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-xl bg-white border border-transparent hover:border-primary/20 transition-all group shadow-sm">
            <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">{f.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
