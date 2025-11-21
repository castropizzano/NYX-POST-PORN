import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface AgeGateProps {
  isOpen: boolean;
  onVerify: () => void;
}

export default function AgeGate({ isOpen, onVerify }: AgeGateProps) {
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].ageGate;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmed && email) {
      onVerify();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md bg-black border border-[#9b7653] text-[#e8d5c4] rounded-none"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2 text-sm">
          <button
            onClick={() => setLanguage('pt')}
            className={`transition-colors ${
              language === 'pt' ? 'text-[#e8d5c4]' : 'text-[#9b7653] hover:text-[#e8d5c4]'
            }`}
          >
            PT
          </button>
          <span className="text-[#9b7653]">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`transition-colors ${
              language === 'en' ? 'text-[#e8d5c4]' : 'text-[#9b7653] hover:text-[#e8d5c4]'
            }`}
          >
            EN
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight">{t.title}</h2>
            <p className="text-sm text-[#9b7653]">{t.subtitle}</p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-justify">
            <p className="text-xs">{t.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black border-[#9b7653] text-[#e8d5c4] placeholder:text-[#9b7653]/50 rounded-none"
              />
            </div>

            <Button
              type="submit"
              disabled={!confirmed || !email}
              className="w-full bg-[#9b7653] hover:bg-[#7d5d42] text-black font-medium rounded-none"
            >
              {t.enterButton}
            </Button>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 accent-[#9b7653]"
                required
              />
              <span className="leading-relaxed text-justify text-xs">{t.confirmText}</span>
            </label>

            <p className="text-xs text-[#9b7653] text-center">{t.ageWarning}</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
