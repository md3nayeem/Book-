import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ChatBotProps {
  onNotify?: (type: 'error' | 'success' | 'info' | 'warning', message: string) => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: { uri: string; title: string }[];
}

const TypingIndicator: React.FC = () => (
  <div className="flex flex-col gap-2 animate-pulse p-2">
    <div className="flex items-center gap-2 px-5 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
      <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
    <span className="text-[8px] text-[#bf953f] uppercase tracking-[0.4em] font-bold opacity-60 ml-3">বুনন চলছে (Processing)...</span>
  </div>
);

export const ChatBot: React.FC<ChatBotProps> = ({ onNotify }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'স্বাগতম। আমি আপনার হৃদয়ের কথা শুনতে এবং আশিকুজ্জামান এমকে-র "অনুরাগের আগে ও পরে" বইটির গূঢ় দর্শন ব্যাখ্যা করতে প্রস্তুত। আপনার জিজ্ঞাসাটি বলুন।' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const keySelected = await (window as any).aistudio.hasSelectedApiKey();
    if (!keySelected) {
      if (onNotify) onNotify('info', 'অপেক্ষার প্রহর শেষ করতে একটি এপিআই কী নির্বাচন করুন।');
      await (window as any).aistudio.openSelectKey();
      return; // Stop and let user select key
    }

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are the poetic AI assistant for the luxury book "অনুরাগের আগে ও পরে" (Anurager Age o Pore) by Ashikuzzaman MK.
        Book Essence: Unveiling 41 Laws of Love. Philosophy: Love is not about losing oneself, but making one's personality an ideal.
        Offer Price: 359 BDT. Regular: 399 BDT.
        Tone: Poetic, philosophical, sophisticated, and helpful. Primarily Bengali.
      `;

      const apiContents = messages.slice(-5).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      apiContents.push({ role: 'user', parts: [{ text: userMsg }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: apiContents,
        config: { 
          systemInstruction,
          temperature: 0.8,
          thinkingConfig: { thinkingBudget: 32768 },
          tools: [{ googleSearch: {} }]
        },
      });

      const candidate = response.candidates?.[0];
      
      if (candidate?.finishReason === 'SAFETY') {
        setMessages(prev => [...prev, { role: 'model', text: "দুঃখিত, এই বিষয়টি আমাদের নীতিমালার বাইরে। অনুগ্রহ করে ভিন্ন কোনো মার্জিত জিজ্ঞাসা করুন।" }]);
      } else if (candidate?.finishReason === 'RECITATION' || candidate?.finishReason === 'OTHER') {
        setMessages(prev => [...prev, { role: 'model', text: "এই মুহূর্তে আমি আপনার প্রশ্নের যথাযথ উত্তর দিতে পারছি না। অনুগ্রহ করে অন্যভাবে চেষ্টা করুন।" }]);
      } else {
        const responseText = response.text || "দুঃখিত, আমি উত্তর খুঁজে পাচ্ছি না।";
        const sources = candidate?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web).filter(Boolean) || [];

        setMessages(prev => [...prev, { 
          role: 'model', 
          text: responseText,
          sources: sources.length > 0 ? sources : undefined
        }]);
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      
      if (error?.message?.includes("429")) {
        setMessages(prev => [...prev, { role: 'model', text: "আমি এই মুহূর্তে একটু বেশি ব্যস্ত। অনুগ্রহ করে কয়েক মুহূর্ত পর আবার চেষ্টা করুন।" }]);
      } else if (error?.message?.includes("API_KEY_INVALID") || error?.message?.includes("entity was not found")) {
        if (onNotify) onNotify('error', 'আপনার API Key সঠিক নয় বা কাজ করছে না। পুনরায় নির্বাচন করুন।');
        await (window as any).aistudio.openSelectKey();
      } else {
        setMessages(prev => [...prev, { role: 'model', text: "দুঃখিত, সংযোগে ত্রুটি হয়েছে। দয়া করে আপনার ইন্টারনেট চেক করুন।" }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      {isOpen ? (
        <div className="w-[90vw] sm:w-[380px] h-[550px] glass-effect border-[#bf953f]/30 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl animate-fade-up">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#bf953f] rounded-full flex items-center justify-center font-bold text-black rotate-45 shadow-[0_0_20px_rgba(191,149,63,0.4)]">
                <span className="-rotate-45 text-sm">অ</span>
              </div>
              <span className="font-bengali font-bold text-white tracking-wide">হৃদয়ের মশাল</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-2xl">&times;</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-3xl font-bengali text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#bf953f] text-black font-medium' 
                  : 'bg-white/5 border border-white/10 text-gray-200'
                }`}>
                  {m.text}
                </div>
                {m.sources && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.sources.slice(0, 3).map((source, sIdx) => (
                      <a key={sIdx} href={source.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#bf953f] underline">
                        {source.title || 'সূত্র'}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && <TypingIndicator />}
          </div>

          <div className="p-6 border-t border-white/5">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="জিজ্ঞাসা করুন..."
                className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-sm font-bengali text-white focus:border-[#bf953f] outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="w-14 h-14 bg-[#bf953f] text-black rounded-full flex items-center justify-center shadow-lg disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-[#bf953f] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="font-bengali font-bold text-3xl">অ</span>
        </button>
      )}
    </div>
  );
};
