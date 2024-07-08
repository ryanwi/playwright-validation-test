import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('positive', async ({ page }) => {
  await page.getByLabel('Should Succeed:').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'An error occurred while' })).not.toBeVisible();
  await expect(page.locator('.summary')).toBeVisible();
});

test('negative', async ({ page }) => {
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'An error occurred while' })).toBeVisible();
  await expect(page.locator('.summary')).not.toBeVisible();
});
