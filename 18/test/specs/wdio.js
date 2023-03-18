describe('WDIO', () => {
  it('should redirect to github.com', async () => {
    await browser.url('https://webdriver.io/');
    await $('//a[@href="https://github.com/webdriverio"]').click();
    await browser.switchWindow('github.com');
    await expect(browser).toHaveUrlContaining('github.com/webdriverio');
  });
  it('search result should contain "Github Actions" text', async () => {
    await browser.url('https://webdriver.io/');
    await $('.DocSearch-Button-Placeholder').click();
    await $('#docsearch-input').setValue('git');
    await browser.pause(1000);
    await browser.keys('Enter');
    const title = await $('//header/h1').getText();
    await expect(title).toContain('Github Actions');
  });

  it('feature should contain 🌎', async () => {
    await browser.url('https://webdriver.io/');
    const feature = await $('.feature_gF_R:first-child').getText();
    await expect(feature).toContain('🌎');
  });
});
