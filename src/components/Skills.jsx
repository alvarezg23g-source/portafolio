import { Code2, Database, Network, Server, Settings, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';

const groupIcons = [Code2, Server, Wrench, Network];

const skillAccent = {
  'C#': 'bg-[#68217a] text-white',
  PHP: 'bg-[#777bb4] text-white',
  JavaScript: 'bg-[#f7df1e] text-black',
  HTML5: 'bg-[#e34f26] text-white',
  CSS3: 'bg-[#1572b6] text-white',
  SQL: 'bg-ink text-white',
  'Node.js': 'bg-[#3c873a] text-white',
  Laravel: 'bg-[#ff2d20] text-white',
  Git: 'bg-[#f05032] text-white',
  'SQL Server': 'bg-[#a91d22] text-white',
  'Visual Studio': 'bg-[#5c2d91] text-white',
};

function getInitials(label) {
  if (label === '.NET Framework') return '.N';
  if (label === 'ASP.NET') return 'AS';
  return label
    .split(/[\s.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-kicker">Tecnologias y Herramientas</div>
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <h2 className="section-title">Tecnologias y Herramientas</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
            Conjunto de tecnologias orientadas a la creacion de aplicaciones modernas, eficientes
            y mantenibles, integrando desarrollo de software, bases de datos, redes e
            infraestructura tecnologica.
          </p>
        </div>

        <div className="skills-cloud" aria-label="Tecnologias destacadas">
          {['C#', 'JavaScript', 'SQL', 'Node.js', 'Laravel', 'Git'].map((item, index) => {
            const Icon = index % 2 === 0 ? Database : Settings;
            return (
              <div key={item} className={`floating-skill floating-skill-${index + 1}`}>
                <span className={skillAccent[item] ?? 'bg-white text-ink'}>{getInitials(item)}</span>
                <Icon size={16} />
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[index] ?? Code2;
          return (
            <article key={group.title} className="skill-card">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-paper">
                  <Icon size={21} />
                </div>
                <h3 className="font-display text-xl font-black leading-tight">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    <span className={`skill-chip-icon ${skillAccent[item] ?? 'bg-paper text-ink'}`}>
                      {getInitials(item)}
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
