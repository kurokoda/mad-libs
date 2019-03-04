import { FIELD_NAMES } from "../../constants";

// Action types
// ----------------------------------------------------------------------------

export const UPDATE_CURRENT_VIEW = "MADLIBS.UPDATE_CURRENT_VIEW";
export const UPDATE_FIELD_TEMPLATE = "MADLIBS.UPDATE_FIELD_TEMPLATE";

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {

  allFieldsComplete: false,

  currentView: "result",

  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldResults: {
    [FIELD_NAMES.hometown]: null,
    [FIELD_NAMES.favoriteFood]: null,
    [FIELD_NAMES.loveToDo]: null,
    [FIELD_NAMES.music]: null,
    [FIELD_NAMES.messageIf]: null,
    [FIELD_NAMES.bar]: null,
  }
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CURRENT_VIEW:
      return {
        ...state,
        currentView: action.payload.targetView
      };

    case UPDATE_FIELD_TEMPLATE:
      const fieldResults = Object.assign({}, state.fieldResults);
      fieldResults[action.payload.field] = action.payload.result;
      const allFieldsComplete =
        Object.values(fieldResults).indexOf(null) === -1;
      return {
        ...state,
        allFieldsComplete,
        fieldResults,
      };

    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export const actions = {
  updateCurrentView(payload) {
    return { type: UPDATE_CURRENT_VIEW, payload };
  },

  updateFieldTemplate(payload) {
    return { type: UPDATE_FIELD_TEMPLATE, payload };
  },
};
