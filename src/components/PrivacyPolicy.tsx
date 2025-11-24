import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="min-h-screen bg-black text-nyx-cream">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-nyx-gold hover:text-nyx-cream transition-colors mb-8 nyx-small"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToHome}
        </Link>

        <div className="space-y-8">
          <div className="border-b border-nyx-gold/20 pb-6">
            <h1 className="nyx-h1 mb-2">{t.title}</h1>
            <p className="nyx-small text-nyx-gold">
              {t.lastUpdated}: {t.updateDate}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.introduction.title}</h2>
            <p className="nyx-body text-justify">{t.introduction.text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.dataController.title}</h2>
            <div className="nyx-body space-y-2">
              <p><strong>{t.dataController.project}</strong> NYX-POST-PORN</p>
              <p><strong>{t.dataController.responsible}</strong> Castro Pizzano</p>
              <p><strong>{t.dataController.email}</strong> castropizzano@gmail.com</p>
              <p><strong>{t.dataController.location}</strong> Curitiba, PR – Brasil</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.dataCollected.title}</h2>
            <p className="nyx-body text-justify">{t.dataCollected.intro}</p>
            <div className="space-y-4">
              {t.dataCollected.items.map((item, index) => (
                <div key={index} className="border-l-2 border-nyx-gold/30 pl-4">
                  <h3 className="nyx-small font-bold text-nyx-gold mb-1">{item.name}</h3>
                  <p className="nyx-small mb-2"><strong>{t.dataCollected.purpose}:</strong> {item.purpose}</p>
                  <p className="nyx-small"><strong>{t.dataCollected.legalBasis}:</strong> {item.legalBasis}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.dataUsage.title}</h2>
            <ul className="nyx-body space-y-2 list-disc list-inside">
              {t.dataUsage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.dataSharing.title}</h2>
            <p className="nyx-body text-justify">{t.dataSharing.text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.dataRetention.title}</h2>
            <p className="nyx-body text-justify">{t.dataRetention.text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.userRights.title}</h2>
            <p className="nyx-body text-justify mb-4">{t.userRights.intro}</p>
            <ul className="nyx-body space-y-2 list-disc list-inside">
              {t.userRights.items.map((item, index) => (
                <li key={index}><strong>{item.right}:</strong> {item.description}</li>
              ))}
            </ul>
            <p className="nyx-body text-justify mt-4">{t.userRights.exercise}</p>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.security.title}</h2>
            <p className="nyx-body text-justify">{t.security.text}</p>
            <ul className="nyx-body space-y-2 list-disc list-inside">
              {t.security.measures.map((measure, index) => (
                <li key={index}>{measure}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.cookies.title}</h2>
            <p className="nyx-body text-justify">{t.cookies.text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.changes.title}</h2>
            <p className="nyx-body text-justify">{t.changes.text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="nyx-h2">{t.contact.title}</h2>
            <p className="nyx-body text-justify mb-4">{t.contact.text}</p>
            <div className="nyx-body space-y-2">
              <p><strong>{t.contact.emailLabel}:</strong> castropizzano@gmail.com</p>
              <p><strong>{t.contact.instagramLabel}:</strong> @castropizzano</p>
            </div>
          </section>

          <div className="border-t border-nyx-gold/20 pt-6 mt-8">
            <p className="nyx-small text-center text-nyx-gold/70">
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
