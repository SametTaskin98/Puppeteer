import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
});
const page = await browser.newPage();

/* delay function
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    }); 
 } */

// Navigate the page to a URL.
await page.goto('https://www.amazon.de/s?k=amazonbasics&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1U5WXMZ84KUXT&sprefix=amazonbasics%2Caps%2C142&ref=nb_sb_noss_2');

let items = [];
let buttonIsDisabled = false;

while (!buttonIsDisabled) {
    await page.waitForSelector('div.s-main-slot > .s-result-item');
    //await new Promise(resolve => setTimeout(resolve, 4000));

    const productHandles = await page.$$('div.s-main-slot > .s-result-item');   // > .s-result-item' // Durch alle Produkte gehen
    
    for (const producthandle of productHandles) {

        let title = "Null" // nun muss du in den try Blöcken const rausnehmen, sonst wird es nicht überschrieben
        let price = "Null" // ohne const in try Block, kann nun Variable überschrieben werden, falls gefunden wird, ansonsten Urpsrungswert String Null ausgeben
        let image = "Null"

        try {
            title = await page.evaluate(
                el => el.querySelector("a > h2 > span").textContent,
                producthandle); // erhalte Text innerhalb des Spans

        } catch (titleError) {
        }
        try {
            price = await page.evaluate(
                el => el.querySelector("a > span.a-price > span.a-offscreen").textContent, // Option über Klasse statt span querySelector(".a-price > .a-offscreen")
                producthandle); // erhalte Text (also Preis als Text) innerhalb des Spans

        } catch (priceError) {
        }
        try {
            image = await page.evaluate(
                el => el.querySelector(".s-image").getAttribute("src"),
                producthandle); // erhalte den Image innerhalb 

        }
        catch (imageError) {
        }

        if (title !== "Null") {
            items.push({ title, price, image })
        }

    } await page.waitForSelector("a.s-pagination-item.s-pagination-next", { visible: true });
    
    // "Schau nach, ob ein Element mit diesen Klassen im HTML existiert – wenn ja, dann setze isDisabled auf true, wenn nein, auf false
    // Wenn das Ergebnis !== null ist, dann gib uns true aus 
    const disabledButtonExists = await page.$('span.s-pagination-item.s-pagination-next.s-pagination-disabled') !== null;
   
    if (disabledButtonExists) {
        
        console.log("Letzte Seite erreicht");
        break;
    } 
    const nextButton = await page.$('a.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator') !== null;
    if (nextButton) {
        await page.waitForNavigation({ waitUntil: 'domcontentloaded' })
        await nextButton.click();
    }
    buttonIsDisabled = disabledButtonExists
 }

console.log(items);
