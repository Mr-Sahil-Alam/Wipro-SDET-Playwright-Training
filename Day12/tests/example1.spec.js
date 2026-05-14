import { test, expect } from "@playwright/test";

test("Check Website Title", async ({ page }) => {

    await page.goto("https://www.google.com");

    const title = await page.title();

    console.log(title);

    expect(title).toContain("Google");

});