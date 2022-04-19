import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';
import * as config from 'config'

let pdtsearchString : string = config.get('ProductData.searchProduct')
let pdtexpectedString : string = config.get('ProductData.expectedString')

class ProductDetailsPage extends Page {

    
    public get pdtToSearch() {
        return <any>$('(//*[contains(text(),"Smart LED")])//parent::a/..');
    }

    public get searchField() {
        return <any>$('#twotabsearchtextbox');
    }
    public get btnSearch() {
        return <any>$('#nav-search-submit-button');
    }

    public get searchResults() {
        return <any>$$('//div/h2/a/span[contains(text(),"Smart LED")]');
    }

    public get emiOptions(){
        return <any>$('//*[contains(text(),"EMI options")]');
    }


    public get pdtImage() {
        return <any>$('//img[contains(@alt,"Smart LED") and contains(@onload,"markFeatureRenderForImageBlock()")]');
    }

    public get fullScreenIMG() {
        return <any>$('//img[@class="fullscreen"]');
    }

    public get ZoomIMGTitle() {
        return <any>$('//div[@id="ivTitle"]');
    }

    public async productView(searchProduct) {
        await (await this.searchField).setValue(searchProduct);
        await this.btnSearch.clickWhenDisplayed();
        await this.pdtToSearch.waitTillInterval(3000);
        await (await this.pdtToSearch).click()
        // ----- switch to window
        await browser.getWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            browser.switchToWindow(newTabHandle);
            console.log("Switched to New Window");
        });
        await this.pdtToSearch.waitTill()
        if((await this.pdtToSearch).isDisplayed())     {
            await this.pdtToSearch.highlightElement()
            console.log("**Validated the Product that is opened in new tab**")
        }
        
    }

    public async viewEMIOptions() {
        //await this.emiOptions.scrolltoView()
        //await this.emiOptions.highlightElement()
        await this.emiOptions.waitTillInterval(3000)
        await this.emiOptions.mouseHover();
        await this.emiOptions.waitTillInterval(3000)
    }
    
    public async productZoom() {

        await this.pdtImage.waitTillInterval(3000)
        await (await this.pdtImage).isDisplayed()
        await this.pdtImage.elementDoubleClick()
        await this.fullScreenIMG.waitTillInterval(3000)
        await (await this.fullScreenIMG).waitForDisplayed()
        await this.fullScreenIMG.waitTillInterval(3000)
        await this.ZoomIMGTitle.highlightElement()
        await this.fullScreenIMG.waitTillInterval(3000)

    }

    public open() {
        return super.open('');
    }  
}

export default new ProductDetailsPage();
