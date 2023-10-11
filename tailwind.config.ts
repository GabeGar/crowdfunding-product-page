import type { Config } from 'tailwindcss';

export default {
    future: {
        hoverOnlyWhenSupported: true,
    },
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
                'hero-desktop':
                    "url('/src/assets/images/image-hero-desktop.jpg')",
                'hero-mobile':
                    "url('/src/assets/images/image-hero-mobile.jpg')",
            },
            screens: {
                xsm: { max: '300px' },
                msm: { max: '639px' },
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('not-last-child', '& > *:not(:last-child)');
            addVariant('is-article', '& > *:is(article)');
        },
    ],
} satisfies Config;
