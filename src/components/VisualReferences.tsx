import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { useState } from 'react';

export function VisualReferences() {
  const { language } = useLanguage();
  const { title, subtitle, films } = translations[language].visualReferences;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-5xl mb-4">
            {title}
          </h2>
          <p className="font-extralight text-sm text-[#9b7653] tracking-tight max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-lg border border-[#9b7653]/20 bg-black/40 transition-all duration-500 hover:border-[#e8d5c4]/40 hover:scale-[1.02]">
                {/* Image Container */}
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={film.image}
                    alt={`${film.title} (${film.year})`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                  <div className={`transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <p className="font-extralight text-xs text-[#9b7653] mb-2 tracking-wide">
                      {film.directors} — {film.year}
                    </p>
                  </div>
                  
                  <h3 className="heading-bold text-2xl text-[#e8d5c4] mb-3">
                    {film.title}
                  </h3>
                  
                  <div className={`transition-all duration-500 ${hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <p className="font-extralight text-sm text-[#9b7653] leading-relaxed">
                      {film.description}
                    </p>
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
