class ProductListingPage {
  constructor(page) {
    this.page = page;
    this.priceWithoutTax = page.locator('//span[@data-price-type="basePrice"]');
    this.productName = page.locator('.product-item-link');
    this.sortAction = page.locator('.toolbar-sorter .action.sorter-action').first();
    this.sortDropdown = page.locator('.sorter .select2-selection--single');
    this.pageTitle = page.locator('.page-title');
  }

  sortOptions(sortOption) {
    return this.page.locator(`//li[text()="${sortOption}"]`);
  }

  async chooseSortingOption(sortOption) {
    await this.page.click('.sorter .select2-selection--single');
    await this.sortOptions(sortOption).click();
  }

  async getPricesWithoutTax() {
    await this.page.waitForLoadState('networkidle');
    const pricesWithoutTax = await this.priceWithoutTax.allInnerTexts();
    const slicedPrices = pricesWithoutTax.map((price) => price.slice(2));
    return slicedPrices;
  }

  async getProductsNames() {
    await this.page.waitForLoadState('networkidle');
    const productsNames = await this.productName.allInnerTexts();
    return productsNames;
  }

  async goToProductDetailsPage(itemNumber) {
    await this.page.locator('.product-item-link').nth(itemNumber).click();
  }
}

module.exports = { ProductListingPage };
