import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {
    ADD_EXPENSE,
    addExpenseResponse,
    DELETE_EXPENSE,
    EDIT_EXPENSE,
    editExpenseResponse,
    GET_USERS,
    getUsersResponse,
    VIEW_EXPENSE,
    VIEW_EXPENSES,
    viewExpenseResponse,
    viewExpensesResponse
} from "../actions";
import {showError} from "../../constants";

function* addExpense(action) {
    try {
        const json = yield axios
            .post("/api/add-expense/", action.groupData)
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

function* viewExpenses() {
    try {
        const json = yield axios
            .get("/api/view-expenses/")
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
            .get(`/api/view-expense/${action.id}?user=${action.user}`)
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
            .put(`/api/edit-expense/${action.id}`, action.groupData)
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
        yield put(editExpenseResponse(json));
    } catch (err) {
        showError(err);
        yield put(editExpenseResponse(err));
    }
}

export function* deleteExpenseSaga() {
    yield takeLatest(DELETE_EXPENSE, deleteExpense);
}

function* getUsers(action) {
    try {
        const json = yield axios
            .get(`/api/view-users/`)
            .then((res) => res.data);
        yield put(getUsersResponse(json));
    } catch (err) {
        showError(err);
        yield put(getUsersResponse(err));
    }
}

export function* getUsersSaga() {
    yield takeLatest(GET_USERS, getUsers);
}