import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {Home} from "../Home";

function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home.path}>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export {Routing}