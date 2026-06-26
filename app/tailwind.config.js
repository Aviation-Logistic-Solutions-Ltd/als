/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        // "The Technical Record" palette
        ink: '#0E1A24',
        'ink-2': '#152634',
        paper: '#EDE8D9',
        'paper-2': '#F6F2E9',
        data: '#00A9D8',
        'data-deep': '#0B7FA3',
        stamp: '#C8462B',
        steel: '#6B7785',
        // shadcn token bridge (so ui/* primitives still resolve)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        meta: '0.22em',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 1px)',
        sm: '1px',
      },
      backgroundImage: {
        // blueprint hairline grid
        blueprint:
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        // engineering paper grid
        ledger:
          'linear-gradient(rgba(14,26,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,26,36,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '8%': { opacity: '1' },
          '92%': { opacity: '1' },
          '100%': { transform: 'translateY(1100%)', opacity: '0' },
        },
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        scan: 'scan 3.6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'reveal-up': 'reveal-up 0.6s ease-out both',
        blink: 'blink 1.4s steps(2) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
