import { Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export function Contact() {
  return (
    <section id="contact" className="section pb-20 sm:pb-24">
      <div className="contact-panel rounded-[1.5rem] bg-ink px-5 py-10 text-paper shadow-glow sm:rounded-[2rem] sm:px-6 sm:py-12 md:px-12">
        <div className="section-kicker text-ember">Contacto</div>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Hagamos algo que valga la pena mostrar.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/70 sm:text-base">
              Si tienes una idea, un proyecto o una oportunidad, podemos conversar y construir una
              solución clara, moderna y bien presentada.
            </p>
          </div>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-ember hover:text-ink hover:shadow-glow sm:w-auto"
            href={profile.gmail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={18} />
            Escribirme
          </a>
        </div>
      </div>
    </section>
  );
}
