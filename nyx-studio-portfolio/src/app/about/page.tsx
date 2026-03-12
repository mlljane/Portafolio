export default function AboutPage() {
  return (
    <section className="glass-panel soft-shadow space-y-6 p-6 md:p-10">
      <header className="space-y-2">
        <h1 className="font-display text-2xl tracking-wide text-accent-gold md:text-3xl">
          Sobre Nyx Studio
        </h1>
        <p className="max-w-xl text-sm text-slate-700 md:text-base">
          Un pequeño estudio personal para probar ideas, aprender cosas nuevas
          y construir mundos que quizá solo duren unos minutos, pero se queden
          en la memoria.
        </p>
      </header>

      <div className="space-y-4 text-sm text-slate-700 md:text-base">
        <p>
          Aquí podrás escribir quién eres, de dónde viene Nyx Studio y qué tipo
          de historias te gusta contar con tus juegos y tu arte.
        </p>
        <p>
          También es un buen lugar para enlazar a tu email, redes sociales o
          cualquier sitio donde aceptes encargos, colaboraciones o feedback.
        </p>
      </div>
    </section>
  );
}

