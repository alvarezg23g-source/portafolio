import { Github, Mail, MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-left-panel" />
      <div className="hero-dark-panel" />

      <nav className="hero-nav" aria-label="Principal">
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Portafolio</a>
        <a className="hero-nav-cta" href="#contact">
          Contáctame
        </a>
      </nav>

      <div className="hero-copy">
        <p>Hola, soy</p>
        <h1>{profile.name}</h1>
        <h2>
          {profile.role}
          <span>Systems Engineer</span>
          <span>Backend Developer</span>
        </h2>
      </div>

      <div className="hero-socials" aria-label="Social links">
        <a href={profile.whatsapp} aria-label="WhatsApp">
          <MessageCircle size={21} />
        </a>
        <a href={profile.gmail} aria-label="Gmail">
          <Mail size={21} />
        </a>
        <a href={profile.github} aria-label="GitHub">
          <Github size={21} />
        </a>
      </div>

      <div className="hero-photo-card">
        <img
          src={`${import.meta.env.BASE_URL}modelo-hero.png`}
          alt={`${profile.name} profile`}
          onError={(event) => {
            event.currentTarget.parentElement?.classList.add('is-hidden');
          }}
        />
      </div>
    </section>
  );
}
