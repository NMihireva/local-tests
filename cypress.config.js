const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://localcoding.us',
    excludeSpecPattern: [
      'cypress/e2e/1-getting-started/*.js',
      'cypress/e2e/2-advanced-example/*.js'],
    viewportWidth: 1400,
    viewportHeight: 720,
    projectId: 'y5uqbu',
  },
});

//npx cypress run --record --key 19888fdc-31a5-4c15-abf9-7aa9839406b7