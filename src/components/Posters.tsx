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
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">Posters</h2>

        <div className="relative">
          <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#1a1a1a]">
            <img
              src={posters[currentIndex].src}
              alt={posters[currentIndex].alt}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/60 text-[#e8d5c4] hover:text-white hover:bg-black/80 transition-all backdrop-blur-sm border border-[#9b7653]/20 hover:border-[#e8d5c4]/40 rounded text-sm font-mono"
            aria-label="Previous poster"
          >
            ←
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/60 text-[#e8d5c4] hover:text-white hover:bg-black/80 transition-all backdrop-blur-sm border border-[#9b7653]/20 hover:border-[#e8d5c4]/40 rounded text-sm font-mono"
            aria-label="Next poster"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
