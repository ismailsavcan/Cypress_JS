const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    retries:{"runMode": 1, "openMode": 1},
    baseUrl: 'https://todo.qacart.com',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})