import { PortfolioItem, Category } from "../types";

// This URL is derived from the "Published to Web" link of your Google Sheet.
// This is the most reliable way to fetch data without CORS errors in a browser.
// Make sure "File > Share > Publish to web" is active on your sheet.
const PUBLISHED_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQt3ufQQgIVsriiR8y5FL7hIkY4xuo7Bt50_WLqFYUex4waRmWAbcMQvdDS-vQUWClXM_z_f8CjlYfc/pub?gid=0&single=true&output=csv';

// Helper to handle CSV parsing with potential quoted strings
const parseCSVLine = (str: string): string[] => {
  const result = [];
  let current = '';
  let inQuote = false;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char === '"') {
      inQuote = !inQuote;
    } else if (char === ',' && !inQuote) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
};

export const fetchPortfolioFromSheet = async (): Promise<PortfolioItem[] | null> => {
  try {
    // Append timestamp to avoid stale cache errors
    const response = await fetch(`${PUBLISHED_CSV_URL}&t=${Date.now()}`);
    
    if (!response.ok) {
      console.error(`Sheet fetch failed: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch sheet');
    }
    
    const text = await response.text();
    const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
    
    // Remove header row
    const dataRows = rows.slice(1);
    
    const items: PortfolioItem[] = dataRows.map(row => {
      const cols = parseCSVLine(row);
      
      // Helper to clean quotes
      const clean = (s: string) => s ? s.replace(/^"|"$/g, '').replace(/""/g, '"') : '';

      // Handle tags splitting by comma or pipe
      const rawTags = clean(cols[5]);
      let tags: string[] = [];
      if (rawTags) {
        // Split by comma OR pipe
        tags = rawTags.split(/,|\|/).map(t => t.trim()).filter(t => t.length > 0);
      }

      return {
        id: clean(cols[0]) || Date.now().toString(),
        title: clean(cols[1]) || 'Untitled',
        description: clean(cols[2]) || '',
        category: (clean(cols[3]) as Category) || Category.MODELING_3D,
        thumbnailUrl: clean(cols[4]) || 'https://picsum.photos/400/400',
        tags: tags,
        modelUrl: clean(cols[6]) || undefined,
        videoUrl: clean(cols[7]) || undefined,
        explanation: clean(cols[8]) || undefined,
        gameEmbedUrl: clean(cols[9]) || undefined,
        externalLink: clean(cols[10]) || undefined,
      };
    });

    return items;
  } catch (error) {
    console.error("Error loading from Google Sheets:", error);
    return null;
  }
};