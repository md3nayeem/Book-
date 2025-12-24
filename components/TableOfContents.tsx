
import React from 'react';

const SECTIONS = [
  {
    part: "পর্ব ১ : ভ্রান্তির কুয়াশা (The Illusion)",
    chapters: [
      {
        title: "মায়া ভাল লাগা ভালোবাসা",
        laws: [
          "১. চোখ ও ভালো লাগার মরীচিকা",
          "২. চেনা আলোর “ধ্রুবতারা”",
          "৩. মায়ার গোলকধাঁধা",
          "৪. ভাঙন—জানালার ওপারের বাস্তবতা",
          "৫. ভালোবাসা",
          "৬. স্বার্থ নাকি সমর্পণ—লেমের চূড়ান্ত প্রশ্ন"
        ]
      },
      {
        title: "দেখা নয়, থাকা",
        laws: [
          "৭. প্রয়োজনই যখন বাস্তবতা—সুখের অভিনয়",
          "৮. থাকার শিল্প—উপস্থিতির সংকট",
          "৯. একাকীত্বের নতুন নাম : কানেক্টিভিটি",
          "১০. ফিরে আসার পথ—যন্ত্র থেকে হৃদয়ে"
        ]
      }
    ]
  },
  {
    part: "পর্ব ২ : প্রেমের আলো (The Light)",
    chapters: [
      {
        title: "যত্ন — ভালোবাসার প্রথম ভাষা",
        laws: [
          "১১. যত্নের স্বরূপ—তুচ্ছের মাঝে অসীমের সন্ধান",
          "১২. নীরব উপস্থিতি—হৃদয়ের গভীরতম স্পর্শ",
          "১৩. সম্পর্কের বাস্তুতন্ত্র—দেওয়া ও নেওয়া",
          "১৪. আত্মযত্ন ও আত্মত্যাগ",
          "১৫. যত্নের অনুশীলন"
        ]
      },
      {
        title: "সম্মান ও স্বাধীনতা",
        laws: [
          "১৬. বিশ্বাসের সাহস এবং নিয়ন্ত্রণের ভীতি",
          "১৭. ব্যক্তিস্বাধীনতার সীমানা—দুটি স্তম্ভ",
          "১৮. সম্মানের ভাষা",
          "১৯. স্বাধীনতা ও স্বেচ্ছাচারিতা—এক সূক্ষ্ম সীমারেখা"
        ]
      },
      {
        title: "দায়বদ্ধতার সৌন্দর্য",
        laws: [
          "২০. কথা ও কাজ—আসল পরিচয়",
          "২১. আধুনিক অসুখ ‘অপশন’ ও ‘FOMO’-এর মায়াজাল",
          "২২. বদলানো নাকি বেড়ে ওঠা—নদীর উপমা",
          "২৩. জাপানি শিল্প ‘কিনৎসুগি’ ও মেরামতের দায়",
          "২৪. শেষ পর্যন্ত থাকার গল্প—বার্ধক্যের বিকল্পহীনতা"
        ]
      }
    ]
  },
  {
    part: "পর্ব ৩ : ছায়া ও নিঃসঙ্গতা (Shadow & Solitude)",
    chapters: [
      {
        title: "ঈর্ষা, সন্দেহ ও অভিমান",
        laws: [
          "২৫. ঈর্ষাসূচক চোখের দানব (The Green-Eyed Monster)",
          "২৬. সন্দেহ—সম্পর্কের উইপোকা",
          "২৭. অভিমান নাকি ইগো",
          "২৮. আঁধার পেরিয়ে আলোয় ফেরা—সমাধানের মানচিত্র"
        ]
      },
      {
        title: "একতরফা প্রেম",
        laws: [
          "২৯. নিঃশব্দ দহন—একক সম্রাটের স্বাধীন রাজত্ব",
          "৩০. খোলা খাম ও না-বলা কথার হাহাকার",
          "৩১. মরীচিকার পেছনে ছোটা—আত্মবঞ্চনা ও নিষ্ঠুর বাস্তবতা",
          "৩২. পেছনে সরে যাওয়ার সৌন্দর্য—নিজেকে বাঁচানোর জন্ম"
        ]
      }
    ]
  },
  {
    part: "পর্ব ৪ : আধুনিক সংকট ও শরীর (Crisis & Body)",
    chapters: [
      {
        title: "ডিজিটাল যুগের প্রেম",
        laws: [
          "৩৩. নীল আলোর ধাঁধা—অপেক্ষার নতুন ব্যাকরণ",
          "৩৪. স্ক্রিন যখন দেয়াল",
          "৩৫. ফিরে আসা—যন্ত্র থেকে হৃদয়ে"
        ]
      },
      {
        title: "অন্তরঙ্গতার বিভ্রান্তি",
        laws: [
          "৩৬. কামনার কাদা ও প্রেমের পদ্ম",
          "৩৭. জৈবিক বাস্তবতা—চাঁদ কেবল একতরফা নয়",
          "৩৮. পণ্য সংস্কৃতি—ক্ষমতা বনাম যৌবন",
          "৩৯. সংযমের শক্তি—অপেক্ষা কেন মধুর"
        ]
      }
    ]
  },
  {
    part: "পর্ব ৫ : শাশ্বত আদর্শ (The Eternal Ideal)",
    chapters: [
      {
        title: "সংস্কৃতি ও প্রেমের আদর্শ",
        laws: [
          "৪০. সঠিক সঙ্গী চেনার মানদণ্ড—সম্পদ নয়, সংগ্রাম"
        ]
      },
      {
        title: "সত্যিকারের ভালোবাসার স্বর্ণমালা",
        laws: [
          "৪১. সম্পর্কে হেল্থি রাখার ১০ টি টিপস"
        ]
      }
    ]
  }
];

