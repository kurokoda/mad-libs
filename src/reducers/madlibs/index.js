import { FIELD_NAMES } from "../../constants";

// Action types
// ----------------------------------------------------------------------------

export const INCREMENT_COUNTER = "MADLIBS.INCREMENT_COUNTER";
export const UPDATE_FIELD_TEMPLATE = "MADLIBS.UPDATE_FIELD_TEMPLATE";

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
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
  },

  allFieldsComplete: false,
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
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
  increment() {
    return { type: INCREMENT_COUNTER };
  },

  updateFieldTemplate(payload) {
    return { type: UPDATE_FIELD_TEMPLATE, payload };
  },
};
