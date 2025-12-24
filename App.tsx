
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LawsSection } from './components/LawsSection';
import { TableOfContents } from './components/TableOfContents';
import { Philosophy } from './components/Philosophy';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModal';

interface Notification {
  id: string;
  type: 'error' | 'success' | 'info' | 'warning';
  message: string;
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-4 md:py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group gap-4"
      >
        <h4 className={`text-base md:text-xl font-bengali transition-colors duration-500 ${isOpen ? 'text-[#bf953f]' : 'text-white group-hover:text-[#bf953f]'}`}>
          {question}
        </h4>
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 border-[#bf953f]/40 text-[#bf953f]' : ''}`}>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-96 opacity-100 mt-3 md:mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 font-bengali leading-relaxed text-sm md:text-lg pl-3 border-l border-[#bf953f]/30">
          {answer}
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [infoModalType, setInfoModalType] = useState<'about' | 'author' | 'terms' | 'shipping' | 'laws' | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((type: 'error' | 'success' | 'info' | 'warning', message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTotal > 0 ? (scrollPos / scrollTotal) * 100 : 0);
      
      document.documentElement.style.setProperty('--scroll-y', `${scrollPos}`);

      const sections = ['home', 'laws', 'philosophy', 'toc', 'order', 'faq'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop - 300) {
          setActiveSection(section);
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .draw-line').forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#bf953f] selection:text-black transition-colors duration-1000 overflow-x-hidden">
      <style>{`
        .draw-line { position: relative; }
        .draw-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1px;
          background: #bf953f;
          transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
          transform: translateX(-50%);
        }
        .draw-line.active::after { width: 100%; }
        
        .luxury-shimmer {
          position: relative;
          overflow: hidden;
        }
        .luxury-shimmer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -150%;
          width: 100%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .luxury-shimmer:hover::after {
          left: 150%;
        }
        
        @keyframes logo-gem-pulse {
          0%, 100% { 
            transform: rotate(45deg) scale(1); 
            box-shadow: 0 0 15px rgba(191, 149, 63, 0.4);
            filter: brightness(1);
          }
          50% { 
            transform: rotate(45deg) scale(1.1); 
            box-shadow: 0 0 35px rgba(191, 149, 63, 0.8), 0 0 60px rgba(191, 149, 63, 0.2);
            filter: brightness(1.3);
          }
        }

        .animate-logo-gem {
          animation: logo-gem-pulse 4s ease-in-out infinite;
        }

        .logo-shine-text {
          background: linear-gradient(120deg, #000 30%, #555 50%, #000 70%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logo-inner-shine 3s linear infinite;
        }

        .gold-gradient {
          background: linear-gradient(to right, #bf953f, #fcf6ba, #bf953f, #aa771c);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gold-flow 8s linear infinite;
        }
        
        @keyframes gold-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .luxury-text-shine {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .luxury-text-shine::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg, 
            transparent 0%, 
            transparent 40%, 
            rgba(255, 255, 255, 0.9) 50%, 
            transparent 60%, 
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine-sweep 6s infinite linear;
          pointer-events: none;
        }
        
        @keyframes shine-sweep {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes divider-pulse {
          0%, 100% { height: 0.75rem; opacity: 0.3; }
          50% { height: 1.25rem; opacity: 1; box-shadow: 0 0 10px #bf953f; }
        }
        .animate-divider {
          animation: divider-pulse 6s infinite ease-in-out;
        }

        .reveal { opacity: 0; transform: translateY(20px); transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        
        .reveal-left { opacity: 0; transform: translateX(-20px); transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
        .reveal-left.active { opacity: 1; transform: translateX(0); }
        
        .reveal-right { opacity: 0; transform: translateX(20px); transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
        .reveal-right.active { opacity: 1; transform: translateX(0); }
        
        .reveal-scale { opacity: 0; transform: scale(0.95); transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
        .reveal-scale.active { opacity: 1; transform: scale(1); }

        .animate-reveal-right { animation: reveal-right-notif 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes reveal-right-notif {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .scroll-rotate-logo {
          transform: rotate(calc(var(--scroll-y, 0) * 0.15deg));
          transition: transform 0.1s linear;
        }
      `}</style>

      {/* Top Promotional Bar - Responsive Adjustments */}
      <div className="fixed top-0 left-0 w-full z-[200] bg-black/60 backdrop-blur-2xl border-b border-[#bf953f]/15 overflow-hidden py-1.5 md:py-2 px-2 md:px-4 group shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center gap-2 md:gap-6 text-center animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bf953f]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[6s] ease-in-out pointer-events-none opacity-50"></div>
          
          <span className="hidden md:inline-block text-[#bf953f] text-[10px] animate-pulse">✨</span>
          
          <div 
            className="luxury-text-shine font-bengali text-[8px] sm:text-[10px] md:text-xs text-[#bf953f] font-bold tracking-wide uppercase truncate"
            data-text="আপনার প্রিয় মানুষের জন্য সর্বকালের সেরা উপহার"
          >
            আপনার প্রিয় মানুষের জন্য সর্বকালের সেরা উপহার
          </div>
          
          <div className="w-[1px] h-3 bg-[#bf953f]/40 mx-1 hidden sm:block animate-divider" style={{ animationDelay: '0s' }}></div>
          
          <div 
            className="luxury-text-shine font-serif-luxury font-black text-[7px] sm:text-[9px] md:text-[11px] text-white tracking-[0.3em] md:tracking-[0.5em] uppercase whitespace-nowrap"
            data-text="MAKE YOURSELF WORTH"
          >
            MAKE YOURSELF WORTH
          </div>
          
          <div className="w-[1px] h-3 bg-[#bf953f]/40 mx-1 hidden lg:block animate-divider" style={{ animationDelay: '1s' }}></div>
          
          <div 
            className="luxury-text-shine font-bengali italic text-[7px] sm:text-[9px] md:text-[10px] text-[#bf953f]/90 tracking-[0.1em] md:tracking-widest font-bold hidden xs:block"
            data-text="নিজেকে যোগ্য করে তোলো"
          >
            নিজেকে যোগ্য করে তোলো
          </div>
          
          <span className="hidden md:inline-block text-[#bf953f] text-[10px] animate-pulse" style={{ animationDelay: '2.4s' }}>✨</span>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-[2px] md:h-[3px] z-[210] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] transition-all duration-300 ease-out shadow-[0_0_15px_#bf953f]" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Header activeSection={activeSection} onScrollTo={scrollTo} />
      
      <main className="relative">
        <section id="home"><Hero /></section>
        
        <section id="why-this-book" className="py-16 md:py-32 lg:py-40 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-4 reveal">
              <span className="text-[#bf953f] font-serif-luxury italic tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs">The Essence</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bengali font-bold leading-tight">কেন এই <span className="gold-gradient">বইটি বিশেষ?</span></h2>
              <div className="h-px w-16 md:w-24 bg-[#bf953f] mx-auto mt-4 md:mt-6 draw-line"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { 
                  icon: '🧠', 
                  title: 'গভীর মনস্তত্ত্ব', 
                  desc: 'মানুষের হৃদয়ের অদৃশ্য মানচিত্র এবং অনুরাগের গূঢ় রসায়ন এখানে শৈল্পিক ভাষায় বর্ণিত' 
                },
                { 
                  icon: '📜', 
                  title: '৪১ টি অনুধাবনের বিষয়', 
                  desc: 'সম্পর্কের জটিল সমীকরণ সমাধানে ৪১টির শাশ্বত সত্যের এক অনন্য সংকলন' 
                },
                { 
                  icon: '💎', 
                  title: 'সুন্দর ডিজাইন', 
                  desc: 'প্রতিটি পাতার পরতে পরতে আভিজাত্য আর শিল্পের এক অপূর্ব সমন্বয়' 
                },
                { 
                  icon: '✨', 
                  title: 'ব্যক্তিত্বের আদর্শ', 
                  desc: 'ভালোবাসায় নিজেকে হারানো নয়, নিজের ব্যক্তিত্ব কে আদর্শ করা' 
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-effect p-8 md:p-10 rounded-2xl md:rounded-3xl border-white/5 hover:border-[#bf953f]/30 transition-all duration-700 reveal-scale group relative overflow-hidden">
                  <div className="absolute -right-3 -top-3 text-white/[0.03] text-6xl md:text-8xl font-bold select-none pointer-events-none group-hover:text-[#bf953f]/5 transition-colors duration-700">0{idx + 1}</div>
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bengali font-bold text-white mb-3 md:mb-4 group-hover:text-[#bf953f] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 font-bengali leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="laws" className="py-16 md:py-32 lg:py-40">
          <LawsSection onOpenInfo={() => setInfoModalType('laws')} />
        </section>
        
        <section id="philosophy" className="py-16 md:py-32 lg:py-40 bg-[#0d0d0d] relative overflow-hidden"><Philosophy /></section>
        <section id="toc" className="py-16 md:py-32 lg:py-40"><TableOfContents /></section>
        
        <section id="faq" className="py-16 md:py-32 lg:py-40 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4 reveal">
              <span className="text-[#bf953f] font-serif-luxury italic tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs">Clarifications</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bengali font-bold">সাধারণ <span className="gold-gradient">জিজ্ঞাসা</span></h2>
              <div className="h-px w-16 md:w-24 bg-[#bf953f] mx-auto mt-4 draw-line"></div>
            </div>
            
            <div className="space-y-2 md:space-y-4 reveal">
              <FAQItem 
                question="বইটি কখন হাতে পাবো?" 
                answer="অর্ডার করার পর ৩ থেকে ৭ কার্যদিবসের মধ্যে আপনার হাতে বইটি পৌঁছে যাবে" 
              />
              <FAQItem 
                question="পেমেন্ট কীভাবে করবো?" 
                answer="বিকাশ, নগদ বা সরাসরি ক্যাশ অন ডেলিভারি (Cash on Delivery) পদ্ধতিতে পেমেন্ট করা সম্ভব" 
              />
              <FAQItem 
                question="সেলার কোড ব্যবহার করলে কী সুবিধা?" 
                answer="সেলার কোড ব্যবহার করলে আপনি সরাসরি অফার মূল্যের ওপর আরও ৩০ টাকা ছাড় পাবেন" 
              />
              <FAQItem 
                question="বইটিতে কি কোনো ত্রুটি থাকলে পরিবর্তন সম্ভব?" 
                answer="হ্যাঁ, প্রিন্টিং বা বাইন্ডিংজনিত কোনো ত্রুটি থাকলে ২৪ ঘণ্টার মধ্যে জানালে আমরা বইটি পরিবর্তন করে দেব" 
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f]/5 via-transparent to-[#bf953f]/5 backdrop-blur-3xl"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 md:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bengali font-bold text-white max-w-4xl mx-auto leading-tight reveal px-4">
              "অনুরাগের গভীরতা বুঝতে নিজেকে প্রস্তুত করুন আজই"
            </h2>
            <button 
              onClick={() => scrollTo('order')}
              className="luxury-shimmer px-8 md:px-16 py-5 md:py-8 bg-[#bf953f] text-black font-bold uppercase tracking-[0.3em] md:tracking-[0.6em] text-sm md:text-lg hover:bg-white hover:scale-110 active:scale-95 transition-all duration-700 shadow-[0_20px_60px_rgba(191,149,63,0.3)] reveal-scale rounded-xl"
            >
              Order Now
            </button>
          </div>
        </section>

        <section id="order" className="py-16 md:py-32 lg:py-40 bg-[#0d0d0d] border-t border-white/5">
          <OrderForm onNotify={addNotification} onOpenTerms={() => setInfoModalType('terms')} />
        </section>
      </main>

      <Footer onOpenInfo={setInfoModalType} onScrollTo={scrollTo} />
      <InfoModal type={infoModalType} onClose={() => setInfoModalType(null)} />
      
      {/* Notifications - Responsive Position */}
      <div className="fixed top-20 md:top-24 right-4 md:right-6 z-[300] flex flex-col gap-3 md:gap-4 pointer-events-none max-w-[calc(100vw-2rem)]">
        {notifications.map(n => (
          <div key={n.id} className={`px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl border glass-effect animate-reveal-right pointer-events-auto shadow-2xl flex items-center gap-3 md:gap-4 ${
            n.type === 'success' ? 'border-green-500/50 text-green-400' : 
            n.type === 'error' ? 'border-red-500/50 text-red-400' : 
            'border-[#bf953f]/50 text-[#bf953f]'
          }`}>
            <span className="text-lg md:text-xl shrink-0">
              {n.type === 'success' ? '✓' : n.type === 'error' ? '✕' : 'ℹ'}
            </span>
            <span className="font-bengali font-medium text-xs md:text-base">{n.message}</span>
          </div>
        ))}
      </div>

      <div className={`fixed bottom-6 md:bottom-10 inset-x-0 mx-auto w-fit z-[150] transition-all duration-700 ${scrollProgress > 10 ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => scrollTo('order')}
          className="bg-black/60 backdrop-blur-3xl border border-[#bf953f]/40 px-6 md:px-10 py-3 md:py-4 rounded-full text-[#bf953f] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs hover:bg-[#bf953f] hover:text-black transition-all shadow-2xl luxury-shimmer"
        >
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default App;
