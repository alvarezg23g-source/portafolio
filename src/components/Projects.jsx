import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio.js';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-kicker">Proyectos</div>
      <h2 className="section-title">Trabajo seleccionado.</h2>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-ink/10 bg-white/65 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-bold text-moss">
                {project.status}
              </span>
              <div className="flex shrink-0 gap-2">
                <a className="icon-link" href={project.github} aria-label={`${project.title} GitHub`}>
                  <Github size={17} />
                </a>
                <a className="icon-link" href={project.demo} aria-label={`${project.title} demo`}>
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
            <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/65 sm:text-base">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
