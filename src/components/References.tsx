import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function References() {
  const { language } = useLanguage();
  const { title, stateOfArt, references } = translations[language].references;

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20 mb-6 md:mb-8">
          <h2 className="nyx-h2">
            {title} | {stateOfArt}
          </h2>
        </div>

        {/* Grid de Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {references.map((ref, index) => (
            <div
              key={index}
              className="border border-[#9b7653]/20 rounded-lg p-6 bg-black/40"
            >
              {/* Header com Autor e Botões */}
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h4 className="nyx-h2 break-words">{ref.author}</h4>
                  <p className="nyx-xs mt-2 break-words">{ref.work}</p>
                </div>
                
                <div className="flex gap-3">
                  {ref.pdf && (
                    <a
                      href={ref.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[48px] flex items-center justify-center px-4 py-3 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-sm font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105 touch-manipulation active:scale-95"
                      aria-label={`Download PDF: ${ref.work}`}
                    >
                      PDF
                    </a>
                  )}
                  
                  {ref.imdb && (
                    <a
                      href={ref.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[48px] flex items-center justify-center px-4 py-3 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-sm font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105 touch-manipulation active:scale-95"
                      aria-label={`IMDb: ${ref.work}`}
                    >
                      IMDb
                    </a>
                  )}
                </div>
              </div>

              {/* Descrição */}
              <div>
                <p className="nyx-small text-justified">
                  {ref.description} {ref.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
