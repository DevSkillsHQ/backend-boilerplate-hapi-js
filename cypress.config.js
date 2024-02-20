const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    apiUrl: 'http://localhost:3000',
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
  },
})
