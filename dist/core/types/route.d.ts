import DOMElement from "./utils";
type Route = {
    path: string;
    element: DOMElement;
    default?: boolean;
};
export default Route;
