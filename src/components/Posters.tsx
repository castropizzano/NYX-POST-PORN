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
                className="w-full max-h-[70vh] md:max-h-screen object-contain"
                loading="lazy"
              />
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-auto md:h-auto md:px-3 md:py-2 flex items-center justify-center bg-black/80 text-[#e8d5c4] hover:text-white hover:bg-black/90 transition-all backdrop-blur-sm border border-[#9b7653]/30 hover:border-[#e8d5c4]/40 rounded text-xl md:text-sm font-mono touch-manipulation shadow-lg"
              aria-label="Previous poster"
            >
              ←
            </button>

            <button
              onClick={goToNext}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-auto md:h-auto md:px-3 md:py-2 flex items-center justify-center bg-black/80 text-[#e8d5c4] hover:text-white hover:bg-black/90 transition-all backdrop-blur-sm border border-[#9b7653]/30 hover:border-[#e8d5c4]/40 rounded text-xl md:text-sm font-mono touch-manipulation shadow-lg"
              aria-label="Next poster"
            >
              →
            </button>
          </div>

          {/* Indicadores de posição - maiores no mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-all touch-manipulation min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 flex items-center justify-center ${
                  index === currentIndex 
                    ? 'bg-[#e8d5c4] md:w-6' 
                    : 'bg-[#9b7653]/40 hover:bg-[#9b7653]/60'
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
