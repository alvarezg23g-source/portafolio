import { Code2, Database, Layers3, Network, Server, Terminal } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';

const categoryIcons = [Code2, Layers3, Terminal, Network];
const keyTech = ['C#', 'PHP', 'JavaScript', 'SQL', 'Node.js', 'Laravel', 'ASP.NET', 'Git'];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="minimal-tech">
        <div className="minimal-tech-copy">
          <h2>Tecnologias y Herramientas</h2>
          <p>
            Un conjunto de tecnologias para construir aplicaciones modernas, mantener sistemas
            estables y conectar software con datos, redes e infraestructura.
          </p>
        </div>

        <div className="minimal-tech-console" aria-label="Resumen tecnico">
          <div className="console-top">
            <span />
            <span />
            <span />
          </div>
          <div className="console-line">
            <Server size={17} />
            <span>portfolio.stack</span>
          </div>
          <div className="console-tags">
            {keyTech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="console-grid">
            <div>
              <strong>04</strong>
              <span>areas</span>
            </div>
            <div>
              <strong>18+</strong>
              <span>skills</span>
            </div>
            <div>
              <strong>Full</strong>
              <span>scope</span>
            </div>
          </div>
        </div>
      </div>

      <div className="minimal-tech-categories">
        {skillGroups.map((group, index) => {
          const Icon = categoryIcons[index] ?? Database;
          return (
            <article key={group.title}>
              <div>
                <Icon size={20} />
                <h3>{group.title}</h3>
              </div>
              <p>{group.items.join(' / ')}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
