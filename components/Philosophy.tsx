
import React from 'react';

const NOTES = [
  {
    title: 'মালিকানা বনাম মুক্তি',
    content: 'প্রেম মানে কাউকে নিজের করে নেওয়া নয়, বরং কারো কাছে নিজেকে সম্পূর্ণ বিলীন করে দেওয়ার সাহস রাখা। অধিকার যেখানে শেষ হয়, মায়া সেখানে ডানা মেলে',
    tag: 'Law 01'
  },
  {
    title: 'ইমোজির ভিড়ে আবেগ',
    content: 'আমরা এমন এক যুগে বাস করছি যেখানে নীল বাতির স্ক্রিন হৃদয়ের চেয়েও বেশি উজ্জ্বল। আমরা ইমোজিতে ভালোবাসা পাঠাই, কিন্তু চোখের ভাষা পড়তে ভুলে গেছি',
    tag: 'Law 19'
  },
  {
    title: 'অপেক্ষার রাজকীয় দহন',
    content: 'সব প্রাপ্তিতে পূর্ণতা থাকে না। কিছু না-পাওয়া আর আজীবন অপেক্ষার মাঝেও এক রাজকীয় আভিজাত্য থাকে। অপেক্ষাই প্রেমের শ্রেষ্ঠতম পরীক্ষা',
    tag: 'Law 33'
  },
  {
    title: 'ক্ষত যখন অলঙ্কার',
    content: 'ভালোবাসায় পাওয়া আঘাতগুলো কোনো কলঙ্ক নয়, বরং সেগুলো আপনার অভিজ্ঞতার সোনার মেডেল। যে পুড়ে নি, সে কোনোদিন সোনার মূল্য বোঝে নি',
    tag: 'Law 41'
  }
];

export const Philosophy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 space-y-4 reveal">
        <span className="text-[#bf953f] font-serif-luxury italic tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs">The Divine Wisdom</span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bengali font-bold mt-2 md:mt-4 mb-4 md:mb-6 leading-tight">হৃদয়ের <span className="gold-gradient">গূঢ় দর্শন</span></h2>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <div className="h-[1px] bg-[#bf953f]/30 draw-line max-w-[48px] md:max-w-[64px]"></div>
          <p className="text-gray-400 font-bengali italic text-base md:text-lg">আশিকুজ্জামান এমকে-র চিন্তার কিছু শ্রেষ্ঠ নির্যাস</p>
          <div className="h-[1px] bg-[#bf953f]/30 draw-line max-w-[48px] md:max-w-[64px]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
        {NOTES.map((note, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 md:p-12 glass-effect border-white/5 hover:border-[#bf953f]/40 transition-all duration-1000 overflow-hidden reveal"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-[0.05] pointer-events-none group-hover:opacity-20 transition-opacity duration-1000">
               <span className="text-7xl md:text-[120px] font-serif-luxury italic leading-none">{note.tag.split(' ')[1]}</span>
            </div>
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="space-y-1">
                 <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#bf953f] font-bold block">{note.tag}</span>
                 <div className="h-[2px] w-6 md:w-8 bg-[#bf953f] rounded-full"></div>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bengali font-bold text-white group-hover:text-[#bf953f] transition-colors leading-tight">
                {note.title}
              </h3>
              
              <p className="text-gray-400 font-bengali text-lg md:text-xl leading-relaxed italic group-hover:text-gray-200 transition-colors">
                "{note.content}"
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 md:mt-32 py-12 md:py-20 relative overflow-hidden reveal">
        <div className="absolute inset-0 bg-white/[0.01] rounded-2xl md:rounded-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8 md:space-y-10 px-4 md:px-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto border border-[#bf953f]/30 flex items-center justify-center rotate-45 group hover:rotate-0 transition-all duration-1000">
             <span className="text-[#bf953f] text-2xl md:text-3xl font-bold -rotate-45 group-hover:rotate-0 transition-all duration-1000">অ</span>
          </div>
          <p className="text-white font-bengali text-2xl sm:text-3xl md:text-4xl leading-snug italic font-light">
            "ভালোবাসা হলো মাটির প্রদীপ, যা ঝড়ের মধ্যেও কেবল দুই হাতের তালু দিয়ে আগলে রাখতে হয়। কোনো স্বার্থ নয়, কেবল সমর্পণই এর সার্থকতা"
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
             <div className="h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent draw-line w-20 md:w-24"></div>
             <p className="text-gray-500 font-serif-luxury tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs">A Sacred Law from the Heart</p>
          </div>
        </div>
      </div>
    </div>
  );
};
