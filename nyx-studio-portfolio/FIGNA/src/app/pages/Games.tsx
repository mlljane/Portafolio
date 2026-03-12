import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Star, Users, Calendar, ExternalLink } from "lucide-react";

export function Games() {
  const games = [
    {
      title: "Rainbow Quest",
      description: "Una aventura colorida donde salvas un mundo perdiendo sus colores",
      image: "https://images.unsplash.com/photo-1758043322983-bfa7248c40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGl4ZWwlMjBhcnQlMjBnYW1lJTIwcGFzdGVsfGVufDF8fHx8MTc3MzEzMzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      players: "500K+",
      releaseDate: "2025",
      tags: ["Aventura", "Puzzle", "Casual"],
      status: "Publicado",
    },
    {
      title: "Dreamy Skies",
      description: "Vuela a través de nubes de algodón en este relajante juego de exploración",
      image: "https://images.unsplash.com/photo-1624037106644-c29e337044e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBjb2xvcmZ1bCUyMGFydHdvcmt8ZW58MXx8fHwxNzczMTMzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      players: "1M+",
      releaseDate: "2024",
      tags: ["Exploración", "Relajante", "Casual"],
      status: "Publicado",
    },
    {
      title: "Pixel Pals Adventure",
      description: "Reúne un equipo de adorables criaturas y salva el reino",
      image: "https://images.unsplash.com/photo-1758862493310-5e54994adf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwY2hhcmFjdGVyJTIwY29uY2VwdCUyMGFydHxlbnwxfHx8fDE3NzMxMzMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      players: "750K+",
      releaseDate: "2024",
      tags: ["RPG", "Aventura", "Estrategia"],
      status: "Publicado",
    },
    {
      title: "Moonlight Garden",
      description: "Cultiva un jardín mágico bajo la luz de la luna",
      image: "https://images.unsplash.com/photo-1529578664164-410c379f3f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZ2FtZSUyMGFuaW1hdGlvbiUyMHNwcml0ZXxlbnwxfHx8fDE3NzMxMzMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 0,
      players: "Próximamente",
      releaseDate: "2026",
      tags: ["Simulación", "Relajante", "Crafting"],
      status: "En Desarrollo",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm">Nuestras Creaciones</span>
          </div>
          <h1 className="text-5xl mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Juegos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada juego es una nueva aventura llena de color, diversión y corazón
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl group-hover:scale-[1.02] transition-all">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs backdrop-blur-md ${
                        game.status === "Publicado"
                          ? "bg-chart-3/80 text-foreground"
                          : "bg-accent/80 text-foreground"
                      }`}
                    >
                      {game.status}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {game.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-4 text-sm">
                      {game.rating > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-accent fill-accent" />
                          <span>{game.rating}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{game.players}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>{game.releaseDate}</span>
                      </div>
                    </div>
                    {game.status === "Publicado" && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm transition-all hover:scale-105">
                        Jugar
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 max-w-2xl">
            <h3 className="mb-3">¿Tenés ideas para un juego?</h3>
            <p className="text-muted-foreground mb-6">
              Siempre estamos abiertos a nuevas colaboraciones y sugerencias
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all hover:scale-105"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
