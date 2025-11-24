import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { useState } from 'react';

export function VisualReferences() {
  const { language } = useLanguage();
  const { title, subtitle, films } = translations[language].visualReferences;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20 mb-8">
          <h2 className="nyx-h2">
            <span className="md:hidden">{title}</span>
            <span className="hidden md:inline">{title} | Diálogos com NYX-POST-PORN</span>
          </h2>
        </div>

        {/* Grid - 1 coluna no mobile, 3 no desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              className="group relative touch-manipulation"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="relative overflow-hidden rounded-lg border border-[#9b7653]/20 bg-black/40 transition-all duration-500 hover:border-[#e8d5c4]/40">
                {/* Image Container */}
                <div className="aspect-[2/3] overflow-hidden relative">
                  <img
                    src={film.image}
                    alt={`${film.title} (${film.year})`}
                    className={`w-full h-full object-cover transition-all duration-500 grayscale ${
                      expandedIndex === index ? 'grayscale-0 brightness-105' : 'md:group-hover:grayscale-0 md:group-hover:brightness-105'
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay - sempre visível no mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent md:opacity-40 md:group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Título e Meta - sempre visível no mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="mb-2 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:translate-y-4 md:opacity-0">
                      <p className="nyx-xs mb-2">
                        {film.directors} — {film.year}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="nyx-h2">
                        {film.title}
                      </h3>
                      
                      {film.imdb && (
                        <a
                          href={film.imdb}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-shrink-0 px-3 py-2 min-h-[48px] min-w-[48px] md:min-h-0 md:min-w-0 flex items-center justify-center rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-xs font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105 touch-manipulation"
                          aria-label={`IMDb: ${film.title}`}
                        >
                          IMDb
                        </a>
                      )}
                    </div>
                    
                    {/* Descrição - expansível no mobile, hover no desktop */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedIndex === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 md:max-h-40 md:group-hover:max-h-96 md:group-hover:opacity-100'
                    }`}>
                      <p className="nyx-small text-justify md:text-left leading-relaxed">
                        {film.description}
                      </p>
                    </div>
                  </div>

                  {/* Indicador de expansão (mobile only) */}
                  <div className="md:hidden absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-[#9b7653]/30 flex items-center justify-center touch-manipulation">
                    <span className={`text-[#e8d5c4] text-lg transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div className={`absolute inset-0 border-2 border-[#e8d5c4]/0 rounded-lg transition-all duration-500 pointer-events-none ${hoveredIndex === index ? 'border-[#e8d5c4]/30' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
