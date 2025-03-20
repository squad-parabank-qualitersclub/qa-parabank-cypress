const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    experimentalStudio: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://parabank.parasoft.com/parabank",
  },
});
