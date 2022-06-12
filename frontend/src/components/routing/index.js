import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {Home} from "../home";
import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import {CreateEditTag} from "../tasks/CreateEditTag";
import { ViewTagDetails } from "../tasks/ViewTagDetails";
import { ViewTags } from "../tasks/ViewTags";

function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home.path}>
                    <Home/>
                </Route>
                <Route exact path={routes.group.path}>
                    <GroupHomePage/>
                </Route>
                <Route exact path={routes["create-group"].path}>
                    <CreateGroup/>
                </Route>
                <Route exact path={routes["create-tag"].path}>
                    <CreateEditTag/>
                </Route>
                <Route exact path={routes["edit-tag"].path}>
                    <CreateEditTag/>
                </Route>
                <Route exact path={routes["view-tag-details"].path}>
                    <ViewTagDetails/>
                </Route>
                <Route exact path={routes["view-tags"].path}>
                    <ViewTags/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export {Routing}