import { test, expect } from '@playwright/test';

test('Click first article on ERR.ee homepage', async ({ page }) => {
	// Go to ERR.ee homepage
	await page.goto('https://www.err.ee/');

	// Wait for articles to load (assuming they are inside a section like ".article-list")
	const firstArticle = page.locator('.left-block .block:first-of-type .article a').first();
	const articleTitle = await firstArticle.locator('h2').innerText(); // Store article title

	// Click on the first article
	await firstArticle.click();

	// Wait for the new page to load
	await page.waitForLoadState('domcontentloaded');

	// Check that the page URL changed
	await expect(page).not.toHaveURL('https://www.err.ee/');

	// Verify the article page contains the title of the clicked article (case-insensitive)
	const pageHeading = page.locator('article h1').first();
	await expect(pageHeading).toContainText(new RegExp(articleTitle, 'i'));
});
