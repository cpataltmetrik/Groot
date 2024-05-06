import Page from './page';

export default class AppleProduct extends Page {
    public async open(path: string): Promise<string> {
        return super.open(path);
    }
    public get searchBar() {
        return <any>$("//input[@id='twotabsearchtextbox']");
    }
    public get clickSearch() {
        return <any>$("//input[@id='nav-search-submit-button']");
    }
    public get scrollBelow() {
        return <any>$("//span[@class='navFooterBackToTopText']");
    }
    public async enterProduct(apple) {
        await this.searchBar.setText(apple);
    }
    public async enterAmzSearch() {
        await this.clickSearch.clickWhenReady();
    }
    public async scrollPage() {
        await this.scrollBelow.scrolltoView();
    }
}