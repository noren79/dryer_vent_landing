
import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah J.',
      location: 'Boca West',
      text: '"They came out the same day. My dryer was taking two cycles and now it\'s like new. Professional and clean!"',
      img: 'https://picsum.photos/100/100?face1'
    },
    {
      name: 'Michael R.',
      location: 'Delray Beach',
      text: '"I didn\'t realize how much lint was in my walls. They showed me photos and it was terrifying. Definitely a safety must."',
      img: 'https://picsum.photos/100/100?face2'
    },
    {
      name: 'David L.',
      location: 'Highland Beach',
      text: '"Professional, on-time, and fair pricing. The rotary brush made a huge difference compared to my old vacuum."',
      img: 'https://picsum.photos/100/100?face3'
    }
  ];

  return (
    <section className="py-24 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black mb-4">Happy Boca Locals</h2>
            <p className="text-slate-500">Join 1,000+ neighbors who trust BocaVent Clean.</p>
          </div>
          <div className="flex items-center gap-2 bg-background-light px-4 py-2 rounded-lg">
            <span className="font-black text-primary text-xl">4.9/5</span>
            <div className="flex text-yellow-400">
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
            </div>
            <span className="text-slate-400 text-sm">(842 Reviews)</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-xl bg-background-light shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined fill-1 text-sm">star</span>)}
              </div>
              <p className="italic mb-6 text-slate-600">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                  <img alt={r.name} className="w-full h-full object-cover" src={r.img}/>
                </div>
                <div>
                  <div className="font-bold text-sm">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
