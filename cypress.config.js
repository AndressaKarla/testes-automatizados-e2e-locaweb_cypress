const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.environment || 'prod'
      config.env = require(`./cypress/support/environments/${environment}.json`)
      config.baseUrl = config.env.baseUrl
      
      return config
    }
  }
})
