import { Boxes, Braces, Database, Network, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';

const groupMeta = [
  {
    icon: Braces,
    tone: 'code',
    summary: 'Base para construir interfaces, logica y estructura de datos.',
  },
  {
    icon: Boxes,
    tone: 'framework',
    summary: 'Herramientas para transformar ideas en aplicaciones reales.',
  },
  {
    icon: Wrench,
    tone: 'tools',
    summary: 'Entornos de trabajo para desarrollar, versionar y depurar.',
  },
  {
    icon: Network,
    tone: 'infra',
    summary: 'Conocimiento tecnico para operar sistemas, redes y servidores.',
  },
];

const featured = ['C#', 'JavaScript', 'PHP', 'SQL', '.NET', 'Node', 'Laravel', 'Git'];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="tech-section">
        <div className="tech-heading">
          <div>
            <div className="section-kicker">Tecnologias y Herramientas</div>
            <h2 className="section-title">Un stack practico, pensado para construir.</h2>
          </div>
          <p>
            Tecnologias orientadas a crear aplicaciones modernas, eficientes y mantenibles,
            integrando software, bases de datos, redes e infraestructura.
          </p>
        </div>

        <div className="tech-featured" aria-label="Tecnologias principales">
          {featured.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="tech-grid">
          {skillGroups.map((group, index) => {
            const meta = groupMeta[index];
            const Icon = meta.icon ?? Database;
            return (
              <article key={group.title} className={`tech-compact-card tech-${meta.tone}`}>
                <div className="tech-card-head">
                  <span>
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{meta.summary}</p>
                  </div>
                </div>

                <div className="tech-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
