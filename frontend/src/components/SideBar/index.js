import {Menu, MenuItem, ProSidebar, SidebarContent, SubMenu} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import {routes} from "../../constants";
import {useState} from "react";

function SideBar() {

    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value);
    }


    return (
        <ProSidebar
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            breakPoint="md"
        >
            <SidebarContent>
                <Menu>
                    <MenuItem> <Link to={routes.home.path}>HomePage</Link></MenuItem>
                    <SubMenu title={"User Management"}>
                        <MenuItem> <Link to={routes.login.path}>Login</Link></MenuItem>
                        <MenuItem><Link to={routes.register.path}>Register</Link></MenuItem>
                        <MenuItem><Link to={routes.forgotPassword.path}>Forgot Password</Link></MenuItem>
                        <MenuItem><Link to={routes.passwordChanged.path}>Change Password</Link></MenuItem>
                    </SubMenu>
                    <SubMenu title={"Coupon Management"}>
                        <MenuItem> <Link to={routes.viewCoupons.path}>View Coupons</Link></MenuItem>
                        <MenuItem> <Link to={routes.redeemCoupon.path}>Redeem Coupons</Link></MenuItem>
                        <MenuItem> <Link to={routes.couponRedeemed.path}>Coupon Redeemed</Link></MenuItem>
                    </SubMenu>
                    <SubMenu title={"Notification"}>
                        <MenuItem> <Link to={routes.notificationSettings.path}>Notification Settings</Link></MenuItem>
                        <MenuItem><Link to={routes.emailNotification.path}>Email Notification</Link></MenuItem>
                        <MenuItem><Link to={routes.viewNotification.path}>View Notification</Link></MenuItem>
                    </SubMenu>
                    <SubMenu title={"Group Expense Tracking"}>
                        <MenuItem> <Link to={routes.group.path}>Group</Link></MenuItem>
                        <MenuItem> <Link to={routes.createGroup.path}>Create Group</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title={"Reminders"}>
                        <MenuItem> <Link to={routes.reminders.path}>Reminders</Link></MenuItem>
                        <MenuItem> <Link to={routes.createReminder.path}>Create Reminder</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title={"Analytics"}>
                        <MenuItem> <Link to={routes.analytics.path}>Analytics</Link></MenuItem>
                        <MenuItem> <Link to={routes.expenseAnalysis.path}>Expense Analytics</Link></MenuItem>
                        <MenuItem> <Link to={routes.spendingTrends.path}>Spending Trends</Link></MenuItem>
                        <MenuItem> <Link to={routes.expenseTracking.path}>Expense Tracking</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title={"Tags"}>
                        <MenuItem> <Link to={routes.createTag.path}>Create Tag</Link></MenuItem>
                        <MenuItem> <Link to={routes.viewTags.path}>View Tags</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title={"Receipts"}>
                        <MenuItem> <Link to={routes.addReceipt.path}>Add Receipt</Link></MenuItem>
                        <MenuItem> <Link to={routes.viewReceipts.path}>View Receipts</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title={"Export Data"}>
                        <MenuItem> <Link to={routes.exportGrid.path}>Export Grid</Link></MenuItem>
                        <MenuItem> <Link to={routes.createSnapshot.path}>Create Snapshot</Link></MenuItem>
                        <MenuItem> <Link to={routes.viewSnapshot.path}>View Snapshot</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title={"Payments"}>
                        <MenuItem> <Link to={routes.initiatePayment.path}>Initiate Payment</Link></MenuItem>
                        <MenuItem> <Link to={routes.addPaymentMethod.path}>Add Payment Method</Link></MenuItem>
                        <MenuItem> <Link to={routes.paymentStatus.path}>Payment Status</Link></MenuItem>
                        <MenuItem> <Link to={routes.paymentHistory.path}>Payment History</Link></MenuItem>
                    </SubMenu>

                </Menu>
            </SidebarContent>
        </ProSidebar>
    )
}

export {SideBar}