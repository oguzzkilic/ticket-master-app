module.exports = {
  "app should work": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .waitForElementVisible("#app .test-search-input", 5000)
      .waitForElementVisible("#app .test-search-button", 5000)
      .setValue("#app .test-search-input", "Test Event")
      .click("#app .test-search-button")
      .waitForElementVisible("#app .test-search-loader", 5000)
      .waitForElementNotPresent("#app .test-search-loader", 10000)
      .waitForElementVisible(".test-event-list-item-image", 5000)
      .click("#app .test-event-detail")
      .waitForElementVisible(".test-event-detail-title", 5000)
      .waitForElementVisible(".test-event-detail-subtitle", 5000)
      .waitForElementVisible(".test-event-detail-location", 5000)
      .waitForElementVisible(".test-event-detail-image", 5000)
      .waitForElementVisible(".test-event-detail-buy-ticket", 5000)
      .click(".test-back-search-page")
      .waitForElementVisible(".test-event-list-item", 5000)
      .clearValue("#app .test-search-input")
      .setValue("#app .test-search-input", "...")
      .click("#app .test-search-button")
      .waitForElementVisible("#app .test-fetch-error", 8000)
      .setValue("#app .test-search-input", "Test Event")
      .click("#app .test-search-button")
      .waitForElementVisible("#app .test-search-loader", 5000)
      .waitForElementNotPresent("#app .test-search-loader", 10000)
  },
  "pagination should work": browser => {
    browser.isVisible(".test-pagination-link", () => {
      browser
        .click(".test-pagination-next")
        .waitForElementVisible(".test-event-list-item", 5000)
        .click(".test-pagination-previous")
        .waitForElementVisible(".test-event-list-item", 5000)
        .clearValue("#app .test-search-input")
        .setValue("#app .test-search-input", "Elvis")
        .click("#app .test-search-button")
        .waitForElementVisible(".test-event-list-item", 5000)
        .end();
    });
  }
};
