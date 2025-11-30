import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { FilmPlayer } from '@/components/FilmPlayer';
import { Synopsis } from '@/components/Synopsis';
import { Concept } from '@/components/Concept';
import { Process } from '@/components/Process';
import { Dialogues } from '@/components/Dialogues';
import { Posters } from '@/components/Posters';
import { Filmmakers } from '@/components/Filmmakers';
import { References } from '@/components/References';
import { VisualReferences } from '@/components/VisualReferences';
import { Credits } from '@/components/Credits';
import { Footer } from '@/components/Footer';
import AgeGate from '@/components/AgeGate';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { BackToTop } from '@/components/BackToTop';
import { FaccBadge } from '@/components/FaccBadge';

export default function Index() {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('nyx-age-verified');
    if (verified === 'true') {
      setAgeVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('nyx-age-verified', 'true');
    setAgeVerified(true);
  };

  return (
    <>
      <AgeGate isOpen={!ageVerified} onVerify={handleVerify} />
      {ageVerified && <BackToTop />}
      <main className="min-h-screen bg-black">
        {ageVerified && (
          <>
            <Hero />
            <FilmPlayer ageVerified={ageVerified} />
            <Synopsis />
            <Concept />
            <Process />
            <Dialogues />
            <Posters />
            <Filmmakers />
            <References />
            <VisualReferences />
            <Credits />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
