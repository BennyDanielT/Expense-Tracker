import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {
    ADD_EXPENSE,
    addExpenseResponse,
    DELETE_EXPENSE,
    deleteExpenseResponse,
    EDIT_EXPENSE,
    editExpenseResponse,
    VIEW_EXPENSE,
    VIEW_EXPENSES,
    viewExpenseResponse,
    viewExpensesResponse
} from "../actions";
import {showError} from "../../constants";

function* addExpense(action) {
    try {
        const json = yield axios
            .post("/api/add-expense/", action.expenseData)
            .then((res) => res.data);
        yield put(addExpenseResponse(json));
    } catch (err) {
        showError(err);
        yield put(addExpenseResponse(err));
    }
}

export function* addExpenseSaga() {
    yield takeLatest(ADD_EXPENSE, addExpense);
}

function* viewExpenses(action) {
    try {
        const json = yield axios
            .get(`/api/view-expenses/?user_id=${action.user_id}`)
            .then((res) => res.data);
        yield put(viewExpensesResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewExpensesResponse(err));
    }
}

export function* viewExpensesSaga() {
    yield takeLatest(VIEW_EXPENSES, viewExpenses);
}

function* viewExpense(action) {
    try {
        const json = yield axios
            .get(`/api/view-expense/${action.id}`)
            .then((res) => res.data);
        yield put(viewExpenseResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewExpenseResponse(err));
    }
}

export function* viewExpenseSaga() {
    yield takeLatest(VIEW_EXPENSE, viewExpense);
}

function* editExpense(action) {
    try {
        const json = yield axios
            .put(`/api/edit-expense/${action.id}`, action.expenseData)
            .then((res) => res.data);
        yield put(editExpenseResponse(json));
    } catch (err) {
        showError(err);
        yield put(editExpenseResponse(err));
    }
}

export function* editExpenseSaga() {
    yield takeLatest(EDIT_EXPENSE, editExpense);
}

function* deleteExpense(action) {
    try {
        const json = yield axios
            .delete(`/api/delete-expense/${action.id}`)
            .then((res) => res.data);
        yield put(deleteExpenseResponse(json));
    } catch (err) {
        showError(err);
        yield put(deleteExpenseResponse(err));
    }
}

export function* deleteExpenseSaga() {
    yield takeLatest(DELETE_EXPENSE, deleteExpense);
}

