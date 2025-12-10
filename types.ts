export enum Category {
  MODELING_3D = 'MODELING_3D',
  ANIMATION_2D = 'ANIMATION_2D',
  GAME_DEV = 'GAME_DEV',
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  thumbnailUrl: string;
  tags: string[];
  // 3D Specific
  modelUrl?: string; // In a real app, path to .glb
  // 2D Specific
  videoUrl?: string; 
  explanation?: string;
  // Game Specific
  gameEmbedUrl?: string;
  externalLink?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}