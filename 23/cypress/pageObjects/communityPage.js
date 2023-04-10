export default class CommunityPage {
    elements = {
        materials: () => cy.get('.menu__link[href=\'/community/materials\']'),
        workshops: () => cy.get('h2.anchorWithStickyNavbar_LWe7'),
    };
};
