export function About() {
  return (
    <section id="about" className="section">
      <div className="section-kicker">Sobre mi</div>
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="section-title">Una presencia digital que se sienta tuya.</h2>
        <div className="space-y-4 text-base leading-8 text-ink/70 sm:space-y-5 sm:text-lg">
          <p>
            Este portfolio sera una base para contar quien eres, que construyes y por que tu
            trabajo merece atencion. La idea es mantenerlo elegante, directo y distinto al ejemplo
            que vimos.
          </p>
          <p>
            Podemos llevarlo hacia un estilo sobrio y profesional, mas creativo y visual, o una
            mezcla personal con secciones para proyectos, historia, aprendizajes y contacto.
          </p>
        </div>
      </div>
    </section>
  );
}
