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
    <div className={`fixed top-auto bottom-8 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex justify-end">
        <button
          onClick={scrollToTop}
          className="text-[#e8d5c4] hover:text-white transition-colors text-2xl"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
