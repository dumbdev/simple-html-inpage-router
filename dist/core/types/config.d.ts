import Route from "./route";
type Config = {
    routes: Array<Route>;
    onPop: (currentRouteElement: HTMLElement, NextRouteELement: HTMLElement) => void;
    onPush: (currentRouteElement: HTMLElement, NextRouteElement: HTMLElement) => void;
};
export default Config;
