import { defineConfig } from '@playwright/test';

export default defineConfig({
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium' },
		},
		{
			name: 'firefox',
			use: { browserName: 'firefox' },
		},
		{
			name: 'webkit',
			use: { browserName: 'webkit' },
		},
	],
	use: {
		headless: true,  // Run tests without opening the browser UI
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
	},
});
