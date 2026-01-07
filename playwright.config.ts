import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Global timeout per test
  timeout: 60 * 1000,

  // Expect timeout (auto-wait)
  expect: {
    timeout: 10 * 1000,
  },

  // Fail fast on CI, allow retries only where needed
  // retries: process.env.CI ? 1 : 0,

  // // Parallelism control
  // workers: process.env.CI ? 2 : undefined,

  // Clean, readable reports
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {
    // Base URL (we will set later)
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Trace only when something fails
    trace: 'retain-on-failure',

    // Screenshot only on failure
    screenshot: 'only-on-failure',

    // For demo purposes
  headless: false,          // UI is visible
  video: 'retain-on-failure',  // Records video on failure; change to 'on' for all tests
  
    // Navigation stability
    navigationTimeout: 30 * 1000,
    actionTimeout: 15 * 1000,
  },

   forbidOnly: false,       // allow multiple tests to run
  fullyParallel: true,     // run tests in parallel if possible
  workers: process.env.CI ? 2 : undefined,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
