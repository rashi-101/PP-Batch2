let pupp = require("puppeteer");

(async function(){
    let b =await pupp.launch({
        headless:false,
        defaultViewport:null,
        args: ["--start-maximized"]
    });
    let page = await b.newPage();
    await page.goto("https://www.cowin.gov.in/home", {waitUntil:"domcontentloaded"});
    await page.waitForSelector("input[data-placeholder='Enter your PIN']");
    await page.type("input[data-placeholder='Enter your PIN']", "124001");
    await page.click("div .pin-search-btn");
    await page.waitForXPath("//div[@class='slots-box']");
    let slotXpath =await page.$x("//div[@class='slots-box']");
    
    let value = await page.evaluate(el => el.textContent, slotXpath[0])
    console.log(slotXpath.length);
})();