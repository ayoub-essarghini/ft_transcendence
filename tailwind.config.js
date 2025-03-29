/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "./public/index.html"
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       border: "hsl(var(--border))",
  //       input: "hsl(var(--input))",
  //       ring: "hsl(var(--ring))",
  //       background: {
  //         DEFAULT: "hsl(var(--background))",
  //         light: "#ffffff",
  //         dark: "#121212",
  //       },
  //       foreground: "hsl(var(--foreground))",
  //       primary: {
  //         50: "#f0f9ff",
  //         100: "#e0f2fe",
  //         200: "#bae6fd",
  //         300: "#7dd3fc",
  //         400: "#38bdf8",
  //         500: "#0ea5e9",
  //         600: "#0284c7",
  //         700: "#0369a1",
  //         800: "#075985",
  //         900: "#0c4a6e",
  //         950: "#082f49",
  //         DEFAULT: "hsl(var(--primary))",
  //         foreground: "hsl(var(--primary-foreground))",
  //       },
  //       secondary: {
  //         50: "#f5f3ff",
  //         100: "#ede9fe",
  //         200: "#ddd6fe",
  //         300: "#c4b5fd",
  //         400: "#a78bfa",
  //         500: "#8b5cf6",
  //         600: "#7c3aed",
  //         700: "#6d28d9",
  //         800: "#5b21b6",
  //         900: "#4c1d95",
  //         950: "#2e1065",
  //         DEFAULT: "hsl(var(--secondary))",
  //         foreground: "hsl(var(--secondary-foreground))",
  //       },
  //       destructive: {
  //         DEFAULT: "hsl(var(--destructive))",
  //         foreground: "hsl(var(--destructive-foreground))",
  //       },
  //       muted: {
  //         DEFAULT: "hsl(var(--muted))",
  //         foreground: "hsl(var(--muted-foreground))",
  //       },
  //       accent: {
  //         DEFAULT: "hsl(var(--accent))",
  //         foreground: "hsl(var(--accent-foreground))",
  //       },
  //       popover: {
  //         DEFAULT: "hsl(var(--popover))",
  //         foreground: "hsl(var(--popover-foreground))",
  //       },
  //       card: {
  //         DEFAULT: "hsl(var(--card))",
  //         foreground: "hsl(var(--card-foreground))",
  //       },
  //       surface: {
  //         light: "#f9fafb",
  //         dark: "#1e1e1e",
  //       },
  //       text: {
  //         light: {
  //           primary: "#111827",
  //           secondary: "#4b5563",
  //         },
  //         dark: {
  //           primary: "#f9fafb",
  //           secondary: "#9ca3af",
  //         },
  //       },
  //     },
  //     borderRadius: {
  //       lg: "var(--radius)",
  //       md: "calc(var(--radius) - 2px)",
  //       sm: "calc(var(--radius) - 4px)",
  //     },
  //     boxShadow: {
  //       "custom-light": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  //       "custom-dark": "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
  //     },
  //   },
  // },
  // plugins: [require("tailwindcss-animate")],
}