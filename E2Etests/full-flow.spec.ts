import { test, expect } from '@playwright/test';
import { login } from './common/login';

test('Login - Add to Cart & view Cart list', async ({ page }) => {
   
    await login(page);

    const store_item1 = page.locator('#item1 >> text=" add to cart "');
    const store_item2 = page.locator('#item3 >> text=" add to cart "');
    const store_item3 = page.locator('#item5 >> text=" add to cart "');
    const store_item4 = page.locator('#item7 >> text=" add to cart "');

    await store_item1.click();
    await store_item2.click();
    await store_item3.click();
    await store_item4.click();

    const cartBtn = page.locator('#navbar_cart');
    await cartBtn.click();

    const cart_item1 = page.locator('#item1');
    const cart_item2 = page.locator('#item3');
    const cart_item3 = page.locator('#item5');
    const cart_item4 = page.locator('#item7'); 

    await expect(cart_item1).toBeVisible();
    await expect(cart_item2).toBeVisible();
    await expect(cart_item3).toBeVisible();
    await expect(cart_item4).toBeVisible();
});
