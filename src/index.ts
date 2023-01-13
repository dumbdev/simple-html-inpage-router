type Route = {
    path: string;
    element: HTMLElement;
    default?: boolean

}

type Config = {
    routes: Array<Route>;
    onPopOff: (currentRouteElement: HTMLElement, NextRouteELement: HTMLElement) => void;
    onNextRoute: (currentRouteElement:HTMLElement, NextRouteElement: HTMLElement) => void;
}

export default class Router {
    private routes: Array<Route>;

    private loadedRoutes: Array<string>;
    private onPopOff: (currentRouteElement: HTMLElement, NextRouteELement: HTMLElement) => void;
    private onNextRoute: (currentRouteElement: HTMLElement, NextRouteElement: HTMLElement) => void;

    constructor(config: Config) {
        this.routes = config.routes;
        this.loadedRoutes = [this.getDefaultRouteObject().path];
        this.onPopOff = config.onPopOff;
        this.onNextRoute = config.onNextRoute;
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
        this.onNextRoute(routeToSitAt.element, routeToPush.element);
        this.loadedRoutes.push(routeToPush.path);
    }

    popRoute(path: String) {
        if (this.loadedRoutes.length === 1) {
            throw Error("Only route in stack. Can't pop it off too 😊.");
        }
        let routeToPop = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 1]);
        let routeToLoad = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 2]);
        this.onPopOff(routeToPop.element, routeToLoad.element);
        this.loadedRoutes.pop();
    }

}