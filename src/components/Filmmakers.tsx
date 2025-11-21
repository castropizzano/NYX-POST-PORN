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
        <div className="space-y-6">
          {/* Performer - Full Width Card */}
          {filmmakers[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-[#9b7653]/20 rounded-lg p-8 bg-black/40"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="nyx-h2 mb-2">
                    {filmmakers[0].name}
                  </h3>
                  <p className="nyx-xs mt-1">
                    {filmmakers[0].role}
                  </p>
                </div>
                
                {filmmakers[0].lattes && (
                  <a
                    href={filmmakers[0].lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-3 py-1.5 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-xs font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105"
                    aria-label="Instagram Flávia Massali"
                  >
                    INSTAGRAM
                  </a>
                )}
              </div>
              <p className="nyx-small text-justified">
                {filmmakers[0].bio}
              </p>
            </motion.div>
          )}

          {/* Other Filmmakers - Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filmmakers.slice(1).map((filmmaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-[#9b7653]/20 rounded-lg p-6 bg-black/40"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="nyx-h2 mb-2">
                      {filmmaker.name}
                    </h3>
                    <p className="nyx-xs mt-1">
                      {filmmaker.role}
                    </p>
                  </div>
                  
                  {filmmaker.lattes && (
                    <a
                      href={filmmaker.lattes}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-3 py-1.5 rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-xs font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105"
                      aria-label={`Lattes ${filmmaker.name}`}
                    >
                      LATTES
                    </a>
                  )}
                </div>
                <p className="nyx-small text-justified">
                  {filmmaker.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
