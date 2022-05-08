import Page from "./page";

//const baseURL = config.get("Environment.baseUrl");

export default class ShopByCategory extends Page {
    public get shopBy() {
        return <any>$("//h2[text()='Shop by Category']");
    }

    public get mobilesImage() {
        return <any>$("//img[@alt='Mobiles']");
    }

    public get brandText() {
        return <any>$("//span[.='Brands']");
    }

    public get boatBrand() {
        return <any>$("//span[.='boAt']");
    }

    public get oneplusBrand() {
        return <any>$("//span[.='OnePlus']");
    }

    public get boatProduct1() {
        return <any>$("(//span[contains(.,'boAt Bassheads')])[2]");
    }

    public get oneplusProduct1() {
        return <any>$("(//span[contains(.,'OnePlus Nord CE ')])[1]");
    }

    public get brandsList() {
        return $$(
            "//span[text()='Brands']//parent::div/../ul/li//span[@dir='auto']",
        );
    }

    public async selectMobilesUnderShopByCategory() {
        await this.mobilesImage.clickWhenDisplayed();
    }

    public async selectBrandName(brandsName) {
        await brandsName.clickWhenDisplayed();
    }

    public open() {
        return super.open("");
    }
}
