export {};
declare global {
    namespace WebdriverIO {
        interface Browser {
            browserCustomCommand:(arg:any) => Promise<void>;
               }
   }
}

declare global {
    namespace WebdriverIO {
     function $(selector: string | Function): WebdriverIO.Element;
     function $$(selector: string | Function): WebdriverIO.ElementArray;
     interface Browser extends BrowserSync, WebdriverIOAsync.Browser { }
     interface Element extends ElementSync, WebdriverIOAsync.Element { }
    }
}

declare const browser: WebdriverIO.Browser
declare const driver: WebdriverIO.Browser

// declare type ChainablePrototype = {
//     [K in Elements]: (...args: Parameters<$ElementCommands[K]>) => ChainablePromiseElement<ReturnType<$ElementCommands[K]>>;
// } & {
//     [K in ElementsQueryCommands]: (...args: Parameters<$ElementCommands[K]>) => ChainablePromiseArray<ThenArg<ReturnType<$ElementCommands[K]>>>;
// };