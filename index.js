const puppeteer = require('puppeteer');



function sleep(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, sec * 1000);
    });
}


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html');

    await sleep(3);

    //await page.removeAllListeners('submit')

    await page.evaluate(async () => {
        await document.querySelector('form').submit();
    })

    await sleep(50);

    await browser.close();
})();