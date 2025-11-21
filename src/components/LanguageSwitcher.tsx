import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-[calc(theme(spacing.8)+5rem)] md:bottom-[calc(theme(spacing.12)+5rem)] left-6 md:left-12 lg:left-16 z-40">
      <div className="inline-flex gap-0 items-center backdrop-blur-sm bg-black/40 border border-[#9b7653]/30 rounded-full px-4 py-2 hover:border-[#e8d5c4]/50 transition-all duration-300">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 text-sm font-light transition-all duration-300 rounded-full ${
            language === 'pt'
              ? 'bg-[#9b7653]/20 text-[#e8d5c4]'
              : 'text-[#9b7653] hover:text-[#e8d5c4]'
          }`}
        >
          PT
        </button>
        <span className="text-[#9b7653] px-1">|</span>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-light transition-all duration-300 rounded-full ${
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
