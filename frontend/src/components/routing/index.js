import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {Home} from "../home";

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