
import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [selections, setSelections] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const options = [
    { id: 'cycles', label: 'Multiple cycles to dry' },
    { id: 'hot', label: 'Hot dryer exterior' },
    { id: 'smell', label: 'Burning smell' },
    { id: 'error', label: 'Error codes on screen' }
  ];

  const toggleOption = (id: string) => {
    setSelections(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const calculateResult = () => {
    if (selections.length === 0) {
      setResult("You're likely in good shape, but an annual check is recommended!");
    } else if (selections.length >= 2 || selections.includes('smell')) {
      setResult("Immediate Action Recommended: Premium Safety Clean is best for your situation.");
    } else {
      setResult("Basic Clean should resolve your current minor issues.");
    }
  };

  return (
    <section className="py-24 bg-white" id="quiz">
      <div className="max-w-4xl mx-auto px-6 p-12 bg-background-light rounded-xl border border-slate-200 shadow-inner">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">quiz</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Find Out Which Package You Need</h3>
              <p className="text-slate-500 text-sm">Take our 10-second safety quiz for a custom recommendation.</p>
            </div>
          </div>
        </div>
        
        {!result ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map(opt => (
              <label 
                key={opt.id} 
                className={`p-4 rounded-xl border-2 bg-white cursor-pointer hover:border-primary transition-all flex items-center gap-4 group ${selections.includes(opt.id) ? 'border-primary' : 'border-white'}`}
              >
                <input 
                  className="rounded text-primary focus:ring-primary h-5 w-5" 
                  type="checkbox" 
                  checked={selections.includes(opt.id)}
                  onChange={() => toggleOption(opt.id)}
                />
                <span className="font-medium group-hover:text-primary transition-colors">{opt.label}</span>
              </label>
            ))}
            <button 
              onClick={calculateResult}
              className="mt-8 col-span-full py-4 bg-slate-900 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              Calculate Result
            </button>
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-xl border-2 border-primary animate-pulse">
            <h4 className="text-xl font-black mb-4 text-primary">Result:</h4>
            <p className="text-lg font-bold mb-6">{result}</p>
            <button 
              onClick={() => setResult(null)}
              className="text-primary font-bold hover:underline"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
