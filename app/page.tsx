import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

const services = [
  {
    n: "01",
    title: "Documents & ressources numériques",
    text: "Des supports concrets, téléchargeables en ligne, pour gagner du temps sur la gestion quotidienne de votre activité.",
    items: [
      "Modèles et documents professionnels",
      "Guides et supports de travail",
      "Outils de gestion et d'organisation",
    ],
  },
  {
    n: "02",
    title: "Accompagnement & conseil à distance",
    text: "Un suivi adapté à votre situation, pour structurer, optimiser et développer vos projets.",
    items: [
      "Organisation et gestion de l'activité",
      "Stratégie et développement",
      "Accompagnement des entrepreneurs et des entreprises",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Prise de contact",
    text: "Vous décrivez votre besoin et le contexte de votre activité.",
  },
  {
    n: "02",
    title: "Proposition",
    text: "Je vous oriente vers la ressource adaptée ou une prestation sur mesure.",
  },
  {
    n: "03",
    title: "Réalisation",
    text: "Livraison des documents ou accompagnement à distance, selon le format retenu.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="brand-link" aria-label="Clayron, retour en haut">
            <Logo />
          </a>
          <nav className="site-nav" aria-label="Navigation principale">
            <a href="#services">Services</a>
            <a href="#methode">Méthode</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow anim" style={{ "--d": "80ms" } as React.CSSProperties}>
              Activité indépendante — 100 % à distance
            </p>
            <h1 className="anim" style={{ "--d": "160ms" } as React.CSSProperties}>
              Des documents prêts à l&apos;emploi.
              <br />
              Un accompagnement qui fait avancer.
            </h1>
            <p className="lead anim" style={{ "--d": "260ms" } as React.CSSProperties}>
              Je vends en ligne des documents professionnels et des ressources
              numériques, et j&apos;accompagne à distance les entreprises et les
              entrepreneurs dans la gestion, l&apos;organisation, la stratégie et
              le développement de leur activité.
            </p>
            <div className="hero-actions anim" style={{ "--d": "360ms" } as React.CSSProperties}>
              <a className="btn" href="#services">
                Découvrir les services
              </a>
              <a className="link-arrow" href="#methode">
                Voir la méthode
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <Reveal className="hero-aside" delay={200}>
            <dl>
              <div>
                <dt>Activité</dt>
                <dd>Indépendante</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>100 % à distance</dd>
              </div>
              <div>
                <dt>Public</dt>
                <dd>Entreprises &amp; entrepreneurs</dd>
              </div>
            </dl>
          </Reveal>
        </section>

        <section id="services" className="section wrap">
          <Reveal>
            <p className="section-label">01 — Services</p>
            <h2>Deux façons de travailler ensemble</h2>
          </Reveal>

          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <article className="service">
                  <span className="service-n">{s.n}</span>
                  <div className="service-main">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                  <ul className="service-list">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section wrap">
          <Reveal>
            <p className="section-label">02 — Approche</p>
            <p className="statement">
              Structurer, optimiser, développer.
              <span className="statement-note">
                Une activité indépendante, entièrement à distance, au service des
                entreprises et des entrepreneurs.
              </span>
            </p>
          </Reveal>
        </section>

        <section id="methode" className="section wrap">
          <Reveal>
            <p className="section-label">03 — Méthode</p>
            <h2>Comment ça se passe</h2>
          </Reveal>

          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="step">
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer wrap">
        <Logo compact />
        <p>
          © {new Date().getFullYear()} Clayron — Documents professionnels &amp;
          accompagnement à distance
        </p>
      </footer>
    </>
  );
}
