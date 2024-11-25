import plugin from 'tailwindcss/plugin';
import { rose, slate, teal } from 'tailwindcss/colors';

const supportedAppThemeList = ['light', 'dark'];

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: teal,
                secondary: rose,
                base: slate,
            },
            screens: {
                '6xs': '320px',
                '5xs': '384px',
                '4xs': '448px',
                '3xs': '512px',
                '2xs': '576px',
                xs: '640px',
                sm: '704px',
                md: '768px',
                lg: '896px',
                xl: '1024px',
                '2xl': '1152px',
                '3xl': '1280px',
                '4xl': '1408px',
                '5xl': '1536px',
                '6xl': '1664px',
            },
            fontFamily: {
                main: ['Montserrat', 'sans-serif'],
                number: ['Roboto Mono', 'monospace'],
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            // Load app theme as class
            supportedAppThemeList.forEach(appTheme => addVariant(`theme-${appTheme}`, `:is(.theme-${appTheme} &)`));
        }),
    ],
};
