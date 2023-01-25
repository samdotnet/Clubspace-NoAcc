/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.svelte"],
  mode: 'jit',
  theme: {
    extend: {},
    fontFamily: {
      'serif':['"DM Serif Display"', 'serif'],
      'header':['Unbounded', 'cursive'],
      'mono':['"Roboto Mono"', 'monospace']
    }
  },
  plugins: [],
}