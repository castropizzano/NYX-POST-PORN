import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { useIsMobile } from '@/hooks/use-mobile';

export function Hero() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].hero;
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden flex flex-col md:h-screen">
      {/* Poster - sem overlay no mobile */}
      <div className="relative w-full md:h-screen">
        <img
          src={isMobile ? "/images/nyx-hero-mobile.png" : "/images/nyx-hero.jpg"}
          alt="NYX-POST-PORN"
          className="w-full h-full object-cover md:absolute md:inset-0"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient Overlay - apenas no desktop */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

        {/* Badge FACC - apenas desktop - alinhado com container */}
        <div className="hidden md:block absolute top-8 lg:top-10 left-0 right-0 z-30">
          <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16 flex justify-end">
            <img
              src="/images/facc-badge.png"
              alt="FACC 2025 - Selección Oficial"
              className="w-40 h-40 lg:w-48 lg:h-48 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Conteúdo - desktop no bottom da imagem */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 pb-12 lg:pb-16">
          <div className="max-w-6xl mx-auto px-12 lg:px-0">
            <div>
              {/* Badge PT/EN */}
              <div className="mb-4">
                <div className="inline-flex gap-0 items-center backdrop-blur-sm bg-black/40 border border-nyx-gold/30 rounded-md px-4 py-2 hover:border-nyx-cream/50 transition-all duration-300">
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`px-3 py-1 text-sm font-light transition-all duration-300 rounded-md ${
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
                    className={`px-3 py-1 text-sm font-light transition-all duration-300 rounded-md ${
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
      </div>

      {/* Conteúdo mobile - abaixo do poster */}
      <div className="md:hidden bg-black px-4 py-6 flex justify-center">
        {/* Badge PT/EN - mobile centralizado */}
        <div className="inline-flex gap-0 items-center bg-black border border-nyx-gold/40 rounded-md px-3 py-1.5">
          <button
            onClick={() => setLanguage('pt')}
            className={`px-3 py-2 text-xs font-light transition-all duration-300 rounded-md min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation ${
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
            className={`px-3 py-2 text-xs font-light transition-all duration-300 rounded-md min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation ${
              language === 'en'
                ? 'bg-nyx-gold/20 text-nyx-cream'
                : 'text-nyx-gold hover:text-nyx-cream'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </section>
  );
}
