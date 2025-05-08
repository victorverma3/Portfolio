/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "500px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "nav-display": "992px",
        },
        extend: {
            border: {
                1: "1px",
            },
            width: {
                88: "352px",
                112: "448px",
                128: "512px",
            },
        },
    },

    plugins: [],
};
