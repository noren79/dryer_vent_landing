
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How often should I have my dryer vent cleaned?",
      a: "Recommended every 12 months for average households to maintain peak efficiency and safety. Households with large families or frequent laundry use may require more frequent cleanings."
    },
    {
      q: "How long does a professional cleaning take?",
      a: "Typically 45 to 60 minutes. This includes our full inspection, rotary brush cleaning, and airflow testing to ensure your system is running perfectly before we leave."
    },
    {
      q: "Can a clogged vent really cause a house fire?",
      a: "Yes, lint is highly flammable and is a leading cause of home fires in the U.S. When airflow is restricted, heat builds up in the dryer and can ignite the lint trapped in the venting system."
    },
    {
      q: "Will cleaning my vent lower my electricity bill?",
      a: "Yes, by reducing drying time and improving efficiency. When your dryer doesn't have to work against back-pressure, it runs for shorter cycles and consumes significantly less power."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="faq">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Frequently Asked Questions</h2>
        <p className="text-slate-500">Everything you need to know about professional vent maintenance.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:border-primary/30">
            <button 
              className="w-full flex items-center justify-between p-6 cursor-pointer group text-left" 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className={`font-bold text-lg transition-colors pr-8 ${openIndex === i ? 'text-primary' : 'group-hover:text-primary'}`}>{faq.q}</span>
              <span className={`material-symbols-outlined text-primary font-bold transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-[200px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
