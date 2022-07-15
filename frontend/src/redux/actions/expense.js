export const ADD_EXPENSE = "ADD_EXPENSE";
export const ADD_EXPENSE_RESPONSE = "ADD_EXPENSE_RESPONSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const EDIT_EXPENSE_RESPONSE = "EDIT_EXPENSE_RESPONSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const DELETE_EXPENSE_RESPONSE = "DELETE_EXPENSE_RESPONSE";
export const VIEW_EXPENSE = "VIEW_EXPENSE";
export const VIEW_EXPENSE_RESPONSE = "VIEW_EXPENSE_RESPONSE";
export const VIEW_EXPENSES = "VIEW_EXPENSES";
export const VIEW_EXPENSES_RESPONSE = "VIEW_EXPENSES_RESPONSE";
export const GET_USERS = "GET_USERS";
export const GET_USERS_RESPONSE = "GET_USERS_RESPONSE";

export const createGroup = (groupData) => ({
    type: ADD_EXPENSE,
    groupData
});

export const createGroupResponse = (response) => ({
    type: ADD_EXPENSE_RESPONSE,
    response
});

export const editGroup = (id, groupData) => ({
    type: EDIT_EXPENSE,
    id,
    groupData
});

export const editGroupResponse = (response) => ({
    type: EDIT_EXPENSE_RESPONSE,
    response
});

export const deleteGroup = (id) => ({
    type: DELETE_EXPENSE,
    id
});

export const deleteGroupResponse = (response) => ({
    type: DELETE_EXPENSE_RESPONSE,
    response
});

export const viewGroups = () => ({
    type: VIEW_EXPENSES
});

export const viewGroupsResponse = (response) => ({
    type: VIEW_EXPENSES_RESPONSE,
    response
});

export const viewGroup = (id, user) => ({
    type: VIEW_EXPENSE,
    id,
    user
});

export const viewGroupResponse = (response) => ({
    type: VIEW_EXPENSE_RESPONSE,
    response
});

export const getUsers = () => ({
    type: GET_USERS,
});

export const getUsersResponse = (response) => ({
    type: GET_USERS_RESPONSE,
    response
});


