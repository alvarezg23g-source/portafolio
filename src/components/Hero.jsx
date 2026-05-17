import { Github, Mail, MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-left-panel" />
      <div className="hero-dark-panel" />

      <nav className="hero-nav" aria-label="Principal">
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Portfolio</a>
        <a className="hero-nav-cta" href="#contact">
          Contact Me
        </a>
      </nav>

      <div className="hero-copy">
        <p>Hi, I am</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
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
