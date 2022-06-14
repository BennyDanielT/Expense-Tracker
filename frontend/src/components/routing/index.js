import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import RemindersGrid from "../PaymentReminders/RemindersGrid";
import CreateReminder from "../PaymentReminders/CreateReminder";
import {ViewGroup} from "../group/ViewGroup";
import {EditGroup} from "../group/EditGroup";
import {DeleteGroup} from "../group/DeleteGroup";
import {CreateEditTag} from "../tags/CreateEditTag";
import { ViewTagDetails } from "../tags/ViewTagDetails";
import { ViewTags } from "../tags/ViewTags";

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
                <Route exact path={routes.editGroup.path}>
                    <EditGroup/>
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
                
                <Route exact path={routes.createTag.path}>
                    <CreateEditTag setting="create"/>
                </Route>
                <Route exact path={routes.editTag.path}>
                    <CreateEditTag setting="edit"/>
                </Route>
                <Route exact path={routes.viewTagDetails.path}>
                    <ViewTagDetails/>
                </Route>
                <Route exact path={routes.viewTags.path}>
                    <ViewTags/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export {Routing}