import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#1A1625",
          800: "#231D30",
          700: "#2D2638"
        },
        background: "#1A1625",
        foreground: "#E8E4F3",
        card: "#231D30",
        "card-foreground": "#E8E4F3",
        popover: "#231D30",
        "popover-foreground": "#E8E4F3",
        accent: {
          gold: "#f5c8a8",
          cyan: "#8ad9e6",
          pink: "#f3a4c7"
        },
        primary: "#7B68C4",
        "primary-foreground": "#FFFFFF",
        secondary: "#5B8FB9",
        "secondary-foreground": "#FFFFFF",
        muted: "#2D2638",
        "muted-foreground": "#B5A8C9",
        "accent-foreground": "#FFFFFF",
        destructive: "#B67BA8",
        "destructive-foreground": "#FFFFFF",
        border: "rgba(123, 104, 196, 0.3)",
        input: "transparent",
        "chart-3": "#8B9DC3"
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

