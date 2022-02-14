module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
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