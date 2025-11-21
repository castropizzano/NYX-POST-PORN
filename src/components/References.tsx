import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function References() {
  const { language } = useLanguage();
  const { title, stateOfArt, references } = translations[language].references;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="nyx-h2 mb-8">
          {title}
        </h2>

        <div className="mb-6">
          <h3 className="nyx-h2 mb-12">{stateOfArt}</h3>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="border border-[#9b7653]/20 rounded-lg p-6 bg-black/40"
            >
              {/* Header com Autor e PDF */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h4 className="nyx-h2 text-sm uppercase">{ref.author}</h4>
                  <p className="nyx-xs block mt-1 opacity-80 uppercase">{ref.work}</p>
                </div>
                
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
              </div>

              {/* Descrição */}
              <div>
                <p className="nyx-small text-justify">
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
