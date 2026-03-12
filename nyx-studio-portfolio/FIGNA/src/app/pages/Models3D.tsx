import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Box, BoxSelect, Layers, Eye } from "lucide-react";

export function Models3D() {
  const models = [
    {
      title: "Caballero Pixel",
      description: "Modelo low-poly optimizado para juegos móviles",
      image: "https://images.unsplash.com/photo-1650081221669-fccab00c76a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMG1vZGVsJTIwcmVuZGVyfGVufDF8fHx8MTc3MzEzMzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      polyCount: "5.2K",
      textures: "2K PBR",
      type: "Personaje",
      rigged: true,
    },
    {
      title: "Dragón Bebé",
      description: "Criatura adorable con animaciones pre-hechas",
      image: "https://images.unsplash.com/photo-1731552935151-cab1c7eee2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY3JlYXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzczMTMzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      polyCount: "8.5K",
      textures: "4K PBR",
      type: "Criatura",
      rigged: true,
    },
    {
      title: "Casa Mágica",
      description: "Edificio modular con interior detallado",
      image: "https://images.unsplash.com/photo-1769102308151-365d212c1216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZW52aXJvbm1lbnQlMjBhcnR8ZW58MXx8fHwxNzczMTMzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      polyCount: "12K",
      textures: "4K PBR",
      type: "Entorno",
      rigged: false,
    },
    {
      title: "Árbol Encantado",
      description: "Vegetación estilizada con shader personalizado",
      image: "https://images.unsplash.com/photo-1705598679592-3a2077bc7f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBsYW5kc2NhcGUlMjBhcnR8ZW58MXx8fHwxNzczMTMzMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      polyCount: "3.8K",
      textures: "2K",
      type: "Entorno",
      rigged: false,
    },
    {
      title: "Mago Chibi",
      description: "Personaje estilo cartoon con accesorios",
      image: "https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc3MzA2MjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      polyCount: "6.7K",
      textures: "2K PBR",
      type: "Personaje",
      rigged: true,
    },
    {
      title: "Cofre del Tesoro",
      description: "Prop interactivo con animación de apertura",
      image: "https://images.unsplash.com/photo-1758043322983-bfa7248c40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGl4ZWwlMjBhcnQlMjBnYW1lJTIwcGFzdGVsfGVufDF8fHx8MTc3MzEzMzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      polyCount: "2.1K",
      textures: "2K",
      type: "Prop",
      rigged: false,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
            <Box className="w-4 h-4 text-accent" />
            <span className="text-sm">Modelos 3D</span>
          </div>
          <h1 className="text-5xl mb-6">
            Modelos{" "}
            <span className="bg-gradient-to-r from-accent to-chart-3 bg-clip-text text-transparent">
              3D
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personajes, entornos y props creados con estilo low-poly y colores pastel
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Modelos", value: "150+", icon: BoxSelect },
            { label: "Texturas", value: "500+", icon: Layers },
            { label: "Animaciones", value: "300+", icon: Box },
            { label: "Vistas", value: "10K+", icon: Eye },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-accent/10 to-chart-3/10 border-2 border-border rounded-2xl p-6 text-center"
                style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)` }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                transform: `rotate(${(index % 3) - 1}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-chart-3/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl group-hover:scale-105 transition-all">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-accent/20">
                  <ImageWithFallback
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 rounded-full text-xs bg-accent/90 backdrop-blur-md text-foreground">
                      {model.type}
                    </div>
                    {model.rigged && (
                      <div className="px-3 py-1 rounded-full text-xs bg-chart-3/90 backdrop-blur-md text-foreground">
                        Rigged
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-foreground rounded-full hover:scale-110 transition-transform flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Vista Previa 3D
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg mb-2">{model.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full">
                      <BoxSelect className="w-3 h-3" />
                      {model.polyCount} polys
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full">
                      <Layers className="w-3 h-3" />
                      {model.textures}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/10 to-chart-3/10 rounded-3xl p-8 max-w-2xl">
            <Box className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="mb-3">¿Necesitás modelos 3D personalizados?</h3>
            <p className="text-muted-foreground mb-6">
              Creamos modelos optimizados para tus proyectos de juegos y animaciones
            </p>
            <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-105">
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}