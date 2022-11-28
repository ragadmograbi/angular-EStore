import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './E2Etests',
  timeout: 5 * 60 * 1000,
  globalTimeout: 10 * 60 * 1000,
  expect: {
    timeout: 1 * 60 * 1000
  },
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:4200/',
    headless: false,
    launchOptions: {
      args: ['--disable-web-security']
    }

  },
  webServer: {
    port: 4200,
    command: "npm run start",
    timeout: 15 * 60 * 1000,
    reuseExistingServer: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      }
    },
  ]
};

export default config;
