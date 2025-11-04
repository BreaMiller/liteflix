import { test, expect } from '@playwright/test';

const BASE_URL = 'https://6fep0zkfv0sq.space.minimax.io';

test.describe('Transparent Camera Landing Page - Content Updates', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test.describe('Visual Updates Verification', () => {
    test('should verify new Internal Components image is displayed', async ({ page }) => {
      // Navigate to Internal Components section
      await page.waitForLoadState('networkidle');
      await page.evaluate(() => {
        document.querySelector('[href="#technology"]')?.scrollIntoView();
      });
      await page.waitForTimeout(1000);

      // Check if the prism camera image is loaded
      const componentsImage = page.locator('img[src*="internal-components-prism.jpg"]');
      await expect(componentsImage).toBeVisible({ timeout: 10000 });
      
      // Verify image properties
      await expect(componentsImage).toHaveAttribute('alt', /Transparent Camera with Prism Effects and Internal Components/);
    });

    test('should verify new Iridescent Optics image is displayed', async ({ page }) => {
      // Navigate to Iridescent Optics section by scrolling
      await page.evaluate(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
          if (section.querySelector('h2')?.textContent?.includes('Iridescent Optics')) {
            section.scrollIntoView();
          }
        });
      });
      await page.waitForTimeout(1000);

      // Check if the optic lens image is loaded
      const opticsImages = page.locator('img[src*="optic-lens-prismatic.png"]');
      await expect(opticsImages.first()).toBeVisible({ timeout: 10000 });
      
      // Verify both parallax images are using the new optic lens
      await expect(opticsImages).toHaveCount(2, { timeout: 5000 });
    });

    test('should verify "Layer 5" text is replaced with "Component"', async ({ page }) => {
      // Navigate to 5D Storage section
      await page.evaluate(() => {
        const techSection = document.querySelector('#technology');
        techSection?.scrollIntoView();
      });
      await page.waitForTimeout(1000);

      // Look for the text "Component" instead of "Layer 5"
      const componentText = page.getByText('Component', { exact: false });
      await expect(componentText).toBeVisible({ timeout: 10000 });

      // Ensure no "Layer 5" text exists
      const layer5Text = page.getByText('Layer 5', { exact: false });
      await expect(layer5Text).toHaveCount(0, { timeout: 5000 });
    });

    test('should verify purple colors are removed from 5D Storage section', async ({ page }) => {
      // Navigate to 5D Storage section
      await page.evaluate(() => {
        const techSection = document.querySelector('#technology');
        techSection?.scrollIntoView();
      });
      await page.waitForTimeout(1000);

      // Check that there are no purple elements in the highlight effects
      const storageDiscs = page.locator('.rounded-full').filter({ hasText: /5D Storage Medium/ });
      await expect(storageDiscs.first()).toBeVisible({ timeout: 5000 });
      
      // Verify the highlight uses white/clear colors (checking computed styles)
      const storageLayer = page.locator('.rounded-full').first();
      await expect(storageLayer).toHaveCSS('background', /rgba\(255, 255, 255/);
    });

    test('should verify icon boxes are removed from Precision Engineering', async ({ page }) => {
      // Navigate to Internal Components section
      await page.evaluate(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          if (section.querySelector('h2')?.textContent?.includes('Internal Components')) {
            section.scrollIntoView();
          }
        });
      });
      await page.waitForTimeout(1000);

      // Check that icons don't have background containers
      const iconContainers = page.locator('.bg-opacity-20').filter({ has: page.locator('svg') });
      
      // There should be no icons with the old background styling
      const oldStyleIcons = page.locator('[class*="bg-accent-blue bg-opacity-20"]').filter({ has: page.locator('svg') });
      await expect(oldStyleIcons).toHaveCount(0, { timeout: 5000 });
      
      // Icons should still be visible without background
      const icons = page.locator('svg[class*="text-accent-blue"]');
      await expect(icons.first()).toBeVisible({ timeout: 5000 });
    });
  });

  test.describe('Functionality & Responsive Design', () => {
    test('should verify all navigation links work', async ({ page }) => {
      // Test main navigation
      const navLinks = page.locator('nav a');
      const linkCount = await navLinks.count();
      
      for (let i = 0; i < linkCount; i++) {
        const link = navLinks.nth(i);
        const href = await link.getAttribute('href');
        if (href && href.startsWith('#')) {
          await link.click();
          await page.waitForTimeout(500);
        }
      }
    });

    test('should verify navigation bar height and spacing', async ({ page }) => {
      // Check navigation has proper height (should be h-24 = 96px)
      const nav = page.locator('nav');
      const navHeight = await nav.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return parseFloat(styles.height);
      });
      
      expect(navHeight).toBeGreaterThan(80); // At least 80px (h-20)
    });

    test('should verify camera size is significantly larger in header', async ({ page }) => {
      // Check the main transparent camera in hero section
      const heroCamera = page.locator('img[src*="transparent-camera.png"]').first();
      await expect(heroCamera).toBeVisible({ timeout: 10000 });
      
      // The camera should be much larger now
      const cameraBox = await heroCamera.boundingBox();
      expect(cameraBox?.width).toBeGreaterThan(400); // Should be around 600px+
      expect(cameraBox?.height).toBeGreaterThan(300); // Should be around 400px+
    });

    test('should verify responsive design works across viewports', async ({ page }) => {
      // Test desktop view
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.waitForTimeout(1000);
      await expect(page.locator('h1')).toBeVisible();
      
      // Test tablet view
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.waitForTimeout(1000);
      await expect(page.locator('h1')).toBeVisible();
      
      // Test mobile view
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(1000);
      await expect(page.locator('h1')).toBeVisible();
    });
  });

  test.describe('Animation & Interaction Testing', () => {
    test('should verify camera 3D animations work in hero section', async ({ page }) => {
      const heroCamera = page.locator('img[src*="transparent-camera.png"]').first();
      await expect(heroCamera).toBeVisible({ timeout: 10000 });
      
      // Simulate mouse movement to trigger 3D rotation
      await heroCamera.hover();
      await page.waitForTimeout(2000);
      
      // Camera should still be visible and animating
      await expect(heroCamera).toBeVisible({ timeout: 2000 });
    });

    test('should verify component hotspots work in Internal Components section', async ({ page }) => {
      // Navigate to Internal Components section
      await page.evaluate(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          if (section.querySelector('h2')?.textContent?.includes('Internal Components')) {
            section.scrollIntoView();
          }
        });
      });
      await page.waitForTimeout(1000);

      // Check for component hotspots
      const hotspots = page.locator('.bg-accent-blue').filter({ hasText: '' }).filter({ hasClass: 'rounded-full' });
      await expect(hotspots).toHaveCount(4, { timeout: 5000 });
      
      // Test hover interaction
      await hotspots.first().hover();
      await page.waitForTimeout(500);
      
      // Should still be visible and interactive
      await expect(hotspots.first()).toBeVisible({ timeout: 2000 });
    });

    test('should verify parallax effects in Iridescent Optics section', async ({ page }) => {
      // Navigate to Iridescent Optics section
      await page.evaluate(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          if (section.querySelector('h2')?.textContent?.includes('Iridescent Optics')) {
            section.scrollIntoView();
          }
        });
      });
      await page.waitForTimeout(1000);

      // Check that parallax layers are present
      const parallaxLayers = page.locator('.parallax-layer');
      await expect(parallaxLayers).toHaveCount(3, { timeout: 5000 });
      
      // Check that animated light rays are present
      const lightRays = page.locator('[class*="bg-gradient-to-b"]').filter({ hasText: '' });
      await expect(lightRays).toHaveCount(4, { timeout: 5000 });
    });
  });

  test.describe('Performance & Load Testing', () => {
    test('should verify all images load properly', async ({ page }) => {
      const images = page.locator('img');
      const imageCount = await images.count();
      
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const src = await img.getAttribute('src');
        if (src) {
          // Wait for image to load
          await expect(img).toHaveJSProperty('complete', true, { timeout: 10000 });
          
          // Check natural dimensions are available
          const naturalWidth = await img.evaluate(el => (el as HTMLImageElement).naturalWidth);
          expect(naturalWidth).toBeGreaterThan(0);
        }
      }
    });

    test('should verify no console errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      
      await page.goto(BASE_URL);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // Filter out non-critical errors
      const criticalErrors = errors.filter(error => 
        !error.includes('favicon') && 
        !error.includes('Font face') &&
        !error.includes('DevTools')
      );
      
      expect(criticalErrors).toHaveLength(0, `Found console errors: ${criticalErrors.join(', ')}`);
    });
  });
});
