import Link from "next/link";
import {
  Gamepad2,
  Home,
  Palette,
  Box,
  Film,
  Info
} from "lucide-react";

const links = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/games", label: "Juegos", icon: Gamepad2 },
  { to: "/art", label: "Arte", icon: Palette },
  { to: "/3d-models", label: "Modelos 3D", icon: Box },
  { to: "/animations", label: "Animaciones", icon: Film },
  { to: "/about", label: "Sobre Nosotros", icon: Info }
];

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-primary/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-secondary blur-sm transition-all group-hover:blur-md" />
              <div className="relative rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 transition-transform group-hover:rotate-6">
                <Gamepad2 className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
                Nys
              </span>
              <span className="-mt-1 text-xs text-muted-foreground">
                Studio
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className="relative rounded-full px-5 py-2.5 text-sm text-foreground transition-all duration-300 hover:bg-muted"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <button className="rounded-xl bg-muted p-2 transition-colors hover:bg-primary">
              <svg
                className="h-6 w-6"
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

        <div className="mt-4 flex flex-wrap gap-2 md:hidden">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                href={link.to}
                className="rounded-full bg-muted px-4 py-2 text-sm text-foreground transition-all"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
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

