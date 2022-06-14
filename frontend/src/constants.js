export const routes = {
    home: {
        path: '/',
        isAuthenticated: true
    },
    group: {
        path: "/group",
        isAuthenticated: true
    },
    "create-group": {
        path: "/create-group",
        isAuthenticated: true
    },
    reminders: {
        path: '/reminders',
        isAuthenticated: true
    },
    createReminder: {
        path: '/create-reminder',
        isAuthenticated: true
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
    }

}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};