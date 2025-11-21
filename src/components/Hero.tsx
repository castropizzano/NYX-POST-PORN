import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/nyx-hero.jpg"
        alt="NYX-POST-PORN"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-0">
          <div>
            <h1 className="nyx-h1 mb-4">
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
