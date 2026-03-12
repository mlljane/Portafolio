export type Game = {
  slug: string;
  title: string;
  shortDescription: string;
  itchEmbedUrl: string;
  itchPageUrl: string;
  teaserVideoUrl?: string;
  thumbnail: string;
  tags: string[];
};

export const games: Game[] = [
  {
    slug: "proyecto-nyx-ejemplo",
    title: "Proyecto Nyx (Ejemplo)",
    shortDescription:
      "Una pequeña aventura nocturna en la que exploras un bosque encantado guiada por luciérnagas astrales.",
    itchEmbedUrl: "https://itch.io/embed/your-game-id?link_color=6bf0ff",
    itchPageUrl: "https://tu-usuario.itch.io/tu-juego",
    teaserVideoUrl: "",
    thumbnail: "/images/games/nyx-example.jpg",
    tags: ["prototipo", "aventura", "fantasía"]
  }
];

export const featuredGameSlug = "proyecto-nyx-ejemplo";

