import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";

import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import {ViewGroup} from "../group/ViewGroup";
import {EditGroup} from "../group/EditGroup";
import {DeleteGroup} from "../group/DeleteGroup";
import {ViewNotification} from "../notifications/ViewNotification";
import {EmailNotification} from "../notifications/EmailNotification";
import {NotificationSettings} from "../notifications/NotificationSettings";
import Grid from "../ExportData/Grid";
import CreateSnap from "../ExportData/CreateSnap";
import ViewSnaps from "../ExportData/ViewSnaps.js";
import PaymentMethod from "../Payments/PaymentMethod.js";
import InitiatePayment from "../Payments/InitiatePayment.js";
import PaymentHistory from "../Payments/PaymentHistory.js";
import PaymentStatus from "../Payments/PaymentStatus.js";
import {ViewCoupons} from "../CouponManagement/viewCoupons";
import {ReedemCoupon} from "../CouponManagement/redeemCoupon";
import Layout from "../CouponManagement/Layout/Layout";
import NotFound from "../CouponManagement/notFound";
import {CouponRedeemed} from "../CouponManagement/couponRedeemed";
import {AddExepnse} from "../expense/AddExpense";
import {EditExpense} from "../expense/EditExpense";
import {ExpenseHomePage} from "../expense/ExpenseHomePage";
import {ViewExpense} from "../expense/ViewExpense";
import InviteFriends from "../invite/InviteFriends";
import SettleExpense from "../expense/SettleExpense";
import SuccInvites from "../invite/SuccessfulInvites";
import FriendsInvited from "../invite/FriendsInvited";
import {SideBar} from "../SideBar";
import {Login} from "../UserManagement/Login";
import {Register} from "../UserManagement/Register";
import {ForgotPassword} from "../UserManagement/ForgetPassword";
import {PasswordChanged} from "../UserManagement/ChangePassword";
import {CreateEditTag} from "../tags/CreateEditTag";
import {ViewTagDetails} from "../tags/ViewTagDetails";
import {ViewTags} from "../tags/ViewTags";
import {AddNewReceipt} from "../receipts/AddNewReceipt";
import {ViewReceiptDetails} from "../receipts/ViewReceiptDetails";
import {ViewReceipts} from "../receipts/ViewReceipts";
import {AnalyticsHome} from "../analytics/AnalyticsHome";
import ExpenseTracking from "../analytics/ExpenseTracking";
import SpendingTrends from "../analytics/SpendingAnalysis";
import ExpenseAnalysis from "../analytics/ExpenseAnalysis";
import RemindersGrid from "../paymentReminders/RemindersGrid";
import CreateReminder from "../paymentReminders/CreateReminder";

function Routing() {
    return (
        <BrowserRouter>
            <SideBar/>
            <div className="main">
                <Switch>
                    <Route exact path={routes.home.path}>
                        <div>Home</div>
                    </Route>

                    <Route exact path={routes.viewCoupons.path}>
                        <Layout>
                            <ViewCoupons/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.notFound.path}>
                        <Layout>
                            <NotFound/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.redeemCoupon.path}>
                        <Layout>
                            <ReedemCoupon/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.couponRedeemed.path}>
                        <Layout>
                            <CouponRedeemed/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.expense.path}>
                        <ExpenseHomePage/>
                    </Route>
                    <Route exact path={routes.addExpense.path}>
                        <AddExepnse/>
                    </Route>
                    <Route exact path={routes.viewExpense.path}>
                        <ViewExpense/>
                    </Route>
                    <Route exact path={routes.editExpense.path}>
                        <EditExpense/>

                    </Route>
                    <Route exact path={routes.settleExpense.path}>
                        <SettleExpense/>
                    </Route>
                    <Route exact path={routes.inviteFriends.path}>
                        <InviteFriends/>
                    </Route>
                    <Route exact path={routes.successfullInvites.path}>
                        <SuccInvites/>
                    </Route>
                    <Route exact path={routes.friendsInvited.path}>
                        <FriendsInvited/>
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
                    <Route exact path={routes.viewNotification.path}>
                        <ViewNotification/>
                    </Route>
                    <Route exact path={routes.viewCoupons.path}>
                        <Layout>
                            <ViewCoupons/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.notFound.path}>
                        <Layout>
                            <NotFound/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.redeemCoupon.path}>
                        <Layout>
                            <ReedemCoupon/>
                        </Layout>
                    </Route>
                    <Route exact path={routes.couponRedeemed.path}>
                        <Layout>
                            <CouponRedeemed/>
                        </Layout>
                    </Route>

                    <Route exact path={routes.group.path}>
                        <GroupHomePage/>
                    </Route>
                    <Route exact path={routes.login.path}>
                        <Login/>
                    </Route>
                    <Route exact path={routes.register.path}>
                        <Register/>
                    </Route>
                    <Route exact path={routes.forgotPassword.path}>
                        <ForgotPassword/>
                    </Route>
                    <Route exact path={routes.passwordChanged.path}>
                        <PasswordChanged/>
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
                    <Route exact path={routes.viewNotification.path}>
                        <ViewNotification/>
                    </Route>
                    <Route exact path={routes.emailNotification.path}>
                        <EmailNotification/>
                    </Route>
                    <Route exact path={routes.notificationSettings.path}>
                        <NotificationSettings/>
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
                    <Route exact path={routes.addReceipt.path}>
                        <AddNewReceipt/>
                    </Route>
                    <Route exact path={routes.viewReceiptDetails.path}>
                        <ViewReceiptDetails/>
                    </Route>
                    <Route exact path={routes.viewReceipts.path}>
                        <ViewReceipts/>
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
                    <Route exact path={routes.expenseAnalysis.path}>
                        <ExpenseAnalysis/>
                    </Route>
                    <Route exact path={routes.exportGrid.path}>
                        <Grid/>
                    </Route>

                    <Route exact path={routes.createSnapshot.path}>
                        <CreateSnap/>
                    </Route>

                    <Route exact path={routes.viewSnapshot.path}>
                        <ViewSnaps/>
                    </Route>
                    <Route exact path={routes.addPaymentMethod.path}>
                        <PaymentMethod/>
                    </Route>

                    <Route exact path={routes.initiatePayment.path}>
                        <InitiatePayment/>
                    </Route>

                    <Route exact path={routes.paymentStatus.path}>
                        <PaymentStatus/>
                    </Route>

                    <Route exact path={routes.paymentHistory.path}>
                        <PaymentHistory/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export {Routing}