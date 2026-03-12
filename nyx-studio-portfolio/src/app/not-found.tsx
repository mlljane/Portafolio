import Link from "next/link";

export default function NotFound() {
  return (
    <section className="glass-panel soft-shadow flex flex-col items-start gap-4 p-6 md:p-10">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        404 · Página no encontrada
      </p>
      <h1 className="font-display text-2xl tracking-wide text-accent-gold md:text-3xl">
        Este mundo aún no existe
      </h1>
      <p className="max-w-md text-sm text-slate-700 md:text-base">
        Has llegado a una ruta que todavía no forma parte del estudio. Cuando
        tengas más proyectos o secciones, podrás enlazarlos desde aquí.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent-cyan/60 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan transition hover:bg-accent-cyan/20"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

