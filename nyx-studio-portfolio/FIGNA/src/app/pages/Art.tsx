import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Palette, Heart, Download } from "lucide-react";
import { useState } from "react";

export function Art() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Personajes", "Paisajes", "Criaturas", "Conceptos"];

  const artworks = [
    {
      title: "Luna la Exploradora",
      category: "Personajes",
      image: "https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc3MzA2MjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "María García",
      likes: 342,
    },
    {
      title: "Valle de Nubes",
      category: "Paisajes",
      image: "https://images.unsplash.com/photo-1705598679592-3a2077bc7f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBsYW5kc2NhcGUlMjBhcnR8ZW58MXx8fHwxNzczMTMzMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Pablo Ruiz",
      likes: 567,
    },
    {
      title: "Dragoncito Bebé",
      category: "Criaturas",
      image: "https://images.unsplash.com/photo-1731552935151-cab1c7eee2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY3JlYXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzczMTMzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Ana López",
      likes: 891,
    },
    {
      title: "Bosque Encantado",
      category: "Paisajes",
      image: "https://images.unsplash.com/photo-1769102308151-365d212c1216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZW52aXJvbm1lbnQlMjBhcnR8ZW58MXx8fHwxNzczMTMzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Carlos Díaz",
      likes: 423,
    },
    {
      title: "Héroe Pixel",
      category: "Personajes",
      image: "https://images.unsplash.com/photo-1758862493310-5e54994adf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwY2hhcmFjdGVyJTIwY29uY2VwdCUyMGFydHxlbnwxfHx8fDE3NzMxMzMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "María García",
      likes: 654,
    },
    {
      title: "Mundo Colorido",
      category: "Conceptos",
      image: "https://images.unsplash.com/photo-1624037106644-c29e337044e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBjb2xvcmZ1bCUyMGFydHdvcmt8ZW58MXx8fHwxNzczMTMzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Pablo Ruiz",
      likes: 789,
    },
  ];

  const filteredArtworks =
    selectedCategory === "Todos"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 mb-6">
            <Palette className="w-4 h-4 text-secondary" />
            <span className="text-sm">Galería de Arte</span>
          </div>
          <h1 className="text-5xl mb-6">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Arte
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada ilustración está dibujada a mano con amor y atención al detalle
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full transition-all
                ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30 scale-105"
                    : "bg-muted hover:bg-muted/80"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Art Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                transform: `rotate(${(index % 3) - 1}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl group-hover:scale-105 transition-all">
                <div className="relative h-80 overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                      <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all hover:scale-110 backdrop-blur-sm">
                        <Heart className="w-5 h-5 text-destructive" />
                      </button>
                      <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all hover:scale-110 backdrop-blur-sm">
                        <Download className="w-5 h-5 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-destructive/10 px-3 py-1 rounded-full">
                      <Heart className="w-4 h-4 text-destructive fill-destructive" />
                      <span className="text-sm">{artwork.likes}</span>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs mt-2">
                    {artwork.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-8 max-w-2xl">
            <Palette className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="mb-3">¿Te gusta nuestro arte?</h3>
            <p className="text-muted-foreground mb-6">
              Seguinos en redes sociales para ver más ilustraciones y procesos creativos
            </p>
            <div className="flex justify-center gap-3">
              <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full transition-all hover:scale-105">
                Seguir en Instagram
              </button>
              <button className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-full transition-all hover:scale-105">
                Ver Más Arte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
