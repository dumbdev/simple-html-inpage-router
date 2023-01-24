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
    push(path: string): void;
    pop(): void;
    popUntil(targetPath: any): void;
}
export default SimpleHtmlInpageRouter;
