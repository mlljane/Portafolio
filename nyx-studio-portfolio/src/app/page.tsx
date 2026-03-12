import Link from "next/link";
import { Gamepad2, Palette, Box, Film, Sparkles, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const features = [
  {
    icon: Gamepad2,
    title: "Juegos Únicos",
    description: "Experiencias mágicas creadas con pasión",
    color: "bg-primary",
    link: "/games"
  },
  {
    icon: Palette,
    title: "Arte Original",
    description: "Ilustraciones dibujadas a mano",
    color: "bg-secondary",
    link: "/art"
  },
  {
    icon: Box,
    title: "Modelos 3D",
    description: "Personajes y mundos en 3D",
    color: "bg-accent",
    link: "/3d-models"
  },
  {
    icon: Film,
    title: "Animaciones",
    description: "Movimiento lleno de vida",
    color: "bg-chart-3",
    link: "/animations"
  }
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-background" />
        <div className="container relative mx-auto">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm">Bienvenido a Nys Studio</span>
              </div>
              <h1 className="mb-6 text-5xl leading-tight lg:text-6xl">
                Creamos{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  mundos de ensueño
                </span>
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                Un pequeño estudio indie que da vida a videojuegos únicos,
                llenos de color y corazón. Cada píxel cuenta una historia.
              </p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  href="/games"
                  className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90"
                >
                  <Gamepad2 className="h-5 w-5" />
                  Ver Nuestros Juegos
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 rounded-full bg-muted px-8 py-4 transition-all hover:scale-105 hover:bg-muted/80"
                >
                  <Heart className="h-5 w-5" />
                  Conoce el Equipo
                </Link>
              </div>
            </div>
            <div className="relative flex-1">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
                <div className="relative rotate-3 rounded-3xl bg-card p-2 shadow-2xl transition-transform hover:rotate-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758043322983-bfa7248c40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGl4ZWwlMjBhcnQlMjBnYW1lJTIwcGFzdGVsfGVufDF8fHx8MTc3MzEzMzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pixel art game"
                    className="h-auto w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl">Lo Que Hacemos</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explorá nuestro portfolio de creaciones mágicas
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.link}
                  className="group relative"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl transition-all group-hover:blur-2xl" />
                  <div className="relative rounded-3xl border-2 border-border bg-card p-8 shadow-lg transition-all group-hover:scale-105">
                    <div
                      className={`${feature.color}/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:rotate-12`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white blur-2xl" />
              <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-4xl text-primary-foreground">
                ¿Listo para explorar nuestros mundos?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
                Descubrí nuestros juegos, arte y animaciones. Cada creación está
                hecha con amor.
              </p>
              <Link
                href="/games"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-foreground shadow-xl transition-all hover:scale-105"
              >
                <Gamepad2 className="h-5 w-5" />
                Explorar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

