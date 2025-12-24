
import React from 'react';

export const SocialShare: React.FC = () => {
  const shareUrl = window.location.href;
  const shareTitle = "অনুরাগের আগে ও পরে - আশিকুজ্জামান এমকে-র এক অনন্য সৃষ্টি।";
  const shareText = `ভালোবাসার ৪১টি শাশ্বত আইন নিয়ে লেখা আশিকুজ্জামান এমকে-র "অনুরাগের আগে ও পরে" বইটি সম্পর্কে জানুন।\n\nলিঙ্ক: ${shareUrl}`;

  const sharePlatforms = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.903 3.003 1.387 4.793 1.388 5.403 0 9.8-4.397 9.802-9.8.001-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.311-2.873-6.93-2.873-5.405 0-9.803 4.398-9.806 9.801 0 1.904.508 3.57 1.48 5.105l-1.006 3.675 3.763-1.011zm11.233-5.003c-.272-.136-1.61-.794-1.86-.885-.25-.091-.432-.136-.613.136-.182.273-.704.885-.863 1.067-.158.182-.317.204-.589.068-.272-.136-1.15-.424-2.19-1.353-.809-.721-1.355-1.611-1.513-1.884-.158-.273-.017-.42.12-.555.123-.122.272-.318.408-.477.136-.159.182-.272.272-.454.091-.181.045-.341-.023-.477-.068-.136-.613-1.477-.84-2.022-.221-.535-.463-.459-.613-.466l-.523-.007c-.182 0-.477.068-.727.341-.25.272-.954.932-.954 2.272 0 1.341.977 2.636 1.114 2.818.136.182 1.921 2.934 4.653 4.114.65.28 1.157.447 1.553.573.653.207 1.248.178 1.717.108.523-.078 1.61-.659 1.838-1.295.227-.636.227-1.181.159-1.295-.068-.113-.25-.181-.522-.317z" />
        </svg>
      ),
      url: `https://wa.me/?text=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0C5.347 0 0 5.347 0 11.944s5.347 11.944 11.944 11.944 11.944-5.347 11.944-11.944S18.541 0 11.944 0zm5.206 16.561c-.194.242-.452.338-.726.338-.21 0-.42-.057-.613-.162l-3.323-1.848-1.532 1.484c-.178.172-.435.258-.693.258-.226 0-.452-.065-.645-.194-.29-.194-.484-.484-.516-.806L8.145 10.13c-.032-.355.097-.71.355-.935.242-.226.58-.29.887-.194l6.903 2.145c.419.129.742.452.839.871.097.419-.032.839-.338 1.13l1.355 3.414z" />
        </svg>
      ),
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-6 reveal">
      <div className="flex flex-col items-center">
        <h4 className="text-[#bf953f] font-serif-luxury uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Spread the Philosophy</h4>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#bf953f]/40 to-transparent"></div>
      </div>
      <div className="flex gap-6">
        {sharePlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-[#bf953f]/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#bf953f] transition-all duration-700 hover:scale-110 active:scale-95 luxury-shimmer group relative overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_rgba(191,149,63,0.3)]"
            aria-label={`Share on ${platform.name}`}
          >
            <div className="absolute inset-0 bg-[#bf953f]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
