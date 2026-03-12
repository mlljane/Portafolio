import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "../components/Navigation";

export const metadata: Metadata = {
  title: "Nyx Studio – Mundos pequeños, historias gigantes",
  description:
    "Nyx Studio es un mini estudio personal de videojuegos y arte, donde se mezclan bocetos, prototipos y pequeñas historias jugables.",
  metadataBase: new URL("https://localhost")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="min-h-[calc(100vh-4rem)]">
          <main>{children}</main>
          <footer className="mt-20 border-t-4 border-primary/40 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-4 text-primary">Nys Studio</h3>
                  <p className="leading-relaxed text-sm text-muted-foreground">
                    Creando mundos mágicos con pasión, arte y tecnología.
                  </p>
                </div>
                <div>
                  <h4 className="mb-4">Enlaces Rápidos</h4>
                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href="/games"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Nuestros Juegos
                    </a>
                    <a
                      href="/art"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Galería de Arte
                    </a>
                    <a
                      href="/about"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
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
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary/20 transition-all hover:bg-primary"
                      >
                        <span className="text-xs transition-transform">
                          {social[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Nys Studio. Hecho con 💖 y dedicación.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

