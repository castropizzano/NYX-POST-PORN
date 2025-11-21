import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function References() {
  const { language } = useLanguage();
  const { title, stateOfArt, references } = translations[language].references;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 bg-[#9b7653]/5 border border-[#9b7653]/20 mb-8">
          <h2 className="nyx-h2">
            {title} | {stateOfArt}
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="border border-[#9b7653]/20 rounded-lg p-6 bg-black/40"
            >
              {/* Header com Autor e Botões */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h4 className="nyx-h2">{ref.author}</h4>
                  <p className="nyx-xs mt-1">{ref.work}</p>
                </div>
                
                <div className="flex gap-2">
                  {ref.pdf && (
                    <a
                      href={ref.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-3 py-1.5 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-xs font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105"
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
                      className="flex-shrink-0 px-3 py-1.5 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-xs font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105"
                      aria-label={`IMDb: ${ref.work}`}
                    >
                      IMDb
                    </a>
                  )}
                </div>
              </div>

              {/* Descrição */}
              <div>
                <p className="font-light text-[14.5px] leading-[1.6] text-[#9b7653] text-justify" style={{ fontFamily: 'TT Commons, system-ui, sans-serif' }}>
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
