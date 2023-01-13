import Route from "./core/types/route";
import Config from "./core/types/config";

class SimpleHtmlInpageRouter {
    private routes: Array<Route>;

    private loadedRoutes: Array<string>;
    private onPop: (currentRouteElement: HTMLElement, NextRouteELement: HTMLElement) => void;
    private onPush: (currentRouteElement: HTMLElement, NextRouteElement: HTMLElement) => void;

    constructor(config: Config) {
        this.routes = config.routes;
        this.loadedRoutes = [this.getDefaultRouteObject().path];
        this.onPop = config.onPop;
        this.onPush = config.onPush;
    }


    private getDefaultRouteObject() {
        for (let key in this.routes) {
            if (this.routes[key]!.default === true) {
                return this.routes[key];
            }
        }
        return this.routes[0];
    }

    private getRouteObjectByPath(path: string) {
        for (let key in this.routes) {
            if (this.routes[key]!.path === path) {
                return this.routes[key];
            }
        }
        throw Error("Route not found in the config 😢.");
    }


    getDefaultRoutePath() {
        return this.getDefaultRouteObject().path;
    }

    getCurrentRoutePath() {
        return this.loadedRoutes[this.loadedRoutes.length - 1];
    }


    pushRoute(path: string) {
        let routeToPush = this.getRouteObjectByPath(path);
        let routeToSitAt = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 1]);
        this.onPush(routeToSitAt.element, routeToPush.element);
        this.loadedRoutes.push(routeToPush.path);
    }

    popRoute(path: String) {
        if (this.loadedRoutes.length === 1) {
            throw Error("Only route in stack. Can't pop it off too 😊.");
        }
        let routeToPop = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 1]);
        let routeToLoad = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 2]);
        this.onPop(routeToPop.element, routeToLoad.element);
        this.loadedRoutes.pop();
    }

}

export default SimpleHtmlInpageRouter;
Object.assign(module.exports, SimpleHtmlInpageRouter);
