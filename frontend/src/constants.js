export const routes = {
    home: {
        path: '/',
        isAuthenticated: true
    },
    group: {
        path: "/group",
        isAuthenticated: true
    },
    createGroup: {
        path: "/create-group",
        isAuthenticated: true
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
        path: '/reminders',
        isAuthenticated: true
    },
    createReminder: {
        path: '/create-reminder',
        isAuthenticated: true
    },
    createTag: {
        path: "/create-tag",
        isAuthenticated: true
    },
    editTag: {
        path: "/edit-tag",
        isAuthenticated: true
    },
    viewTagDetails: {
        path: "/view-tag-details",
        isAuthenticated: true
    },
    viewTags: {
        path: "/view-tags",
        isAuthenticated: true
    },
    addReceipt: {
        path: "/add-new-receipt",
        isAuthenticated: true
    },
    viewReceiptDetails: {
        path: "/view-receipt-details",
        isAuthenticated: true
    },
    viewReceipts: {
        path: "/view-receipts",
        isAuthenticated: true
    }
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};