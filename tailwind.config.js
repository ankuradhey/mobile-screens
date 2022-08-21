module.exports = {
    content: [
        './src/*.{html,js}'
    ],
    theme: {
        container: {
          center: true,
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}