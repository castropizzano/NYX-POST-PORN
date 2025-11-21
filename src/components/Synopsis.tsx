import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Synopsis() {
  const { language } = useLanguage();
  const t = translations[language].synopsis;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="nyx-h2 mb-8">{t.title}</h2>
        <p className="nyx-small text-justified">
          {t.text}
        </p>
      </div>
    </section>
  );
}
