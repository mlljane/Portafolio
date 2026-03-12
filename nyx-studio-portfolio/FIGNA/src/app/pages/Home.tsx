import { Link } from "react-router";
import { Gamepad2, Palette, Box, Film, Sparkles, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Gamepad2,
      title: "Juegos Únicos",
      description: "Experiencias mágicas creadas con pasión",
      color: "bg-primary",
      link: "/games",
    },
    {
      icon: Palette,
      title: "Arte Original",
      description: "Ilustraciones dibujadas a mano",
      color: "bg-secondary",
      link: "/art",
    },
    {
      icon: Box,
      title: "Modelos 3D",
      description: "Personajes y mundos en 3D",
      color: "bg-accent",
      link: "/3d-models",
    },
    {
      icon: Film,
      title: "Animaciones",
      description: "Movimiento lleno de vida",
      color: "bg-chart-3",
      link: "/animations",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-background"></div>
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm">Bienvenido a Nys Studio</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">
                Creamos{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  mundos de ensueño
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Un pequeño estudio indie que da vida a videojuegos únicos, llenos de color y
                corazón. Cada píxel cuenta una historia.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/games"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30 flex items-center gap-2"
                >
                  <Gamepad2 className="w-5 h-5" />
                  Ver Nuestros Juegos
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-muted hover:bg-muted/80 rounded-full transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Conoce el Equipo
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-card rounded-3xl p-2 shadow-2xl rotate-3 hover:rotate-6 transition-transform">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758043322983-bfa7248c40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGl4ZWwlMjBhcnQlMjBnYW1lJTIwcGFzdGVsfGVufDF8fHx8MTc3MzEzMzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pixel art game"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Lo Que Hacemos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorá nuestro portfolio de creaciones mágicas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group relative"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:scale-105 transition-all shadow-lg">
                    <div
                      className={`${feature.color}/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl mb-4 text-primary-foreground">
                ¿Listo para explorar nuestros mundos?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
                Descubrí nuestros juegos, arte y animaciones. Cada creación está hecha con amor.
              </p>
              <Link
                to="/games"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground rounded-full hover:scale-105 transition-all shadow-xl"
              >
                <Gamepad2 className="w-5 h-5" />
                Explorar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}