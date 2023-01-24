import Route from "./route";
import DOMElement from "./utils";
type Config = {
    routes: Array<Route>;
    onPop: (currentRouteElement: DOMElement, NextRouteELement: DOMElement) => void;
    onPush: (currentRouteElement: DOMElement, NextRouteElement: DOMElement) => void;
};
export default Config;
