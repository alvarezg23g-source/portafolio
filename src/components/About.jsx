export function About() {
  return (
    <section id="about" className="section">
      <div className="section-kicker">Sobre mí</div>
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="section-title">Una presencia digital con identidad propia</h2>
        <div className="space-y-4 text-base leading-8 text-ink/70 sm:space-y-5 sm:text-lg">
          <p>
            Este portafolio fue creado para mostrar más que proyectos: representa ideas,
            creatividad y la forma en que construyo soluciones. Cada sección está diseñada para
            combinar estética, funcionalidad y una experiencia visual moderna, transmitiendo de
            manera clara quién soy, qué hago y el valor que puedo aportar.
          </p>
          <p>
            Más que un sitio web, este espacio funciona como una representación de mi crecimiento,
            mis habilidades y mi visión profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
