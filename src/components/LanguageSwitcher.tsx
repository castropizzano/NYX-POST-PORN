import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-0 right-0 left-0 z-50 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 pointer-events-auto">
          {/* Badge - Fixed on mobile, right side on desktop */}
          <div className="w-32 h-32 md:w-48 md:h-48 md:order-2">
            <img
              src="/images/facc-laurel.png"
              alt="FACC 2025 Seleção Oficial"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Language Switcher - Fixed on mobile, left side on desktop */}
          <div className="flex gap-3 items-center md:order-1">
            <button
              onClick={() => setLanguage('pt')}
              className={`text-sm font-light transition-colors ${
                language === 'pt'
                  ? 'text-[#e8d5c4]'
                  : 'text-[#9b7653] hover:text-[#e8d5c4]'
              }`}
            >
              PT
            </button>
            <span className="text-[#9b7653]">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-light transition-colors ${
                language === 'en'
                  ? 'text-[#e8d5c4]'
                  : 'text-[#9b7653] hover:text-[#e8d5c4]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
