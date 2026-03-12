import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Film, Play, Clock, Zap } from "lucide-react";

export function Animations() {
  const animations = [
    {
      title: "Salto del Héroe",
      description: "Animación fluida de salto para personajes de plataforma",
      image: "https://images.unsplash.com/photo-1529578664164-410c379f3f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZ2FtZSUyMGFuaW1hdGlvbiUyMHNwcml0ZXxlbnwxfHx8fDE3NzMxMzMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "0.8s",
      frames: 24,
      type: "Personaje",
      style: "2D Sprite",
    },
    {
      title: "Aleteo de Dragón",
      description: "Ciclo de vuelo suave para criaturas aladas",
      image: "https://images.unsplash.com/photo-1731552935151-cab1c7eee2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY3JlYXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzczMTMzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "1.2s",
      frames: 36,
      type: "Criatura",
      style: "3D Motion",
    },
    {
      title: "Caminata Alegre",
      description: "Animación de walk cycle con personalidad",
      image: "https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc3MzA2MjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "1.0s",
      frames: 30,
      type: "Personaje",
      style: "2D Frame",
    },
    {
      title: "Efecto Mágico",
      description: "Partículas brillantes y efectos especiales",
      image: "https://images.unsplash.com/photo-1758043322983-bfa7248c40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGl4ZWwlMjBhcnQlMjBnYW1lJTIwcGFzdGVsfGVufDF8fHx8MTc3MzEzMzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "2.0s",
      frames: 60,
      type: "FX",
      style: "Partículas",
    },
    {
      title: "Baile Victorioso",
      description: "Celebración animada al completar nivel",
      image: "https://images.unsplash.com/photo-1624037106644-c29e337044e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBjb2xvcmZ1bCUyMGFydHdvcmt8ZW58MXx8fHwxNzczMTMzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "1.5s",
      frames: 45,
      type: "Personaje",
      style: "3D Motion",
    },
    {
      title: "Transición UI",
      description: "Animación smooth para menús e interfaces",
      image: "https://images.unsplash.com/photo-1705598679592-3a2077bc7f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBsYW5kc2NhcGUlMjBhcnR8ZW58MXx8fHwxNzczMTMzMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "0.5s",
      frames: 15,
      type: "UI",
      style: "Motion",
    },
  ];

  const techniques = [
    {
      title: "Frame by Frame",
      description: "Animación tradicional dibujada a mano",
      icon: "🎨",
    },
    {
      title: "Rigging 3D",
      description: "Esqueletos y deformadores avanzados",
      icon: "🦴",
    },
    {
      title: "Motion Graphics",
      description: "Efectos dinámicos y transiciones",
      icon: "✨",
    },
    {
      title: "Sprite Sheets",
      description: "Optimización para juegos 2D",
      icon: "📋",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/20 mb-6">
            <Film className="w-4 h-4 text-chart-3" />
            <span className="text-sm">Animaciones</span>
          </div>
          <h1 className="text-5xl mb-6">
            Damos{" "}
            <span className="bg-gradient-to-r from-chart-3 to-primary bg-clip-text text-transparent">
              vida
            </span>{" "}
            al movimiento
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada animación está diseñada para sentirse natural y llena de personalidad
          </p>
        </div>

        {/* Techniques Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-chart-3/10 to-primary/10 border-2 border-border rounded-2xl p-6 text-center hover:scale-105 transition-transform"
              style={{ transform: `rotate(${(index % 2 === 0 ? -0.5 : 0.5)}deg)` }}
            >
              <div className="text-4xl mb-3">{technique.icon}</div>
              <h4 className="mb-2">{technique.title}</h4>
              <p className="text-sm text-muted-foreground">{technique.description}</p>
            </div>
          ))}
        </div>

        {/* Animations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animations.map((animation, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                transform: `rotate(${(index % 3) - 1}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chart-3/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl group-hover:scale-105 transition-all">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-chart-3/20">
                  <ImageWithFallback
                    src={animation.image}
                    alt={animation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="px-3 py-1 rounded-full text-xs bg-chart-3/90 backdrop-blur-md text-foreground">
                      {animation.type}
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs bg-primary/90 backdrop-blur-md text-primary-foreground">
                      {animation.style}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="p-4 bg-white rounded-full hover:scale-110 transition-transform shadow-xl">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg mb-2">{animation.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {animation.description}
                  </p>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full">
                      <Clock className="w-3 h-3" />
                      {animation.duration}
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full">
                      <Zap className="w-3 h-3" />
                      {animation.frames} frames
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "300+", label: "Animaciones Creadas" },
            { value: "60 FPS", label: "Suavidad Garantizada" },
            { value: "2D & 3D", label: "Estilos Diversos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-chart-3/10 to-primary/10 border-2 border-border rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-chart-3/10 to-primary/10 rounded-3xl p-8 max-w-2xl">
            <Film className="w-12 h-12 mx-auto mb-4 text-chart-3" />
            <h3 className="mb-3">¿Necesitás animaciones personalizadas?</h3>
            <p className="text-muted-foreground mb-6">
              Creamos animaciones únicas que dan vida y personalidad a tus personajes
            </p>
            <button className="px-6 py-3 bg-chart-3 hover:bg-chart-3/90 text-foreground rounded-full transition-all hover:scale-105 shadow-lg">
              Contactar para Proyectos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
