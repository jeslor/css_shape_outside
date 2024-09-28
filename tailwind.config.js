/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        dropSize:{
          0:{width: ""}
        },
        dropDown: {
          "0%":{transform: "translateY(-20px)",
            opacity:"0.2"
          },
          "20%":{transform: "translateY(10px)",
            opacity:"100"
          },
          "100%": {transform: "translateY(100vh)",
            opacity:"100"
          }
        }
      },
      animation: {
        fallDown:"dropDown 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}