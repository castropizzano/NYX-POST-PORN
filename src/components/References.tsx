import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function References() {
  const { language } = useLanguage();
  const { title, stateOfArt, references } = translations[language].references;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#9b7653]/20 rounded-lg p-8 md:p-12 bg-black/40">
          <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">
            {title}
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">{stateOfArt}</h3>
              <ul className="space-y-8 font-extralight leading-relaxed text-sm tracking-tight text-[#9b7653]">
                {references.map((ref, index) => (
                  <li key={index} className="text-justify space-y-2">
                    <strong className="text-[#e8d5c4] block">{ref.author}</strong>
                    <em className="block text-[#e8d5c4]/80">{ref.work}:</em>
                    <p>{ref.description} {ref.relation}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
