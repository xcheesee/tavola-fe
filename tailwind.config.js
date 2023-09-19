/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          'gold': {
            '50': '#fefce8',
            '100': '#fff9c2',
            '200': '#fff088',
            '300': '#ffe043',
            '400': '#ffcb10',
            500: '#efb103',
            '600': '#c07f00',
            '700': '#a46104',
            '800': '#874b0c',
            '900': '#733d10',
            '950': '#431f05',
          },
          'rangoon': {
            '50': '#f7f7f6',
            '100': '#e6e4e1',
            '200': '#ccc8c3',
            '300': '#aba69d',
            '400': '#888379',
            '500': '#6e685e',
            '600': '#57534a',
            '700': '#47453e',
            '800': '#3b3934',
            '900': '#33322e',
            '950': '#1b1a17',
        },

        },
        fontFamily: {
          sans: ['var(--font-roboto)'],
          serif: ['var(--font-italiana)']
        },
        keyframes: {
            dropdown: {
                '0%': { transform: "scale(1, 0.5)"},
                '50%': { transform: "scale(1, 0.7)"},
                '100%': { transform: "scale(1, 1)"},
            }
        },
        animation: {
            dropdown: 'dropdown 100ms ease-in'
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
  },
  plugins: [
    require("daisyui"),
],
}
