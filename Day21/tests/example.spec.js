// @ts-check
import { test, expect } from '@playwright/test';

test.describe('jio mart test', () => {

  test.use({ storageState: 'auth.json' });

  test.skip('search for fruits', async ({ page }) => {

    await page.goto('https://www.jiomart.com/sections/low-price-mumbai');

    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');

    await input.click();

    await input.fill('fruits');

    await input.press('Enter');

    await expect(page.getByText('fruits').first()).toBeVisible();

  });

  test('profile', async ({ page }) => {

    await page.goto('https://www.jiomart.com/profile');

    await page.waitForTimeout(5000);

    const profileName = page.getByTestId('JDSText-text').nth(0);

    console.log(await profileName.textContent());

    await expect(profileName).toContainText('Sahil Alam');

  });

});