Playwright Automated Tests for ERR.ee
This repository contains Playwright automated tests for the ERR.ee website. The tests are designed to ensure that key functionality such as user interactions, navigation, and page content are working correctly across different scenarios.

1. Instructions. Follow these steps to set up and run the Playwright automated tests:

# 1.1 Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (Recommended version: 16.x or later)

npm (Comes with Node.js)

# 1.2 Install Dependencies
Clone the repository to your local machine:
```python
git clone https://github.com/your-repo/playwright-automated-tests.git
cd playwright-automated-tests
```

Install the required dependencies:
```python
npm install
```
This command installs the necessary Playwright dependencies and sets up the environment.

# 1.3 Install Browsers
Playwright uses multiple browsers for testing (Chromium, Firefox, and WebKit). Run the following command to install the necessary browser binaries:
```python
npx playwright install
```
This command will download the required browser versions.

# 1.4 Running Tests
To run the tests, use the following command:
```python
npx playwright test
```
This will automatically run all the tests available in the project.

Optional: Running Tests in Specific Browser
To run tests in a specific browser (e.g., Chromium), you can use the --project flag:
```python
npx playwright test --project=chromium
```
To run in WebKit or Firefox, replace chromium with webkit or firefox.

# 1.5 Running Tests in Headless Mode
By default, tests are run in headless mode (without opening the browser UI). If you want to see the browser during the test execution, you can run the tests with the --headed flag:
```python
npx playwright test --headed
```
This opens the browser window during test execution.

2. Projekti struktuuri selgitus (Project Structure Explanation)
Here’s an overview of the project structure and its key components:

# 2.1 Project Root
```python
├── tests/
│   ├── search.test.ts                  # Test for the search functionality on the ERR.ee homepage
│   ├── homepage-navigation.test.ts     # Test for navigation and menu functionality
│   ├── article-navigation.test.ts      # Test for clicking on articles on the homepage
│   └── utils.ts                        # Helper functions (if needed)
├── package.json                        # Project dependencies and scripts
├── playwright.config.ts                # Configuration file for Playwright
└── README.md                           # Project setup and usage instructions
```