import { Link, useLocation } from "react-router";
import { Gamepad2, Home, Palette, Box, Film, Info } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio", icon: Home },
    { to: "/games", label: "Juegos", icon: Gamepad2 },
    { to: "/art", label: "Arte", icon: Palette },
    { to: "/3d-models", label: "Modelos 3D", icon: Box },
    { to: "/animations", label: "Animaciones", icon: Film },
    { to: "/about", label: "Sobre Nosotros", icon: Info },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b-4 border-primary/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-gradient-to-br from-primary to-secondary p-3 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nys
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Studio</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    relative px-5 py-2.5 rounded-full transition-all duration-300
                    ${
                      active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "hover:bg-muted text-foreground"
                    }
                  `}
                  style={{
                    transform: active ? "rotate(-1deg) scale(1.05)" : "rotate(0deg)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{link.label}</span>
                  </div>
                  {active && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-xl bg-muted hover:bg-primary transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  px-4 py-2 rounded-full transition-all text-sm
                  ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}