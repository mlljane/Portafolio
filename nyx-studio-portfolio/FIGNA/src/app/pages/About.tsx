import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Sparkles, Mail, MapPin, Coffee } from "lucide-react";

export function About() {
  const team = [
    {
      name: "María García",
      role: "Directora Creativa",
      avatar: "https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc3MzA2MjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Amante del pixel art y los colores pastel",
      color: "from-primary to-secondary",
    },
    {
      name: "Carlos Díaz",
      role: "Desarrollador Principal",
      avatar: "https://images.unsplash.com/photo-1650081221669-fccab00c76a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMG1vZGVsJTIwcmVuZGVyfGVufDF8fHx8MTc3MzEzMzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Mago del código y las mecánicas de juego",
      color: "from-accent to-chart-3",
    },
    {
      name: "Ana López",
      role: "Artista 3D",
      avatar: "https://images.unsplash.com/photo-1731552935151-cab1c7eee2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY3JlYXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzczMTMzMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Especialista en modelado y texturizado",
      color: "from-secondary to-chart-3",
    },
    {
      name: "Pablo Ruiz",
      role: "Animador",
      avatar: "https://images.unsplash.com/photo-1529578664164-410c379f3f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZ2FtZSUyMGFuaW1hdGlvbiUyMHNwcml0ZXxlbnwxfHx8fDE3NzMxMzMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Da vida a cada personaje con pasión",
      color: "from-chart-3 to-primary",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasión",
      description: "Cada píxel está hecho con amor y dedicación",
      color: "text-destructive",
      bg: "bg-destructive/10",
    },
    {
      icon: Sparkles,
      title: "Creatividad",
      description: "Ideas únicas que cobran vida en pantalla",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos juntos para crear magia",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Coffee,
      title: "Diversión",
      description: "Disfrutamos lo que hacemos cada día",
      color: "text-chart-3",
      bg: "bg-chart-3/10",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 mb-6">
            <Heart className="w-4 h-4 text-destructive" />
            <span className="text-sm">Sobre Nosotros</span>
          </div>
          <h1 className="text-5xl mb-6">
            Conocé a{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Nys Studio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos un pequeño estudio indie apasionado por crear experiencias mágicas
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border-2 border-border">
            <h2 className="mb-6 text-center">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nys Studio nació en 2023 de un sueño compartido: crear videojuegos
                que transporten a los jugadores a mundos llenos de color, magia y corazón.
              </p>
              <p>
                Empezamos como un grupo de amigos que se reunían los fines de semana para
                dar vida a ideas locas. Con cada proyecto, nuestra pasión creció, y lo que
                comenzó como un hobby se convirtió en nuestro estudio indie.
              </p>
              <p>
                Hoy, nos especializamos en arte con estilo único, modelos
                3D low-poly llenos de personalidad, y animaciones que hacen sonreír. Cada
                juego que creamos es un pedacito de nuestro corazón.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`${value.bg} border-2 border-border rounded-2xl p-6 text-center hover:scale-105 transition-transform`}
                  style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
                >
                  <div
                    className={`${value.color} w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl group-hover:scale-105 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}
                    ></div>
                    <ImageWithFallback
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4", label: "Miembros del Equipo" },
            { value: "10+", label: "Proyectos Completados" },
            { value: "2M+", label: "Jugadores Felices" },
            { value: "∞", label: "Tazas de Café" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-border rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 max-w-2xl">
            <h2 className="mb-4 text-primary-foreground">¿Querés trabajar con nosotros?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Estamos siempre abiertos a nuevos proyectos y colaboraciones
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <a
                href="mailto:hola@nysstudio.com"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-foreground rounded-full hover:scale-105 transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>hola@nysstudio.com</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-white/90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}