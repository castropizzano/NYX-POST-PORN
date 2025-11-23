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
      {/* Gradient Overlay - mais forte no mobile para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black md:from-black/20 md:via-transparent md:to-black" />

      {/* Badge FACC - Top Right - Absolute - otimizado para mobile */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-10 z-30">
        <img
          src="/images/facc-badge.png"
          alt="FACC 2025 - Selección Oficial"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-0">
          <div>
            {/* Badge PT/EN - QUADRADO - Acima do título - touch targets otimizados */}
            <div className="mb-3 md:mb-4">
              <div className="inline-flex gap-0 items-center backdrop-blur-sm bg-black/60 md:bg-black/40 border border-nyx-gold/40 md:border-nyx-gold/30 rounded-md px-3 py-1.5 md:px-4 md:py-2 hover:border-nyx-cream/50 transition-all duration-300">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-2 md:px-3 md:py-1 text-xs md:text-sm font-light transition-all duration-300 rounded-md min-w-[48px] min-h-[48px] md:min-w-0 md:min-h-0 flex items-center justify-center touch-manipulation ${
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
                  className={`px-3 py-2 md:px-3 md:py-1 text-xs md:text-sm font-light transition-all duration-300 rounded-md min-w-[48px] min-h-[48px] md:min-w-0 md:min-h-0 flex items-center justify-center touch-manipulation ${
                    language === 'en'
                      ? 'bg-nyx-gold/20 text-nyx-cream'
                      : 'text-nyx-gold hover:text-nyx-cream'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <h1 className="nyx-h2 mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              NYX-POST-PORN
            </h1>
            <p className="nyx-xs drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
