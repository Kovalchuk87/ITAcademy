export default class Header {
    elements = {
    communityButton: () => cy.get('.navbar__link[href=\'/community/support\']'),
    version: () => cy.get('.navbar__link[href="/versions"]')
    };
};
