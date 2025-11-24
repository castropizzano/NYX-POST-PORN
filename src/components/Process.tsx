import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
export function Process() {
  const {
    language
  } = useLanguage();
  const t = translations[language].process;
  return <section className="py-16 md:py-24 px-4 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <h2 className="nyx-h2 mb-4 md:mb-8">{t.title}</h2>
          <div className="space-y-4 md:space-y-8">
            <p className="nyx-small text-justify leading-relaxed md:leading-normal">{t.paragraph1}</p>
          </div>
        </div>

        <div className="mt-8 md:mt-16 space-y-6 md:space-y-12">
          <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
            <h3 className="nyx-h2 mb-4 md:mb-8">{t.visualStyle.title}</h3>
            <div className="space-y-4">
              <p className="nyx-small text-justify leading-relaxed md:leading-normal">{t.visualStyle.text}</p>
            </div>
          </div>

          <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
            <h3 className="nyx-h2 mb-4 md:mb-8">{t.performanceStages.title}</h3>
            <div className="space-y-4">
              <p className="nyx-small text-justify leading-relaxed md:leading-normal">{t.performanceStages.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}