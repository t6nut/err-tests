import { test, expect } from '@playwright/test';

test('Search functionality works on ERR.ee', async ({ page }) => {
	try {
		console.log('Navigating to ERR.ee...');
		await page.goto('https://www.err.ee');

		console.log('Locating the search bar & input search query...');
		const searchInput = page.locator('.navbar-form input[placeholder="Otsi"]');
		await searchInput.fill('Eesti');

		console.log('Submitting search...');
		await searchInput.press('Enter');

		console.log('Waiting for search results to appear...');
		// Wait for search results to appear
		await page.waitForSelector('.search-content', { timeout: 5000 });
		const results = page.locator('.real-fp-container');
		await expect(results).toBeVisible();

		console.log('Verifying search results...');
		const resultItems = results.locator('.search-content');
		const count = await resultItems.count();
		expect(count).toBeGreaterThan(0);

		console.log('Search test completed successfully.');
	} catch (error) {
		console.error('❌ Search test failed:', error);
		throw error; // Ensure Playwright still fails the test properly
	}
});
