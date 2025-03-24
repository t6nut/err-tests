import { test, expect } from '@playwright/test';

test('Click first article on ERR.ee homepage', async ({ page }) => {
	try {
		// Go to ERR.ee homepage
		console.log('Step 1: Navigating to ERR.ee homepage');
		await page.goto('https://www.err.ee/');

		// Wait for articles to load (assuming they are inside a section like ".article-list")
		console.log('Step 2: Waiting for the first article to load');
		const firstArticle = page.locator('.left-block .block:first-of-type .article a').first();
		const articleTitle = await firstArticle.locator('h2').innerText(); // Store article title

		// Click on the first article
		console.log('Step 3: Clicking on the first article');
		await firstArticle.click();

		// Wait for the new page to load
		console.log('Step 4: Waiting for the new page to load');
		await page.waitForLoadState('domcontentloaded');

		// Check that the page URL changed
		console.log('Step 5: Verifying the page URL has changed');
		await expect(page).not.toHaveURL('https://www.err.ee/');

		// Verify the article page contains the title of the clicked article (case-insensitive)
		console.log('Step 6: Verifying the article title on the new page');
		const pageHeading = page.locator('article h1').first();
		await expect(pageHeading).toContainText(new RegExp(articleTitle.trim(), 'i'));

	} catch (error) {
		console.error('Error during article click test:', error);
		throw error; // Rethrow the error to ensure the test fails
	}
});
