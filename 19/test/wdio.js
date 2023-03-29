const mainPage = require('../pageobjects/mainPage');
const navBar = require('../pageobjects/components/navbar');


describe('WDIO', () => {
  it('should redirect to github.com', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await $('//a[@href="https://github.com/webdriverio"]').click();
    await browser.switchWindow('github.com');
    await expect(browser).toHaveUrlContaining('github.com/webdriverio');
  });
  it('search result should contain "Github Actions" text', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await mainPage.searchButton.click();
    await $('#docsearch-input').setValue('git');
    await browser.pause(1000);
    await browser.keys('Enter');
    const title = await $('//header/h1').getText();
    await expect(title).toContain('Github Actions');
  });

  it('feature should contain 🌎', async () => {
    await mainPage.navigate('https://webdriver.io/');
    const text = await mainPage.firstFeature.getText();
    await expect(text).toContain('🌎');
      });
});
