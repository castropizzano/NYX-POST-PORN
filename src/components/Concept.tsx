import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Concept() {
  const { language } = useLanguage();
  const t = translations[language].concept;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">
          {t.title}
        </h2>

        <div className="space-y-8 body-regular text-[#9b7653] font-extralight leading-[0.55rem] text-sm tracking-tight">
          {t.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-justified text-justify mx-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <h3 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">{t.nameSection.title}</h3>
          <div className="space-y-6 body-regular text-[#9b7653] font-extralight leading-[0.55rem] text-sm tracking-tight">
            {t.nameSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-justified text-justify mx-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