export const TableOfContents: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mx-auto glass-effect p-8 md:p-16 lg:p-24 relative border-white/5 shadow-[0_60px_120px_rgba(0,0,0,0.6)] reveal rounded-[2rem] md:rounded-[3rem]">
        
        <div className="text-center mb-16 md:mb-32">
          <p className="text-[#bf953f] font-serif-luxury italic tracking-[0.4em] md:tracking-[0.8em] uppercase text-[9px] md:text-xs mb-4 md:mb-6">The Sacred Collection</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bengali font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            বইয়ের <span className="gold-gradient">সূচিপত্র</span>
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#bf953f]/40 to-transparent w-16 md:w-40 draw-line"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-[#bf953f] rotate-45 animate-pulse shadow-[0_0_15px_#bf953f]"></div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#bf953f]/40 to-transparent w-16 md:w-40 draw-line"></div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-32">
          {SECTIONS.map((section, sIdx) => (
            <div key={sIdx} className="space-y-10 md:space-y-16 reveal">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#0a0a0a] px-4 md:px-8 py-2 md:py-3 text-[#bf953f] font-bengali font-bold text-lg sm:text-xl md:text-3xl tracking-wide border border-[#bf953f]/20 rounded-full shadow-2xl text-center">
                    {section.part}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-16">
                {section.chapters.map((chapter, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="space-y-5 md:space-y-6 group reveal-left"
                    style={{ transitionDelay: `${cIdx * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 md:gap-4 border-b border-white/10 pb-3 md:pb-4">
                      <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bengali font-bold text-white group-hover:text-[#bf953f] transition-colors leading-tight">
                        {chapter.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3 md:space-y-4 pl-4 md:pl-6 border-l border-[#bf953f]/10">
                      {chapter.laws.map((law, lIdx) => (
                        <li key={lIdx} className="group/law">
                          <p className="text-gray-400 font-bengali text-base md:text-lg leading-relaxed hover:text-white transition-all duration-300 translate-x-0 group-hover/law:translate-x-1 md:group-hover/law:translate-x-2">
                            {law}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-white/5 text-center relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#bf953f]/5 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-gray-400 font-bengali text-lg md:text-xl italic max-w-2xl mx-auto px-4">
              "অনুরাগের প্রতিটি law আপনার জীবনের একটি নতুন দিগন্ত উন্মোচন করবে।"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
