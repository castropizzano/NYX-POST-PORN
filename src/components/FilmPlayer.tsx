import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface FilmPlayerProps {
  ageVerified: boolean;
}

export function FilmPlayer({ ageVerified }: FilmPlayerProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('trailer');
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [isOfficialPlaying, setIsOfficialPlaying] = useState(false);
  const [isMulticamPlaying, setIsMulticamPlaying] = useState(false);

  const videos = {
    trailer: 'https://archive.org/embed/nyx-post-porn-2024/01_NYX-POST-PORN_Trailer_(Brasil%2C+2024).mp4',
    official: 'https://archive.org/embed/nyx-post-porn-2024/02_NYX-POST-PORN_FullMovie_(Brasil%2C+2024).mp4',
    multicam: 'https://archive.org/embed/nyx-post-porn-2024/03_NYX-POST-PORN_MultiCam_(Brasil%2C+2024).mp4',
  };

  const durations = {
    trailer: "00'25''",
    official: "13'14''",
    multicam: "14'51''"
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-12 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Tabs com scroll indicator - touch targets otimizados */}
          <div className="relative mb-6 md:mb-8">
            {/* Gradient indicators para mostrar que tem scroll (mobile only) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none md:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none md:hidden"></div>
            
            <TabsList className="w-full bg-transparent border-b border-[#9b7653]/30 rounded-none h-auto p-0 justify-start overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <TabsTrigger
                value="trailer"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#9b7653] rounded-none bg-transparent text-[#9b7653] data-[state=active]:text-[#e8d5c4] px-4 py-3 md:px-6 md:py-3 text-sm md:text-base whitespace-nowrap min-h-[52px] md:min-h-0 snap-center touch-manipulation"
              >
                TRAILER
              </TabsTrigger>
              <TabsTrigger
                value="official"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#9b7653] rounded-none bg-transparent text-[#9b7653] data-[state=active]:text-[#e8d5c4] px-4 py-3 md:px-6 md:py-3 text-sm md:text-base whitespace-nowrap min-h-[52px] md:min-h-0 snap-center touch-manipulation disabled:opacity-50"
                disabled={!ageVerified}
              >
                OFFICIAL CUT {!ageVerified && <span className="ml-2 nyx-meta">🔒</span>}
              </TabsTrigger>
              <TabsTrigger
                value="multicam"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#9b7653] rounded-none bg-transparent text-[#9b7653] data-[state=active]:text-[#e8d5c4] px-4 py-3 md:px-6 md:py-3 text-sm md:text-base whitespace-nowrap min-h-[52px] md:min-h-0 snap-center touch-manipulation disabled:opacity-50"
                disabled={!ageVerified}
              >
                MULTICAM {!ageVerified && <span className="ml-2 nyx-meta">🔒</span>}
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TRAILER */}
          <TabsContent value="trailer" className="mt-0">
            <div className="aspect-video bg-black overflow-hidden relative">
              {!isTrailerPlaying ? (
                <button
                  onClick={() => setIsTrailerPlaying(true)}
                  className="w-full h-full relative group cursor-pointer bg-[#1a1a1a] touch-manipulation"
                  aria-label="Play trailer"
                >
                  <img 
                    src="/images/trailer-thumbnail.png" 
                    alt="Trailer thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 group-hover:opacity-80 transition-opacity">
                    <div className="w-16 h-16 md:w-14 md:h-14 bg-[#e8d5c4] flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-[12px] md:border-t-[10px] border-t-transparent border-l-[18px] md:border-l-[16px] border-l-black border-b-[12px] md:border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  src={`${videos.trailer}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                />
              )}
            </div>
          </TabsContent>

          {/* OFFICIAL CUT */}
          <TabsContent value="official" className="mt-0">
            <div className="aspect-video bg-black overflow-hidden relative">
              {ageVerified && (
                <>
                  {!isOfficialPlaying ? (
                    <button
                      onClick={() => setIsOfficialPlaying(true)}
                      className="w-full h-full relative group cursor-pointer bg-[#1a1a1a] touch-manipulation"
                      aria-label="Play official video"
                    >
                      <img 
                        src="/images/official-thumbnail.png" 
                        alt="Official cut thumbnail"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 group-hover:opacity-80 transition-opacity">
                        <div className="w-16 h-16 md:w-14 md:h-14 bg-[#e8d5c4] flex items-center justify-center shadow-lg">
                          <div className="w-0 h-0 border-t-[12px] md:border-t-[10px] border-t-transparent border-l-[18px] md:border-l-[16px] border-l-black border-b-[12px] md:border-b-[10px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <iframe
                      src={`${videos.official}?autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay"
                    />
                  )}
                </>
              )}
            </div>
          </TabsContent>

          {/* MULTICAM */}
          <TabsContent value="multicam" className="mt-0">
            <div className="aspect-video bg-black overflow-hidden relative">
              {ageVerified && (
                <>
                  {!isMulticamPlaying ? (
                    <button
                      onClick={() => setIsMulticamPlaying(true)}
                      className="w-full h-full relative group cursor-pointer bg-[#1a1a1a] touch-manipulation"
                      aria-label="Play multicam video"
                    >
                      <img 
                        src="/images/multicam-thumbnail.png" 
                        alt="Multicam thumbnail"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 group-hover:opacity-80 transition-opacity">
                        <div className="w-16 h-16 md:w-14 md:h-14 bg-[#e8d5c4] flex items-center justify-center shadow-lg">
                          <div className="w-0 h-0 border-t-[12px] md:border-t-[10px] border-t-transparent border-l-[18px] md:border-l-[16px] border-l-black border-b-[12px] md:border-b-[10px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <iframe
                      src={`${videos.multicam}?autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay"
                    />
                  )}
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <p className="text-center nyx-meta mt-6 md:mt-8 text-xs md:text-sm leading-relaxed">
          {activeTab === 'trailer' && `${t.filmPlayer.trailer} ${t.filmPlayer.duration}: ${durations.trailer} | ${t.filmPlayer.digital} | ${t.filmPlayer.color} | ${t.filmPlayer.stereoSound} | 2024 | ${t.filmPlayer.brazil}`}
          {activeTab === 'official' && `${t.filmPlayer.officialCut} ${t.filmPlayer.duration}: ${durations.official} | ${t.filmPlayer.digital} | ${t.filmPlayer.color} | ${t.filmPlayer.stereoSound} | 2024 | ${t.filmPlayer.brazil}`}
          {activeTab === 'multicam' && `${t.filmPlayer.multicam} ${t.filmPlayer.duration}: ${durations.multicam} | ${t.filmPlayer.digital} | ${t.filmPlayer.color} | ${t.filmPlayer.stereoSound} | 2024 | ${t.filmPlayer.brazil}`}
        </p>
      </div>
    </section>
  );
}
