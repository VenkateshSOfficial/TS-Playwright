import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  retries: 3,
  workers: 4,
  fullyParallel: true,
  testDir: './tests',
  timeout: 100 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter: 'html',
  use: {
    trace: 'retain-on-failure-and-retries',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: false

  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      }
    }
  ]
});
