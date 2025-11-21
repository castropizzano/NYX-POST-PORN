import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Credits() {
  const { language } = useLanguage();
  const t = translations[language].credits;
  const repoUrl = "https://github.com/castropizzano/NYX-POST-PORN";

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#9b7653]/20 rounded-lg p-8 md:p-12 bg-black/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Technical Credits */}
            <div>
              <h2 className="heading-bold text-2xl text-[#e8d5c4] mb-6">
                {t.title}
              </h2>
              <div className="space-y-6 font-extralight leading-relaxed text-sm tracking-tight">
                {t.credits.map((credit, index) => (
                  <div key={index}>
                    <h3 className="heading-bold text-base text-[#e8d5c4] mb-1">{credit.label}</h3>
                    <p className="text-[#9b7653]" dangerouslySetInnerHTML={{ __html: credit.value }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact & Program */}
            <div className="space-y-10">
              {/* Contact Section */}
              <div>
                <h3 className="heading-bold text-2xl text-[#e8d5c4] mb-6">{t.contact}</h3>
                <div className="space-y-4 font-extralight leading-relaxed text-sm tracking-tight text-[#9b7653]">
                  <p>
                    <strong className="text-[#e8d5c4]">{t.email}:</strong><br />
                    hello@casatrezestudio.com
                  </p>
                  <p>
                    <strong className="text-[#e8d5c4]">{t.instagram}:</strong><br />
                    @casatrezestudio
                  </p>
                  <p>
                    <strong className="text-[#e8d5c4]">{t.location}:</strong><br />
                    {t.locationValue}
                  </p>
                </div>
              </div>

              {/* Program Section */}
              <div>
                <h3 className="heading-bold text-2xl text-[#e8d5c4] mb-6">{t.program}</h3>
                <div className="space-y-4 font-extralight leading-relaxed text-sm tracking-tight text-[#9b7653]">
                  <p>
                    {t.ppgCineav}<br />
                    {t.ppgCineavFull}
                  </p>
                  <p>
                    {t.unespar}<br />
                    {t.unesparFull}<br />
                    {t.unesparSub}
                  </p>
                  <p>
                    {t.research}
                  </p>
                  <p className="mt-6 pt-6 border-t border-[#9b7653]/20">
                    {t.project}<br />
                    {t.projectLead}
                  </p>
                  <p>
                    <strong className="text-[#e8d5c4]">{t.realization}</strong><br />
                    {t.realizationName}
                  </p>
                </div>
              </div>

              {/* Documentation Section */}
              <div>
                <h3 className="heading-bold text-2xl text-[#e8d5c4] mb-6">{t.documentation}</h3>

                <div className="space-y-8">
                  {/* Main Documentation */}
                  <div className="border border-[#9b7653]/30 rounded-md p-4 bg-black/60">
                    <h4 className="text-[#e8d5c4] font-mono text-xs mb-4">{t.mainDoc}</h4>
                    <div className="space-y-3">
                      {t.docs.main.map((doc) => {
                        const fileMap: Record<string, string> = {
                          "README.MD": `${repoUrl}/blob/main/README.md`,
                          "LICENSE.MD": `${repoUrl}/blob/main/LICENSE.md`,
                          "CITATION.CFF": `${repoUrl}/blob/main/CITATION.cff`,
                          "METHODOLOGY.MD": `${repoUrl}/blob/main/METHODOLOGY.md`,
                          "PHILOSOPHY.MD": `${repoUrl}/blob/main/PHILOSOPHY.md`,
                          "COPYRIGHT.MD": `${repoUrl}/blob/main/COPYRIGHT.md`
                        };

                        return (
                          <a
                            key={doc.id}
                            href={fileMap[doc.name]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-[#9b7653]/20 rounded p-3 bg-black/40 hover:border-[#e8d5c4]/40 hover:bg-black/60 transition-colors group"
                          >
                            <p className="font-mono text-[#e8d5c4] text-xs mb-1 flex items-center justify-between">
                              <span>
                                <span className="text-[#9b7653]">[{doc.id}]</span> {doc.name}
                              </span>
                              <svg
                                className="w-3 h-3 text-[#9b7653] group-hover:text-[#e8d5c4] group-hover:translate-x-0.5 transition-all"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </p>
                            <p className="font-extralight text-[#9b7653] text-xs leading-relaxed">
                              // {doc.desc}
                            </p>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Complete Repository Link */}
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-[#9b7653]/30 rounded-md p-4 bg-black/60 hover:border-[#e8d5c4]/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[#e8d5c4] text-xs mb-1">{t.completeRepo}</p>
                        <p className="font-extralight text-[#9b7653] text-xs">{t.completeRepoDesc}</p>
                      </div>
                      <svg
                        className="w-4 h-4 text-[#e8d5c4] group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
