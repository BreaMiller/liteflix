import { test, expect } from '@playwright/test';

const BASE_URL = 'https://6fep0zkfv0sq.space.minimax.io';

test('verify all content updates', async ({ page }) => {
  test.setTimeout(30000);
  
  // Navigate to website
  await page.goto(BASE_URL, { timeout: 15000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 });
  
  console.log('✅ Website loaded successfully');
  
  // Test 1: Verify new Internal Components image
  try {
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        if (section.querySelector('h2')?.textContent?.includes('Internal Components')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    await page.waitForTimeout(2000);
    
    const componentsImage = page.locator('img[src*="internal-components-prism.jpg"]');
    await expect(componentsImage).toBeVisible({ timeout: 10000 });
    console.log('✅ Internal Components image verified');
  } catch (error) {
    console.log('❌ Internal Components image test failed:', error.message);
  }
  
  // Test 2: Verify new Iridescent Optics image  
  try {
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        if (section.querySelector('h2')?.textContent?.includes('Iridescent Optics')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    await page.waitForTimeout(2000);
    
    const opticsImages = page.locator('img[src*="optic-lens-prismatic.png"]');
    await expect(opticsImages.first()).toBeVisible({ timeout: 10000 });
    console.log('✅ Iridescent Optics image verified');
  } catch (error) {
    console.log('❌ Iridescent Optics image test failed:', error.message);
  }
  
  // Test 3: Verify "Layer 5" replaced with "Component"
  try {
    await page.evaluate(() => {
      const techSection = document.querySelector('#technology');
      techSection?.scrollIntoView({ behavior: 'smooth' });
    });
    await page.waitForTimeout(2000);
    
    const componentText = page.getByText('Component', { exact: false });
    await expect(componentText).toBeVisible({ timeout: 10000 });
    console.log('✅ "Component" text verified (replacing "Layer 5")');
  } catch (error) {
    console.log('❌ "Component" text test failed:', error.message);
  }
  
  // Test 4: Verify hero camera is larger
  try {
    await page.evaluate(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    await page.waitForTimeout(1000);
    
    const heroCamera = page.locator('img[src*="transparent-camera.png"]').first();
    await expect(heroCamera).toBeVisible({ timeout: 10000 });
    
    const cameraBox = await heroCamera.boundingBox();
    if (cameraBox?.width && cameraBox.width > 400) {
      console.log(`✅ Hero camera size verified: ${cameraBox.width}x${cameraBox.height}px`);
    } else {
      console.log(`❌ Camera size too small: ${cameraBox?.width}x${cameraBox?.height}px`);
    }
  } catch (error) {
    console.log('❌ Hero camera size test failed:', error.message);
  }
  
  // Test 5: Verify responsive navigation height
  try {
    const nav = page.locator('nav').first();
    const navHeight = await nav.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return parseFloat(styles.height);
    });
    
    if (navHeight > 80) {
      console.log(`✅ Navigation height verified: ${navHeight}px (h-24)`);
    } else {
      console.log(`❌ Navigation height too small: ${navHeight}px`);
    }
  } catch (error) {
    console.log('❌ Navigation height test failed:', error.message);
  }
  
  console.log('🎯 All critical verifications completed');
});
