/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-moderate-cyan':
                    'hsl(var(--moderate-cyan) / <alpha-value>)',
                'primary-dark-cyan': 'hsl(var(--dark-cyan) / <alpha-value>)',
                'neutral-black': 'hsl(var(--black) / <alpha-value>)',
                'neutral-dark-gray': 'hsl(var(--dark-gray) / <alpha-value>)',
            },
            backgroundImage: {
                'bg-hero-desktop':
                    "url('/src/assets/images/image-hero-desktop.jpg')",
                'bg-hero-mobile':
                    "url('/src/assets/images/image-hero-mobile.jpg')",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('all-child', '& > *');
            addVariant('not-last-child', '& > *:not(:last-child)');
        },
    ],
};
