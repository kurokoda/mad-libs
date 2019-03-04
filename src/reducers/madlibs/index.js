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

  fieldValues: {
    [FIELD_NAMES.hometown]: { input: "", result: "" },
    [FIELD_NAMES.favoriteFood]: { input: "", result: "" },
    [FIELD_NAMES.loveToDo]: { input: "", result: "" },
    [FIELD_NAMES.music]: { input: "", result: "" },
    [FIELD_NAMES.messageIf]: { input: "", result: "" },
    [FIELD_NAMES.bar]: { input: "", result: "" },
  },

  essayText: "",

  counter: 1,
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
      const fieldValues = Object.assign({}, state.fieldValues);
      fieldValues[action.payload.field].input = action.payload.value;
      fieldValues[action.payload.field].result = action.payload.result;
      return {
        ...state,
        fieldValues,
      }

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
