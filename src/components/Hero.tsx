import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Hero() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/nyx-hero.jpg"
        alt="NYX-POST-PORN"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Badge FACC - Top Right - Absolute */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 z-30">
        <img
          src="/images/facc-badge.png"
          alt="FACC 2025 - Selección Oficial"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-0">
          <div>
            {/* Badge PT/EN - QUADRADO - Acima do título */}
            <div className="mb-4">
              <div className="inline-flex gap-0 items-center backdrop-blur-sm bg-black/40 border border-[#9b7653]/30 rounded-md px-4 py-2 hover:border-[#e8d5c4]/50 transition-all duration-300">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 text-sm font-light transition-all duration-300 rounded-md ${
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
                  className={`px-3 py-1 text-sm font-light transition-all duration-300 rounded-md ${
                    language === 'en'
                      ? 'bg-[#9b7653]/20 text-[#e8d5c4]'
                      : 'text-[#9b7653] hover:text-[#e8d5c4]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <h1 className="nyx-h2 mb-1">
              NYX-POST-PORN
            </h1>
            <p className="nyx-xs">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
