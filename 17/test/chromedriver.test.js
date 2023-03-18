const {Builder, By, Key} = require("selenium-webdriver");
const {expect} = require('chai');

describe('Chromedriver test', function () {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({implicit: 20000});
    });

    after(async () => {
        await driver.quit();
    });

    it('Title text should be "ChromeDriver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const title = await driver.findElement(By.css('.Rn3Z1b.C9DxTc'));
        title.getText().then((text) => {
            expect(title).to.be.equal("ChromeDriver");
        })
    })

    it('New title is "Chrome Extensions"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.findElement(By.xpath('//a[@href="/extensions" and @data-level="1" and @jscontroller="yUHiM"]')).click();
        const extensionsTitle = await driver.findElement(By.css('.duRjpb .Rn3Z1b'));
        driver.executeScript("arguments[0].style.color ='red';", extensionsTitle);
        extensionsTitle.getText().then((text) => {
            expect(extensionsTitle).to.be.equal("Chrome Extensions");
            })
    })

    it('The 1st link contains "driver" word', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.iWs3gf.Wdnjke.M9Bg4d')).click();
        const search = await driver.findElement(By.css('.whsOnd.zHQkBf')).sendKeys('driver', Key.RETURN);
        const searchResult = await driver.findElement(By.css('a[data-position="1"]'));
        searchResult.getText().then((text) => {
            expect(searchResult).to.contain("driver");
        })
    })

    it('url contains "/mobile-emulation"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.findElement(By.xpath('//li[@class="VsJjtf oXBWEc"]')).click();
        await driver.findElement(By.xpath('//a[@href="/mobile-emulation" and @data-in-more-submenu="true"]')).click();
        const url = await driver.getCurrentUrl();
        expect(url).to.contain("/mobile-emulation");
    })
})