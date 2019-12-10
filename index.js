const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com', {
    waitUntil: 'networkidle2'
  });

  // Following is the script to try to generate a PDF with size 75mm x 55mm in different units using Chrome
  // Expected Size: 75mm x 55mm
  // Result Size from Chrome: 74.8mm x 54.7mm
  await page.pdf({
    path: './output/pdf_in_inches.pdf',
    width: '2.9527499999999995 in',
    height: '2.1653499999999997 in',
  });

  await page.pdf({
    path: './output/pdf_in_mm.pdf',
    width: '75 mm',
    height: '55 mm',
  });

  await page.pdf({
    path: './output/pdf_in_cm.pdf',
    width: '7.5 cm',
    height: '5.5 cm',
  });

  await browser.close();
})();
