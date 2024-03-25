const { test, expect } = require('@playwright/test');

test('First Playwright test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

test('Page Playwright Test', async({ page }) => {
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});