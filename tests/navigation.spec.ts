import { test, expect } from '@playwright/test';

test('Homepage navigation test on ERR.ee', async ({ page }) => {
	try {
		// Open the ERR.ee homepage
		console.log('Step 1: Opening the ERR.ee homepage');
		await page.goto('https://www.err.ee');

		// Check if the title contains 'ERR'
		console.log('Step 2: Checking if the page title contains "ERR"');
		await expect(page).toHaveTitle(/ERR/);

		// Wait for the main navigation menu to load
		console.log('Step 3: Waiting for the main navigation menu to load');
		const navMenu = page.locator('.site-menu-list');
		await expect(navMenu).toBeVisible();

		// Click the first menu link (example: "Uudised" - News)
		console.log('Step 4: Clicking the first menu link');
		const firstMenuLink = navMenu.locator('ul li a[href="/k/majandus"]');
		const linkText = await firstMenuLink.innerText(); // Get the text of the link
		await firstMenuLink.click();

		// Wait for the page to navigate
		console.log('Step 5: Waiting for the page to load after the navigation');
		await page.waitForLoadState('domcontentloaded');

		// Verify that the URL changed
		console.log('Step 6: Verifying that the URL has changed');
		await expect(page).toHaveURL('https://www.err.ee/k/majandus');

		// Check that the clicked section's title appears on the new page
		console.log('Step 7: Verifying the section title on the new page');
		const pageHeading = page.locator('header .category-name').first(); // Look for a heading on the new page
		await expect(pageHeading).toContainText(new RegExp(linkText, 'i'));

	} catch (error) {
		console.error('Error during homepage navigation test:', error);
		throw error; // Rethrow the error to ensure the test fails
	}
});
