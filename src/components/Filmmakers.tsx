import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';
import { AudioPlayer } from './AudioPlayer';

export function Filmmakers() {
  const { language } = useLanguage();
  const { title, filmmakers, soundtrack } = translations[language].filmmakers;

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 md:p-8 bg-[#9b7653]/5 border border-[#9b7653]/20 mb-8">
          <h2 className="nyx-h2">
            {title}
          </h2>
        </div>

        {/* Making Of Image - Full Width - altura limitada no mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden border border-[#9b7653]/20 mb-8 md:mb-12"
        >
          <img
            src="/images/mkgof-01.jpg"
            alt="NYX Making Of"
            loading="lazy"
            className="w-full h-auto max-h-[60vh] md:max-h-none object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </motion.div>

        {/* Audio Player */}
        <div className="mb-12 md:mb-16">
          <AudioPlayer
            src="/audio/nyx-soundtrack.mp3"
            title={soundtrack.title}
            artist={soundtrack.artist}
          />
        </div>

        {/* Filmmakers Biographies - Grid unificado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Todos os filmmakers no mesmo grid */}
          {filmmakers.map((filmmaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border border-[#9b7653]/20 rounded-lg p-4 md:p-6 bg-black/40 ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 md:gap-4 mb-4">
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
                    className="flex-shrink-0 px-3 py-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md bg-[#9b7653]/10 text-[#9b7653] border border-[#9b7653]/20 text-xs font-mono transition-all duration-300 hover:bg-[#e8d5c4]/20 hover:text-[#e8d5c4] hover:border-[#e8d5c4]/40 hover:scale-105 whitespace-nowrap touch-manipulation"
                    aria-label={index === 0 ? "Instagram Flávia Massali" : `Lattes ${filmmaker.name}`}
                  >
                    {index === 0 ? 'INSTAGRAM' : 'LATTES'}
                  </a>
                )}
              </div>
              <p className="nyx-small text-justify leading-relaxed">
                {filmmaker.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
