import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
});
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://www.amazon.de/s?k=amazonbasics&page=1&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3RQ1RU74TD1QU&qid=1742576416&sprefix=amazonbasics%2Caps%2C114&xpid=pgAFBQaEDZzIg&ref=sr_pg_1', {
    waitUntil: "load"
});

await page.waitForSelector(".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator", { visible: true });

const buttonExists = await page.$(".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator") !== null;

await page.click(".s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator");

// await browser.close();

await new Promise(() => {}); // Hält das Programm "unendlich lang" offen

// class="s-pagination-item s-pagination-next s-pagination-disabled "