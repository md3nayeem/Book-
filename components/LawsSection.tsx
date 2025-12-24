
import React from 'react';

const LAWS = [
  { 
    id: '০১', 
    title: 'ভালোলাগা বনাম ভালোবাসা', 
    desc: 'চোখে যা দেখি তা ভালোলাগা, মনে যা বাঁধে তা মায়া, আর আত্মায় যা মেশে সেটাই ভালোবাসা',
    subtitle: 'THE MIRROR OF EYES'
  },
  { 
    id: '০৫', 
    title: 'দায়বদ্ধতার সৌন্দর্য', 
    desc: 'প্রেম হলো এক আজীবন ম্যারাথন। দায়বদ্ধতা বা "কমিটমেন্ট" কোনো শিকল নয়, বরং এটিই আসল মুক্তি',
    subtitle: 'POWER OF OATHS'
  },
  { 
    id: '০৭', 
    title: 'একতরফা প্রেম', 
    desc: 'সবার ভাগ্যে পাওয়া জোটে না, কিন্তু না পাওয়ার শূন্যতার মাঝেও এক তীব্র রাজকীয় সৌন্দর্য থাকে',
    subtitle: 'SHADOW & SOLITUDE'
  },
  { 
    id: '০৯', 
    title: 'অন্তরঙ্গতার বিভ্রান্তি', 
    desc: 'প্রেমের পদ্ম কামের কাদায় ফোটে, কিন্তু কৃতিত্ব সেখানেই যখন কাদা না মেখে শুধু পদ্মটি তোলা যায়',
    subtitle: 'THIRST VS WORSHIP'
  },
  { 
    id: '১১', 
    title: '১০টি স্বর্ণমালা', 
    desc: 'সত্যিকারের ভালোবাসায় সুখে থাকার জন্য ১০টি ধ্রুবতারা বা স্বর্ণমালা যা আপনার জীবন বদলে দেবে',
    subtitle: 'THE ETERNAL IDEAL'
  },
  { 
    id: '∞', 
    title: 'যাত্রাপথটি এমন', 
    desc: 'ভালোবাসার শেষ এবং সর্বোচ্চ স্তর হলো স্বার্থপরতা থেকে মুক্তি ও আত্মার প্রশান্তি',
    subtitle: 'THE FINAL UNION'
  }
];

interface LawsSectionProps {
  onOpenInfo?: (type: 'laws') => void;
}

export const LawsSection: React.FC<LawsSectionProps> = ({ onOpenInfo }) => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-24 space-y-4 md:space-y-6 reveal">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bengali font-bold text-white leading-tight">হৃদয়ের গভীরতম <span className="gold-gradient">দর্শন</span></h2>
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <div className="h-px w-10 md:w-16 bg-[#bf953f]/30 draw-line"></div>
          <p className="text-gray-400 font-serif-luxury italic text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em]">Excerpts from the 41 Laws</p>
          <div className="h-px w-10 md:w-16 bg-[#bf953f]/30 draw-line"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {LAWS.map((law, idx) => (
          <div 
            key={law.id} 
            className="p-8 md:p-12 glass-effect border-white/5 hover:border-[#bf953f]/40 transition-all duration-1000 group relative overflow-hidden reveal"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 text-7xl md:text-[10rem] font-serif-luxury italic text-white/[0.02] group-hover:text-[#bf953f]/10 transition-all duration-1000 select-none pointer-events-none">
              {law.id}
            </div>
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-3">
                <span className="text-[8px] md:text-[10px] text-[#bf953f] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold block mb-1 md:mb-2">{law.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-bengali leading-tight">{law.title}</h3>
                <div className="h-[2px] w-8 md:w-12 bg-[#bf953f] group-hover:w-full transition-all duration-1000"></div>
              </div>
              <p className="text-gray-400 leading-relaxed font-bengali text-lg md:text-xl italic group-hover:text-gray-200 transition-colors">
                "{law.desc}"
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-24 text-center reveal">
        <button 
          onClick={() => onOpenInfo?.('laws')}
          className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#bf953f]/30 rounded-full glass-effect group cursor-pointer hover:bg-[#bf953f] hover:text-black transition-all duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.5)] active:scale-95"
        >
           <p className="font-serif-luxury italic text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase transition-all">
             View All 41 Laws of Love
           </p>
        </button>
      </div>
    </div>
  );
};
