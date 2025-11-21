import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Filmmakers() {
  const { language } = useLanguage();
  const { title, filmmakers } = translations[language].filmmakers;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filmmakers.map((filmmaker, index) => (
            <div key={index} className="space-y-3">
              <div>
                <h3 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">
                  {filmmaker.name}
                </h3>
                <p className="font-extralight leading-relaxed tracking-tight text-[#9b7653] italic mb-4 text-xs">
                  {filmmaker.role}
                </p>
              </div>
              <p className="font-extralight leading-relaxed text-sm tracking-tight text-[#9b7653] text-justify">
                {filmmaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
