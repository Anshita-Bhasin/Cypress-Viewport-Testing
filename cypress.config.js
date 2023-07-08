const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 760,
  viewportHeight: 700,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
