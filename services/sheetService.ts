import { PortfolioItem, Category } from "../types";

// Apunta a tu servidor local Node.js
const API_URL = 'http://localhost:3001/api/sheet';

export const fetchPortfolioFromSheet = async (): Promise<PortfolioItem[] | null> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      console.error(`Backend error: ${response.status}`);
      throw new Error('Error conectando con el servidor backend (server.js)');
    }
    
    const data = await response.json();
    const rows = data.values; // El backend devuelve { values:Array[][] }

    if (!rows || rows.length === 0) return [];

    // Mapeamos las filas (Array de strings) a objetos PortfolioItem
    const items: PortfolioItem[] = rows.map((cols: string[]) => {
      // Helper para obtener valor seguro (si la columna está vacía)
      const get = (i: number) => cols[i] ? cols[i].trim() : '';
      
      const rawTags = get(5);
      let tags: string[] = [];
      if (rawTags) {
        // Soporta separación por comas o barras verticales
        tags = rawTags.split(/,|\|/).map(t => t.trim()).filter(t => t.length > 0);
      }

      return {
        id: get(0) || Date.now().toString(),
        title: get(1) || 'Untitled',
        description: get(2) || '',
        // Casteo seguro al enum Category
        category: (Object.values(Category).includes(get(3) as Category) 
          ? get(3) as Category 
          : Category.MODELING_3D),
        thumbnailUrl: get(4) || 'https://picsum.photos/400/400',
        tags: tags,
        modelUrl: get(6) || undefined,
        videoUrl: get(7) || undefined,
        explanation: get(8) || undefined,
        gameEmbedUrl: get(9) || undefined,
        externalLink: get(10) || undefined,
      };
    });

    return items;
  } catch (error) {
    console.error("Error cargando desde API Backend:", error);
    // Retornar null hará que App.tsx use los datos de respaldo locales
    return null;
  }
};