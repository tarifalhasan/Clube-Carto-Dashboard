/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./assets/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFAFA",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "table-border": "rgba(26, 147, 46, 0.18)",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        text: {
          green: "hsl(var(--green-text))",
        },
        skin: {
          "gray-900": "#292D32",
          JungleGreen: "#46674B",
          "gray-950": "#060606",
          "navbar-boder": "rgba(0, 0, 0, 0.08)",
          red: "#EE201C",
        },
        "card-border": "rgba(26, 147, 46, 0.18)",
        "dark-shade-of-blue": "#003178",
        "border-green-light": "rgba(116, 238, 174, 0.70)",
        "border-green-dark": "rgba(86, 154, 89, 0.50)",
        "table-row-dark": "#353A40",
        "green-light": "#74EEAE",
        "gray-500": "rgba(217, 217, 217, 0.56)",
        "heavy-gray-400": "rgba(244, 244, 244, 0.80)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "6xl": [
          "2rem",
          {
            lineHeight: "39.01px",
            letterSpacing: "0.5%",
            fontWeight: "600",
          },
        ],
        "5xl": [
          "1.75em",
          {
            lineHeight: "39.01px",
            letterSpacing: "0.5%",
            fontWeight: "600",
          },
        ],
        "4xl": [
          "1.375em",
          {
            lineHeight: "39.01px",
            letterSpacing: "0.22px",
            fontWeight: "400",
          },
        ],

        "card-title": [
          "1.625em",
          {
            lineHeight: "39.01px",
            letterSpacing: "0.22px",
            fontWeight: "600",
          },
        ],
      },
      dropShadow: {
        base: "0px 4px 6px 0px rgba(0, 0, 0, 0.02)",
        "5xl": "0px 0px 6px rgba(0, 0, 0, 0.10)",
      },
      boxShadow: {
        main: "0px 4px 6px 0px rgba(0, 0, 0, 0.02)",
        "5xl": "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
        "btn-shadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        14: "14px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
