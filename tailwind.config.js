module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'google-sans': ['Open Sans', 'sans-serif'],
                'hind-font': ['Hind', 'sans-serif']
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/line-clamp')
    ]
}