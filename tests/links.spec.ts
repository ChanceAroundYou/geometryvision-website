import { test, expect, defineConfig } from '@playwright/test';

/**
 * 测试目标：验证 geometryVision 官网所有内部链接是否正确跳转到带 locale 前缀的 URL
 * 
 * 检查页面：
 * - 首页 (/)
 * - 关于页面 (/about)
 * - 团队页面 (/team)
 * - 产品页面 (/products)
 * - 解决方案页面 (/solutions)
 * - 联系页面 (/contact)
 * - 项目页面 (/projects/ais, /projects/smart-land)
 * 
 * locale 支持：zh-cn, zh-tw, en
 */

// 所有需要测试的页面路径（相对于 locale）
const pagePaths = [
  '/',
  '/about',
  '/team',
  '/products',
  '/solutions',
  '/contact',
  '/projects/ais',
  '/projects/smart-land',
];

// 页面存在性测试
test.describe('页面存在性测试', () => {
  const locales = ['zh-cn', 'zh-tw', 'en'];
  
  for (const locale of locales) {
    for (const path of pagePaths) {
      const url = path === '/' ? `/${locale}/` : `/${locale}${path}`;
      
      test(`页面 ${url} 应存在且返回 200`, async ({ page }) => {
        const response = await page.goto(url, { waitUntil: 'networkidle' });
        expect(response?.status(), `页面 ${url} 应返回 200`).toBeLessThan(400);
        
        const body = await page.locator('body').textContent();
        expect(body?.length, `页面 ${url} 应有内容`).toBeGreaterThan(100);
      });
    }
  }
});

// 链接 locale 前缀测试
test.describe('链接 locale 前缀测试', () => {
  const locales = ['zh-cn', 'zh-tw', 'en'];
  
  for (const locale of locales) {
    test(`Locale ${locale} - 所有内部链接应带有正确的 locale 前缀`, async ({ page }) => {
      await page.goto(`/${locale}/`);
      
      // 收集所有内部链接
      const links = await page.locator('a[href]').all();
      
      for (const link of links) {
        const href = await link.getAttribute('href');
        
        // 跳过外部链接、mailto、tel 等
        if (!href) continue;
        if (href.startsWith('http') && !href.includes('localhost')) continue;
        if (href.startsWith('mailto:')) continue;
        if (href.startsWith('tel:')) continue;
        if (href.startsWith('#')) continue;
        
        // 验证链接带有 locale 前缀
        const expectedPrefix = `/${locale}`;
        expect(
          href.startsWith(expectedPrefix) || href === '/',
          `链接 ${href} 应以 /${locale} 开头`
        ).toBe(true);
      }
    });
  }
});

// 导航链接跳转测试
test.describe('导航链接跳转测试', () => {
  const locales = ['zh-cn', 'zh-tw', 'en'];
  
  for (const locale of locales) {
    test(`Locale ${locale} - Header 导航链接应正确跳转`, async ({ page }) => {
      await page.goto(`/${locale}/`);
      
      // 获取导航链接
      const navLinks = page.locator('header nav a');
      const count = await navLinks.count();
      
      for (let i = 0; i < count; i++) {
        const link = navLinks.nth(i);
        const href = await link.getAttribute('href');
        
        if (!href || href.startsWith('mailto:') || href.startsWith('http')) continue;
        
        // 验证导航链接带有 locale 前缀
        expect(
          href.startsWith(`/${locale}/`) || href === `/${locale}`,
          `导航链接 ${href} 应以 /${locale} 开头`
        ).toBe(true);
        
        // 点击链接并验证页面加载成功
        const response = await page.goto(href, { waitUntil: 'networkidle' });
        expect(response?.status(), `导航链接 ${href} 应返回成功`).toBeLessThan(400);
        
        // 返回首页继续测试
        await page.goto(`/${locale}/`);
      }
    });

    test(`Locale ${locale} - Footer 链接应正确跳转`, async ({ page }) => {
      await page.goto(`/${locale}/`);
      
      // 获取 Footer 中的链接
      const footerLinks = page.locator('footer a');
      const count = await footerLinks.count();
      
      for (let i = 0; i < count; i++) {
        const href = await footerLinks.nth(i).getAttribute('href');
        
        if (!href || href.startsWith('mailto:') || href.startsWith('http')) continue;
        
        // 验证链接带有 locale 前缀
        expect(
          href.startsWith(`/${locale}/`) || href === `/${locale}`,
          `Footer 链接 ${href} 应以 /${locale} 开头`
        ).toBe(true);
      }
    });
  }
});

// 项目卡片链接测试
test.describe('项目卡片链接测试', () => {
  const locales = ['zh-cn', 'zh-tw', 'en'];
  
  for (const locale of locales) {
    test(`Locale ${locale} - 项目页面链接应正确跳转`, async ({ page }) => {
      await page.goto(`/${locale}/`);
      
      // 找到项目卡片链接
      const projectCards = page.locator('a[href*="projects"]');
      const count = await projectCards.count();
      
      for (let i = 0; i < count; i++) {
        const href = await projectCards.nth(i).getAttribute('href');
        if (href) {
          expect(
            href.startsWith(`/${locale}/projects/`),
            `项目链接 ${href} 应以 /${locale}/projects/ 开头`
          ).toBe(true);
        }
      }
    });
  }
});

// CTA 链接测试
test.describe('CTA 链接测试', () => {
  const locales = ['zh-cn', 'zh-tw', 'en'];
  
  for (const locale of locales) {
    test(`Locale ${locale} - 项目页面 CTA 链接应正确跳转`, async ({ page }) => {
      // 测试 AIS 项目页面
      await page.goto(`/${locale}/projects/ais`);
      
      // 查找 CTA 链接
      const ctaLinks = page.locator('section a[href]');
      const count = await ctaLinks.count();
      
      for (let i = 0; i < count; i++) {
        const href = await ctaLinks.nth(i).getAttribute('href');
        if (href && !href.startsWith('mailto:') && !href.startsWith('http')) {
          expect(
            href.startsWith(`/${locale}/`),
            `CTA 链接 ${href} 应以 /${locale}/ 开头`
          ).toBe(true);
        }
      }
    });
  }
});
