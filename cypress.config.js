const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewportHeight: 1080,
  viewportWidth: 1920,
  
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    "env": {
      "refreshBaseURL":"https://www.dailybreak.com/embed/allergan-refresh-national-demo"
   }
  },
});
