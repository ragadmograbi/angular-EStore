import { test, expect } from '@playwright/test';

test('Login - with already existing account', async ({ page }) => {
    const account = {
        password: 'Abcdefg',
        username: 'Abcdefghi',
        email: 'Abcdefghi@gmail.com',
        login: true,
        cart: []
      };

    const ss = JSON.stringify(account);

    await page.addInitScript(`window.localStorage.setItem('Abcdefghi@gmail.com', '${ss}')`);

    await page.goto('', {waitUntil: 'domcontentloaded'});
    await page.locator('#loginEmail').fill('Abcdefghi@gmail.com');
    await page.locator('#loginPassword').fill('Abcdefg');
    await page.locator('#loginButton').click();
    const navbar = page.locator('#app-navbar');
    await expect(navbar).toBeVisible();
    const username = page.locator('#navbar_username');
    await expect(username).toHaveText("Abcdefghi");
});



test('Login - not registered', async ({ page }) => {
  await page.goto('', {waitUntil: 'domcontentloaded'});
  await page.locator('#loginEmail').fill('Abcdefghi@gmail.com');
  await page.locator('#loginPassword').fill('Abcdefg');
  await page.locator('#loginButton').click();
  const navbar = page.locator('#app-navbar');
  await expect(navbar).not.toBeVisible();
  const notification = page.locator('#toast-container');
  await expect(notification).toHaveText("Invalid email, email not found, sign Up");
});


test('Login - wrong password', async ({ page }) => {
  const account = {
      password: 'Abcdefg',
      username: 'Abcdefghi',
      email: 'Abcdefghi@gmail.com',
      login: true,
      cart: []
    };

  const ss = JSON.stringify(account);

  await page.addInitScript(`window.localStorage.setItem('Abcdefghi@gmail.com', '${ss}')`);

  await page.goto('', {waitUntil: 'domcontentloaded'});
  await page.locator('#loginEmail').fill('Abcdefghi@gmail.com');
  await page.locator('#loginPassword').fill('1234');
  await page.locator('#loginButton').click();
  const navbar = page.locator('#app-navbar');
  await expect(navbar).not.toBeVisible();
  const notification = page.locator('#toast-container');
  await expect(notification).toHaveText("wrong password");
});