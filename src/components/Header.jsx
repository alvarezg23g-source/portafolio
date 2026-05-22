import { Github, Mail, MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const navItems = [
  { label: 'Sobre mi', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight transition hover:text-ocean">
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-ink/70 transition hover:text-ocean">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a className="icon-link" href={profile.github} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="icon-link" href={profile.whatsapp} aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a className="icon-link" href={profile.gmail} aria-label="Gmail">
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
