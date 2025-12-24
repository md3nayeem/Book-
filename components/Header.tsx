
import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onScrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const WHATSAPP_NUMBER = '+8801819810766';

  const handleNav = (id: string) => {
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  const handleBecomeSeller = () => {
    const message = `আসসালামু আলাইকুম!

আমি "অনুরাগের আগে ও পরে" বইয়ের সেলার/এফিলিয়েট হতে চাই।

আমার তথ্য:
- নাম: 
- মোবাইল: 
- এলাকা: 

অনুগ্রহ করে আমাকে সেলার আইডি প্রদান করুন।

ধন্যবাদ!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header className="fixed top-12 sm:top-14 left-0 right-0 z-[150] transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="bg-black/80 backdrop-blur-2xl py-3 px-5 sm:px-8 rounded-full flex items-center justify-between border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative">
          
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => handleNav('home')}
          >
            {/* Scroll-Linked Animated Logo Container */}
            <div className="relative group/logo">
              <div className="absolute inset-0 bg-[#bf953f]/40 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Outer Wrapper: Handles Scroll Rotation */}
              <div className="scroll-rotate-logo">
                {/* Inner Gem: Handles Breathing Pulse and Diamond Tilt */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#bf953f] flex items-center justify-center font-bold text-black rotate-45 animate-logo-gem transition-transform duration-700 shadow-[0_0_20px_rgba(191,149,63,0.5)] border border-white/20">
                  <span className="-rotate-45 text-lg sm:text-xl logo-shine-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">অ</span>
                </div>
              </div>
            </div>
            <span className="font-bengali font-bold text-lg sm:text-xl tracking-tight hidden xs:inline-block text-white ml-2">অনুরাগের আগে ও পরে</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            <button onClick={() => handleNav('home')} className={`text-[10px] tracking-widest uppercase transition-all duration-500 ${activeSection === 'home' ? 'text-[#bf953f] scale-110' : 'text-gray-400 hover:text-white'}`}>Home</button>
            <button onClick={() => handleNav('laws')} className={`text-[10px] tracking-widest uppercase transition-all duration-500 ${activeSection === 'laws' ? 'text-[#bf953f] scale-110' : 'text-gray-400 hover:text-white'}`}>Laws</button>
            <button onClick={() => handleNav('order')} className={`text-[10px] tracking-widest uppercase transition-all duration-500 ${activeSection === 'order' ? 'text-[#bf953f] scale-110' : 'text-gray-400 hover:text-white'}`}>Order</button>
            
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            
            <button 
              onClick={handleBecomeSeller}
              className="text-[10px] tracking-widest uppercase text-[#bf953f] hover:text-[#fcf6ba] transition-colors font-bold border-b border-[#bf953f]/30 pb-0.5"
            >
              সেলার হতে চান?
            </button>
            
            <button 
              onClick={() => handleNav('order')}
              className={`px-5 py-2 border border-[#bf953f]/30 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-500 ${activeSection === 'order' ? 'bg-[#bf953f] text-black shadow-[0_0_20px_rgba(191,149,63,0.4)]' : 'text-[#bf953f] hover:bg-[#bf953f] hover:text-black'}`}
            >
              Claim Your Exclusive Copy
            </button>
          </nav>

          <button 
            className="lg:hidden text-[#bf953f] p-1 flex items-center gap-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold hidden xs:block">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16m-7 6h7" />
              )}
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-4 mx-2 bg-white rounded-3xl p-8 border border-[#bf953f]/20 lg:hidden flex flex-col gap-4 animate-fade-up shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-black/5">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#bf953f]">Navigation</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-400">&times;</button>
              </div>
              
              <button 
                onClick={() => handleNav('home')} 
                className="text-lg font-bengali font-bold text-gray-900 text-left py-3 hover:text-[#bf953f] transition-colors border-b border-black/5"
              >
                হোম (Home)
              </button>
              
              <button 
                onClick={() => handleNav('laws')} 
                className="text-lg font-bengali font-bold text-gray-900 text-left py-3 hover:text-[#bf953f] transition-colors border-b border-black/5"
              >
                ভালোবাসার ৪১ আইন (Laws)
              </button>
              
              <button 
                onClick={handleBecomeSeller} 
                className="text-lg font-bengali font-bold text-[#bf953f] text-left py-3 hover:text-[#aa771c] transition-colors border-b border-black/5"
              >
                সেলার হতে চান? (Become a seller of OAP )
              </button>
              
              <button 
                onClick={() => handleNav('order')} 
                className="mt-4 w-full py-5 bg-[#bf953f] text-black font-bold uppercase tracking-[0.3em] text-xs rounded-xl shadow-[0_15px_30px_rgba(191,149,63,0.3)] hover:bg-black hover:text-white transition-all duration-500"
              >
                আপনার জন্য সংরক্ষিত বিশেষ সংস্করণটি বুঝে নিন
              </button>
              
              <div className="mt-4 pt-4 text-center">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">© 2026 sabbir ahamad</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
