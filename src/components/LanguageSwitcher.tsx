import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-[calc(theme(spacing.6)+5rem)] md:bottom-[calc(theme(spacing.12)+5rem)] left-4 md:left-12 lg:left-16 z-40">
      <div className="inline-flex gap-0 items-center backdrop-blur-sm bg-black/40 border border-[#9b7653]/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:border-[#e8d5c4]/50 transition-all duration-300">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-light transition-all duration-300 rounded-full touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${
            language === 'pt'
              ? 'bg-[#9b7653]/20 text-[#e8d5c4]'
              : 'text-[#9b7653] hover:text-[#e8d5c4]'
          }`}
        >
          PT
        </button>
        <span className="text-[#9b7653] px-0.5 md:px-1">|</span>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-light transition-all duration-300 rounded-full touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${
            language === 'en'
              ? 'bg-[#9b7653]/20 text-[#e8d5c4]'
              : 'text-[#9b7653] hover:text-[#e8d5c4]'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
