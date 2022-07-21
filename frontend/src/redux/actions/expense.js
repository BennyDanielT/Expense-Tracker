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


export const addExpense = (expenseData) => ({
    type: ADD_EXPENSE,
    expenseData
});

export const addExpenseResponse = (response) => ({
    type: ADD_EXPENSE_RESPONSE,
    response
});

export const editExpense = (id, expenseData) => ({
    type: EDIT_EXPENSE,
    id,
    expenseData
});

export const editExpenseResponse = (response) => ({
    type: EDIT_EXPENSE_RESPONSE,
    response
});

export const deleteExpense = (id) => ({
    type: DELETE_EXPENSE,
    id
});

export const deleteExpenseResponse = (response) => ({
    type: DELETE_EXPENSE_RESPONSE,
    response
});

export const viewExpenses = (user_id) => ({
    type: VIEW_EXPENSES,
    user_id
});

export const viewExpensesResponse = (response) => ({
    type: VIEW_EXPENSES_RESPONSE,
    response
});

export const viewExpense = (id) => ({
    type: VIEW_EXPENSE,
    id
});

export const viewExpenseResponse = (response) => ({
    type: VIEW_EXPENSE_RESPONSE,
    response
});




