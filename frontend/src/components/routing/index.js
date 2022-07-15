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
import {Signup} from "../UserManagement/Signup";
import {Dashboard} from "../UserManagement/Dashboard";
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
import HomePage from "../HomePage";
import {PrivateRoute} from "../../components/PrivateRoute.js";

function Routing() {
    return (
        <BrowserRouter>
            <SideBar/>
            <div className="main">
                <Switch>
                    <PrivateRoute exact path={routes.home.path}>
                        <Layout>
                            <HomePage/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.viewCoupons.path}>
                        <Layout>
                            <ViewCoupons/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.notFound.path}>
                        <Layout>
                            <NotFound/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.redeemCoupon.path}>
                        <Layout>
                            <ReedemCoupon/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.couponRedeemed.path}>
                        <Layout>
                            <CouponRedeemed/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.expense.path}>
                        <Layout>
                            <ExpenseHomePage/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.addExpense.path}>
                        <Layout>
                            <AddExepnse/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewExpense.path}>
                        <Layout>
                            <ViewExpense/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.editExpense.path}>
                        <Layout>
                            <EditExpense/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.settleExpense.path}>
                        <Layout>
                            <SettleExpense/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.inviteFriends.path}>
                        <Layout>
                            <InviteFriends/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.successfullInvites.path}>
                        <Layout>
                            <SuccInvites/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.friendsInvited.path}>
                        <Layout>
                            <FriendsInvited/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.group.path}>
                        <Layout>
                            <GroupHomePage/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.createGroup.path}>
                        <Layout>
                            <CreateGroup/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewGroup.path}>
                        <Layout>
                            <ViewGroup/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.editGroup.path}>
                        <Layout>
                            <EditGroup/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.deleteGroup.path}>
                        <Layout>
                            <DeleteGroup/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewNotification.path}>
                        <Layout>
                            <ViewNotification/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewCoupons.path}>
                        <Layout>
                            <ViewCoupons/>
                        </Layout>
                    </PrivateRoute>
                    <Route exact path={routes.notFound.path}>
                        <Layout>
                            <NotFound/>
                        </Layout>
                    </Route>
                    <PrivateRoute exact path={routes.redeemCoupon.path}>
                        <Layout>
                            <ReedemCoupon/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.couponRedeemed.path}>
                        <Layout>
                            <CouponRedeemed/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.group.path}>
                        <Layout>
                            <GroupHomePage/>
                        </Layout>
                    </PrivateRoute>

                    <Route exact path={routes.login.path}>
                        <Layout>
                            <Login/>
                        </Layout>
                    </Route>

                    <Route exact path={routes.register.path}>
                        <Layout>
                            <Signup/>
                        </Layout>
                    </Route>

                    <PrivateRoute exact path={routes.dashboard.path}>
                        <Layout>
                            <Dashboard/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.forgotPassword.path}>
                        <Layout>
                            <ForgotPassword/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.passwordChanged.path}>
                        <Layout>
                            <PasswordChanged/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.createGroup.path}>
                        <Layout>
                            <CreateGroup/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.viewGroup.path}>
                        <Layout>
                            <ViewGroup/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.editGroup.path}>
                        <Layout>
                            <EditGroup/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.deleteGroup.path}>
                        <Layout>
                            <DeleteGroup/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.viewNotification.path}>
                        <Layout>
                            <ViewNotification/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.emailNotification.path}>
                        <Layout>
                            <EmailNotification/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.notificationSettings.path}>
                        <Layout>
                            <NotificationSettings/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.reminders.path}>
                        <Layout>
                            <RemindersGrid/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.createReminder.path}>
                        <Layout>
                            <CreateReminder/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.createTag.path}>
                        <Layout>
                            <CreateEditTag setting="create"/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.editTag.path}>
                        <Layout>
                            <CreateEditTag setting="edit"/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewTagDetails.path}>
                        <Layout>
                            <ViewTagDetails/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewTags.path}>
                        <Layout>
                            <ViewTags/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.addReceipt.path}>
                        <Layout>
                            <AddNewReceipt/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewReceiptDetails.path}>
                        <Layout>
                            <ViewReceiptDetails/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.viewReceipts.path}>
                        <Layout>
                            <ViewReceipts/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.analytics.path}>
                        <Layout>
                            <AnalyticsHome/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.expenseTracking.path}>
                        <Layout>
                            <ExpenseTracking/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.spendingTrends.path}>
                        <Layout>
                            <SpendingTrends/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.expenseAnalysis.path}>
                        <Layout>
                            <ExpenseAnalysis/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.exportGrid.path}>
                        <Layout>
                            <Grid/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.createSnapshot.path}>
                        <Layout>
                            <CreateSnap/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.viewSnapshot.path}>
                        <Layout>
                            <ViewSnaps/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute exact path={routes.addPaymentMethod.path}>
                        <Layout>
                            <PaymentMethod/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.initiatePayment.path}>
                        <Layout>
                            <InitiatePayment/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.paymentStatus.path}>
                        <Layout>
                            <PaymentStatus/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path={routes.paymentHistory.path}>
                        <Layout>
                            <PaymentHistory/>
                        </Layout>
                    </PrivateRoute>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export {Routing};
