import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Synopsis } from '@/components/Synopsis';
import { Concept } from '@/components/Concept';
import { Footer } from '@/components/Footer';
import AgeGate from '@/components/AgeGate';

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
      <main className="min-h-screen bg-black">
        {ageVerified && (
          <>
            <Hero />
            <Synopsis />
            <Concept />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
