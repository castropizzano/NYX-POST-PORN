import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { useState } from 'react';

export function VisualReferences() {
  const { language } = useLanguage();
  const { title, subtitle, films } = translations[language].visualReferences;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20 mb-8">
          <h2 className="nyx-h2">
            {title} | Diálogos com NYX-POST-PORN
          </h2>
        </div>

        {/* Mobile Optimized Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              className="group relative"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="relative overflow-hidden rounded-lg border border-[#9b7653]/20 bg-black/40 transition-all duration-500 hover:border-[#e8d5c4]/40 cursor-pointer touch-manipulation">
                {/* Image Container */}
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={film.image}
                    alt={`${film.title} (${film.year})`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-105"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay - Always visible on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay - Always accessible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-transform duration-500">
                  <div className="mb-2">
                    <p className="nyx-xs">
                      {film.directors} — {film.year}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="nyx-h2 flex-1">
                      {film.title}
                    </h3>
                    
                    {film.imdb && (
                      <a
                        href={film.imdb}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 min-h-[44px] px-4 py-2 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-sm font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105 touch-manipulation active:scale-95"
                        aria-label={`IMDb: ${film.title}`}
                      >
                        IMDb
                      </a>
                    )}
                  </div>
                  
                  {/* Description - Expandable on mobile, hover on desktop */}
                  <div className={`transition-all duration-500 ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:group-hover:max-h-96 md:group-hover:opacity-100'} overflow-hidden`}>
                    <p className="nyx-small text-justified">
                      {film.description}
                    </p>
                  </div>
                  
                  {/* Tap to expand indicator (mobile only) */}
                  <div className="md:hidden mt-2 text-center">
                    <span className="nyx-meta text-xs">
                      {expandedIndex === index ? '▲ Menos' : '▼ Mais'}
                    </span>
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div className={`absolute inset-0 border-2 border-[#e8d5c4]/0 rounded-lg transition-all duration-500 pointer-events-none ${expandedIndex === index ? 'border-[#e8d5c4]/30' : 'md:group-hover:border-[#e8d5c4]/30'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
