import {
    ADD_EXPENSE,
    ADD_EXPENSE_RESPONSE,
    DELETE_EXPENSE,
    DELETE_EXPENSE_RESPONSE,
    EDIT_EXPENSE,
    EDIT_EXPENSE_RESPONSE,
    VIEW_EXPENSE,
    VIEW_EXPENSE_RESPONSE,
    VIEW_EXPENSES,
    VIEW_EXPENSES_RESPONSE
} from "../actions";

const initialState = {
    viewExpenseResponseData: {},
    isViewExpenseResponseReceived: false,
    viewExpensesResponseData: {},
    isViewExpensesResponseReceived: false,
    editExpenseResponseData: {},
    isEditExpenseResponseReceived: false,
    deleteExpenseResponseData: {},
    isDeleteExpenseResponseReceived: false,
    addExpenseResponseData: {},
    isAddExpenseResponseReceived: false,

};

const expense = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            return {
                ...state,
                isAddExpenseResponseReceived: false
            };
        }
        case ADD_EXPENSE_RESPONSE: {
            return {
                ...state,
                isAddExpenseResponseReceived: true,
                addExpenseResponseData: action.response
            };
        }
        case VIEW_EXPENSES: {
            return {
                ...state,
                isViewExpensesResponseReceived: false
            }
        }
        case VIEW_EXPENSES_RESPONSE: {
            return {
                ...state,
                isViewExpensesResponseReceived: true,
                viewExpensesResponseData: action.response
            }
        }
        case VIEW_EXPENSE: {
            return {
                ...state,
                isViewExpenseResponseReceived: false
            }
        }
        case VIEW_EXPENSE_RESPONSE: {
            return {
                ...state,
                isViewExpenseResponseReceived: true,
                viewExpenseResponseData: action.response
            }
        }
        case EDIT_EXPENSE: {
            return {
                ...state,
                isEditExpenseResponseReceived: false
            }
        }
        case EDIT_EXPENSE_RESPONSE: {
            return {
                ...state,
                isEditExpenseResponseReceived: true,
                editExpenseResponseData: action.response
            }
        }
        case DELETE_EXPENSE: {
            return {
                ...state,
                isDeleteExpenseResponseReceived: false
            }
        }
        case DELETE_EXPENSE_RESPONSE: {
            return {
                ...state,
                isDeleteExpenseResponseReceived: true,
                deleteExpenseResponseData: action.response
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default expense;