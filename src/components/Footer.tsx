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
          <p className="font-extralight leading-relaxed text-sm tracking-tight text-[#9b7653] mb-4">
            {t.rights}
          </p>
          <p className="font-extralight text-xs text-[#9b7653]/60">
            {t.selection}
          </p>
        </div>
      </div>
    </footer>
  );
}
