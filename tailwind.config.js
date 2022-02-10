module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'mobile': '320px',
                'tablet': '639px',
                'laptop': '1023px',
                'desktop': '1279px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}