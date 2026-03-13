"use client";

import dynamic from "next/dynamic";

const Models3DClient = dynamic(
  () => import("./viewer").then((mod) => mod.Models3DClient),
  {
    ssr: false,
    loading: () => (
      <div className="mt-4 flex h-[480px] items-center justify-center rounded-3xl border border-border bg-card text-sm text-muted-foreground">
        Cargando visor 3D...
      </div>
    ),
  }
);

export default function Models3DPage() {
  return <Models3DClient />;
}

