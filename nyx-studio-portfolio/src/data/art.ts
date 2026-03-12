export type ArtPieceType = "character" | "concept" | "3d";

export type ArtPiece = {
  id: string;
  title: string;
  type: ArtPieceType;
  imageUrl?: string;
  modelUrl?: string;
  description?: string;
};

export const artPieces: ArtPiece[] = [
  {
    id: "character-nyx-guardian",
    title: "Guardiana de la Noche Eterna",
    type: "character",
    imageUrl: "/images/art/character-nyx-guardian.jpg",
    description:
      "Exploración de personaje para la deidad de la noche, con silueta marcada y luz mágica en los ojos."
  },
  {
    id: "concept-astral-forest",
    title: "Bosque Astral",
    type: "concept",
    imageUrl: "/images/art/concept-astral-forest.jpg",
    description:
      "Concept art de un bosque iluminado por constelaciones flotantes y luciérnagas de neón."
  },
  {
    id: "3d-owl-statue",
    title: "Estatua 3D – Búho de Nyx",
    type: "3d",
    modelUrl: "/models/owl-statue.glb",
    description:
      "Modelo 3D sencillo para usar como pieza central en el visor rotatorio de la landing."
  }
];

