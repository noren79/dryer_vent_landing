
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WarningSolution from './components/WarningSolution';
import Pricing from './components/Pricing';
import Quiz from './components/Quiz';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ServiceArea from './components/ServiceArea';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WarningSolution />
        <Pricing />
        <Quiz />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <FAQ />
        <ServiceArea />
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready for Faster Drying and a Safer Home?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-6 bg-white text-primary rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
                Book Your Same-Day Service
              </button>
              <button className="px-12 py-6 bg-transparent border-2 border-white/50 hover:border-white rounded-full font-black text-xl transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">call</span>
                (561) 555-0123
              </button>
            </div>
            <p className="mt-8 text-white/70 font-medium text-sm">Licensed, Insured, and Bonded. Serving Boca Raton Since 2012.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
