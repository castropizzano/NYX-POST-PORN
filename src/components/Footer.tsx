import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-8 md:py-16 px-4 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="/images/facc-badge.png"
              alt="FACC 2025 - Selección Oficial"
              className="w-16 h-16 object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
