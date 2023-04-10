const BasePage = require('../basepage');

class NavBar extends BasePage {

    navMenuButton(buttonName) {
        return $('.navbar__logo');
        return $('.navbar__item[href="/docs/gettingstarted"]');
        return $('.navbar__item[href="/docs/api"]');
        return $('.navbar__item[href="/blog"]');
        return $('.navbar__item[href="/community/support"]');
        // return $('.navbar__link[href="/versions"]');
        // return $('.header-github-link');
        // return $('.header-twitter-link');
        // return $('.toggleButton_gllP');
        // return $('.searchBox_ZlJk');
    }

    async clickNavMenuButton(buttonName) {
        await this.navMenuButton(buttonName).waitForClickable();
        await this.navMenuButton(buttonName).click();
    }
}

module.exports = new NavBar;