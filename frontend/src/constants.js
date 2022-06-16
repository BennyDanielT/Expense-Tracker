export const routes = {
  home: {
    path: "/",
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
  reminders: {
    path: "/reminders",
    isAuthenticated: true,
  },
  createReminder: {
    path: "/create-reminder",
    isAuthenticated: true,
  },
  createTag: {
    path: "/create-tag",
    isAuthenticated: true,
  },
  editTag: {
    path: "/edit-tag",
    isAuthenticated: true,
  },
  viewTagDetails: {
    path: "/view-tag-details",
    isAuthenticated: true,
  },
  viewTags: {
    path: "/view-tags",
    isAuthenticated: true,
  },
  addReceipt: {
    path: "/add-new-receipt",
    isAuthenticated: true,
  },
  viewReceiptDetails: {
    path: "/view-receipt-details",
    isAuthenticated: true,
  },
  viewReceipts: {
    path: "/view-receipts",
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
  login: {
    path: "/login",
    isAuthenticated: true,
  },
  register: {
    path: "/register",
    isAuthenticated: true,
  },
  forgotPassword: {
    path: "/forgot-password",
    isAuthenticated: true,
  },
  passwordChanged: {
    path: "/password-changed",
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
  exportGrid: {
    path: "/export-grid",
    isAuthenticated: true,
  },
  createSnapshot: {
    path: "/create-snapshot",
    isAuthenticated: true,
  },
  viewSnapshot: {
    path: "/view-snapshots",
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
    analytics: {
        path: '/analytics',
        isAuthenticated: true
    },
    expenseTracking: {
        path: '/expense-tracking',
        isAuthenticated: true
    },
    spendingTrends: {
        path: '/spending-trends',
        isAuthenticated: true
    },
    expenseAnalysis: {
        path: '/expense-analysis',
        isAuthenticated: true
    }

};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
