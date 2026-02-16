
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg text-white">
            <span className="material-symbols-outlined">wind_power</span>
          </div>
          <span className="text-xl font-black tracking-tight uppercase">BocaVent<span className="text-primary">Clean</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a className="hover:text-primary transition-colors" href="#services">Services</a>
          <a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-primary transition-colors" href="#quiz">Safety Quiz</a>
          <a className="hover:text-primary transition-colors" href="#reviews">Reviews</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-[20px]">call</span>
            (561) 555-0123
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
