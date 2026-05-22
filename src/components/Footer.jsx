import { profile } from '../data/portfolio.js';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm leading-6 text-paper/55 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
        <p>Hecho con React, Vite y Tailwind CSS.</p>
      </div>
    </footer>
  );
}
