import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {Home} from "../Home";
import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import RemindersGrid from "../PaymentReminders/RemindersGrid";
import CreateReminder from "../PaymentReminders/CreateReminder";

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
                <Route exact path={routes.reminders.path}>
                    <RemindersGrid/>
                </Route>
                <Route exact path={routes.createReminder.path}>
                    <CreateReminder/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export {Routing}