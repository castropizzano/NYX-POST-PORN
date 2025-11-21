import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

export function Filmmakers() {
  const { language } = useLanguage();
  const { title, filmmakers } = translations[language].filmmakers;

  const makingOfImages = [
    { src: '/images/mkgof-01.jpg', alt: 'NYX Making Of 01' },
    { src: '/images/mkgof-02.jpg', alt: 'NYX Making Of 02' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">
          {title}
        </h2>

        {/* Making Of Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {makingOfImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-[#9b7653]/20"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Filmmakers Biographies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filmmakers.map((filmmaker, index) => (
            <div key={index} className="space-y-3">
              <div>
                <h3 className="heading-bold text-4xl text-[#e8d5c4] md:text-xl mb-[22px]">
                  {filmmaker.name}
                </h3>
                <p className="font-extralight leading-relaxed tracking-tight text-[#9b7653] italic mb-4 text-xs">
                  {filmmaker.role}
                </p>
              </div>
              <p className="font-extralight leading-relaxed text-sm tracking-tight text-[#9b7653] text-justify">
                {filmmaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
