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
    <div className={`fixed bottom-6 md:bottom-8 right-4 md:right-0 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <div className="md:max-w-6xl md:mx-auto md:px-4 md:px-12 lg:px-16 md:flex md:justify-end">
        <button
          onClick={scrollToTop}
          className="w-14 h-14 md:w-auto md:h-auto md:min-w-[44px] md:min-h-[44px] rounded-full md:rounded-none bg-[#9b7653]/90 md:bg-transparent border-2 border-[#e8d5c4]/40 md:border-0 backdrop-blur-sm md:backdrop-blur-none shadow-lg md:shadow-none flex items-center justify-center nyx-h2 text-[#e8d5c4] hover:text-white hover:bg-[#e8d5c4]/20 md:hover:bg-transparent hover:border-[#e8d5c4] transition-all touch-manipulation"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
