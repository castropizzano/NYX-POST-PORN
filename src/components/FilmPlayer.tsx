import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FilmPlayerProps {
  ageVerified: boolean;
}

export function FilmPlayer({ ageVerified }: FilmPlayerProps) {
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
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full bg-transparent border-b border-[#9b7653]/30 rounded-none h-auto p-0 mb-8">
            <TabsTrigger
              value="trailer"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#9b7653] rounded-none bg-transparent text-[#9b7653] data-[state=active]:text-[#e8d5c4] px-6 py-3"
            >
              TRAILER
            </TabsTrigger>
            <TabsTrigger
              value="official"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#9b7653] rounded-none bg-transparent text-[#9b7653] data-[state=active]:text-[#e8d5c4] px-6 py-3"
              disabled={!ageVerified}
            >
              OFFICIAL CUT {!ageVerified && <span className="ml-2 text-xs">🔒</span>}
            </TabsTrigger>
            <TabsTrigger
              value="multicam"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#9b7653] rounded-none bg-transparent text-[#9b7653] data-[state=active]:text-[#e8d5c4] px-6 py-3"
              disabled={!ageVerified}
            >
              MULTICAM {!ageVerified && <span className="ml-2 text-xs">🔒</span>}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trailer" className="mt-0">
            <div className="aspect-video bg-black overflow-hidden relative">
              {!isTrailerPlaying ? (
                <button
                  onClick={() => setIsTrailerPlaying(true)}
                  className="w-full h-full relative group cursor-pointer bg-[#1a1a1a]"
                  aria-label="Play trailer"
                >
                  <img 
                    src="/images/trailer-thumbnail.png" 
                    alt="Trailer thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 group-hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-[#e8d5c4] flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1" />
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

          <TabsContent value="official" className="mt-0">
            <div className="aspect-video bg-black overflow-hidden relative">
              {ageVerified && (
                <>
                  {!isOfficialPlaying ? (
                    <button
                      onClick={() => setIsOfficialPlaying(true)}
                      className="w-full h-full relative group cursor-pointer bg-[#1a1a1a]"
                      aria-label="Play official video"
                    >
                      <img 
                        src="/images/official-thumbnail.png" 
                        alt="Official cut thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 group-hover:opacity-80 transition-opacity">
                        <div className="w-12 h-12 bg-[#e8d5c4] flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1" />
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

          <TabsContent value="multicam" className="mt-0">
            <div className="aspect-video bg-black overflow-hidden relative">
              {ageVerified && (
                <>
                  {!isMulticamPlaying ? (
                    <button
                      onClick={() => setIsMulticamPlaying(true)}
                      className="w-full h-full relative group cursor-pointer bg-[#1a1a1a]"
                      aria-label="Play multicam video"
                    >
                      <img 
                        src="/images/multicam-thumbnail.png" 
                        alt="Multicam thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 group-hover:opacity-80 transition-opacity">
                        <div className="w-12 h-12 bg-[#e8d5c4] flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1" />
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

      <div className="max-w-4xl mx-auto">
        <p className="text-left text-xs text-[#9b7653] mt-8">
          {activeTab === 'trailer' && `TRAILER Duração: ${durations.trailer} | Digital | Cor | Som Estéreo | 2024 | Brasil`}
          {activeTab === 'official' && `OFFICIAL CUT Duração: ${durations.official} | Digital | Cor | Som Estéreo | 2024 | Brasil`}
          {activeTab === 'multicam' && `MULTICAM Duração: ${durations.multicam} | Digital | Cor | Som Estéreo | 2024 | Brasil`}
        </p>
      </div>
    </section>
  );
}
