import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  webServer: {
    command: 'yarn build && yarn start -p 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI
  },
  use: {
    baseURL: 'http://localhost:3000'
  }
});
