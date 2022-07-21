/**
 * @author ${abhishekuppe}
 */

import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SubMenu,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';

function SideBar() {
  return (
    <ProSidebar breakPoint='md'>
      <SidebarContent>
        <Menu>
          <MenuItem>
            {' '}
            <Link to={routes.home.path}>HomePage</Link>
          </MenuItem>
          <SubMenu title={'User Management'}>
            <MenuItem>
              {' '}
              <Link to={routes.login.path}>Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.register.path}>Register</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.forgotPassword.path}>Magic Link</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.passwordChanged.path}>Change Password</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Expenses'}>
            <MenuItem>
              {' '}
              <Link to={routes.expense.path}>Expense</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.addExpense.path}>Add Expense</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Invite'}>
            <MenuItem>
              {' '}
              <Link to={routes.inviteFriends.path}>Invite Friends</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.successfullInvites.path}>
                Successful Invites
              </Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.friendsInvited.path}>Friends Invitied</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Coupon Management'}>
            <MenuItem>
              {" "}
              <Link to="/view-coupons">View Coupons</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/redeem-coupon/3">Redeem Coupons</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/coupon-redeemed/3">Coupon Redeemed</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title={'Notification'}>
            <MenuItem>
              {' '}
              <Link to={routes.notificationSettings.path}>
                Notification Settings
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.emailNotification.path}>Email Notification</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.viewNotification.path}>View Notification</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title={'Group Expense Tracking'}>
            <MenuItem>
              {' '}
              <Link to={routes.group.path}>Group</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.createGroup.path}>Create Group</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Reminders'}>
            <MenuItem>
              {' '}
              <Link to={routes.reminders.path}>Reminders</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.createReminder.path}>Create Reminder</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Analytics'}>
            <MenuItem>
              {' '}
              <Link to={routes.analytics.path}>Analytics</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.expenseAnalysis.path}>Expense Analytics</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.spendingTrends.path}>Spending Trends</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.expenseTracking.path}>Expense Tracking</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Tags'}>
            <MenuItem>
              {' '}
              <Link to={routes.createTag.path}>Create Tag</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.viewTags.path}>View Tags</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Receipts'}>
            <MenuItem>
              {' '}
              <Link to={routes.addReceipt.path}>Add Receipt</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.viewReceipts.path}>View Receipts</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Export Data'}>
            <MenuItem>
              {' '}
              <Link to={routes.exportGrid.path}>Export Grid</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.createSnapshot.path}>Create Snapshot</Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link to={routes.viewSnapshot.path}>View Snapshot</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu title={'Payments'}>
            <MenuItem>
              {' '}
              <Link to={routes.initiatePayment.path}>Initiate Payment</Link>
            </MenuItem>
            {/* <MenuItem>
              {" "}
              <Link to={routes.addPaymentMethod.path}>Add Payment Method</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to={routes.paymentStatus.path}>Payment Status</Link>
            </MenuItem> */}
            <MenuItem>
              {' '}
              <Link to={routes.paymentHistory.path}>Payment History</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}

export { SideBar };
