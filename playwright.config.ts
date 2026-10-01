import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Read the .env file so tests can use BASE_URL, usernames and passwords.
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // Where our tests live
  testDir: './tests',

  // Run tests at the same time to save time
  fullyParallel: true,

  // On GitHub Actions (CI): fail if someone accidentally left "test.only" in the code
  forbidOnly: !!process.env.CI,

  // On CI: retry a failed test up to 2 times. On your computer: no retries.
  retries: process.env.CI ? 2 : 0,

  // On CI: run one test at a time. On your computer: Playwright decides.
  workers: process.env.CI ? 1 : undefined,

  // Create the HTML report after each run
  reporter: 'html',

  use: {
    // The test site address from .env. Tests can then use short paths like '/login'.
    baseURL: process.env.BASE_URL,

    // Record a step-by-step "trace" when a test is retried, to help debugging
    trace: 'on-first-retry',
  },

  // The browsers we test in
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});