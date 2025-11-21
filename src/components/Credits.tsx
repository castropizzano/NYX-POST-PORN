import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Credits() {
  const { language } = useLanguage();
  const t = translations[language].credits;
  const repoUrl = "https://github.com/castropizzano/NYX-POST-PORN";

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-[#9b7653]/20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Ficha Técnica Section */}
        <div className="border border-[#9b7653]/20 rounded-lg p-8 md:p-12 bg-black/40">
          <h2 className="nyx-h2 mb-8">{t.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {t.credits.map((credit, index) => (
              <div key={index}>
                <h3 className="nyx-h2 mb-1">{credit.label}</h3>
                <p className="nyx-small" dangerouslySetInnerHTML={{ __html: credit.value }} />
              </div>
            ))}
            <div>
              <h3 className="nyx-h2 mb-1">{t.realization}</h3>
              <p className="nyx-small">{t.realizationName}</p>
            </div>
          </div>
        </div>

        {/* Program Section */}
        <div className="border border-[#9b7653]/20 rounded-lg p-8 md:p-12 bg-black/40">
          <h2 className="nyx-h2 mb-8">{t.program}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="nyx-h2 mb-2">{t.ppgCineav}</h3>
                <p className="nyx-small">{t.ppgCineavFull}</p>
              </div>
              <div>
                <h3 className="nyx-h2 mb-2">{t.unespar}</h3>
                <p className="nyx-small">
                  {t.unesparFull}<br />
                  {t.unesparSub}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="nyx-h2 mb-2">{t.research}</h3>
                <p className="nyx-small">{t.project}</p>
              </div>
              <div>
                <h3 className="nyx-h2 mb-2">{t.projectLead}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="border border-[#9b7653]/20 rounded-lg p-8 md:p-12 bg-black/40">
          <h2 className="nyx-h2 mb-8">{t.documentation}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Main Documentation */}
              <div className="border border-[#9b7653]/30 rounded-md p-4 bg-black/60 min-h-[500px] flex flex-col">
                <h4 className="nyx-meta text-[#e8d5c4] mb-4">{t.mainDoc}</h4>
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
                        <p className="nyx-meta text-[#e8d5c4] mb-1 flex items-center justify-between">
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
                        <p className="nyx-meta leading-relaxed">
                          // {doc.desc}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Project Files */}
              <div className="border border-[#9b7653]/30 rounded-md p-4 bg-black/60 flex flex-col">
                <h4 className="nyx-meta text-[#e8d5c4] mb-4">{t.projectFiles}</h4>
                <div className="space-y-3">
                  {t.docs.project.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#9b7653]/20 rounded p-3 bg-black/40 hover:border-[#e8d5c4]/40 hover:bg-black/60 transition-colors group"
                    >
                      <p className="nyx-meta text-[#e8d5c4] mb-1 flex items-center justify-between">
                        <span>
                          <span className="text-[#9b7653]">[{doc.id}]</span> {doc.name}
                        </span>
                        <svg
                          className="w-3 h-3 text-[#9b7653] group-hover:text-[#e8d5c4] group-hover:translate-y-0.5 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </p>
                      <p className="nyx-meta leading-relaxed">
                        // {doc.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Research Corpus */}
              <div className="border border-[#9b7653]/30 rounded-md p-4 bg-black/60 min-h-[500px] flex flex-col">
                <h4 className="nyx-meta text-[#e8d5c4] mb-4">{t.corpus}</h4>
                <div className="space-y-3">
                  {t.docs.corpus.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#9b7653]/20 rounded p-3 bg-black/40 hover:border-[#e8d5c4]/40 hover:bg-black/60 transition-colors group"
                    >
                      <p className="nyx-meta text-[#e8d5c4] mb-1 flex items-center justify-between">
                        <span>
                          <span className="text-[#9b7653]">[{doc.id}]</span> {doc.name}
                        </span>
                        <svg
                          className="w-3 h-3 text-[#9b7653] group-hover:text-[#e8d5c4] group-hover:translate-y-0.5 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </p>
                      <p className="nyx-meta leading-relaxed">
                        // {doc.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="border border-[#9b7653]/30 rounded-md p-4 bg-black/60 flex flex-col">
                <h4 className="nyx-meta text-[#e8d5c4] mb-4">{t.certifications}</h4>
                <div className="space-y-3">
                  {t.docs.certifications.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#9b7653]/20 rounded p-3 bg-black/40 hover:border-[#e8d5c4]/40 hover:bg-black/60 transition-colors group"
                    >
                      <p className="nyx-meta text-[#e8d5c4] mb-1 flex items-center justify-between">
                        <span>
                          <span className="text-[#9b7653]">[{doc.id}]</span> {doc.name}
                        </span>
                        <svg
                          className="w-3 h-3 text-[#9b7653] group-hover:text-[#e8d5c4] group-hover:translate-y-0.5 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </p>
                      <p className="nyx-meta leading-relaxed">
                        // {doc.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Links */}
          <div className="mt-8 space-y-4">
            {/* Internet Archive */}
            <a
              href="https://archive.org/details/nyx-post-porn-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-[#e8d5c4]/40 rounded-md p-4 bg-black/80 hover:border-[#e8d5c4] hover:bg-black transition-colors group"
            >
              <div className="flex items-center justify-between">
                <h4 className="nyx-meta text-[#e8d5c4]">{t.archive} | Página Oficial Internet Archive</h4>
                <svg
                  className="w-4 h-4 text-[#e8d5c4] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Complete Repository Link */}
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[#9b7653]/30 rounded-md p-4 bg-black/60 hover:border-[#e8d5c4]/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <p className="nyx-meta text-[#e8d5c4]">{t.completeRepo} | Acesse todos os arquivos no GitHub</p>
                <svg
                  className="w-4 h-4 text-[#e8d5c4] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4"
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
    </section>
  );
}
