import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  const content = {
    pt: {
      rights: "© 2025 NYX-POST-PORN. Todos os direitos reservados.",
      selection: "Seleção Oficial FACC* 2025"
    },
    en: {
      rights: "© 2025 NYX-POST-PORN. All rights reserved.",
      selection: "Official Selection FACC* 2025"
    }
  };

  const t = content[language];

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="nyx-small mb-8">
            {t.rights}
          </p>
          <div className="flex justify-center">
            <img
              src="/images/facc-badge.png"
              alt="FACC 2025 - Selección Oficial"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
