import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {Home} from "../Home";
import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import RemindersGrid from "../paymentReminders/RemindersGrid";
import CreateReminder from "../paymentReminders/CreateReminder";
import {AnalyticsHome} from "../analytics/AnalyticsHome";
import ExpenseTracking from "../analytics/ExpenseTracking";
import SpendingTrends from "../analytics/SpendingAnalysis";


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
                <Route exact path={routes.analytics.path}>
                    <AnalyticsHome/>
                </Route>
                <Route exact path={routes.expenseTracking.path}>
                    <ExpenseTracking/>
                </Route>
                <Route exact path={routes.spendingTrends.path}>
                    <SpendingTrends/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export {Routing}