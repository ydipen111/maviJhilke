/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'primary':"#FB2E86",
          'sec':"#7E33E0",
          'secDark':"#151875",
          'secl':'#EEEFFB',
          'orchid':"#C71585	",
          'third':"#8B4513",
          'fourt':"#BC8F8F",
        },
        // backgroundImage:{
        //     ecom:""
        // },
        screens:{
          'sm':'640px',
          'md':'768px',
          'lg':'1024px',
          'xl':'1280px',
          'xxl':'1536px',
        }
    },
  },
  plugins: [],
}

