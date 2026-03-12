export default function GamesPage() {
  return (
    <section className="glass-panel soft-shadow space-y-6 p-6 md:p-10">
      <header className="space-y-2">
        <h1 className="font-display text-2xl tracking-wide text-accent-gold md:text-3xl">
          Juegos
        </h1>
        <p className="max-w-xl text-sm text-slate-700 md:text-base">
          Aquí irán tus proyectos jugables: prototipos, jams, experimentos
          raros y cualquier mundo pequeño que quieras compartir.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-900/10 bg-white/55 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Juego destacado
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Projection Dust</span>{" "}
            es un prototipo creado para una game jam donde exploras niveles
            elementales y resuelves puzles en un mundo de sombras.
          </p>
          <a
            href="https://marcoxavante.itch.io/projection-dust"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/60 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan transition hover:bg-accent-cyan/20"
          >
            Jugar en itch.io
          </a>
        </article>

        <article className="rounded-xl border border-slate-900/10 bg-white/55 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Lista de proyectos
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Más adelante puedes convertir esto en un grid con más juegos:
            añadir tarjetas similares para cada proyecto nuevo que publiques.
          </p>
        </article>
      </div>
    </section>
  );
}

