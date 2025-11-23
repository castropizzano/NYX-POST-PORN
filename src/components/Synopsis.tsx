import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Synopsis() {
  const { language } = useLanguage();
  const t = translations[language].synopsis;

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <h2 className="nyx-h2 mb-4 md:mb-8">{t.title}</h2>
          <p className="nyx-small text-left md:text-justified leading-relaxed md:leading-normal">
            {t.text}
          </p>
        </div>
      </div>
    </section>
  );
}
