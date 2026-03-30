import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4717',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // 开发模式下不使用 webServer，直接连接已启动的服务器
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4717',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
