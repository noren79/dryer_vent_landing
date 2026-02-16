
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-white">
                <span className="material-symbols-outlined">wind_power</span>
              </div>
              <span className="text-xl font-black tracking-tight uppercase">BocaVent<span className="text-primary">Clean</span></span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Boca Raton's #1 rated dryer vent cleaning company. Keeping homes safe since 2012.</p>
            <div className="flex gap-4">
              <button className="size-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
            </div>
          </div>
          
          <div>
            <h5 className="font-black mb-6 uppercase tracking-widest text-xs">Our Services</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Residential Cleaning</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Commercial Vents</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Bird Guard Installation</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Repair & Replacement</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Pricing Guide</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Safety Quiz</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Reviews</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black mb-6 uppercase tracking-widest text-xs">Contact Us</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">location_on</span> 123 Glades Rd, Boca Raton, FL</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">call</span> (561) 555-0123</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[18px]">mail</span> info@bocaventclean.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">© 2024 BocaVent Clean. All rights reserved.</p>
          <div className="flex gap-4 opacity-50 grayscale">
            <span className="material-symbols-outlined">payments</span>
            <span className="material-symbols-outlined">credit_card</span>
            <span className="material-symbols-outlined">contactless</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
