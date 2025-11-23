import { useState, useEffect } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-6 md:bottom-8 right-4 md:right-8 lg:right-16 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="group flex flex-col items-center justify-center min-w-[56px] min-h-[56px] md:backdrop-blur-none md:bg-transparent bg-black/60 backdrop-blur-sm border border-[#9b7653]/40 hover:border-[#e8d5c4] hover:bg-black/80 transition-all duration-300 md:shadow-none shadow-lg hover:shadow-xl touch-manipulation"
        aria-label="Voltar ao topo"
      >
        <span className="nyx-h2 text-[#e8d5c4] group-hover:text-white transition-colors leading-none">
          ↑
        </span>
        <span className="md:hidden nyx-meta text-[10px] mt-0.5 text-[#9b7653] group-hover:text-[#e8d5c4] transition-colors">
          TOPO
        </span>
      </button>
    </div>
  );
}
