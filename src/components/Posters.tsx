import { useState } from 'react';

const posters = [
  { src: '/images/poster-01.png', alt: 'NYX-POST-PORN Poster 1' },
  { src: '/images/poster-02.png', alt: 'NYX-POST-PORN Poster 2' },
  { src: '/images/poster-03.png', alt: 'NYX-POST-PORN Poster 3' },
  { src: '/images/poster-04.png', alt: 'NYX-POST-PORN Poster 4' },
  { src: '/images/poster-05.png', alt: 'NYX-POST-PORN Poster 5' },
  { src: '/images/poster-06.png', alt: 'NYX-POST-PORN Poster 6' }
];

export function Posters() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20">
          <h2 className="nyx-h2 mb-6 md:mb-8">Posters</h2>
          
          <div className="relative touch-manipulation">
            <div className="relative w-full flex items-center justify-center bg-black">
              <img
                src={posters[currentIndex].src}
                alt={posters[currentIndex].alt}
                className="w-full max-h-screen object-contain"
                loading="lazy"
              />
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-12 md:h-12 flex items-center justify-center bg-black/80 text-[#e8d5c4] hover:text-white hover:bg-black/90 transition-all backdrop-blur-sm border border-[#9b7653]/40 hover:border-[#e8d5c4]/60 rounded-md text-2xl md:text-xl font-mono touch-manipulation active:scale-95 shadow-lg"
              aria-label="Previous poster"
            >
              ←
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-12 md:h-12 flex items-center justify-center bg-black/80 text-[#e8d5c4] hover:text-white hover:bg-black/90 transition-all backdrop-blur-sm border border-[#9b7653]/40 hover:border-[#e8d5c4]/60 rounded-md text-2xl md:text-xl font-mono touch-manipulation active:scale-95 shadow-lg"
              aria-label="Next poster"
            >
              →
            </button>
          </div>

          {/* Indicadores de posição - Mobile Optimized */}
          <div className="flex justify-center gap-3 mt-6">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`min-w-[44px] min-h-[12px] rounded-full transition-all touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-[#e8d5c4] w-12 md:w-8' 
                    : 'bg-[#9b7653]/40 hover:bg-[#9b7653]/60 w-3 md:w-2'
                }`}
                aria-label={`Go to poster ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
