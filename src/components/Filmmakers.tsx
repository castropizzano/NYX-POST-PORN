import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';
import { AudioPlayer } from './AudioPlayer';

export function Filmmakers() {
  const { language } = useLanguage();
  const { title, filmmakers, soundtrack } = translations[language].filmmakers;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 bg-[#9b7653]/5 border border-[#9b7653]/20 mb-8">
          <h2 className="nyx-h2">
            {title}
          </h2>
        </div>

        {/* Making Of Image - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden border border-[#9b7653]/20 mb-12"
        >
          <img
            src="/images/mkgof-01.jpg"
            alt="NYX Making Of"
            loading="lazy"
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </motion.div>

        {/* Audio Player */}
        <div className="mb-16">
          <AudioPlayer
            src="/audio/nyx-soundtrack.mp3"
            title={soundtrack.title}
            artist={soundtrack.artist}
          />
        </div>

        {/* Filmmakers Biographies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filmmakers.map((filmmaker, index) => (
            <div key={index} className="border border-[#9b7653]/20 rounded-lg p-6 bg-black/40">
              <div className="mb-4">
                <h3 className="nyx-h2">
                  <a
                    href={filmmaker.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#e8d5c4] transition-colors underline decoration-[#9b7653]/40 hover:decoration-[#e8d5c4]"
                  >
                    {filmmaker.name}
                  </a>
                </h3>
                <p className="nyx-xs mt-1">
                  {filmmaker.role}
                </p>
              </div>
              <p className="nyx-small text-justified">
                {filmmaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
