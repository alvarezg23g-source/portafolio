import { Braces, Code2, Database, Network, Server, TerminalSquare, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';

const groupIcons = [Code2, Server, Wrench, Network];

const focusItems = [
  { label: 'Aplicaciones web', value: 'Front-end + Backend', icon: Braces },
  { label: 'Datos', value: 'SQL Server + SQL', icon: Database },
  { label: 'Sistemas', value: 'Redes + Servidores', icon: TerminalSquare },
];

const featuredSkills = ['C#', 'JavaScript', 'PHP', 'SQL', 'Node.js', 'Laravel', 'ASP.NET', 'Git'];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="tech-panel">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-kicker text-ocean">Tecnologias y Herramientas</div>
            <h2 className="section-title max-w-3xl">Tecnologias y Herramientas</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              Conjunto de tecnologias orientadas a la creacion de aplicaciones modernas,
              eficientes y mantenibles, integrando desarrollo de software, bases de datos, redes e
              infraestructura tecnologica.
            </p>
          </div>

          <div className="tech-focus-grid">
            {focusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="tech-focus-item">
                  <Icon size={20} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              );
            })}
          </div>
        </div>

        <div className="tech-marquee" aria-label="Tecnologias principales">
          <div>
            {[...featuredSkills, ...featuredSkills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index] ?? Code2;
            return (
              <article key={group.title} className="tech-card">
                <div className="mb-5 flex items-start gap-4">
                  <div className="tech-card-icon">
                    <Icon size={21} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/40">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-black leading-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="tech-list-item">
                      <span />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
