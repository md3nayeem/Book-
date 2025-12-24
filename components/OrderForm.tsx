
import React, { useState } from 'react';

interface OrderFormProps {
  onNotify?: (type: 'error' | 'success' | 'info' | 'warning', message: string) => void;
  onOpenTerms?: () => void;
}

const WHATSAPP_NUMBER = '8801819810766';

export const OrderForm: React.FC<OrderFormProps> = ({ onNotify, onOpenTerms }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: '',
    district: '',
    quantity: 1,
    sellerCode: '',
    paymentMethod: 'Bkash',
    agreed: false,
    giftName: '',
    anonymousGift: false
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [validationState, setValidationState] = useState<{
    status: 'idle' | 'validating' | 'valid' | 'invalid' | 'error';
    message: string;
    appliedCode?: string;
  }>({ status: 'idle', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const regularPreOrderPrice = 359;
  const sellerDiscountAmount = 30;
  const deliveryCharge = 50; // Fixed delivery charge for all methods

  const isDiscountApplied = validationState.status === 'valid';
  const sellerDiscount = isDiscountApplied ? (sellerDiscountAmount * formData.quantity) : 0;
  
  const totalPrice = (regularPreOrderPrice * formData.quantity) - sellerDiscount + deliveryCharge;

  const handleSellerCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setFormData({ ...formData, sellerCode: val });
    if (validationState.status !== 'idle') {
      setValidationState({ status: 'idle', message: '' });
    }
  };

  const validateFields = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim() || formData.phone.length < 11) newErrors.phone = true;
    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.area.trim()) newErrors.area = true;
    if (!formData.district.trim()) newErrors.district = true;
    if (!formData.agreed) newErrors.agreed = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleValidateCode = () => {
    const code = formData.sellerCode.trim();
    if (!code) {
      setValidationState({ status: 'invalid', message: '⚠️ আইডি লিখুন' });
      return;
    }

    setValidationState({ status: 'validating', message: '' });

    // Mock API call for validation
    setTimeout(() => {
      const regex = /^OAP-[36789]\d{3}-[A-Z]{2}$/;
      
      if (!regex.test(code)) {
        setValidationState({ status: 'error', message: '❌ আইডিটি সঠিক নয়' });
        if (onNotify) onNotify('error', 'সেলার আইডিটি সঠিক নয়। অনুগ্রহ করে সঠিক আইডি লিখুন।');
      } else {
        setValidationState({ 
          status: 'valid', 
          message: '✅ আইডি সফলভাবে যুক্ত হয়েছে! 🎉 প্রতি বইয়ে ৩০ টাকা ছাড় পাবেন',
          appliedCode: code
        });
        if (onNotify) onNotify('success', 'সেলার আইডি সফলভাবে প্রয়োগ করা হয়েছে!');
      }
    }, 1500); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateFields()) {
      if (onNotify) onNotify('error', 'অনুগ্রহ করে লাল চিহ্নিত ঘরগুলো সঠিকভাবে পূরণ করুন।');
      return;
    }

    setIsSubmitting(true);
    
    const giftPart = formData.giftName 
      ? `🎁 *উপহার প্রাপকের তথ্য:* \nপ্রাপকের নাম: ${formData.giftName}\n${formData.anonymousGift ? '🕵️‍♂️ *পরিচয় গোপন রাখা হবে (Anonymous)*\n' : ''}`
      : '';

    const message = `🛍️ *নতুন অর্ডার (SA offer)*\n\n📚 বই: অনুরাগের আগে ও পরে\n\n👤 *ক্রেতার তথ্য:*\nনাম: ${formData.name}\nমোবাইল: ${formData.phone}\n${formData.email ? `ইমেইল: ${formData.email}` : ''}\nঠিকানা: ${formData.address}\nএলাকা: ${formData.area}\nজেলা: ${formData.district}\n\n${giftPart}📦 *অর্ডার বিবরণ:*\nকপি সংখ্যা: ${formData.quantity}\nপেমেন্ট: ${formData.paymentMethod}\n${formData.sellerCode ? `🆔 সেলার আইডি: ${formData.sellerCode}${validationState.status === 'valid' ? ' (ডিসকাউন্ট প্রযোজ্য ✅)' : ''}` : ''}\n\n💰 *মূল্য বিবরণ:*\nবই: ৳${regularPreOrderPrice * formData.quantity} (${regularPreOrderPrice} × ${formData.quantity})\n${validationState.status === 'valid' ? `🎁 ডিসকাউন্ট: -৳${sellerDiscount} (৳৩০ × ${formData.quantity})` : ''}\n🚚 ডেলিভারি চার্জ: +৳${deliveryCharge}\n─────────\nসর্বমোট: ৳${totalPrice}\n\n⏰ অর্ডার সময়: ${new Date().toLocaleString('bn-BD')}\n\n─────────────────\nঅনুগ্রহ করে নিশ্চিত করুন ✅`;
    
    try {
      const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      const newWindow = window.open(waLink, '_blank');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        if (onNotify) onNotify('warning', 'পপ-আপ ব্লক করা হতে পারে। অনুগ্রহ করে আপনার ব্রাউজার চেক করুন।');
      }
    } catch (err) {
      if (onNotify) onNotify('error', 'অর্ডার প্রক্রিয়া সম্পন্ন করতে সমস্যা হচ্ছে। আবার চেষ্টা করুন।');
    } finally {
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };

  const inputClass = (field: string) => `
    w-full bg-white/[0.03] border px-6 py-4 rounded-xl outline-none transition-all font-bengali text-white
    ${errors[field] ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-shake' : 'border-white/10 focus:border-[#bf953f]'}
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <style>{`
        @keyframes luxury-glow-error {
          0%, 100% { border-color: rgba(239, 68, 68, 0.2); }
          50% { border-color: rgba(239, 68, 68, 0.8); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        
        /* Advanced Luxury Highlight Animation for Price */
        .price-change-pulse {
          animation: price-pulse 0.7s cubic-bezier(0.19, 1, 0.22, 1);
          display: inline-block;
        }
        @keyframes price-pulse {
          0% { 
            transform: scale(1); 
            filter: brightness(1) drop-shadow(0 0 0px #bf953f);
          }
          30% { 
            transform: scale(1.12); 
            filter: brightness(2) drop-shadow(0 0 25px #bf953f);
          }
          100% { 
            transform: scale(1); 
            filter: brightness(1) drop-shadow(0 0 0px #bf953f);
          }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-16 space-y-12 animate-fade-up border-white/5 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-[0.02] select-none pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
          <span className="text-[180px] font-serif-luxury italic leading-none text-white">Legacy</span>
        </div>

        <div className="text-center space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bengali font-bold leading-tight">
            আপনার সম্পর্কের নতুন <span className="gold-gradient">অধ্যায় শুরু হোক আজই</span>
          </h2>
          <p className="text-gray-400 font-bengali text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
            "ভালোবাসায় নিজেকে হারানো নয়, নিজের ব্যক্তিত্ব কে আদর্শ করা"
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">নাম (Name) *</label>
            <input 
              type="text" 
              placeholder="আপনার নাম"
              className={inputClass('name')}
              value={formData.name}
              onChange={e => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({...errors, name: false});
              }}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">মোবাইল নম্বর *</label>
            <input 
              type="tel" 
              placeholder="০১৮XXXXXXXX"
              className={inputClass('phone')}
              value={formData.phone}
              onChange={e => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({...errors, phone: false});
              }}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">ইমেইল (ঐচ্ছিক)</label>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-xl focus:border-[#bf953f] outline-none transition-all font-serif-luxury text-white"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">এলাকা/থানা *</label>
            <input 
              type="text" 
              placeholder="আপনার এলাকা"
              className={inputClass('area')}
              value={formData.area}
              onChange={e => {
                setFormData({ ...formData, area: e.target.value });
                if (errors.area) setErrors({...errors, area: false});
              }}
            />
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">সম্পূর্ণ ঠিকানা *</label>
          <textarea 
            rows={2}
            placeholder="বাসা/রোড নম্বর, এলাকা, থানা ও জেলা"
            className={inputClass('address')}
            value={formData.address}
            onChange={e => {
              setFormData({ ...formData, address: e.target.value });
              if (errors.address) setErrors({...errors, address: false});
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">জেলা *</label>
            <input 
              type="text" 
              placeholder="আপনার জেলা"
              className={inputClass('district')}
              value={formData.district}
              onChange={e => {
                setFormData({ ...formData, district: e.target.value });
                if (errors.district) setErrors({...errors, district: false});
              }}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">কপি সংখ্যা</label>
            <div className="flex items-center gap-6">
              <button 
                type="button" 
                onClick={() => setFormData({...formData, quantity: Math.max(1, formData.quantity - 1)})} 
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#bf953f] hover:text-black transition-all"
              >—</button>
              <span className="text-2xl font-bold font-serif-luxury">{formData.quantity}</span>
              <button 
                type="button" 
                onClick={() => setFormData({...formData, quantity: formData.quantity + 1})} 
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#bf953f] hover:text-black transition-all"
              >+</button>
            </div>
          </div>
        </div>

        {/* Optional Gift Section */}
        <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl space-y-6 relative overflow-hidden z-10 group/gift transition-all duration-500 hover:border-[#bf953f]/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#bf953f]/20 flex items-center justify-center text-[#bf953f] animate-float">🎁</div>
            <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">উপহার হিসেবে পাঠাতে চান? (Gift Option)</label>
          </div>
          <div className="space-y-5">
            <input 
              type="text" 
              placeholder="উপহার প্রাপকের নাম (ঐচ্ছিক)"
              className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 rounded-xl focus:border-[#bf953f] outline-none transition-all font-bengali text-white"
              value={formData.giftName}
              onChange={e => setFormData({ ...formData, giftName: e.target.value })}
            />
            <div className="space-y-3">
              <p className="text-[10px] text-gray-400 font-bengali leading-relaxed italic opacity-80">
                বইটি কাউকে উপহার দিতে চাইলে এখানে তার নাম লিখুন, তার কাছে আপনার পাঠানো উপহারটি পৌঁছে যাবে
              </p>
              
              {formData.giftName && (
                <div className="flex items-center gap-3 mt-2 animate-fade-in">
                  <input 
                    type="checkbox" 
                    id="anonymous" 
                    checked={formData.anonymousGift}
                    onChange={e => setFormData({...formData, anonymousGift: e.target.checked})}
                    className="accent-[#bf953f] w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="anonymous" className="text-[11px] text-[#bf953f] font-bengali font-medium cursor-pointer flex items-center gap-1.5">
                    নিজের তথ্য প্রকাশ না করা (Keep it Anonymous)
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`p-8 border border-[#bf953f]/20 bg-[#bf953f]/5 rounded-3xl space-y-6 relative overflow-hidden group/seller z-10 transition-all duration-500`}>
          <label className="text-[10px] uppercase tracking-[0.6em] text-[#bf953f] font-bold block mb-2">🎁 সেলার আইডি আছে? (ঐচ্ছিক)</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative overflow-hidden rounded-xl">
              <input 
                type="text" 
                maxLength={11}
                placeholder="প্রতি বইয়ে ৩০ টাকা ডিসকাউন্ট"
                value={formData.sellerCode}
                onChange={handleSellerCodeChange}
                className={`w-full bg-white/5 border px-6 py-4 outline-none transition-all font-serif-luxury uppercase tracking-widest ${
                  validationState.status === 'valid' ? 'border-green-500' :
                  validationState.status === 'error' ? 'border-red-500' : 'border-white/10 focus:border-[#bf953f]'
                }`}
              />
              {validationState.status === 'validating' && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bf953f]/10 to-transparent animate-pulse pointer-events-none"></div>}
            </div>
            <button 
              type="button"
              onClick={handleValidateCode}
              disabled={validationState.status === 'validating'}
              className="relative px-10 py-4 bg-[#bf953f] text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 overflow-hidden"
            >
              <span className="font-bengali">যাচাই করুন</span>
            </button>
          </div>
          {validationState.message && (
            <p className={`font-bengali text-sm ${validationState.status === 'valid' ? 'text-green-400' : 'text-red-400'}`}>
              {validationState.message}
            </p>
          )}
        </div>

        <div className="space-y-6 relative z-10">
          <label className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">পেমেন্ট পদ্ধতি *</label>
          <div className="grid sm:grid-cols-3 gap-4">
            {['Bkash', 'Nagad', 'Cash on Delivery'].map(method => (
              <label key={method} className={`cursor-pointer border p-5 rounded-2xl flex items-center gap-4 transition-all ${formData.paymentMethod === method ? 'border-[#bf953f] bg-[#bf953f]/10' : 'border-white/5 hover:border-white/20'}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value={method} 
                  checked={formData.paymentMethod === method} 
                  onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="accent-[#bf953f] w-4 h-4"
                />
                <span className="font-bengali text-sm">{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Improved Luxury Price Summary Box */}
        <div className="pt-8 border-t border-white/10 space-y-10 relative z-10">
          <div className="relative group/pricebox">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#bf953f]/20 via-white/5 to-[#bf953f]/20 rounded-[2.5rem] blur-xl opacity-50"></div>
            <div className="relative bg-black/40 backdrop-blur-3xl p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
                <span className="text-8xl font-serif-luxury italic">Total</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-400 font-bengali">
                  <span className="text-sm uppercase tracking-widest opacity-60">বইয়ের মূল্য ({formData.quantity} কপি)</span>
                  <span className="text-lg">৳{regularPreOrderPrice * formData.quantity}</span>
                </div>
                
                {isDiscountApplied && (
                  <div className="flex justify-between items-center text-green-400 font-bengali animate-fade-in">
                    <span className="text-sm uppercase tracking-widest opacity-80">সেলার ডিসকাউন্ট (OAP Special)</span>
                    <span className="text-lg">- ৳{sellerDiscount}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center text-gray-400 font-bengali">
                  <span className="text-sm uppercase tracking-widest opacity-60">ডেলিভারি চার্জ (সকল ক্ষেত্রে প্রযোজ্য)</span>
                  <span className="text-lg">+ ৳{deliveryCharge}</span>
                </div>
                
                <div className="pt-6 mt-4 border-t border-white/5 flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#bf953f] uppercase tracking-[0.5em] font-bold block">Grand Total</span>
                    <h4 className="text-white font-bengali text-2xl font-bold">পরিশোধযোগ্য মূল্য</h4>
                  </div>
                  <div className="text-right">
                    {/* key={totalPrice} ensures the animation resets and triggers on every price change */}
                    <div key={totalPrice} className="price-change-pulse">
                      <span className="text-4xl sm:text-5xl font-bold gold-gradient font-bengali leading-none tracking-tighter">
                        ৳{totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <input 
              type="checkbox" 
              id="terms" 
              className={`accent-[#bf953f] w-5 h-5 cursor-pointer ${errors.agreed ? 'ring-2 ring-red-500' : ''}`} 
              checked={formData.agreed}
              onChange={e => {
                setFormData({ ...formData, agreed: e.target.checked });
                if (errors.agreed) setErrors({...errors, agreed: false});
              }}
            />
            <label htmlFor="terms" className="text-xs sm:text-sm text-gray-400 font-bengali cursor-pointer">
              আমি সকল <button type="button" onClick={onOpenTerms} className="text-[#bf953f] underline">শর্তাবলীতে</button> সম্মত আছি
            </label>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-8 bg-[#bf953f] text-black font-bold uppercase tracking-[0.6em] transition-all hover:bg-white hover:scale-[1.02] active:scale-95 disabled:opacity-50 relative group rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative z-10 font-bengali text-xl">
              {isSubmitting ? 'প্রসেসিং হচ্ছে...' : 'অর্ডার নিশ্চিত করুন'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
