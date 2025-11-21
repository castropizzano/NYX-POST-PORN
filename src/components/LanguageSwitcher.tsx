import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-0 left-0 z-50 pointer-events-none">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-end gap-4 pointer-events-auto ml-auto w-fit -mr-20">
          <div className="flex gap-3 items-center mx-[29px]">
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
          <div className="w-48 h-48 relative">
            <img
              src="/images/facc-laurel.png"
              alt="FACC 2025 Seleção Oficial"
              className="w-full h-full object-contain px-0 mx-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
