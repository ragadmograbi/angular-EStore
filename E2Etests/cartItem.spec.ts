import { test, expect } from '@playwright/test';
import { login } from './common/login';

test('Login - Add to Cart & remove button & change quantity', async ({ page }) => {
    await login(page);
   
    const store_item1 = page.locator('#item1 >> text=" add to cart "');
    const store_item3 = page.locator('#item3 >> text=" add to cart "');
    const store_item5 = page.locator('#item5 >> text=" add to cart "');
    const store_item7 = page.locator('#item7 >> text=" add to cart "');
    

    await store_item1.click();
    await store_item3.click();
    await store_item5.click();
    await store_item7.click();
   

    const cartBtn = page.locator('#navbar_cart');
    await cartBtn.click();

    const cart_item1 = page.locator('#item1');
    const cart_item3 = page.locator('#item3');
    const cart_item5 = page.locator('#item5');
    const cart_item7 = page.locator('#item7'); 
    
    await expect(cart_item1).toBeVisible();
    await expect(cart_item3).toBeVisible();
    await expect(cart_item5).toBeVisible();
    await expect(cart_item7).toBeVisible();

    const removeBtn = page.locator('#item1 >> text="remove"');
    await removeBtn.click();

    await expect(cart_item1).not.toBeVisible();
    await expect(cart_item3).toBeVisible();
    await expect(cart_item5).toBeVisible();
    await expect(cart_item7).toBeVisible();

    const plusbtn = page.locator('#item3 >> text="+"');
    await plusbtn.click();
    await plusbtn.click();
    const quantity = cart_item3.locator('#qnty');
    await expect(quantity).toHaveValue('3')

    await page.reload();
    await expect(cart_item1).not.toBeVisible();
    await expect(cart_item3).toBeVisible();
    await expect(cart_item5).toBeVisible();
    await expect(cart_item7).toBeVisible();
    await expect(quantity).toHaveValue('3')
});
