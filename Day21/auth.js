const { chromium } = require('@playwright/test');

(async () => {

  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.jiomart.com/');

  console.log("Please login manually");

  // Wait 90 seconds for manual login
  await page.waitForTimeout(90000);

  await context.storageState({
    path: 'auth.json'
  });

  console.log("auth.json created");

  await browser.close();

})();