
import React, { useState, useRef } from 'react';

const COVERS = [
  { 
    id: 1, 
    image: 'https://lh3.googleusercontent.com/d/1wgQRHbxYOAVg7xveU8eEwMWuCNfh_FzU', 
    color: '#bf953f', 
    label: 'রয়্যাল গোল্ড'
  },
  { 
    id: 2, 
    image: 'https://lh3.googleusercontent.com/d/1yWBnkW0Xm1pRvyh5hRFHUGDNRqTLBdgL', 
    color: '#1d2633', 
    label: 'মিডনাইট সোল'
  },
  { 
    id: 3, 
    image: 'https://lh3.googleusercontent.com/d/1nYs5PeELb3xEVzzUKnae0cDTKjhUwjtB', 
    color: '#e2e2e2', 
    label: 'পিউর হোয়াইট'
  },
  { 
    id: 4, 
    image: 'https://lh3.googleusercontent.com/d/1RvWveHT6n-8Dkh4vq1SWj8p4TUzGp0BD', 
    color: '#7a1b1b', 
    label: 'ভেলভেট প্যাশন'
  },
  { 
    id: 5, 
    image: 'https://lh3.googleusercontent.com/d/1ej18ztjMu2DQxDmcXLo4DmHpb0vBW3nQ', 
    color: '#2a2a2a', 
    label: 'ক্লাসিক নোয়ার'
  }
];

const WHATSAPP_NUMBER = '8801819810766';

