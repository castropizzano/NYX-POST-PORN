import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Concept() {
  const { language } = useLanguage();
  const t = translations[language].concept;

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <h2 className="nyx-h2 mb-6 md:mb-8">
            {t.title}
          </h2>
          <div className="space-y-6 md:space-y-8">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="nyx-small text-justified">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <h3 className="nyx-h2 mb-6 md:mb-8">{t.nameSection.title}</h3>
          <div className="space-y-4 md:space-y-6">
            {t.nameSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="nyx-small text-justified">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
