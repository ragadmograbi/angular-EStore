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



test('Signup - with invalid email', async ({ page }) => {
    await page.goto('', {waitUntil: 'domcontentloaded'});
    await page.locator('#signupBtn').click();
    await page.locator('#signup_email').type('Abcdefghi-@gmail.com');
    await page.locator('#signup_password').fill('Abcdefg');
    await page.locator('#signup_confirm').fill('Abcdefg');
    const regbtn = page.locator('#registerBtn')
    await expect(regbtn).toBeDisabled();
    const username = page.locator('#emailError');
    await expect(username).toHaveText("* You have entered an invalid email address!");
});



test('Signup - with exists email', async ({ page }) => {
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
    await page.locator('#signupBtn').click();
    await page.locator('#signup_email').type('Abcdefghi@gmail.com');
    await page.locator('#signup_password').fill('Abcdefg');
    await page.locator('#signup_confirm').fill('Abcdefg');
    const regbtn = page.locator('#registerBtn')
    await expect(regbtn).toBeDisabled();
    const username = page.locator('#emailError');
    await expect(username).toHaveText("* you already have an account sign in");
});



test('Signup - invalid password', async ({ page }) => {
    await page.goto('', {waitUntil: 'domcontentloaded'});
    await page.locator('#signupBtn').click();
    await page.locator('#signup_email').type('Abcdefghi@gmail.com');
    await page.locator('#signup_password').type('Abc');
    await page.locator('#signup_confirm').type('Abc');
    const regbtn = page.locator('#registerBtn')
    await expect(regbtn).toBeDisabled();
    const username = page.locator('#StrongPassError');
    await expect(username).toHaveText("* Password length should be at least 6 letters");
});


test('Signup - invalid repassword', async ({ page }) => {
    await page.goto('', {waitUntil: 'domcontentloaded'});
    await page.locator('#signupBtn').click();
    await page.locator('#signup_email').type('Abcdefghi@gmail.com');
    await page.locator('#signup_password').type('Abcdefghi');
    await page.locator('#signup_confirm').type('Abc');
    const regbtn = page.locator('#registerBtn')
    await expect(regbtn).toBeDisabled();
    const username = page.locator('#RePassError');
    await expect(username).toHaveText("* incorrect password: repassword doesn\' match your password");
});

