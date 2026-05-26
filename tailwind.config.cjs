module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    { pattern: /^text-/ },
    { pattern: /^md:text-/ },
    { pattern: /^font-/ },
    { pattern: /^bg-/ },
    { pattern: /^hover:/ },
    { pattern: /^rounded/ },
    { pattern: /^flex/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
