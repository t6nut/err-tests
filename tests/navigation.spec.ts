import { test, expect } from '@playwright/test';

test('Homepage navigation test on ERR.ee', async ({ page }) => {
	// Open the ERR.ee homepage
	await page.goto('https://www.err.ee');

	// Check if the title contains 'ERR'
	await expect(page).toHaveTitle(/ERR/);

	// Wait for the main navigation menu to load
	const navMenu = page.locator('.site-menu-list');
	await expect(navMenu).toBeVisible();

	// Click the first menu link (example: "Uudised" - News)
	const firstMenuLink = navMenu.locator('ul li a[href="/k/majandus"]');
	const linkText = await firstMenuLink.innerText(); // Get the text of the link
	await firstMenuLink.click();

	// Wait for the page to navigate
	await page.waitForLoadState('domcontentloaded');

	// Verify that the URL changed
	await expect(page).toHaveURL('https://www.err.ee/k/majandus');

	// Check that the clicked section's title appears on the new page
	const pageHeading = page.locator('header .category-name').first(); // Look for a heading on the new page
	await expect(pageHeading).toContainText(new RegExp(linkText, 'i'));
});
