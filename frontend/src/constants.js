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
    }
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};