module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                support: "url('/src/assets/support.png') ",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
