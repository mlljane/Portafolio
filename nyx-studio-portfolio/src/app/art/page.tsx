export default function ArtPage() {
  return (
    <section className="glass-panel soft-shadow space-y-6 p-6 md:p-10">
      <header className="space-y-2">
        <h1 className="font-display text-2xl tracking-wide text-accent-gold md:text-3xl">
          Arte
        </h1>
        <p className="max-w-xl text-sm text-slate-700 md:text-base">
          Esta sección será tu galería: ilustraciones, concepts, fondos,
          personajes y cualquier experimento visual que quieras guardar.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-xl border border-slate-900/10 bg-white/55" />
        <div className="aspect-[4/3] rounded-xl border border-slate-900/10 bg-white/55" />
        <div className="aspect-[4/3] rounded-xl border border-slate-900/10 bg-white/55" />
      </div>

      <p className="text-xs text-slate-400">
        Estos bloques son solo placeholders para futuras piezas de arte o
        capturas; luego puedes sustituirlos por imágenes reales.
      </p>
    </section>
  );
}

