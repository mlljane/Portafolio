import { GoogleGenAI } from "@google/genai";
import { PortfolioItem } from "../types";

// Initialize Gemini
// KEY REQUIREMENT: The API key must be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres un asistente virtual carismático y profesional integrado en el portafolio de un Artista 3D y Desarrollador de Videojuegos.
Tu trabajo es responder preguntas de posibles reclutadores o clientes sobre el trabajo del artista.

Información del Artista:
- Nombre: Alex
- Especialidades: Modelado de personajes Hard-surface, Escenarios Low-poly, Animación 2D frame-by-frame, Desarrollo en Unity/Unreal.
- Estilo: Cyberpunk, Fantasía Estilizada.

Instrucciones de tono:
- Sé breve pero entusiasta.
- Usa emojis ocasionalmente 🎨 🎮.
- Si te preguntan por contacto, sugiere enviar un correo a alex@artedev.com.
- Resalta siempre la versatilidad técnica y artística.
`;

export const sendMessageToGemini = async (
  message: string,
  portfolioItems: PortfolioItem[]
): Promise<string> => {
  try {
    // Create a context string from the portfolio items to ground the AI's answers
    const itemsContext = portfolioItems.map(item => 
      `- Proyecto: ${item.title} (${item.category}). Descripción: ${item.description}. Herramientas: ${item.tags.join(', ')}`
    ).join('\n');

    const fullPrompt = `Contexto de los proyectos del portafolio:\n${itemsContext}\n\nPregunta del usuario: ${message}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
    return "Tuve un problema técnico conectando con mi cerebro digital. 🤖 Por favor intenta de nuevo.";
  }
};