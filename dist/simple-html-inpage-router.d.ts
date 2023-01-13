import Config from "./core/types/config";
declare class SimpleHtmlInpageRouter {
    private routes;
    private loadedRoutes;
    private onPop;
    private onPush;
    constructor(config: Config);
    private getDefaultRouteObject;
    private getRouteObjectByPath;
    getDefaultRoutePath(): string;
    getCurrentRoutePath(): string;
    pushRoute(path: string): void;
    popRoute(path: String): void;
}
export default SimpleHtmlInpageRouter;
