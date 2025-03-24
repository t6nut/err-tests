import { test, expect } from '@playwright/test';

test('Search functionality works on ERR.ee', async ({ page }) => {
	// Open the ERR.ee homepage
	await page.goto('https://www.err.ee');

	// Locate the search bar and type a query
	const searchInput = page.locator('.navbar-form input[placeholder="Otsi"]');
	await searchInput.fill('Eesti');

	// Press Enter to search
	await searchInput.press('Enter');

	// Wait for search results to appear
	await page.waitForSelector('.search-content', { timeout: 5000 });
	const results = page.locator('.real-fp-container');
	await expect(results).toBeVisible();

	// Verify that at least one result is displayed
	const resultItems = results.locator('.search-content');
	const count = await resultItems.count();
	expect(count).toBeGreaterThan(0);
});
