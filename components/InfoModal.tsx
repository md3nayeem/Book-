
import React, { useEffect } from 'react';

interface InfoModalProps {
  type: 'about' | 'author' | 'terms' | 'shipping' | 'laws' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    };
  }, [type]);

  if (!type) return null;

  const content = {
    about: {
      title: 'বইটি সম্পর্কে (About the Book)',
      body: (
        <div className="space-y-6 font-bengali leading-relaxed text-gray-300 text-lg">
          <p className="text-xl text-[#bf953f] italic font-serif-luxury border-b border-[#bf953f]/20 pb-4">"Unveiling the 41 Laws of Love"</p>
          <p>
            'অনুরাগের আগে ও পরে' গ্রন্থটি মূলত <span className="text-[#bf953f] font-bold">“৪১ ল অব লাভ”</span> ভালোবাসার একচল্লিশটি মৌলিক নীতি বা রুপকে কেন্দ্র করে রচিত। বইটিতে ভালোবাসাকে আবেগ হিসেবে নয়, বরং একটি ধাপে ধাপে গড়ে ওঠা মানসিক ও মানবিক প্রক্রিয়া হিসেবে উপস্থাপন করা হয়েছে। ভালোবাসায় কি ভুল ও সঠিক তা তুলে ধরাছে 
          </p>
          <p>
            প্রতিটি “Law” বা নীতিকে আলাদা আলাদা পাঠে ভাগ করা হয়েছে এবং সেগুলো আবার বিভিন্ন অধ্যায়ের মধ্যে সুসংগঠিতভাবে বিন্যস্ত। কোথাও ভালোবাসার শুরু, কোথাও অপেক্ষা, বিশ্বাস, ত্যাগ, নীরবতা, বিচ্ছেদ, ভোগ, মোহ ও পরিণতির কথা বলা হয়েছে। প্রতিটি পাঠে বাস্তব জীবনের অনুভূতি ও মনস্তাত্ত্বিক সত্য সহজ ভাষায় তুলে ধরা হয়েছে 
          </p>
          <p>
            এই বইয়ের বিশেষত্ব হলো—এটি শুধু প্রেমিক–প্রেমিকার সম্পর্ক নয়, বরং মানুষের সামগ্রিক ভালোবাসার বোধকে স্পষ্ট করে। ভালোবাসার আগে মানুষ যেমন থাকে, আর ভালোবাসার যোগ্য হওয়ার জন্য তার চিন্তা, দায়িত্ববোধ ও আবেগ কী হতে হবে তা এই একচল্লিশটি নীতির মাধ্যমে পরিষ্কারভাবে বোঝানো হয়েছে 
          </p>
          <p>
            সব মিলিয়ে, বইটি ভালোবাসাকে বুঝতে ও অনুভব করতে একটি সংবেদনশীল ও চিন্তাশীল নির্দেশনা হিসেবে কাজ করে, যা পাঠককে ধীরে ধীরে আত্মঅনুধ্যানের দিকে নিয়ে যায় 
          </p>
        </div>
      )
    },
    author: {
      title: 'লেখক পরিচিতি (Author Profile)',
      body: (
        <div className="space-y-6 font-bengali text-gray-300 leading-relaxed text-center">
          <div className="w-32 h-32 mx-auto rounded-full border-2 border-[#bf953f] p-1 mb-4 overflow-hidden">
             <div className="w-full h-full bg-[#bf953f]/20 flex items-center justify-center text-4xl font-bold text-[#bf953f]">MK</div>
          </div>
          <h4 className="text-2xl font-bold text-white">আশিকুজ্জামান এমকে (Ashikuzzaman MK)</h4>
          <p className="italic text-[#bf953f]">লেখক, গবেষক ও দার্শনিক চিন্তাবিদ</p>
          <p>
            আশিকুজ্জামান এমকে দীর্ঘ সময় ধরে মানুষের মনস্তত্ত্ব, বিশেষ করে সম্পর্কের জটিলতা ও আবেগের বিবর্তন নিয়ে কাজ করছেন। তাঁর লেখনিতে পাওয়া যায় দর্শনের ছোঁয়া এবং বর্তমান সময়ের আধুনিকতার সাথে ঐতিহ্যের মেলবন্ধন 
          </p>
          <p>
            'অনুরাগের আগে ও পরে' লেখকের বহু বছরের পর্যবেক্ষণ ও অনুভবের ফসল। তিনি বিশ্বাস করেন, সঠিক দর্শন ছাড়া একটি সুন্দর জীবন গড়া অসম্ভব। তাঁর উদ্দেশ্য সহজ—পাঠকের হৃদয়ে একটি মশাল জ্বেলে দেওয়া যাতে সে অন্ধকারের মাঝেও আলোর পথ খুঁজে পায় 
          </p>
        </div>
      )
    },
    terms: {
      title: 'শর্তাবলি (Terms & Conditions)',
      body: (
        <div className="space-y-6 font-bengali text-gray-300 text-sm leading-relaxed">
          <div className="border-l-2 border-[#bf953f] pl-4">
            <h5 className="text-white font-bold mb-2">১. অর্ডার ও কনফার্মেশন</h5>
            <p>ওয়েবসাইটে ফর্ম পূরণের পর অবশ্যই হোয়াটসঅ্যাপের মাধ্যমে অর্ডারটি কনফার্ম করতে হবে। হোয়াটসঅ্যাপ কনফার্মেশন ছাড়া অর্ডারটি চূড়ান্ত বলে গণ্য হবে না</p>
          </div>
          <div className="border-l-2 border-[#bf953f] pl-4">
            <h5 className="text-white font-bold mb-2">২. মূল্য ও পেমেন্ট</h5>
            <p>বইয়ের নির্ধারিত SA offer মূল্য ৩৫৯ টাকা। রেগুলার মূল্য ৩৯৯ টাকা। ডেলিভারি চার্জ এর সাথে যুক্ত হবে। পেমেন্ট পদ্ধতি সম্পর্কে হোয়াটসঅ্যাপে বিস্তারিত জানানো হবে</p>
          </div>
          <div className="border-l-2 border-[#bf953f] pl-4">
            <h5 className="text-white font-bold mb-2">৩. রিটার্ন ও রিফান্ড</h5>
            <p>শুধুমাত্র প্রিন্টিং বা বাইন্ডিংজনিত ত্রুটি থাকলে বই পরিবর্তনের সুযোগ থাকবে। ডেলিভারি পাওয়ার ২৪ ঘণ্টার মধ্যে আমাদের জানাতে হবে</p>
          </div>
        </div>
      )
    },
    shipping: {
      title: 'ডেলিভারি পলিসি (Shipping Policy)',
      body: (
        <div className="space-y-6 font-bengali text-gray-300 leading-relaxed">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 text-center border border-white/10">
              <span className="block text-[#bf953f] font-bold text-lg">৳ ৫০</span>
              <span className="text-xs uppercase tracking-widest">ঢাকার ভেতরে</span>
            </div>
            <div className="bg-white/5 p-4 text-center border border-white/10">
              <span className="block text-[#bf953f] font-bold text-lg">৳ ৬০</span>
              <span className="text-xs uppercase tracking-widest">ঢাকার বাইরে</span>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#bf953f]">🚚</span>
              <span>ডেলিভারি সময়: ৩ থেকে ৭ কার্যদিবস</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#bf953f]">📦</span>
              <span>আমরা দেশের নির্ভরযোগ্য কুরিয়ার সার্ভিসের মাধ্যমে বই পাঠিয়ে থাকি</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#bf953f]">📍</span>
              <span>সারা বাংলাদেশের যেকোনো জেলা ও উপজেলায় ডেলিভারি দেওয়া সম্ভব</span>
            </li>
            <li className="flex gap-4 pt-4 border-t border-white/5">
              <span className="text-[#bf953f]">⚠️</span>
              <span className="font-bold text-white italic">কনফার্ম এর সময় ডেলিভারি চার্জ আছে কিনা অথবা সিওডি (COD)—এই বিষয়টি কনফার্ম করে নিবেন</span>
            </li>
          </ul>
        </div>
      )
    },
    laws: {
      title: 'ভালোবাসার ৪১ আইন (The 41 Laws of Love)',
      body: (
        <div className="space-y-12 font-bengali text-gray-300 text-base leading-relaxed pb-10">
          <p className="text-[#bf953f] italic border-b border-[#bf953f]/10 pb-4 text-lg">
            "এখানে পর্ব ও অধ্যায়ের নাম অনুযায়ী ৪১টি আইন সাজানো হয়েছে:"
          </p>
          
          <div className="space-y-16">
            <section className="space-y-6 relative">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-[#bf953f]/30 flex items-center justify-center text-[#bf953f] font-bold shrink-0">১</span>
                <h5 className="text-2xl font-bold text-white tracking-wide">পর্ব ১ : ভ্রান্তির কুয়াশা (The Illusion)</h5>
              </div>
              <div className="pl-6 md:pl-16 space-y-10 border-l border-[#bf953f]/10 ml-6">
                <div>
                  <h6 className="text-[#bf953f] font-bold mb-4 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#bf953f] rounded-full"></span>
                    মায়া ভাল লাগা ভালোবাসা
                  </h6>
                  <ul className="space-y-3 text-gray-400 pl-4">
                    <li className="hover:text-white transition-colors">১. চোখ ও ভালো লাগার মরীচিকা</li>
                    <li className="hover:text-white transition-colors">২. চেনা আলোর “ধ্রুবতারা”</li>
                    <li className="hover:text-white transition-colors">৩. মায়ার গোলকধাঁধা</li>
                    <li className="hover:text-white transition-colors">৪. ভাঙন—জানালার ওপারের বাস্তবতা</li>
                    <li className="hover:text-white transition-colors">৫. ভালোবাসা</li>
                    <li className="hover:text-white transition-colors">৬. স্বার্থ নাকি সমর্পণ—লেমের চূড়ান্ত প্রশ্ন</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-[#bf953f] font-bold mb-4 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#bf953f] rounded-full"></span>
                    দেখা নয়, থাকা
                  </h6>
                  <ul className="space-y-3 text-gray-400 pl-4">
                    <li className="hover:text-white transition-colors">৭. প্রয়োজনই যখন বাস্তবতা—সুখের অভিনয়</li>
                    <li className="hover:text-white transition-colors">৮. থাকার শিল্প—উপস্থিতির সংকট</li>
                    <li className="hover:text-white transition-colors">৯. একাকীত্বের নতুন নাম : কানেক্টিভিটি</li>
                    <li className="hover:text-white transition-colors">১০. ফিরে আসার পথ—যন্ত্র থেকে হৃদয়ে</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6 relative">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-[#bf953f]/30 flex items-center justify-center text-[#bf953f] font-bold shrink-0">২</span>
                <h5 className="text-2xl font-bold text-white tracking-wide">পর্ব ২ : প্রেমের আলো (The Light)</h5>
              </div>
              <div className="pl-6 md:pl-16 space-y-10 border-l border-[#bf953f]/10 ml-6">
                <div>
                  <h6 className="text-[#bf953f] font-bold mb-4 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#bf953f] rounded-full"></span>
                    যত্ন — ভালোবাসার প্রথম ভাষা
                  </h6>
                  <ul className="space-y-3 text-gray-400 pl-4">
                    <li className="hover:text-white transition-colors">১১. যত্নের স্বরূপ—তুচ্ছের মাঝে অসীমের সন্ধান</li>
                    <li className="hover:text-white transition-colors">১২. নীরব উপস্থিতি—হৃদয়ের গভীরতম স্পর্শ</li>
                    <li className="hover:text-white transition-colors">১৩. সম্পর্কের বাস্তুতন্ত্র—দেওয়া ও নেওয়া</li>
                    <li className="hover:text-white transition-colors">১৪. আত্মযত্ন ও আত্মত্যাগ</li>
                    <li className="hover:text-white transition-colors">১৫. যত্নের অনুশীলন</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-[#bf953f] font-bold mb-4 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#bf953f] rounded-full"></span>
                    সম্মান ও স্বাধীনতা
                  </h6>
                  <ul className="space-y-3 text-gray-400 pl-4">
                    <li className="hover:text-white transition-colors">১৬. বিশ্বাসের সাহস এবং নিয়ন্ত্রণের ভীতি</li>
                    <li className="hover:text-white transition-colors">১৭. ব্যক্তিস্বাধীনতার সীমানা—দুটি স্তম্ভ</li>
                    <li className="hover:text-white transition-colors">১৮. সম্মানের ভাষা</li>
                    <li className="hover:text-white transition-colors">১৯. স্বাধীনতা ও স্বেচ্ছাচারিতা—এক সূক্ষ্ম সীমারেখা</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-[#bf953f] font-bold mb-4 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#bf953f] rounded-full"></span>
                    দায়বদ্ধতার সৌন্দর্য
                  </h6>
                  <ul className="space-y-3 text-gray-400 pl-4">
                    <li className="hover:text-white transition-colors">২০. কথা ও কাজ—আসল পরিচয়</li>
                    <li className="hover:text-white transition-colors">২১. আধুনিক অসুখ ‘অপশন’ ও ‘FOMO’-এর মায়াজাল</li>
                    <li className="hover:text-white transition-colors">২২. বদলানো নাকি বেড়ে ওঠা—নদীর উপমা</li>
                    <li className="hover:text-white transition-colors">২৩. জাপানি শিল্প ‘কিনৎসুগি’ ও মেরামতের দায়</li>
                    <li className="hover:text-white transition-colors">২৪. শেষ পর্যন্ত থাকার গল্প—বার্ধক্যের বিকল্পহীনতা</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    }
  }[type];

  return (
    <div 
      className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="glass-effect w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative animate-fade-up border-[#bf953f]/30 rounded-[2.5rem] shadow-[0_0_150px_rgba(191,149,63,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-12 pb-6 shrink-0 border-b border-white/5 bg-black/40">
          <button 
            onClick={onClose}
            className="absolute top-6 right-8 text-gray-500 hover:text-[#bf953f] text-4xl font-light transition-all hover:rotate-90 z-20"
            aria-label="Close modal"
          >
            &times;
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bengali font-bold text-white mb-4 gold-gradient">{content.title}</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto"></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth custom-scrollbar bg-white/[0.01] overscroll-contain">
          {content.body}
        </div>

        <div className="p-6 md:p-8 border-t border-white/5 text-center shrink-0 bg-black/40">
          <button 
            onClick={onClose}
            className="px-12 py-3 bg-[#bf953f] text-black hover:bg-white transition-all duration-500 font-bold uppercase text-[10px] tracking-[0.4em] rounded-full shadow-[0_10px_30px_#bf953f44] hover:scale-105 active:scale-95"
          >
            বন্ধ করুন (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
