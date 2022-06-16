import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "../../constants";
import {GroupHomePage} from "../group/GroupHomePage";
import {CreateGroup} from "../group/CreateGroup";
import RemindersGrid from "../PaymentReminders/RemindersGrid";
import CreateReminder from "../PaymentReminders/CreateReminder";
import {ViewGroup} from "../group/ViewGroup";
import {EditGroup} from "../group/EditGroup";
import {DeleteGroup} from "../group/DeleteGroup";
import {ViewNotification} from "../notifications/ViewNotification";
import {EmailNotification} from "../notifications/EmailNotification";
import {NotificationSettings} from "../notifications/NotificationSettings";
import Grid from "../ExportData/Grid";
import {ViewCoupons} from "../CouponManagement/viewCoupons";
import {ReedemCoupon} from "../CouponManagement/redeemCoupon";
import Layout from "../CouponManagement/Layout/Layout";
import NotFound from "../CouponManagement/notFound";
import {CouponRedeemed} from "../CouponManagement/couponRedeemed";
import {Login} from "../UserManagement/Login";
import {Register} from "../UserManagement/Register";
import {ForgotPassword} from "../UserManagement/ForgetPassword";
import {PasswordChanged} from "../UserManagement/ChangePassword";
import {SideBar} from "../SideBar";

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

                    <Route exact path={routes.exportGrid.path}>
                        <Grid/>
                    </Route>
                    {/* <Route exact path={routes.createSnapshot.path}>
                    <CreateSnapshot/>
                </Route>
                <Route exact path={routes.viewSnapshot.path}>
                    <ViewSnapshot/>
                </Route>
                <Route exact path={routes.addPaymentMethod.path}>
                    <AddMethod/>
                </Route>
                <Route exact path={routes.initiatePayment.path}>
                    <InitiatePayment/>
                </Route>
                <Route exact path={routes.paymentStatus.path}>
                    <PaymentStatus/>
                </Route>
                <Route exact path={routes.paymentHistory.path}>
                    <PaymentHistory/>
                </Route> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export {Routing};
