
import React from 'react';

interface FooterProps {
  onOpenInfo: (type: 'about' | 'author' | 'terms' | 'shipping' | 'laws') => void;
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo, onScrollTo }) => {
  const WHATSAPP_NUMBER = '8801819810766';
  const CONTACT_EMAIL = 'ashikuzzamanmk@gmail.com';

  return (
    <footer className="bg-black py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#bf953f]/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 space-y-8 md:space-y-12 text-center md:text-left reveal">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-3xl md:text-5xl font-bengali font-bold gold-gradient tracking-tight">
              অনুরাগের আগে ও পরে
            </h3>
            <div className="h-px w-20 md:w-24 bg-[#bf953f] mx-auto md:mx-0 draw-line"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-3 md:space-y-4 font-bengali text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed italic">
              <p>অনুরাগের আগে মানুষ নিজের ছিল</p>
              <p>অনুরাগের পরে সে নিজের ভেতর আরেকজনকে নিয়ে বাঁচে</p>
              <p>ভালোবাসা মানুষকে বদলায়—এই সত্য সবার জানা</p>
            </div>
            <div className="space-y-4 md:space-y-6 font-bengali text-gray-400 text-sm md:text-lg leading-relaxed">
              <p>এই বই প্রেম শেখায় না। এটি প্রেমকে আবেগ নয়, এক ধরনের মানসিক রূপান্তর হিসেবে দেখে</p>
              <p className="text-white font-bold border-l-2 border-[#bf953f] pl-4 md:pl-6 mt-4 md:mt-8">
                এই বই পড়া মানে ভালোবাসা শেখা নয়—নিজেকে বোঝার ঝুঁকি নেওয়া
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start border-t border-white/5 pt-16 md:pt-20">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#bf953f] flex items-center justify-center text-black font-bold rotate-45 shadow-[0_0_20px_rgba(191,149,63,0.3)] border border-white/10">
                <span className="-rotate-45 text-lg md:text-xl">অ</span>
              </div>
              <span className="font-bengali font-bold text-xl md:text-2xl tracking-tighter">অনুরাগের আগে ও পরে</span>
            </div>
            <p className="text-gray-500 max-w-xs mx-auto sm:mx-0 leading-relaxed font-bengali text-xs md:text-sm opacity-80 text-center sm:text-left">
              একটি প্রকাশনা যা ভালোবাসা এবং অনুভূতির গভীরতাকে সংজ্ঞায়িত করে। ৪১টি আইনের মাধ্যমে জীবন ও প্রেমের এক অনন্য মেলবন্ধন।
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 text-center sm:text-left">
            <h4 className="text-[#bf953f] font-serif-luxury uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold">Quick Links</h4>
            <ul className="space-y-3 md:space-y-5 text-gray-400 text-xs md:text-sm">
              <li><button onClick={() => onOpenInfo('laws')} className="hover:text-[#bf953f] transition-all">The 41 Laws</button></li>
              <li><button onClick={() => onOpenInfo('about')} className="hover:text-[#bf953f] transition-all">About the Book</button></li>
              <li><button onClick={() => onOpenInfo('author')} className="hover:text-[#bf953f] transition-all">Author's Profile</button></li>
              <li><button onClick={() => onOpenInfo('terms')} className="hover:text-[#bf953f] transition-all">Terms & Conditions</button></li>
              <li><button onClick={() => onOpenInfo('shipping')} className="hover:text-[#bf953f] transition-all">Shipping Policy</button></li>
            </ul>
          </div>

          <div className="space-y-6 md:space-y-8 text-center sm:text-left">
            <h4 className="text-[#bf953f] font-serif-luxury uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold">Inquiries</h4>
            <div className="flex flex-col gap-4 md:gap-6">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 md:py-4 border border-white/10 flex items-center justify-center gap-3 md:gap-4 hover:border-[#bf953f] hover:text-[#bf953f] transition-all rounded-lg"
              >
                <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-bold">WhatsApp Us</span>
              </a>
              <div>
                <p className="text-[8px] md:text-[9px] text-gray-600 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 md:mb-2 opacity-70">Official Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-[#bf953f] transition-all font-serif-luxury text-base md:text-lg block truncate">{CONTACT_EMAIL}</a>
                
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('আসসালামু আলাইকুম! আমি আপনার মতো এমন একটি লাক্সারি ওয়েবসাইট তৈরি করতে চাই।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 md:mt-4 text-[9px] md:text-[10px] gold-gradient font-bold uppercase tracking-[0.2em] animate-pulse"
                >
                  To create this type website WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-center">
          <p>© 2026 sabbir ahamad . All Rights Reserved</p>
          <p className="italic opacity-50">Crafted for "Anurager Age o Pore"</p>
        </div>
      </div>
    </footer>
  );
};
