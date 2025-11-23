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
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Badge FACC - Top Right - Absolute */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-10 z-30">
        <img
          src="/images/facc-badge.png"
          alt="FACC 2025 - Selección Oficial"
          className="w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-6 md:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-0">
          <div>
            {/* Badge PT/EN - QUADRADO - Acima do título */}
            <div className="mb-3 md:mb-4">
              <div className="inline-flex gap-0 items-center backdrop-blur-sm bg-black/40 border border-nyx-gold/30 rounded-md px-3 py-1.5 md:px-4 md:py-2 hover:border-nyx-cream/50 transition-all duration-300">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-light transition-all duration-300 rounded-md ${
                    language === 'pt'
                      ? 'bg-nyx-gold/20 text-nyx-cream'
                      : 'text-nyx-gold hover:text-nyx-cream'
                  }`}
                >
                  PT
                </button>
                <span className="text-nyx-gold px-1">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-light transition-all duration-300 rounded-md ${
                    language === 'en'
                      ? 'bg-nyx-gold/20 text-nyx-cream'
                      : 'text-nyx-gold hover:text-nyx-cream'
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
