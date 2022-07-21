/**
 * @author ${devarshivyas}
 */

import {
  CREATE_TAG,
  CREATE_TAG_RESPONSE,
  DELETE_TAG,
  DELETE_TAG_RESPONSE,
  EDIT_TAG,
  EDIT_TAG_RESPONSE,
  VIEW_TAG,
  VIEW_TAG_RESPONSE,
  VIEW_TAGS,
  VIEW_TAGS_RESPONSE,
  FETCH_EXPENSE,
  FETCH_EXPENSE_RESPONSE,
} from "../actions";

// Setting initial state of the reducer
const initialState = {
  viewTagResponseData: {},
  isViewTagResponseReceived: false,
  viewTagsResponseData: {},
  isViewTagsResponseReceived: false,
  editTagResponseData: {},
  isEditTagResponseReceived: false,
  deleteTagResponseData: {},
  isDeleteTagResponseReceived: false,
  createTagResponseData: {},
  isCreateTagResponseReceived: false,
  fetchExpensesResponseData: {},
  isFetchExpensesResponseReceived: false,
};

// All the CRUD operations related to the tag reducers such as create, edit, view and delete tag are added here
const tag = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TAG: {
      return {
        ...state,
        isCreateTagResponseReceived: false,
      };
    }
    case CREATE_TAG_RESPONSE: {
      return {
        ...state,
        isCreateTagResponseReceived: true,
        createTagResponseData: action.response,
      };
    }
    case VIEW_TAGS: {
      return {
        ...state,
        isViewTagsResponseReceived: false,
      };
    }
    case VIEW_TAGS_RESPONSE: {
      return {
        ...state,
        isViewTagsResponseReceived: true,
        viewTagsResponseData: action.response,
      };
    }
    case VIEW_TAG: {
      return {
        ...state,
        isViewTagResponseReceived: false,
      };
    }
    case VIEW_TAG_RESPONSE: {
      return {
        ...state,
        isViewTagResponseReceived: true,
        viewTagResponseData: action.response,
      };
    }
    case EDIT_TAG: {
      return {
        ...state,
        isEditTagResponseReceived: false,
      };
    }
    case EDIT_TAG_RESPONSE: {
      return {
        ...state,
        isEditTagResponseReceived: true,
        editTagResponseData: action.response,
      };
    }
    case DELETE_TAG: {
      return {
        ...state,
        isDeleteTagResponseReceived: false,
      };
    }
    case DELETE_TAG_RESPONSE: {
      return {
        ...state,
        isDeleteTagResponseReceived: true,
        deleteTagResponseData: action.response,
      };
    }
    case FETCH_EXPENSE: {
      return {
        ...state,
        isFetchExpensesResponseReceived: new Boolean(false),
      };
    }
    case FETCH_EXPENSE_RESPONSE: {
      return {
        ...state,
        isFetchExpensesResponseReceived: new Boolean(true),
        fetchExpensesResponseData: action.response,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default tag;
