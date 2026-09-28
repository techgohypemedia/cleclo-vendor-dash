const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  const whySection = page.locator('#why');
  await whySection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: 'scratch/local_why_horizontal.png', fullPage: false });
  console.log('Screenshot saved to scratch/local_why_horizontal.png');
  
  await browser.close();
})();
