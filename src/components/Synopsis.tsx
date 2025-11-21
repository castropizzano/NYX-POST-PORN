import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Synopsis() {
  const { language } = useLanguage();
  const t = translations[language].synopsis;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">{t.title}</h2>
        <p className="body-regular text-[#9b7653] leading-relaxed text-justified text-justify mx-0 font-extralight leading-[0.55rem] text-sm tracking-tight">
          {t.text}
        </p>
      </div>
    </section>
  );
}
