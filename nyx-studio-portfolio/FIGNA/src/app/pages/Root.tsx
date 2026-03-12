import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";

export function Root() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="mt-20 border-t-4 border-primary/40 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4 text-primary">Nys Studio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Creando mundos mágicos con pasión, arte y tecnología.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Enlaces Rápidos</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/games" className="text-muted-foreground hover:text-primary transition-colors">
                  Nuestros Juegos
                </a>
                <a href="/art" className="text-muted-foreground hover:text-primary transition-colors">
                  Galería de Arte
                </a>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {["Twitter", "Discord", "Instagram"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary transition-all cursor-pointer flex items-center justify-center group"
                  >
                    <span className="text-xs group-hover:scale-110 transition-transform">
                      {social[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Nys Studio. Hecho con 💖 y dedicación.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}