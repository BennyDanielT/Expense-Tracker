import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import RemindersGrid from "../PaymentReminders/RemindersGrid";
import CreateReminder from "../PaymentReminders/CreateReminder";
import {ViewGroup} from "../group/ViewGroup";
import {ModifyGroup} from "../group/ModifyGroup";
import {DeleteGroup} from "../group/DeleteGroup";

function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home.path}>
                    <div>Home</div>
                </Route>
                <Route exact path={routes.group.path}>
                    <GroupHomePage/>
                </Route>
                <Route exact path={routes.createGroup.path}>
                    <CreateGroup/>
                </Route>
                <Route exact path={routes.viewGroup.path}>
                    <ViewGroup/>
                </Route>
                <Route exact path={routes.modifyGroup.path}>
                    <ModifyGroup/>
                </Route>
                <Route exact path={routes.deleteGroup.path}>
                    <DeleteGroup/>
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