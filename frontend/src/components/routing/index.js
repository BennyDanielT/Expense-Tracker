import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../constants";

import { GroupHomePage } from "../group/GroupHomePage";
import { CreateGroup } from "../group/CreateGroup";
import { ViewGroup } from "../group/ViewGroup";
import { EditGroup } from "../group/EditGroup";
import { DeleteGroup } from "../group/DeleteGroup";
import { ViewNotification } from "../notifications/ViewNotification";
import { EmailNotification } from "../notifications/EmailNotification";
import { NotificationSettings } from "../notifications/NotificationSettings";
import Grid from "../ExportData/Grid";
import CreateSnap from "../ExportData/CreateSnap";
import ViewSnaps from "../ExportData/ViewSnaps.js";
import PaymentMethod from "../Payments/PaymentMethod.js";
import InitiatePayment from "../Payments/InitiatePayment.js";
import PaymentHistory from "../Payments/PaymentHistory.js";
import PaymentStatus from "../Payments/PaymentStatus.js";
import { ViewCoupons } from "../CouponManagement/viewCoupons";
import { ReedemCoupon } from "../CouponManagement/redeemCoupon";
import Layout from "../CouponManagement/Layout/Layout";
import NotFound from "../CouponManagement/notFound";
import { CouponRedeemed } from "../CouponManagement/couponRedeemed";
import { AddExepnse } from "../expense/AddExpense";
import { EditExpense } from "../expense/EditExpense";
import { ExpenseHomePage } from "../expense/ExpenseHomePage";
import { ViewExpense } from "../expense/ViewExpense";
import InviteFriends from "../invite/InviteFriends";
import SettleExpense from "../expense/SettleExpense";
import SuccInvites from "../invite/SuccessfulInvites";
import FriendsInvited from "../invite/FriendsInvited";
import { SideBar } from "../SideBar";
import { Login } from "../UserManagement/Login";
import { Signup } from "../UserManagement/Signup";
import { Dashboard } from "../UserManagement/Dashboard";
import { ForgotPassword } from "../UserManagement/ForgetPassword";
import { PasswordChanged } from "../UserManagement/ChangePassword";
import { CreateEditTag } from "../tags/CreateEditTag";
import { ViewTagDetails } from "../tags/ViewTagDetails";
import { ViewTags } from "../tags/ViewTags";
import { AddNewReceipt } from "../receipts/AddNewReceipt";
import { ViewReceiptDetails } from "../receipts/ViewReceiptDetails";
import { ViewReceipts } from "../receipts/ViewReceipts";
import { AnalyticsHome } from "../analytics/AnalyticsHome";
import ExpenseTracking from "../analytics/ExpenseTracking";
import SpendingTrends from "../analytics/SpendingAnalysis";
import ExpenseAnalysis from "../analytics/ExpenseAnalysis";
import RemindersGrid from "../paymentReminders/RemindersGrid";
import CreateReminder from "../paymentReminders/CreateReminder";
import HomePage from "../HomePage";
import { AuthProvider } from "../../contexts/Auth.js";
import { PrivateRoute } from "../../components/PrivateRoute.js";
function Routing() {
  return (
    <BrowserRouter>
      <SideBar />
      <div className="main">
        <Switch>
          <Route exact path={routes.home.path}>
            <Layout>
              <HomePage />
            </Layout>
          </Route>

          <Route exact path={routes.viewCoupons.path}>
            <Layout>
              <ViewCoupons />
            </Layout>
          </Route>
          <Route exact path={routes.notFound.path}>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
          <Route exact path={routes.redeemCoupon.path}>
            <Layout>
              <ReedemCoupon />
            </Layout>
          </Route>
          <Route exact path={routes.couponRedeemed.path}>
            <Layout>
              <CouponRedeemed />
            </Layout>
          </Route>
          <Route exact path={routes.expense.path}>
            <Layout>
              <ExpenseHomePage />
            </Layout>
          </Route>
          <Route exact path={routes.addExpense.path}>
            <Layout>
              <AddExepnse />
            </Layout>
          </Route>
          <Route exact path={routes.viewExpense.path}>
            <Layout>
              <ViewExpense />
            </Layout>
          </Route>
          <Route exact path={routes.editExpense.path}>
            <Layout>
              <EditExpense />
            </Layout>
          </Route>
          <Route exact path={routes.settleExpense.path}>
            <Layout>
              <SettleExpense />
            </Layout>
          </Route>
          <Route exact path={routes.inviteFriends.path}>
            <Layout>
              <InviteFriends />
            </Layout>
          </Route>
          <Route exact path={routes.successfullInvites.path}>
            <Layout>
              <SuccInvites />
            </Layout>
          </Route>
          <Route exact path={routes.friendsInvited.path}>
            <Layout>
              <FriendsInvited />
            </Layout>
          </Route>
          <Route exact path={routes.group.path}>
            <Layout>
              <GroupHomePage />
            </Layout>
          </Route>
          <Route exact path={routes.createGroup.path}>
            <Layout>
              <CreateGroup />
            </Layout>
          </Route>
          <Route exact path={routes.viewGroup.path}>
            <Layout>
              <ViewGroup />
            </Layout>
          </Route>
          <Route exact path={routes.editGroup.path}>
            <Layout>
              <EditGroup />
            </Layout>
          </Route>
          <Route exact path={routes.deleteGroup.path}>
            <Layout>
              <DeleteGroup />
            </Layout>
          </Route>
          <Route exact path={routes.viewNotification.path}>
            <Layout>
              <ViewNotification />
            </Layout>
          </Route>
          <Route exact path={routes.viewCoupons.path}>
            <Layout>
              <ViewCoupons />
            </Layout>
          </Route>
          <Route exact path={routes.notFound.path}>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
          <Route exact path={routes.redeemCoupon.path}>
            <Layout>
              <ReedemCoupon />
            </Layout>
          </Route>
          <Route exact path={routes.couponRedeemed.path}>
            <Layout>
              <CouponRedeemed />
            </Layout>
          </Route>

          <Route exact path={routes.group.path}>
            <Layout>
              <GroupHomePage />
            </Layout>
          </Route>
          <AuthProvider>
            <Switch>
              <Route exact path={routes.login.path}>
                <Layout>
                  <Login />
                </Layout>
              </Route>
              <Route exact path={routes.register.path}>
                <Layout>
                  <Signup />
                </Layout>
              </Route>
              <PrivateRoute exact path={routes.dashboard.path}>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            </Switch>
          </AuthProvider>
          <Route exact path={routes.forgotPassword.path}>
            <Layout>
              <ForgotPassword />
            </Layout>
          </Route>
          <Route exact path={routes.passwordChanged.path}>
            <Layout>
              <PasswordChanged />
            </Layout>
          </Route>
          <Route exact path={routes.createGroup.path}>
            <Layout>
              <CreateGroup />
            </Layout>
          </Route>
          <Route exact path={routes.viewGroup.path}>
            <Layout>
              <ViewGroup />
            </Layout>
          </Route>
          <Route exact path={routes.editGroup.path}>
            <Layout>
              <EditGroup />
            </Layout>
          </Route>
          <Route exact path={routes.deleteGroup.path}>
            <Layout>
              <DeleteGroup />
            </Layout>
          </Route>
          <Route exact path={routes.viewNotification.path}>
            <Layout>
              <ViewNotification />
            </Layout>
          </Route>
          <Route exact path={routes.emailNotification.path}>
            <Layout>
              <EmailNotification />
            </Layout>
          </Route>
          <Route exact path={routes.notificationSettings.path}>
            <Layout>
              <NotificationSettings />
            </Layout>
          </Route>
          <Route exact path={routes.reminders.path}>
            <Layout>
              <RemindersGrid />
            </Layout>
          </Route>
          <Route exact path={routes.createReminder.path}>
            <Layout>
              <CreateReminder />
            </Layout>
          </Route>

          <Route exact path={routes.createTag.path}>
            <Layout>
              <CreateEditTag setting="create" />
            </Layout>
          </Route>
          <Route exact path={routes.editTag.path}>
            <Layout>
              <CreateEditTag setting="edit" />
            </Layout>
          </Route>
          <Route exact path={routes.viewTagDetails.path}>
            <Layout>
              <ViewTagDetails />
            </Layout>
          </Route>
          <Route exact path={routes.viewTags.path}>
            <Layout>
              <ViewTags />
            </Layout>
          </Route>
          <Route exact path={routes.addReceipt.path}>
            <Layout>
              <AddNewReceipt />
            </Layout>
          </Route>
          <Route exact path={routes.viewReceiptDetails.path}>
            <Layout>
              <ViewReceiptDetails />
            </Layout>
          </Route>
          <Route exact path={routes.viewReceipts.path}>
            <Layout>
              <ViewReceipts />
            </Layout>
          </Route>
          <Route exact path={routes.analytics.path}>
            <Layout>
              <AnalyticsHome />
            </Layout>
          </Route>
          <Route exact path={routes.expenseTracking.path}>
            <Layout>
              <ExpenseTracking />
            </Layout>
          </Route>
          <Route exact path={routes.spendingTrends.path}>
            <Layout>
              <SpendingTrends />
            </Layout>
          </Route>
          <Route exact path={routes.expenseAnalysis.path}>
            <Layout>
              <ExpenseAnalysis />
            </Layout>
          </Route>
          <Route exact path={routes.exportGrid.path}>
            <Layout>
              <Grid />
            </Layout>
          </Route>

          <Route exact path={routes.createSnapshot.path}>
            <Layout>
              <CreateSnap />
            </Layout>
          </Route>

          <Route exact path={routes.viewSnapshot.path}>
            <Layout>
              <ViewSnaps />
            </Layout>
          </Route>
          <Route exact path={routes.addPaymentMethod.path}>
            <Layout>
              <PaymentMethod />
            </Layout>
          </Route>

          <Route exact path={routes.initiatePayment.path}>
            <Layout>
              <InitiatePayment />
            </Layout>
          </Route>

          <Route exact path={routes.paymentStatus.path}>
            <Layout>
              <PaymentStatus />
            </Layout>
          </Route>

          <Route exact path={routes.paymentHistory.path}>
            <Layout>
              <PaymentHistory />
            </Layout>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { Routing };
