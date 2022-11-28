import { Page } from "@playwright/test";

export async function login(page: Page) {
    const account = {
        password: 'Abcdefg',
        username: 'Abcdefghi',
        email: 'Abcdefghi@gmail.com',
        login: true,
        cart: []
    };

    const ss = JSON.stringify(account);
    await page.goto('', { waitUntil: 'domcontentloaded' });
    await page.evaluate(`window.localStorage.setItem('Abcdefghi@gmail.com', '${ss}')`);
    await page.locator('#loginEmail').fill('Abcdefghi@gmail.com');
    await page.locator('#loginPassword').fill('Abcdefg');
    await page.locator('#loginButton').click();
}