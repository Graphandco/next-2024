/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '767px',
            // => @media (min-width: 640px) { ... }

            md: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        fontFamily: {
            text: 'var(--text-font)',
            title: 'var(--title-font)',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: 'clamp(1rem, 10px + 2vw, 3rem)',
                // sm: "2rem",
                // lg: "4rem",
                // xl: "5rem",
                // "2xl": "6rem",
            },
            screens: {
                xl: '1200px',
            },
        },
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                contrast: 'var(--contrast)',
                contrast5: 'var(--contrast-5)',
                contrast10: 'var(--contrast-10)',
                bg: 'var(--bg-color)',
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                purple: '#3f3cbb',
                midnight: '#121063',
                metal: '#565584',
                tahiti: '#3ab7bf',
                silver: '#ecebff',
                'bubble-gum': '#ff77e9',
                bermuda: '#78dcca',
            },

            fontSize: {
                sm: '0.8rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '2rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
        },
    },
};