export const Hero: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isUpcomingSelected, setIsUpcomingSelected] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const currentCover = COVERS[selectedIdx];

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleSelectEdition = (idx: number) => {
    setIsUpcomingSelected(false);
    setSelectedIdx(idx);
  };

  const handleSelectUpcoming = () => {
    setIsUpcomingSelected(true);
  };

  const handleEarlyAccessNotify = () => {
    const message = `আসসালামু আলাইকুম! আমি আপনার পরবর্তী বই "ভালোবাসার ৪২তম Law" সম্পর্কে আর্লি এক্সেস লিস্টে যুক্ত হতে চাই। ধন্যবাদ!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 overflow-hidden bg-black"
    >
      <div 
        className="absolute inset-0 z-0 opacity-40 transition-all duration-1000 ease-out pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, ${isUpcomingSelected ? '#ffffff' : currentCover.color}22 0%, transparent 70%)`,
          filter: 'blur(120px)'
        }}
      ></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <div className="space-y-8 md:space-y-12 animate-fade-up text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-6 md:space-y-8">
            <button 
              onClick={() => isUpcomingSelected ? handleSelectEdition(selectedIdx) : handleSelectUpcoming()}
              className={`inline-flex items-center gap-2 md:gap-4 bg-white/5 backdrop-blur-xl px-6 md:px-10 py-2.5 md:py-3.5 border rounded-full shadow-[0_0_30px_rgba(191,149,63,0.1)] group/label transition-all duration-700 hover:scale-105 active:scale-95 ${isUpcomingSelected ? 'border-white/40' : 'border-[#bf953f]/30'}`}
            >
               <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full animate-pulse ${isUpcomingSelected ? 'bg-white shadow-[0_0_10px_#fff]' : 'bg-[#bf953f] shadow-[0_0_10px_#bf953f]'}`}></span>
               <span className={`${isUpcomingSelected ? 'text-white' : 'gold-gradient'} font-serif-luxury italic text-[9px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold transition-all duration-700 group-hover/label:tracking-[0.5em] md:group-hover/label:tracking-[0.8em]`}>
                 {isUpcomingSelected ? 'The 42nd Law Reveal' : 'The journey continues in 2026'}
               </span>
            </button>

            {isUpcomingSelected ? (
              <div className="space-y-4 md:space-y-6 animate-chat-pop">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bengali font-bold leading-[0.9] tracking-tighter text-white">
                  ভালোবাসার <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">৪২তম Law</span>
                </h1>
                <div className="space-y-3 md:space-y-4 max-w-xl lg:mx-0 mx-auto">
                  <p className="text-base md:text-xl text-gray-400 font-serif-luxury italic leading-relaxed">
                    "In a world of traded currency, the 42nd Law is the final rebellion."
                  </p>
                  <p className="text-lg md:text-2xl text-gray-200 font-bengali leading-relaxed border-l-2 border-white/20 pl-4 md:pl-6">
                    পণ্য সংস্কৃতির এই নিষ্ঠুর পৃথিবীতে হৃদয়ের টিকে থাকার শেষ মন্ত্র।
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bengali font-bold leading-[0.85] tracking-tighter">
                  অনুরাগের <br/>
                  <span className="gold-gradient">আগে ও পরে</span>
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-serif-luxury italic tracking-wide max-w-xl lg:mx-0 mx-auto leading-relaxed">
                  "A timeless odyssey through 41 laws that define the human heart"
                </p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center lg:items-start gap-8 md:gap-14">
            <div className="flex flex-col items-center lg:items-start gap-4">
              {isUpcomingSelected ? (
                <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl glass-effect text-center lg:text-left relative overflow-hidden group/teaser-box max-w-lg">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-serif-luxury text-4xl md:text-6xl select-none">42</div>
                  <span className="text-white/60 font-serif-luxury text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase block mb-2">Philosophy of Survival</span>
                  <p className="font-bengali text-xl md:text-2xl font-bold text-white mb-2 italic">The 42nd Law of Love</p>
                  <p className="text-gray-400 font-bengali text-sm md:text-base leading-relaxed mb-6">
                    নিষ্ঠুর এই সময়ের জন্য চরম এক ভালোবাসার স্বীকারোক্তি যেখানে আমরা আবেগ নয়, সত্যের মুখোমুখি হই।
                  </p>
                  <button 
                    onClick={handleEarlyAccessNotify}
                    className="w-full py-3.5 border border-white/20 rounded-xl text-white font-serif-luxury uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] hover:bg-white hover:text-black transition-all duration-500 luxury-shimmer"
                  >
                    Get Early Access Notify
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-10 md:px-14 py-3.5 md:py-4 bg-[#bf953f] text-black hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_20px_50px_rgba(191,149,63,0.3)] rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="relative z-10 flex flex-col items-center leading-tight">
                      <span className="font-bengali text-[9px] md:text-xs uppercase tracking-[0.2em] opacity-80 mb-1">আপনার আভিজাত্যের স্মারকটি নিশ্চিত করুন</span>
                      <span className="font-bengali text-2xl md:text-3xl font-bold">৳৩৫৯</span>
                    </div>
                  </button>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 line-through font-bengali text-base md:text-lg opacity-60">রেগুলার প্রাইজ: ৳৩৯৯</span>
                      <span className="text-[#bf953f] font-bengali text-xs md:text-sm font-bold animate-pulse">Special Offer</span>
                    </div>
                    <p className="text-gray-400 font-bengali text-[10px] md:text-xs mt-1">অফারটি শেষ হওয়ার আগেই আজই অর্ডার করুন</p>
                  </div>
                </>
              )}
            </div>
            
            <div className="space-y-6 w-full max-w-[450px]">
              <div className="flex justify-between items-center w-full px-2">
                <button 
                  onClick={() => handleSelectEdition(0)}
                  className={`text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold block transition-all duration-500 ${!isUpcomingSelected ? 'text-[#bf953f]' : 'text-gray-500 hover:text-white'}`}
                >
                  Edition Collection
                </button>
                <button 
                  onClick={handleSelectUpcoming}
                  className={`flex items-center gap-2 md:gap-3 transition-all duration-700 ${isUpcomingSelected ? 'text-white' : 'text-white/30 hover:text-white'}`}
                >
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold block">Upcoming Reveal</span>
                  {!isUpcomingSelected && (
                    <div className="hidden sm:block w-6 h-px bg-white/20 transition-all duration-500"></div>
                  )}
                </button>
              </div>
              <div className="flex gap-2 md:gap-4 items-center justify-center lg:justify-start">
                <div className="flex gap-2 md:gap-4 items-center border-r border-white/10 pr-3 md:pr-4 overflow-x-auto custom-scrollbar pb-2 no-scrollbar">
                  {COVERS.map((cover, idx) => (
                    <button
                      key={cover.id}
                      onClick={() => handleSelectEdition(idx)}
                      className={`relative w-10 h-14 sm:w-16 sm:h-24 shrink-0 border transition-all duration-700 transform ${(!isUpcomingSelected && selectedIdx === idx) ? 'border-[#bf953f] scale-110 md:scale-125 z-10 shadow-[0_10px_30px_rgba(191,149,63,0.3)]' : 'border-white/10 opacity-30 hover:opacity-100'}`}
                    >
                      {!imageErrors[cover.id] ? (
                        <img src={cover.image} alt={cover.label} className="w-full h-full object-cover" onError={() => handleImageError(cover.id)} />
                      ) : (
                        <div className="w-full h-full bg-gray-900"></div>
                      )}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={handleSelectUpcoming}
                  className={`relative w-10 h-14 sm:w-16 sm:h-24 shrink-0 border transition-all duration-700 transform overflow-hidden flex items-center justify-center ${isUpcomingSelected ? 'border-white scale-110 md:scale-125 z-10 shadow-[0_15px_40px_rgba(255,255,255,0.2)]' : 'border-white/10 opacity-30 hover:opacity-100'}`}
                >
                  <div className={`w-full h-full flex flex-col items-center justify-center transition-colors duration-700 ${isUpcomingSelected ? 'bg-white text-black' : 'bg-[#111] text-[#bf953f]'}`}>
                    <span className="font-serif-luxury text-sm md:text-xl font-bold">42</span>
                    <span className="text-[5px] md:text-[6px] uppercase tracking-widest absolute bottom-1 font-bold">Next</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Book Preview - Responsive perspective and sizing */}
        <div className="relative flex justify-center items-center py-8 lg:py-0 order-1 lg:order-2">
          <div 
            className="relative w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] aspect-[10/15] group perspective-2000"
            style={{ 
              transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-full h-full relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden rounded-sm border border-white/10">
              <div className="absolute inset-0 bg-[#0a0a0a]">
                {isUpcomingSelected ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#050505] to-[#1a1a1a] flex flex-col items-center justify-center p-6 md:p-12 text-center animate-fade-in relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                      <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                    <div className="space-y-6 md:space-y-12 relative z-10">
                      <div className="space-y-2 md:space-y-4">
                        <span className="text-white/40 font-serif-luxury text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[1em] uppercase block">The New Manifesto</span>
                        <h3 className="text-white text-2xl md:text-5xl font-bengali font-bold leading-tight">ভালোবাসার ৪২তম Law</h3>
                        <div className="h-px w-12 md:w-20 bg-white/20 mx-auto"></div>
                      </div>
                      <div className="pt-4 md:pt-8">
                         <button 
                            onClick={handleEarlyAccessNotify}
                            className="relative inline-block px-6 md:px-10 py-2.5 md:py-3 border border-white/20 rounded-full group/btn overflow-hidden"
                         >
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-700"></div>
                            <span className="text-white group-hover/btn:text-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold transition-colors relative z-10">Coming Soon</span>
                         </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  COVERS.map((cover, idx) => (
                    <div key={cover.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${(!isUpcomingSelected && selectedIdx === idx) ? 'opacity-100' : 'opacity-0'}`}>
                      {!imageErrors[cover.id] ? (
                        <img src={cover.image} alt={cover.label} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center p-6 text-center">
                          <span className="text-[#bf953f] text-xl md:text-3xl font-bold font-bengali">অনুরাগের আগে ও পরে</span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className={`absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-20 h-20 md:w-28 md:h-28 ${isUpcomingSelected ? 'bg-white' : 'bg-[#bf953f]'} rounded-full z-50 flex items-center justify-center border-4 border-black shadow-2xl transition-all duration-1000 ${isUpcomingSelected ? 'rotate-0 scale-105 md:scale-110' : 'rotate-12 group-hover:rotate-0'}`}>
              <div className="text-center">
                <p className="text-black font-bold text-[6px] md:text-[8px] uppercase tracking-tighter">Premium</p>
                <p className="text-black font-bold text-xl md:text-2xl leading-none">{isUpcomingSelected ? '42' : 'MK'}</p>
                <p className="text-black font-bold text-[6px] md:text-[8px] uppercase tracking-tighter">Legacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
