export default class MainPage {
    elements = {
        viewOnGithubButton: () => cy.get('.getStarted_Sjon[href^=\'https\']'),
        searсhButton: () => cy.get('.DocSearch-Button-Placeholder'),
        searchInputField: () => cy.get('#docsearch-input'),
        firstFeature: () => cy.get('.feature_gF_R:first-child'),
    };
};
