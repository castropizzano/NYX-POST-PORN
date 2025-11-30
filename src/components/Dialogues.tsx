import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Dialogues() {
  const { language } = useLanguage();
  const t = translations[language].dialogues;

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="nyx-h2 mb-6 md:mb-8">{t.title}</h2>
          <div className="space-y-4 p-4 md:p-6 bg-[#9b7653]/5 border border-[#9b7653]/20">
            <p className="nyx-small text-justify leading-relaxed md:leading-normal">
              {t.intro}
            </p>
            <p className="nyx-small text-justify leading-relaxed md:leading-normal italic text-[#9b7653]">
              {t.context}
            </p>
          </div>
        </div>

        {/* Interview Section */}
        <div className="space-y-6">
          <h3 className="nyx-h3 mb-6 text-[#9b7653]">{t.interviewTitle}</h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {t.questions.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#9b7653]/20 bg-[#9b7653]/5 rounded-none overflow-hidden"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 text-left hover:no-underline hover:bg-[#9b7653]/10 transition-colors">
                  <span className="nyx-small font-bold text-[#9b7653] pr-4">
                    {index + 1}. {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4">
                  <div className="pt-4 border-t border-[#9b7653]/10">
                    <p className="nyx-small text-justify leading-relaxed md:leading-normal text-white/90">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Note Section */}
        <div className="mt-12 p-4 md:p-6 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <p className="nyx-small text-justify leading-relaxed md:leading-normal text-white/70 italic">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
