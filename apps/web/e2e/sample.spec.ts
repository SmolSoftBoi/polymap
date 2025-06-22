import { test, expect } from '@playwright/test';

// Ensure the home page renders expected content
// Launches the local site and checks for heading and demo link

test('shows hero section', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', {
      name: /visualise your polycule\. share with ease/i
    })
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /try the demo/i })).toBeVisible();
});
