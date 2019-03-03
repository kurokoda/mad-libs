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
    [FIELD_NAMES.hometown]: {input:'', template: ''},
    [FIELD_NAMES.favoriteFood]: {input:'', template: ''},
    [FIELD_NAMES.loveToDo]: {input:'', template: ''},
    [FIELD_NAMES.music]: {input:'', template: ''},
    [FIELD_NAMES.messageIf]: {input:'', template: ''},
    [FIELD_NAMES.bar]: {input:'', template: ''},
  },

  essayText: "",

  counter: 1,
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case UPDATE_FIELD_TEMPLATE: {
      console.log(action)
      return {
        ...state,
        counter: state.counter + 1,
      };
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
  }
};
