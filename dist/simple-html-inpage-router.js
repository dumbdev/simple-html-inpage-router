(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    (function (factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
            var v = factory(require, exports);
            if (v !== undefined) module.exports = v;
        }
        else if (typeof define === "function" && define.amd) {
            define(["require", "exports"], factory);
        }
    })(function (require, exports) {
        Object.defineProperty(exports, "__esModule", { value: true });
        class SimpleHtmlInpageRouter {
            constructor(config) {
                this.routes = config.routes;
                this.loadedRoutes = [this.getDefaultRouteObject().path];
                this.onPop = config.onPop;
                this.onPush = config.onPush;
            }
            getDefaultRouteObject() {
                for (let key in this.routes) {
                    if (this.routes[key].default === true) {
                        return this.routes[key];
                    }
                }
                return this.routes[0];
            }
            getRouteObjectByPath(path) {
                for (let key in this.routes) {
                    if (this.routes[key].path === path) {
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
            pushRoute(path) {
                let routeToPush = this.getRouteObjectByPath(path);
                let routeToSitAt = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 1]);
                this.onPush(routeToSitAt.element, routeToPush.element);
                this.loadedRoutes.push(routeToPush.path);
            }
            popRoute(path) {
                if (this.loadedRoutes.length === 1) {
                    throw Error("Only route in stack. Can't pop it off too 😊.");
                }
                let routeToPop = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 1]);
                let routeToLoad = this.getRouteObjectByPath(this.loadedRoutes[this.loadedRoutes.length - 2]);
                this.onPop(routeToPop.element, routeToLoad.element);
                this.loadedRoutes.pop();
            }
        }
        exports.default = SimpleHtmlInpageRouter;
        Object.assign(module.exports, SimpleHtmlInpageRouter);
    });

}));
