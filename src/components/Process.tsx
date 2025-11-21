import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Process() {
  const { language } = useLanguage();
  const t = translations[language].process;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="nyx-h2 mb-8">{t.title}</h2>
        
        <div className="space-y-8">
          <p className="nyx-body text-justified">{t.paragraph1}</p>
          <p className="nyx-body text-justified">{t.paragraph2}</p>
          <p className="nyx-body text-justified">{t.paragraph3}</p>
        </div>

        <div className="mt-16 space-y-12">
          <div className="p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
            <h3 className="nyx-h2 mb-8">{t.visualStyle.title}</h3>
            <div className="space-y-4">
              <p className="nyx-body">{t.visualStyle.lighting}</p>
              <p className="nyx-body">{t.visualStyle.cameraMovement}</p>
              <p className="nyx-body">{t.visualStyle.sounds}</p>
            </div>
          </div>

          <div className="p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
            <h3 className="nyx-h2 mb-8">{t.performanceStages.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="nyx-body">1. {t.performanceStages.stage1}</p>
              <p className="nyx-body">2. {t.performanceStages.stage2}</p>
              <p className="nyx-body">3. {t.performanceStages.stage3}</p>
              <p className="nyx-body">4. {t.performanceStages.stage4}</p>
              <p className="nyx-body">5. {t.performanceStages.stage5}</p>
              <p className="nyx-body">6. {t.performanceStages.stage6}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
