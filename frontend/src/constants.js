export const routes = {
  home: {
    path: "/",
    isAuthenticated: true,
  },
  viewCoupons: {
    path: "/view-coupons",
    isAuthenticated: true,
  },
  redeemCoupon: {
    path: "/redeem-coupon",
    isAuthenticated: true,
  },
  couponRedeemed: {
    path: "/coupon-redeemed",
    isAuthenticated: true,
  },
  expense: {
    path: "/expense",
    isAuthenticated: true,
  },
  addExpense: {
    path: "/add-expense",
    isAuthenticated: true,
  },
  viewExpense: {
    path: "/view-expense/:id",
    isAuthenticated: true,
  },
  inviteFriends: {
    path: "/invite-friends",
    isAuthenticated: true,
  },
  successfullInvites: {
    path: "/succInvite",
    isAuthenticated:true,
  },
  editExpense: {
    path: "/edit-expense/:id",
    isAuthenticated: true,
  },
  settleExpense: {
    path: "/settle-expense",
    isAuthenticated: true,
  },
  group: {
    path: "/group",
    isAuthenticated: true,
  },
  createGroup: {
    path: "/create-group",
    isAuthenticated: true,
  },
  viewGroup: {
    path: "/view-group/:id",
    isAuthenticated: true,
  },
  editGroup: {
    path: "/edit-group/:id",
    isAuthenticated: true,
  },
  deleteGroup: {
    path: "/delete-group/:id",
    isAuthenticated: true,
  },
  viewNotification: {
    path: "/view-notification",
    isAuthenticated: true,
  },
  emailNotification: {
    path: "/email-notification",
    isAuthenticated: true,
  },
  notificationSettings: {
    path: "/notification-settings",
    isAuthenticated: true,
  },
  reminders: {
    path: "/reminders",
    isAuthenticated: true,
  },
  createReminder: {
    path: "/create-reminder",
    isAuthenticated: true,
  },
  exportGrid: {
    path: "/export-grid",
    isAuthenticated: true,
  },
  createSnapshot: {
    path: "/create-snapshot",
    isAuthenticated: true,
  },
  viewSnapshot: {
    path: "/view-snapshot",
    isAuthenticated: true,
  },
  addPaymentMethod: {
    path: "/add-method",
    isAuthenticated: true,
  },
  initiatePayment: {
    path: "/initiate-payment",
    isAuthenticated: true,
  },
  paymentStatus: {
    path: "/payment-status",
    isAuthenticated: true,
  },
  paymentHistory: {
    path: "/payment-history",
    isAuthenticated: true,
  },
  notFound: {
    path: "/error",
    isAuthenticated: true,
  },
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
