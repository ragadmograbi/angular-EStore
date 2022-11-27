import { test, expect } from '@playwright/test';

test('Signup - with valid data', async ({ page }) => {
    await page.goto('', {waitUntil: 'domcontentloaded'});
    await page.locator('#signupBtn').click();
    await page.locator('#signup_email').fill('Abcdefghi@gmail.com');
    await page.locator('#signup_password').fill('Abcdefg');
    await page.locator('#signup_confirm').fill('Abcdefg');
    await page.locator('#registerBtn').click();
    const navbar = page.locator('#app-navbar');
    await expect(navbar).toBeVisible();
    const username = page.locator('#navbar_username');
    await expect(username).toHaveText("Abcdefghi");
});
