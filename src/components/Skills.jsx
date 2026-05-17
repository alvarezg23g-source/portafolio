import { skills } from '../data/portfolio.js';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-kicker">Stack</div>
      <h2 className="section-title max-w-3xl">
        Herramientas para crear productos rapidos y mantenibles.
      </h2>
      <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-ink/10 bg-white/60 px-3.5 py-2 text-sm font-semibold text-ink/75 shadow-sm sm:px-4"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
