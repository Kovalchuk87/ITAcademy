const BasePage = require('./basePage');

class MainPage extends BasePage {

    get versionLink() {
        return $('.navbar__link[href="/versions"]');
    };
    get gitHubLink() {
        return $('.header-github-link');
    };
    get twitterLink() {
        return $('.header-twitter-link');
    };
    get toggleButton() {
        return $('.toggleButton_gllP');
    };
    get searchButton() {
        return $('.DocSearch-Button-Placeholder');
    };
    get subTitle() {
        return $('.hero__subtitle');
    };
    get getStartedButton() {
        return $('.getStarted_Sjon:nth-child(1)');
    };
    get whyWdioButton() {
        return $('.getStarted_Sjon:nth-child(2)');
    };
    get viewOnGithubButton() {
        return $('.getStarted_Sjon:nth-child(3)');
    };
    get firstFeature() {
        return $('.feature_gF_R:first-child');
    };
    get secondFeature() {
        return $('.feature_gF_R:nth-child(2)');
    };
    get thirdFeature() {
        return $('.feature_gF_R:nth-child(3)');
    };
    get fourthFeature() {
        return $('.feature_gF_R:nth-child(4)');
    };
    get fifthFeature() {
        return $('.feature_gF_R:nth-child(5)');
    };
    get sixthFeature() {
        return $('.feature_gF_R:nth-child(6)');
    };
};

module.exports = new MainPage();