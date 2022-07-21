import Swal from "sweetalert2";
import axios from "axios";

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
        path: "/redeem-coupon/:id",
        isAuthenticated: true,
    },
    couponRedeemed: {
        path: "/coupon-redeemed/:id",
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
        path: "/payment-status/:status",
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
    analytics: {
        path: "/analytics",
        isAuthenticated: true,
    },
    expenseTracking: {
        path: "/expense-tracking",
        isAuthenticated: true,
    },
    spendingTrends: {
        path: "/spending-trends",
        isAuthenticated: true,
    },
    expenseAnalysis: {
        path: "/expense-analysis",
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
    friendsInvited: {
        path: "/friends-invited",
        isAuthenticated: true,
    },
    successfullInvites: {
        path: "/succInvite",
        isAuthenticated: true,
    },
    editExpense: {
        path: "/edit-expense/:id",
        isAuthenticated: true,
    },
    settleExpense: {
        path: "/settle-expense/:id",
        isAuthenticated: true,
    },
    dashboard: {
        path: "/dashboard",
        isAuthenticated: true,
    },
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const isSuccessfulResponse = (response) => {
    return response?.success;
};

export const showPopup = (type, title, msg, callback = () => {
}) => {
    Swal.fire(title, msg, type).then(() => {
        callback();
    });
};

export const showError = (error) => {
    const status = error.response.status.toString();
    if (status.match("4[0-9][0-9]")) {
        showPopup("error", "Error", error.response.data.error);
    } else if (status.match("5[0-9][0-9]")) {
        showPopup("error", "Error", "Internal Server Error");
    } else {
        showPopup("error", "Error", "An error occurred. Please try again");
    }
};

export const imgToBase64 = (file, callback) => {
    let base64String = "";
    const reader = new FileReader();
    reader.onload = function () {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        callback(base64String);
    };
    reader.readAsDataURL(file);
};

export const getUserFullName = (user) => {
    return user.email_id;
};

const base64ToImg = async (url, filename, mimeType) => {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return new File([buf], filename, {type: mimeType});
};

export const addNotification = async (type, message, user_id, callback) => {
    console.log(type, message, user_id)
    axios.post(`/api/notification-settings/`, {'user_id': user_id}).then((ele) => {
        if (ele.data.success[0].types.includes(type)) {
            axios.post(`/api/add-notification/`, {data: message, type}).then((ele) => {
                if (callback) {
                    callback();
                }
            }).catch((err) => {
                showError(err);
            });
        }
    });
}