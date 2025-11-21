import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Download, FileText } from 'lucide-react';
import { useState } from 'react';

export function References() {
  const { language } = useLanguage();
  const { title, stateOfArt, references } = translations[language].references;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-6xl mx-auto">
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
              className="group relative border border-[#9b7653]/20 rounded-lg p-6 bg-black/40 transition-all duration-500 hover:border-[#e8d5c4]/40 hover:bg-black/60"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Header com Autor e PDF */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <FileText size={20} className="text-[#9b7653] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="nyx-h2 text-lg">{ref.author}</h4>
                    <em className="nyx-xs block mt-1 opacity-80">{ref.work}</em>
                  </div>
                </div>
                
                {ref.pdf && (
                  <a
                    href={ref.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-md bg-[#9b7653]/10 text-[#9b7653] hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] transition-all duration-300 border border-[#9b7653]/20 hover:border-[#e8d5c4]/40"
                    aria-label={`Download PDF: ${ref.work}`}
                  >
                    <Download size={20} />
                  </a>
                )}
              </div>

              {/* Descrição com Expansão no Hover */}
              <div className={`transition-all duration-500 overflow-hidden ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-24 opacity-70'}`}>
                <p className="nyx-small">
                  {ref.description} {ref.relation}
                </p>
              </div>

              {/* Indicador de "Ler Mais" */}
              {hoveredIndex !== index && (
                <div className="absolute bottom-4 right-6 text-[#9b7653] text-xs opacity-50">
                  Hover para ler mais →
                </div>
              )}

              {/* Borda Animada */}
              <div className={`absolute inset-0 border-2 border-[#e8d5c4]/0 rounded-lg transition-all duration-500 pointer-events-none ${hoveredIndex === index ? 'border-[#e8d5c4]/30' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
