/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ec1313",
                "legal-black": "#1a1a1a",
                "legal-gray": "#64748b"
            }
        },
    },
    plugins: [],
}
