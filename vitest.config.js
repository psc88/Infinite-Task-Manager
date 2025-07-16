// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

module.exports = {
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}
