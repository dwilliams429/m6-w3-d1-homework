// src/themeReducer.js

// Initial state: light theme is the default
const initialState = {
  useDarkTheme: false,
};

// Action type
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';

// Action creator
export function toggleDarkTheme() {
  return { type: TOGGLE_DARK_THEME };
}

// Reducer
export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return {
        ...state,
        useDarkTheme: !state.useDarkTheme,
      };
    default:
      return state;
  }
}
