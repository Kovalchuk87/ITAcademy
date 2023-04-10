import MainPage from '../pageObjects/mainPage';
import Header from "../pageComponents/header";
import CommunityPage from "../pageObjects/communityPage";

describe('wdio site test', () => {
    const mainPage = new MainPage();
    const header = new Header();
    const community = new CommunityPage();

    beforeEach(() => {
        cy.visit('https://webdriver.io/');
    });

    it('should open version documentation', () => {
        header.elements.version().click();
        cy.get('.margin-vert--lg h1').should("have.text", 'WebdriverIO documentation versions');
    });

    it('search result should contain "Github Actions" text', () => {
        mainPage.elements.searсhButton().click();
        mainPage.elements.searchInputField().type('git', {delay:1000}).type('{enter}');
        cy.get('.markdown h1').should('contain.text', 'Github Actions');
    });

    it('1st feature should contain 🌎', () => {
        mainPage.elements.firstFeature().should("contain.html", '🌎');
    });

    it('Materials should contain link to workshop', () => {
        header.elements.communityButton().click();
        community.elements.materials().click();
        community.elements.workshops().should("be.visible");
        cy.get('.markdown ul li a').should("contain.html", 'webdriverio/workshop');
    });
    });
