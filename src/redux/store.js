// src/redux/store.js
import { createStore } from 'redux';

const initialState = {
  theme: 'light'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
