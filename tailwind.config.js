
module.exports = {
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        navigate: {
          DEFAULT: 'var(--navigate)',
          foreground: 'var(--navigate-foreground)',
        },

        play: {
          DEFAULT: 'var(--play)',
          foreground: 'var(--play-foreground)',
        },

        card: {
          DEFAULT: 'var(--card)',
          hover: 'var(--card-hover)',
        },

        muted: {
          DEFAULT: 'var(--muted)',
          hover: 'var(--muted-foreground)',
        },

        popover: {
          DEFAULT: 'var(--popover)',
          hover: 'var(--popover-foreground)',

        },


        border: 'hsl(--var(border))',
        ring: 'hsl(--var(ring))',
        input: 'hsl(--var(input))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  }
}
